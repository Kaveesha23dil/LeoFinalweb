import pro1 from "../assets/pro1.webp";
import pro1_2 from "../assets/pro1.2.webp";
import pro1_3 from "../assets/pro1.3.webp";
import n01 from "../assets/n01.webp";
import n02 from "../assets/n02.webp";
import n03 from "../assets/n03.webp";

export const projects = [
  {
    id: 1,
    title: "Akurata Saviyak",
    description: "Organizing the program faced challenges such as securing expert speakers from multiple fields, managing logistics for participants, and ensuring smooth coordination between partnering clubs. Time management during sessions was also critical. Despite these challenges, teamwork, dedication, and community support enabled the event's successful execution and meaningful youth engagement.",
    shortDescription: "Youth empowerment program featuring medicine, robotics, and engineering exposure",
    category: "Environment",
    date: "2024-03-15",
    status: "Completed",
    images: [
      pro1,
      pro1_2,
      pro1_3
    ],
    details: {
      objectives: [
        "Empower youth through exposure to medicine, robotics, and engineering",
        "Create opportunities for learning, networking, and mentorship",
        "Foster leadership, innovation, and community service among young participants"
      ],
      participants: 45,
      hoursContributed: 180,
      impact: [
        "Inspires future innovators and professionals",
        "Promotes global collaboration in STEM and healthcare", 
        "Strengthens community-driven education",
        "Encourages youth leadership and social responsibility",
        "Supports sustainable development through knowledge-sharing"
      ],
      challenges: "Organizing the program faced challenges such as securing expert speakers from multiple fields, managing logistics for participants, and ensuring smooth coordination between partnering clubs. Time management during sessions was also critical. Despite these challenges, teamwork, dedication, and community support enabled the event's successful execution and meaningful youth engagement."
    }
  },
  {
    id: 2,
    title: "Nelum Mal Dansala",
    description: "The project faced challenges such as coordinating volunteers' schedules, ensuring a steady supply of fresh lotus flowers, and managing crowd flow during distribution. Communication between organizers and the temple community also required careful planning. Despite these obstacles, teamwork and local support helped overcome difficulties, ensuring the project's success.",
    shortDescription: "Traditional lotus flower distribution program",
    category: "Education",
    date: "2024-02-20",
    status: "Completed",
    images: [
      n01,
      n02,
      n03
    ],
    details: {
      objectives: [
        "Promote cultural and spiritual values through community service",
        "Provide lotus flowers to devotees for religious offerings",
        "Strengthen leadership, teamwork, and volunteerism among Leo Club members"
      ],
      participants: 30,
      hoursContributed: 120,
      impact: [
        "Encourages cultural preservation",
        "Promotes unity and social responsibility",
        "Inspires global youth involvement in community service",
        "Supports environmental respect through meaningful offerings",
        "Strengthens bonds between service organizations and local communities"
      ],
      challenges: "The project faced challenges such as coordinating volunteers' schedules, ensuring a steady supply of fresh lotus flowers, and managing crowd flow during distribution. Communication between organizers and the temple community also required careful planning. Despite these obstacles, teamwork and local support helped overcome difficulties, ensuring the project's success."
    }
  },
  {
    id: 3,
    title: "Food Distribution Program",
    description: "Addressing food insecurity by providing nutritious meals to underprivileged families.",
    shortDescription: "Nutrition support program for underprivileged communities",
    category: "Community Service",
    date: "2024-01-10",
    status: "Ongoing",
    images: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop"
    ],
    details: {
      objective: "To ensure no family in our community goes without proper nutrition.",
      participants: 25,
      hoursContributed: 300,
      impact: "Served 1,200 meals, reached 150 families monthly",
      challenges: "Food sourcing, storage logistics, and maintaining food safety standards",
      outcomes: [
        "Reduced food insecurity in targeted neighborhoods",
        "Built partnerships with local restaurants and grocery stores",
        "Created sustainable food donation network",
        "Provided nutrition education alongside meal distribution"
      ]
    }
  },
  {
    id: 4,
    title: "Digital Literacy Initiative",
    description: "Bridging the digital divide by teaching essential computer and internet skills to seniors.",
    shortDescription: "Technology education program for senior citizens",
    category: "Education",
    date: "2024-04-05",
    status: "Ongoing",
    images: [
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
    ],
    details: {
      objective: "To help seniors navigate the digital world and stay connected with family and services.",
      participants: 15,
      hoursContributed: 200,
      impact: "Trained 80 seniors, established 3 learning centers",
      challenges: "Varying skill levels, technology anxiety, and accessibility needs",
      outcomes: [
        "Improved digital confidence among senior participants",
        "Enhanced communication with family members",
        "Better access to online services and information",
        "Created intergenerational connections through teaching"
      ]
    }
  }
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};