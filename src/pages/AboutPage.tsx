import { memo, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Users, Award, Building, GraduationCap, Target, Eye, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SuccessMetrics } from "@/components/sections";

const PerformanceStats = lazy(() => import("@/components/sections/PerformanceStats"));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true, amount: 0.2 as const },
});

const AboutPage = memo(() => {
  const teamMembers = [
    { id: 1, name: "राजेंद्र चव्हाण", role: "Founder & CEO", bio: "२५ वर्षांचा अनुभव असलेले आयटी शिक्षणतज्ज्ञ, ज्यांनी २००१ मध्ये इन्साइट कॉम्प्यूटर्सची स्थापना केली.", image: "/rajendra.png" },
    { id: 2, name: "Sumit Chavan", role: "Management Head", bio: "अभ्यासक्रम आणि प्रशिक्षण पद्धती विकसित करण्यात महत्त्वाची भूमिका निभावली.", image: "/sumit.jpg" },
    { id: 3, name: "Prashant Vanjule", role: "Technical Director", bio: "विद्यार्थ्यांना सर्वात अद्ययावत आणि उद्योगास उपयुक्त तांत्रिक कौशल्ये शिकवण्यासाठी जबाबदार.", image: "/prashant.png" },
    { id: 4, name: "Pruthviraj Chavan", role: "Placement Officer", bio: "विद्यार्थ्यांना योग्य संधी मिळवून देण्यासाठी उद्योगांशी संपर्क साधण्याचे कार्य करतात", image: "/pruthvi.jpg" },
  ];

  const stats = [
    { value: "15,000+", label: "Students Trained", icon: <Users className="w-5 h-5" />, color: "from-blue-500 to-blue-600" },
    { value: "90%", label: "Placement Rate", icon: <GraduationCap className="w-5 h-5" />, color: "from-emerald-500 to-emerald-600" },
    { value: "22+", label: "Years of Excellence", icon: <Award className="w-5 h-5" />, color: "from-amber-500 to-amber-600" },
    { value: "5+", label: "Modern Labs", icon: <Building className="w-5 h-5" />, color: "from-violet-500 to-violet-600" },
  ];

  const facilities = [
    { title: "Modern Computer Labs", desc: "Latest hardware and software for hands-on learning.", image: "/img-15.jpg" },
    { title: "Smart Classrooms", desc: "Interactive learning with projectors and digital aids.", image: "/img-16.jpg" },
    { title: "Study Library", desc: "Books, guides and digital resources for self-study.", image: "/img-12.jpg" },
  ];

  const certifications = [
    { title: "12,000+ MS-CIT Certifications", sub: "Maharashtra State Certificate in IT" },
    { title: "5,000+ KLiCK Diplomas", sub: "Knowledge of Computer through Learning & Certification" },
    { title: "3,000+ Programming Certifications", sub: "Web Development, Python, Java" },
    { title: "2,500+ Hardware & Networking", sub: "Computer Hardware and Network Management" },
  ];

  const placements = [
    { title: "400+ Government Sector", sub: "Various government departments" },
    { title: "2,000+ Banking Sector", sub: "National and regional banks" },
    { title: "1,500+ IT Companies", sub: "Software development and services" },
    { title: "3,000+ Self-Employed", sub: "Own businesses and freelancing" },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Incite Computers Radhanagari - 20+ Years of Excellence</title>
        <meta name="description" content="Learn about Incite Computers Radhanagari - 20+ years of excellence in computer education." />
        <link rel="canonical" href="https://incitecomputer.com/about" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-20 md:py-28">
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, rgba(59,130,246,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(168,85,247,0.25) 0%, transparent 40%)`
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="text-center max-w-3xl mx-auto" {...fadeUp()}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-blue-300 text-sm font-medium mb-6">
                <Sparkles size={16} /> Since 2001
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                About Incite Computers
              </h1>
              <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
                सन 2001 पासून ग्रामीण भारतात दर्जेदार संगणक शिक्षण देणारी अग्रगण्य संस्था.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative -mt-10 z-20 container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp(i * 0.08)}
                className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 text-center"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${s.color} flex items-center justify-center text-white mx-auto mb-3`}>
                  {s.icon}
                </div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp()}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  2001 मध्ये राधानगरी या छोट्याशा गावात स्थापन झालेल्या इन्साइट कॉम्प्यूटर्स संस्थेची सुरुवात एका साध्या पण महत्त्वाच्या ध्येयाने झाली – ग्रामीण भारतात दर्जेदार संगणक शिक्षण पोहोचवणे.
                </p>
                <p>
                  अवघ्या 5 संगणकांवर आणि मोजक्या विद्यार्थ्यांसोबत सुरू झालेली ही संस्था आज आधुनिक सुविधांनी युक्त एक प्रमुख संगणक प्रशिक्षण केंद्र बनली आहे.
                </p>
                <p>
                  आमचे संस्थापक श्री. राजेंद्र मारुती चव्हाण यांनी शहरी आणि ग्रामीण भागातील डिजिटल दरी ओळखली आणि ती भरून काढण्याचा निर्धार केला.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70"
                alt="Incite Computers"
                className="rounded-2xl shadow-xl w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-5 py-3 shadow-lg border border-gray-100">
                <p className="font-bold text-blue-600 text-lg">Est. 2001</p>
                <p className="text-xs text-gray-500">Radhanagari</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div {...fadeUp()} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mb-5">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  ग्रामीण भारतातील आघाडीची संगणक शिक्षण संस्था होण्याचे आमचे ध्येय आहे. डिजिटल कौशल्यांद्वारे व्यक्ती आणि समुदायांना सक्षम करणे, ही आमची दूरदृष्टी आहे.
                </p>
              </motion.div>
              <motion.div {...fadeUp(0.1)} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  ग्रामीण भागातील लोकसंख्येला परवडणारे, सुलभ आणि उच्च-गुणवत्तेचे संगणक शिक्षण प्रदान करणे, ज्यामुळे त्यांना आजच्या डिजिटल जगात यशस्वी होता येईल.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <SuccessMetrics />

        {/* Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12" {...fadeUp()}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Team</h2>
              <p className="text-gray-500">Meet the passionate professionals behind Incite Computers.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((m, i) => (
                <motion.div
                  key={m.id}
                  {...fadeUp(i * 0.08)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="h-56 overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900">{m.name}</h3>
                    <p className="text-sm font-medium text-blue-600 mb-2">{m.role}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12" {...fadeUp()}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Facilities</h2>
              <p className="text-gray-500">Modern learning environment with state-of-the-art infrastructure.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {facilities.map((f, i) => (
                <motion.div key={f.title} {...fadeUp(i * 0.1)} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                  <div className="h-48 overflow-hidden">
                    <img src={f.image} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-gray-500">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12" {...fadeUp()}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Achievements</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div {...fadeUp()} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white"><Award className="w-5 h-5" /></div>
                  <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
                </div>
                <ul className="space-y-3">
                  {certifications.map(c => (
                    <li key={c.title} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <div><p className="font-medium text-sm text-gray-800">{c.title}</p><p className="text-xs text-gray-400">{c.sub}</p></div>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...fadeUp(0.1)} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center text-white"><Building className="w-5 h-5" /></div>
                  <h3 className="text-xl font-bold text-gray-900">Job Placements</h3>
                </div>
                <ul className="space-y-3">
                  {placements.map(p => (
                    <li key={p.title} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <div><p className="font-medium text-sm text-gray-800">{p.title}</p><p className="text-xs text-gray-400">{p.sub}</p></div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance */}
        <Suspense fallback={<div className="py-20 bg-zinc-900" />}>
          <PerformanceStats />
        </Suspense>
      </div>
    </>
  );
});

AboutPage.displayName = "AboutPage";
export default AboutPage;
