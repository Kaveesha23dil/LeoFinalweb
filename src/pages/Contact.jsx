import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "../sections/Navbar";
import Footer from "../components/Footer";
import StarEffect from "../components/StarEffect";
import { contactInfo, contactFormFields } from "../data/contact";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube, 
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    contactFormFields.forEach(field => {
      if (field.required && !formData[field.name].trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const getSocialIcon = (iconName) => {
    const icons = {
      facebook: FaFacebookF,
      instagram: FaInstagram,
      twitter: FaTwitter,
      linkedin: FaLinkedinIn,
      youtube: FaYoutube,
      whatsapp: FaWhatsapp
    };
    return icons[iconName] || FaFacebookF;
  };

  const renderFormField = (field) => {
    const commonProps = {
      name: field.name,
      value: formData[field.name],
      onChange: handleInputChange,
      className: `w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 ${errors[field.name] ? 'border-red-400' : ''}`
    };

    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={5}
            placeholder={field.placeholder}
          />
        );
      case 'select':
        return (
          <select {...commonProps}>
            {field.options.map(option => (
              <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            {...commonProps}
            type={field.type}
            placeholder={field.placeholder}
          />
        );
    }
  };

  return (
    <>
      <StarEffect />
      <Navbar />
      <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent"
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300"
            >
              Ready to make a difference? Whether you want to join us, partner with us, or learn more about our initiatives, 
              we'd love to hear from you. Let's create positive change together.
            </motion.p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              
              {/* Address Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <FaMapMarkerAlt className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{contactInfo.address.title}</h3>
                <div className="text-gray-300 leading-relaxed">
                  {contactInfo.address.lines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <FaPhone className="text-2xl text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{contactInfo.phone.title}</h3>
                {contactInfo.phone.numbers.map((phone, index) => (
                  <div key={index} className="mb-3">
                    <p className="text-white font-semibold">{phone.label}</p>
                    <p className="text-blue-400 font-medium">{phone.number}</p>
                    <p className="text-gray-400 text-sm">{phone.available}</p>
                  </div>
                ))}
              </motion.div>

              {/* Email Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <FaEnvelope className="text-2xl text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{contactInfo.email.title}</h3>
                {contactInfo.email.addresses.slice(0, 2).map((email, index) => (
                  <div key={index} className="mb-3">
                    <p className="text-gray-300 text-sm">{email.label}</p>
                    <p className="text-blue-400 font-medium break-all">{email.email}</p>
                  </div>
                ))}
              </motion.div>

              {/* Working Hours Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-500/30">
                  <FaClock className="text-2xl text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Working Hours</h3>
                {contactInfo.workingHours.map((schedule, index) => (
                  <div key={index} className="mb-2">
                    <p className="text-gray-300 text-sm">{schedule.day}</p>
                    <p className="text-white font-medium">{schedule.hours}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-8">Send Us a Message</h2>
                
                {submitSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-xl mb-6"
                  >
                    <p className="font-medium">Thank you for your message! We'll get back to you soon.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {contactFormFields.slice(0, 2).map((field) => (
                      <div key={field.name}>
                        <label className="block text-white font-medium mb-2">
                          {field.label} {field.required && <span className="text-red-400">*</span>}
                        </label>
                        {renderFormField(field)}
                        {errors[field.name] && (
                          <p className="text-red-400 text-sm mt-1">{errors[field.name]}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {contactFormFields.slice(2).map((field) => (
                    <div key={field.name}>
                      <label className="block text-white font-medium mb-2">
                        {field.label} {field.required && <span className="text-red-400">*</span>}
                      </label>
                      {renderFormField(field)}
                      {errors[field.name] && (
                        <p className="text-red-400 text-sm mt-1">{errors[field.name]}</p>
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 hover:opacity-90 disabled:opacity-50 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Map and Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-8">Find Us</h2>
                
                {/* Interactive Map */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden mb-8 h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.898006267665!2d79.97249737573244!3d6.905329693075438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259684588f20b%3A0xd4b1c8a7e5f6789a!2sIngiriya%20Road%2C%20Padukka!5e0!3m2!1sen!2slk!4v1635789123456!5m2!1sen!2slk"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, borderRadius: 'inherit' }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Leo Club of SLTC - Ingiriya Road, Padukka"
                  ></iframe>
                </div>

                {/* Additional Email Contacts */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Department Contacts</h3>
                  <div className="space-y-3">
                    {contactInfo.email.addresses.slice(2).map((email, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-300">{email.label}</span>
                        <a 
                          href={`mailto:${email.email}`} 
                          className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                        >
                          {email.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                  <div className="flex flex-wrap gap-4">
                    {contactInfo.socialMedia.map((social, index) => {
                      const IconComponent = getSocialIcon(social.icon);
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center hover:bg-gray-600/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                        >
                          <IconComponent className="text-xl" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent"
            >
              Ready to Make a Difference?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed"
            >
              Join the Leo Club of SLTC and be part of a community dedicated to leadership, 
              service, and positive change. Your journey of impact starts here.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-black font-bold rounded-xl hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Join Our Club
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-gray-400 text-white font-bold rounded-xl hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
                Volunteer With Us
              </button>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default Contact