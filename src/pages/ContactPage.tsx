
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Create WhatsApp URL with form data
      const whatsappText = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
      const whatsappURL = `https://wa.me/919423281767?text=${whatsappText}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappURL, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setLoading(false);
      
      // Show success toast
      toast({
        title: "Message Sent!",
        description: "Your inquiry has been forwarded to our team via WhatsApp.",
      });
    }, 1000);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="page-fade-in pt-24 md:pt-28 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-700">
              We'd love to hear from you. Reach out to our team for any queries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-blue transition-all text-center"
            >
              <div className="w-12 h-12 rounded-full bg-incite-blue/10 flex items-center justify-center text-incite-blue mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600">
                Near Post  Office , Main Road,<br />
                Radhanagari, Kolhapur,<br />
                Maharashtra 416212
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-blue transition-all text-center"
            >
              <div className="w-12 h-12 rounded-full bg-incite-blue/10 flex items-center justify-center text-incite-blue mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Number</h3>
              <p className="text-gray-600 mb-2">
                <a href="tel:+919423281767" className="hover:text-incite-blue">+91 94232 81767</a>
              </p>
              <p className="text-gray-600">
                <a href="tel:+919130105900" className="hover:text-incite-blue">+91 8263031055</a>
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-blue transition-all text-center"
            >
              <div className="w-12 h-12 rounded-full bg-incite-blue/10 flex items-center justify-center text-incite-blue mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <p className="text-gray-600 mb-2">
                <a href="mailto:incitecomps@gmail.com" className="hover:text-incite-blue">incitecomputer@gmail.com</a>
              </p>
              <p className="text-gray-600">
                <a href="mailto:info@incitecomputers.com" className="hover:text-incite-blue">rajendrachavan@gmail.com</a>
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-blue transition-all text-center"
            >
              <div className="w-12 h-12 rounded-full bg-incite-blue/10 flex items-center justify-center text-incite-blue mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Saturday:</p>
              <p className="text-gray-600 mb-2">9:00 AM - 7:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Course Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gradient-blue text-white btn-hover"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-md h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.606923872979!2d74.10920147338389!3d16.444777929278267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc044edbc12aad5%3A0x2bf7d4858ae230e!2sIncite%20Computer!5e0!3m2!1sen!2sin!4v1741621699049!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Incite Computers Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* WhatsApp Direct Contact */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-md text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Prefer Direct Contact?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Reach us directly on WhatsApp for instant responses to your queries.
            </p>
            <Button size="lg" className="gradient-blue text-white btn-hover">
              <a 
                href="https://wa.me/919423281767" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2"
              >
                Chat with Us on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
