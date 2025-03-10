
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const VishwakarmaPage = () => {
  const trades = [
    { id: "carpentry", name: "Carpentry", 
      description: "Learn woodworking skills, furniture making, and carpentry techniques with modern tools and traditional craftsmanship." },
    { id: "welding", name: "Welding", 
      description: "Master various welding techniques, metal fabrication, and structural work with industry-standard equipment." },
    { id: "plumbing", name: "Plumbing", 
      description: "Develop skills in pipe fitting, drainage systems, water supply installation, and modern plumbing technologies." },
    { id: "electrical", name: "Electrical Work", 
      description: "Learn electrical wiring, maintenance, installation, and safety protocols for residential and commercial settings." },
    { id: "tailoring", name: "Tailoring", 
      description: "Master garment making, fabric selection, pattern design, and tailoring techniques for traditional and modern clothing." },
    { id: "handicrafts", name: "Handicrafts", 
      description: "Learn various traditional handicraft techniques, material selection, design principles, and artisanal production methods." }
  ];
  
  const tradeImages = {
    carpentry: Array(10).fill(0).map((_, i) => ({ 
      id: i + 1, 
      src: `/p${i + 1}.png`, 
      alt: `Carpentry Training Image ${i + 1}` 
    })),
    welding: Array(10).fill(0).map((_, i) => ({ 
      id: i + 1, 
      src: `https://source.unsplash.com/random/800x600?welding,metalwork&sig=${i + 10}`, 
      alt: `Welding Training Image ${i + 1}` 
    })),
    plumbing: Array(10).fill(0).map((_, i) => ({ 
      id: i + 1, 
      src: `https://source.unsplash.com/random/800x600?plumbing,pipes&sig=${i + 20}`, 
      alt: `Plumbing Training Image ${i + 1}` 
    })),
    electrical: Array(10).fill(0).map((_, i) => ({ 
      id: i + 1, 
      src: `https://source.unsplash.com/random/800x600?electrical,wiring&sig=${i + 30}`, 
      alt: `Electrical Training Image ${i + 1}` 
    })),
    tailoring: Array(10).fill(0).map((_, i) => ({ 
      id: i + 1, 
      src: `https://source.unsplash.com/random/800x600?tailoring,sewing&sig=${i + 40}`, 
      alt: `Tailoring Training Image ${i + 1}` 
    })),
    handicrafts: Array(10).fill(0).map((_, i) => ({ 
      id: i + 1, 
      src: `https://source.unsplash.com/random/800x600?handicraft,craft&sig=${i + 50}`, 
      alt: `Handicraft Training Image ${i + 1}` 
    }))
  };
  
  const [selectedTrade, setSelectedTrade] = useState("carpentry");
  const [language, setLanguage] = useState<"english" | "marathi">("english");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Floating animation for background elements
  const floatingCircles = [
    { x: "10%", y: "20%", size: "150px", color: "rgba(30, 136, 229, 0.03)", delay: 0 },
    { x: "80%", y: "10%", size: "200px", color: "rgba(255, 152, 0, 0.03)", delay: 1 },
    { x: "60%", y: "70%", size: "180px", color: "rgba(30, 136, 229, 0.04)", delay: 2 },
    { x: "30%", y: "80%", size: "120px", color: "rgba(255, 152, 0, 0.03)", delay: 3 },
    { x: "90%", y: "40%", size: "100px", color: "rgba(76, 175, 80, 0.03)", delay: 4 },
  ];

  return (
    <div className="page-fade-in pt-24 pb-16 relative overflow-hidden">
      {/* Animated background circles */}
      {floatingCircles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: circle.x,
            top: circle.y,
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            zIndex: 0
          }}
          animate={{
            y: ["0%", "-20%", "0%"],
            x: ["0%", "10%", "0%"],
          }}
          transition={{
            duration: 10 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: circle.delay
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative py-16 hero-gradient-green">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PM <span className="gradient-text">Vishwakarma</span> Scheme
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Skill development courses for traditional artisans and craftspeople
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
              <Button 
                variant={language === "english" ? "default" : "outline"} 
                onClick={() => setLanguage("english")}
                className={language === "english" ? "gradient-blue text-white" : ""}
              >
                English
              </Button>
              <Button 
                variant={language === "marathi" ? "default" : "outline"} 
                onClick={() => setLanguage("marathi")}
                className={language === "marathi" ? "gradient-orange text-white" : ""}
              >
                मराठी
              </Button>
            </div>
            <div className="flex justify-center">
              <Button className="gradient-blue text-white btn-hover">
                <a 
                  href="https://wa.me/919423281767?text=I'm interested in the PM Vishwakarma Scheme courses. Please provide more information."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2"
                >
                  {language === "english" 
                    ? "Inquire About PM Vishwakarma Scheme" 
                    : "पीएम विश्वकर्मा योजनेबद्दल माहिती मिळवा"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vishwakarma Information Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-md mb-12">
            {language === "english" ? (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  <span className="gradient-text">PM Vishwakarma Scheme</span>
                </h2>
                <p className="text-gray-700 mb-8 text-lg">
                  The PM Vishwakarma Scheme is an ambitious initiative by the central government aimed at providing financial and technical support to traditional artisans and craftspeople.
                </p>
                
                <h3 className="text-xl font-bold mb-4">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  <li><span className="font-semibold">Training and Skill Development</span> - Special training to integrate modern technology with traditional skills</li>
                  <li><span className="font-semibold">Financial Assistance</span> - Easy loan facilities to grow businesses</li>
                  <li><span className="font-semibold">Certification and Recognition</span> - Official certification and national recognition</li>
                  <li><span className="font-semibold">Marketing and Branding Support</span> - Assistance in selling products at local and international levels</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4">Major Trades Included in the Scheme:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  <li><span className="font-semibold">Carpentry</span> - Creating wooden furniture and handicraft items</li>
                  <li><span className="font-semibold">Welding</span> - Producing metal and other structural items</li>
                  <li><span className="font-semibold">Plumbing</span> - Training for water supply and pipeline repairs and installation</li>
                  <li><span className="font-semibold">Electrical Work</span> - Wiring and electrical appliance repairs</li>
                  <li><span className="font-semibold">Handicrafts & Sculpture</span> - Traditional sculpture and handmade items</li>
                  <li><span className="font-semibold">Tailoring</span> - Sewing and design of clothing</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4">Objectives of the Scheme:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Empowering traditional artisans and workers</li>
                  <li>Encouraging self-employment and startup growth</li>
                  <li>Creating employment opportunities for skilled workers in rural areas</li>
                </ul>
                
                <p className="text-gray-700 mb-6">
                  For more information, visit the official government website: <a href="https://www.pmvishwakarma.gov.in" target="_blank" rel="noopener noreferrer" className="text-incite-blue hover:underline">www.pmvishwakarma.gov.in</a>
                </p>
                <p className="text-center font-semibold text-gray-800">
                  Register for legal and financial assistance! 🚀
                </p>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  <span className="gradient-text">प्रधानमंत्री विश्वकर्मा योजना</span>
                </h2>
                <p className="text-gray-700 mb-8 text-lg">
                  प्रधानमंत्री विश्वकर्मा योजना ही केंद्र सरकारची एक महत्त्वाकांक्षी योजना आहे, जी पारंपरिक कारागीर आणि हस्तकला करणाऱ्या कुशल कामगारांना आर्थिक आणि तांत्रिक मदत देण्यासाठी सुरू करण्यात आली आहे.
                </p>
                
                <h3 className="text-xl font-bold mb-4">📌 योजनेची वैशिष्ट्ये:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  <li><span className="font-semibold">प्रशिक्षण आणि कौशल्य विकास</span> – पारंपरिक कौशल्यांना आधुनिक तंत्रज्ञानाची जोड देण्यासाठी विशेष प्रशिक्षण.</li>
                  <li><span className="font-semibold">आर्थिक मदत</span> – व्यवसाय वाढवण्यासाठी सुलभ कर्ज सुविधा.</li>
                  <li><span className="font-semibold">प्रमाणपत्र आणि मान्यता</span> – अधिकृत प्रमाणपत्र आणि राष्ट्रीय स्तरावर ओळख.</li>
                  <li><span className="font-semibold">मार्केटिंग आणि ब्रँडिंग मदत</span> – स्थानिक आणि आंतरराष्ट्रीय स्तरावर उत्पादने विकण्यासाठी मदत.</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4">🎯 या योजनेअंतर्गत समाविष्ट असलेले प्रमुख व्यवसाय (व्यवसाय क्षेत्रे):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  <li><span className="font-semibold">सुतारकाम (Carpentry)</span> – लाकडी फर्निचर व हस्तकला वस्तू तयार करणे.</li>
                  <li><span className="font-semibold">वेल्डिंग (Welding)</span> – धातू व इतर स्ट्रक्चरल वस्तू तयार करणे.</li>
                  <li><span className="font-semibold">प्लंबिंग (Plumbing)</span> – पाणीपुरवठा आणि पाइपलाइन दुरुस्ती व स्थापनेसाठी प्रशिक्षण.</li>
                  <li><span className="font-semibold">इलेक्ट्रिकल वर्क (Electrical Work)</span> – वायरिंग आणि विद्युत उपकरणांची दुरुस्ती.</li>
                  <li><span className="font-semibold">शिल्पकला व हस्तकला (Handicrafts & Sculpture)</span> – पारंपरिक मूर्तिकला आणि हाताने तयार केलेल्या वस्तू.</li>
                  <li><span className="font-semibold">शिंपीकाम (Tailoring & Embroidery)</span> – कपडे शिवणे आणि डिझायनिंग.</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4">📢 योजनेचे उद्दिष्ट:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>ही योजना लाभार्थ्यांना "विश्वकर्मा" म्हणून मान्यता देऊन प्रमाणपत्र आणि ओळखपत्र प्रदान करते. कौशल्य विकासासाठी, 5-7 दिवस (40 तास) मूलभूत प्रशिक्षण तसेच इच्छुकांसाठी 15 दिवस (120 तास) प्रगत प्रशिक्षण दिले जाते, ज्यासाठी ₹500 प्रतिदिन भत्ता आहे. **साधनसामग्रीसाठी ₹15,000 अनुदान दिले जाते. कर्ज सहाय्यांतर्गत, बिना तारण ₹1 लाख (18 महिने परतफेड) आणि ₹2 लाख (30 महिने परतफेड) कर्ज उपलब्ध असून, फक्त 5% व्याज लाभार्थ्यांकडून आकारले जाईल, तर उर्वरित 8% व्याज MoMSME भरेल. तसेच, क्रेडिट गॅरंटी शुल्क केंद्र सरकारकडून दिले जाईल . डिजिटल व्यवहारांसाठी प्रोत्साहन म्हणून प्रति व्यवहार ₹1 देण्यात येईल (महिन्याला जास्तीत जास्त 100 व्यवहारांपर्यंत). विपणनासाठी राष्ट्रीय विपणन समिती (NCM) द्वारे गुणवत्ता प्रमाणन, ब्रँडिंग, ई-कॉमर्स लिंक, व्यापार मेळावे आणि जाहिरात सुविधा पुरविल्या जातील.</li>
                  <li>स्वावलंबी व्यवसाय आणि स्टार्टअप वाढीस प्रोत्साहन देणे.</li>
                  <li>ग्रामीण भागातील कुशल कामगारांना रोजगाराच्या संधी उपलब्ध करणे.</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4">📞 अधिक माहितीसाठी:</h3>
                <p className="text-gray-700 mb-6">
                  👉 <span className="font-semibold">सरकारी अधिकृत संकेतस्थळ:</span> <a href="https://www.pmvishwakarma.gov.in" target="_blank" rel="noopener noreferrer" className="text-incite-blue hover:underline">www.pmvishwakarma.gov.in</a>
                </p>
                <p className="text-center font-semibold text-gray-800">
                  👉 कायदेशीर आणि आर्थिक सहाय्यासाठी नोंदणी करा! 🚀
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trades Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === "english" ? "Available Trades" : "उपलब्ध व्यवसाय"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === "english" 
                ? "The PM Vishwakarma Scheme offers training in various traditional trades. These courses are designed to enhance skills, improve productivity, and increase market relevance of traditional artisans and craftspeople."
                : "पीएम विश्वकर्मा योजना विविध पारंपरिक व्यवसायांमध्ये प्रशिक्षण देते. हे अभ्यासक्रम पारंपरिक कारागिरांचे कौशल्य वाढवण्यासाठी, उत्पादकता सुधारण्यासाठी आणि बाजारातील प्रासंगिकता वाढवण्यासाठी तयार केले आहेत."}
            </p>
          </div>
          
          <Tabs defaultValue={selectedTrade} onValueChange={setSelectedTrade} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent h-auto mb-8">
              {trades.map((trade) => (
                <TabsTrigger 
                  key={trade.id}
                  value={trade.id}
                  className="py-3 data-[state=active]:bg-incite-blue data-[state=active]:text-white rounded-md"
                >
                  {language === "english" ? trade.name : (() => {
                    switch(trade.id) {
                      case "carpentry": return "सुतारकाम";
                      case "welding": return "वेल्डिंग";
                      case "plumbing": return "प्लंबिंग";
                      case "electrical": return "इलेक्ट्रिकल";
                      case "tailoring": return "शिंपीकाम";
                      case "handicrafts": return "हस्तकला";
                      default: return trade.name;
                    }
                  })()}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {trades.map((trade) => (
              <TabsContent key={trade.id} value={trade.id} className="mt-0">
                <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                  <h3 className="text-2xl font-bold mb-3">{language === "english" ? trade.name : (() => {
                    switch(trade.id) {
                      case "carpentry": return "सुतारकाम (Carpentry)";
                      case "welding": return "वेल्डिंग (Welding)";
                      case "plumbing": return "प्लंबिंग (Plumbing)";
                      case "electrical": return "इलेक्ट्रिकल (Electrical Work)";
                      case "tailoring": return "शिंपीकाम (Tailoring)";
                      case "handicrafts": return "हस्तकला (Handicrafts)";
                      default: return trade.name;
                    }
                  })()}</h3>
                  <p className="text-gray-700 mb-4">{trade.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        {language === "english" ? "What You'll Learn" : "आपण काय शिकाल"}
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>{language === "english" 
                          ? `Technical skills specific to ${trade.name.toLowerCase()}`
                          : `${(() => {
                            switch(trade.id) {
                              case "carpentry": return "सुतारकाम";
                              case "welding": return "वेल्डिंग";
                              case "plumbing": return "प्लंबिंग";
                              case "electrical": return "इलेक्ट्रिकल";
                              case "tailoring": return "शिंपीकाम";
                              case "handicrafts": return "हस्तकला";
                              default: return trade.name;
                            }
                          })()} संबंधित तांत्रिक कौशल्य`}
                        </li>
                        <li>{language === "english" 
                          ? "Modern techniques and traditional craftsmanship"
                          : "आधुनिक तंत्र आणि पारंपरिक कारागिरी"}
                        </li>
                        <li>{language === "english" 
                          ? "Material selection and quality assessment"
                          : "साहित्य निवड आणि गुणवत्ता मूल्यांकन"}
                        </li>
                        <li>{language === "english" 
                          ? "Tool usage, maintenance, and safety"
                          : "साधने वापर, देखभाल आणि सुरक्षा"}
                        </li>
                        <li>{language === "english" 
                          ? "Design principles and pattern making"
                          : "डिझाइन तत्त्वे आणि पॅटर्न तयार करणे"}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        {language === "english" ? "Course Details" : "अभ्यासक्रम तपशील"}
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>{language === "english" ? "Duration: 3 months" : "कालावधी: ३ महिने"}</li>
                        <li>{language === "english" ? "Certification: Government recognized" : "प्रमाणपत्र: सरकारमान्य"}</li>
                        <li>{language === "english" ? "Practical training: 70%" : "प्रात्यक्षिक प्रशिक्षण: ७०%"}</li>
                        <li>{language === "english" ? "Theory classes: 30%" : "सैद्धांतिक वर्ग: ३०%"}</li>
                        <li>{language === "english" ? "Financial support available" : "आर्थिक मदत उपलब्ध"}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="gradient-orange text-white btn-hover">
                      <a 
                        href={`https://wa.me/919423281767?text=I'm interested in the ${trade.name} course under PM Vishwakarma Scheme. Please provide more information.`}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {language === "english" 
                          ? `Enroll in ${trade.name}`
                          : `${(() => {
                            switch(trade.id) {
                              case "carpentry": return "सुतारकाम";
                              case "welding": return "वेल्डिंग";
                              case "plumbing": return "प्लंबिंग";
                              case "electrical": return "इलेक्ट्रिकल";
                              case "tailoring": return "शिंपीकाम";
                              case "handicrafts": return "हस्तकला";
                              default: return trade.name;
                            }
                          })()} मध्ये नोंदणी करा`}
                      </a>
                    </Button>
                  </div>
                </div>
                
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {tradeImages[trade.id as keyof typeof tradeImages].map((image) => (
                    <motion.div
                      key={image.id}
                      variants={itemVariants}
                      className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default VishwakarmaPage;
