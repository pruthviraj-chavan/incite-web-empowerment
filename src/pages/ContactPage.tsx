import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
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
    
    setTimeout(() => {
      const whatsappText = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
      const whatsappURL = `https://wa.me/919423281767?text=${whatsappText}`;
      window.open(whatsappURL, '_blank');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setLoading(false);
      
      toast({
        title: "Message Sent!",
        description: "Your inquiry has been forwarded to our team via WhatsApp.",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      lines: ["Near Post Office, Main Road,", "Radhanagari, Kolhapur,", "Maharashtra 416212"],
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600"
    },
    {
      icon: Phone,
      title: "Contact Number",
      lines: ["+91 94232 81767", "+91 82630 31055"],
      links: ["tel:+919423281767", "tel:+918263031055"],
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: Mail,
      title: "Email Address",
      lines: ["incitecomputer@gmail.com", "rajendrachavan@gmail.com"],
      links: ["mailto:incitecomputer@gmail.com", "mailto:rajendrachavan@gmail.com"],
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      lines: ["Monday - Saturday:", "9:00 AM - 7:00 PM", "Sunday: Closed"],
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Incite Computers Radhanagari - Get in Touch</title>
        <meta name="description" content="Contact Incite Computers Radhanagari. Phone: 9423281767, 8263031055. Visit us at Main Road, Radhanagari, Kolhapur. Computer courses inquiry and admissions." />
        <link rel="canonical" href="https://incitecomputer.com/contact" />
        <meta property="og:title" content="Contact Incite Computers Radhanagari" />
        <meta property="og:description" content="Get in touch with Incite Computers for course inquiries. Phone: 9423281767. Located in Radhanagari, Kolhapur." />
        <meta property="og:url" content="https://incitecomputer.com/contact" />
      </Helmet>

      <div className="page-fade-in pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
            </div>
            {/* Dot Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:40px_40px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-white/90 font-medium">We'd Love to Hear From You</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="text-white">Get in </span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                Have questions? We're here to help you start your learning journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 rounded-2xl ${info.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className={`w-8 h-8 ${info.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.lines.map((line, i) => (
                      info.links && info.links[i] ? (
                        <a 
                          key={i}
                          href={info.links[i]} 
                          className={`block text-gray-600 hover:${info.iconColor} transition-colors font-medium`}
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-gray-600">{line}</p>
                      )
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
              >
                <div className="mb-8">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Drop us a Line</h2>
                  <p className="text-gray-500">Fill out the form and we'll get back to you shortly</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-14 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-14 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-14 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Course Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-14 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              </motion.div>
              
              {/* Map */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-xl h-[600px] lg:h-auto"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.606923872979!2d74.10920147338389!3d16.444777929278267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc044edbc12aad5%3A0x2bf7d4858ae230e!2sIncite%20Computer!5e0!3m2!1sen!2sin!4v1741621699049!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '600px' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Incite Computers Location"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* WhatsApp CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/30">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                Prefer Direct Contact?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Get instant responses on WhatsApp. We're always ready to help!
              </p>
              <a 
                href="https://wa.me/919423281767" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-green-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat with Us on WhatsApp
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
