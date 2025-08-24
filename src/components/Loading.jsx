import React from "react";
import { motion } from "framer-motion";

const sizes = {
  xs: 16,
  sm: 20,
  md: 28,
  lg: 40,
  xl: 56,
};

export default function Loading({
  variant = "spinner",
  size = "md",
  text,
  fontSize = "1rem", // ✅ new prop for text size
  fullscreen = false,
  className = "",
  skeletonRows = 3,
}) {
  const px = sizes[size] ?? sizes.md;

  const BouncyText = ({ text }) => {
    if (!text) return null;
    return (
      <div className="flex">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            className="text-blue-600"
            style={{ fontSize }}
            initial={{ y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    );
  };

  const Content = () => {
    switch (variant) {
      case "spinner":
        return (
          <div className={`flex items-center gap-3 ${className}`}>
            <span
              className="relative inline-flex"
              aria-hidden
              style={{ width: px, height: px }}
            >
              <span className="absolute inset-0 rounded-full border-2 border-green-400/40" />
              <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-green-400 animate-spin" />
            </span>
            {text && <span style={{ fontSize }} className="text-green-400">{text}</span>}
          </div>
        );

      case "dots":
        return (
          <div className={`flex items-center gap-2 ${className}`}>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block rounded-full bg-green-400"
                style={{ width: px / 4, height: px / 4 }}
                initial={{ y: 0, opacity: 0.3 }}
                animate={{ y: [0, -6, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.12 }}
              />
            ))}
            {text && <span style={{ fontSize }} className="ml-1 text-green-400">{text}</span>}
          </div>
        );

      case "bar":
        return (
          <div className={`w-full max-w-sm ${className}`}>
            <div className="h-2 w-full overflow-hidden rounded-full bg-green-900/40">
              <motion.div
                className="h-full w-1/3 rounded-full bg-green-400"
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            {text && <div className="mt-2 text-center text-green-400" style={{ fontSize }}>{text}</div>}
          </div>
        );

      case "skeleton":
        return (
          <div className={`w-full max-w-lg space-y-3 ${className}`}>
            {Array.from({ length: skeletonRows }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-2/3 animate-pulse rounded bg-green-900/40" />
                <div className="h-4 w-full animate-pulse rounded bg-green-900/40" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-green-900/40" />
              </div>
            ))}
          </div>
        );

      case "pulse":
        return (
          <div className={`flex items-center gap-3 ${className}`}>
            <motion.span
              className="inline-block rounded-full bg-green-400"
              style={{ width: px, height: px }}
              initial={{ scale: 0.9, opacity: 0.6 }}
              animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            {text && <span style={{ fontSize }} className="text-green-400">{text}</span>}
          </div>
        );

      case "bouncy-text": // ✅ NEW animation
        return <BouncyText text={text} />;

      case "ripple-wave":
        return (
          <div className={`flex flex-col items-center gap-4 ${className}`}>
            <div className="relative" style={{ width: px * 2, height: px * 2 }}>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-blue-400/60"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ 
                    scale: [0, 1.5, 2], 
                    opacity: [1, 0.5, 0] 
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeOut"
                  }}
                />
              ))}
              <div 
                className="absolute inset-0 m-auto rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"
                style={{ width: px / 3, height: px / 3 }}
              />
            </div>
            {text && <span style={{ fontSize }} className="text-green-400 font-medium">{text}</span>}
          </div>
        );

      case "floating-orbs":
        return (
          <div className={`flex flex-col items-center gap-4 ${className}`}>
            <div className="relative" style={{ width: px * 3, height: px * 1.5 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                  style={{ 
                    width: px / 4, 
                    height: px / 4,
                    left: `${i * 20}%`,
                    top: '50%'
                  }}
                  initial={{ y: 0, opacity: 0.7 }}
                  animate={{ 
                    y: [-20, 20, -20],
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            {text && <span style={{ fontSize }} className="text-blue-400 font-medium">{text}</span>}
          </div>
        );

      case "morphing-circle":
        return (
          <div className={`flex flex-col items-center gap-4 ${className}`}>
            <motion.div
              className="rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500"
              style={{ width: px, height: px }}
              animate={{
                borderRadius: ["50%", "20%", "50%"],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {text && <span style={{ fontSize }} className="text-blue-400 font-medium">{text}</span>}
          </div>
        );

      default:
        return null;
    }
  };

  const Wrapper = ({ children }) => {
    if (!fullscreen) return children;
    return (
      <div
        className="fixed inset-0 z-50 grid place-items-center bg-black"
        role="presentation"
      >
        {children}
      </div>
    );
  };

  return (
    <Wrapper>
      <div role="status" aria-busy className="select-none">
        <Content />
        <span className="sr-only">Loading</span>
      </div>
    </Wrapper>
  );
}

export function Demo() {
  return (
    <div className="min-h-screen w-full bg-black p-6 text-green-400">
      <h1 className="mb-6 text-2xl font-bold">Loading Animation Examples</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <Card title="Spinner">
          <Loading variant="spinner" size="lg" text="Fetching data..." fontSize="1.1rem" />
        </Card>

        <Card title="Dots">
          <Loading variant="dots" text="Please wait" fontSize="1rem" />
        </Card>

        <Card title="Indeterminate Bar">
          <Loading variant="bar" text="Compiling project" fontSize="0.9rem" />
        </Card>

        <Card title="Skeleton (3 rows)">
          <Loading variant="skeleton" skeletonRows={3} />
        </Card>

        <Card title="Pulse">
          <Loading variant="pulse" text="Syncing" fontSize="1rem" />
        </Card>

        <Card title="Bouncy Text (NEW)">
          <Loading variant="bouncy-text" text="Loading..." fontSize="1.2rem" />
        </Card>

        <Card title="Fullscreen Overlay">
          <button
            onClick={() => {
              const el = document.getElementById("overlay-root");
              if (!el) return;
              el.style.display = "block";
              setTimeout(() => (el.style.display = "none"), 1600);
            }}
            className="rounded-2xl border px-4 py-2 shadow-sm hover:shadow"
          >
            Show overlay for 1.6s
          </button>
          <div id="overlay-root" style={{ display: "none" }}>
            <Loading variant="spinner" fullscreen text="Loading page" />
          </div>
        </Card>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-green-400 bg-black p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-green-400">{title}</h2>
      </div>
      {children}
    </div>
  );
}
