
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// SEO optimized keywords for PM Vishwakarma scheme
const SEO_KEYWORDS = [
  "पीएम विश्वकर्मा योजना",
  "कौशल विकास",
  "पारंपरिक कारागिर प्रशिक्षण",
  "सरकारी योजना",
  "हस्तकला प्रशिक्षण",
  "कौशल्य विकास योजना",
  "सुतारकाम प्रशिक्षण",
  "वेल्डिंग प्रशिक्षण",
  "प्लंबिंग कोर्स",
  "इलेक्ट्रिकल कोर्स",
  "PM Vishwakarma Scheme",
  "artisan training"
];

const VideoSection = () => {
  const isMobile = useIsMobile();
  
  const videos = [
    {
      id: 1,
      title: "पीएम विश्वकर्मा योजना - बारा परंपरागत व्यवसायांना मिळणार मदत",
      videoId: "WUOppM6KOP0",
      description: "पीएम विश्वकर्मा योजनेची माहिती, लाभ आणि अर्ज प्रक्रिया"
    },
    {
      id: 2,
      title: "पीएम विश्वकर्मा योजनेचे लाभ कसे मिळवायचे?",
      videoId: "2cQ8unf6LG4",
      description: "पीएम विश्वकर्मा योजनेचे लाभ मिळवण्यासाठी संपूर्ण मार्गदर्शन"
    },
    {
      id: 3,
      title: "पीएम विश्वकर्मा योजना - सविस्तर माहिती",
      videoId: "BMJhhlq6OOk",
      description: "सरकारतर्फे मिळणाऱ्या लाभांबद्दल सविस्तर माहिती"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-text">पीएम विश्वकर्मा योजनेबद्दल माहितीपूर्ण व्हिडिओ</span>
        </h2>
        
        {isMobile ? (
          <Carousel className="w-full px-4">
            <CarouselContent>
              {videos.map((video) => (
                <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden p-3 h-full">
                    <div className="aspect-video overflow-hidden rounded-lg mb-3">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="relative static left-0 translate-y-0 h-9 w-9" />
              <CarouselNext className="relative static right-0 translate-y-0 h-9 w-9" />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-md overflow-hidden p-3 hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-lg mb-3">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <a 
            href="https://wa.me/919423281767?text=मला पीएम विश्वकर्मा योजनेबद्दल अधिक माहिती हवी आहे."
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            अधिक माहितीसाठी संपर्क करा
          </a>
        </div>
      </div>
    </section>
  );
};

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
  const isMobile = useIsMobile();
  
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

  // Add SEO meta keywords dynamically
  React.useEffect(() => {
    // Add meta keywords for SEO
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = SEO_KEYWORDS.join(', ');
    document.head.appendChild(metaKeywords);

    // Cleanup function
    return () => {
      document.head.removeChild(metaKeywords);
    };
  }, []);

  return (
    <div className="page-fade-in pt-16 md:pt-24 pb-16 relative overflow-hidden">
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
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">पीएम विश्वकर्मा योजना</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              पारंपरिक कारागीर आणि हस्तकला करणाऱ्यांसाठी कौशल्य विकास अभ्यासक्रम
            </p>
            <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <a 
                  href="https://wa.me/919423281767?text=मला पीएम विश्वकर्मा योजनेबद्दल अधिक माहिती हवी आहे."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2"
                >
                  पीएम विश्वकर्मा योजनेबद्दल माहिती मिळवा
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Vishwakarma Information Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">प्रधानमंत्री विश्वकर्मा योजना</span>
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
                👉 <span className="font-semibold">सरकारी अधिकृत संकेतस्थळ:</span> <a href="https://www.pmvishwakarma.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.pmvishwakarma.gov.in</a>
              </p>
              <p className="text-center font-semibold text-gray-800">
                👉 कायदेशीर आणि आर्थिक सहाय्यासाठी नोंदणी करा! 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trades Section */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              उपलब्ध व्यवसाय
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              पीएम विश्वकर्मा योजना विविध पारंपरिक व्यवसायांमध्ये प्रशिक्षण देते. हे अभ्यासक्रम पारंपरिक कारागिरांचे कौशल्य वाढवण्यासाठी, उत्पादकता सुधारण्यासाठी आणि बाजारातील प्रासंगिकता वाढवण्यासाठी तयार केले आहेत.
            </p>
          </div>
          
          {isMobile ? (
            <Tabs defaultValue={selectedTrade} onValueChange={setSelectedTrade} className="w-full">
              <TabsList className="flex w-full overflow-x-auto pb-2 mb-4 bg-transparent h-auto gap-2">
                {trades.map((trade) => (
                  <TabsTrigger 
                    key={trade.id}
                    value={trade.id}
                    className="py-2 px-3 text-sm whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-md shadow-sm"
                  >
                    {(() => {
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
                  <div className="bg-white rounded-xl p-4 shadow-md mb-6">
                    <h3 className="text-xl font-bold mb-3">{(() => {
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
                    <p className="text-gray-700 mb-4 text-sm">{trade.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2">
                        आपण काय शिकाल
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>{(() => {
                          switch(trade.id) {
                            case "carpentry": return "सुतारकाम";
                            case "welding": return "वेल्डिंग";
                            case "plumbing": return "प्लंबिंग";
                            case "electrical": return "इलेक्ट्रिकल";
                            case "tailoring": return "शिंपीकाम";
                            case "handicrafts": return "हस्तकला";
                            default: return trade.name;
                          }
                        })() + " संबंधित तांत्रिक कौशल्य"}
                        </li>
                        <li>आधुनिक तंत्र आणि पारंपरिक कारागिरी</li>
                        <li>साहित्य निवड आणि गुणवत्ता मूल्यांकन</li>
                        <li>साधने वापर, देखभाल आणि सुरक्षा</li>
                        <li>डिझाइन तत्त्वे आणि पॅटर्न तयार करणे</li>
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2">
                        अभ्यासक्रम तपशील
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>कालावधी: ३ महिने</li>
                        <li>प्रमाणपत्र: सरकारमान्य</li>
                        <li>प्रात्यक्षिक प्रशिक्षण: ७०%</li>
                        <li>सैद्धांतिक वर्ग: ३०%</li>
                        <li>आर्थिक मदत उपलब्ध</li>
                      </ul>
                    </div>
                    
                    <div className="mt-4">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600">
                        <a 
                          href={`https://wa.me/919423281767?text=मला ${(() => {
                            switch(trade.id) {
                              case "carpentry": return "सुतारकाम";
                              case "welding": return "वेल्डिंग";
                              case "plumbing": return "प्लंबिंग";
                              case "electrical": return "इलेक्ट्रिकल";
                              case "tailoring": return "शिंपीकाम";
                              case "handicrafts": return "हस्तकला";
                              default: return trade.name;
                            }
                          })()} प्रशिक्षणाबद्दल अधिक माहिती हवी आहे.`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          {(() => {
                            switch(trade.id) {
                              case "carpentry": return "सुतारकाम";
                              case "welding": return "वेल्डिंग";
                              case "plumbing": return "प्लंबिंग";
                              case "electrical": return "इलेक्ट्रिकल";
                              case "tailoring": return "शिंपीकाम";
                              case "handicrafts": return "हस्तकला";
                              default: return trade.name;
                            }
                          })() + " मध्ये नोंदणी करा"}
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <Carousel className="w-full mb-8">
                    <CarouselContent>
                      {tradeImages[trade.id as keyof typeof tradeImages].slice(0, 5).map((image) => (
                        <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-4 gap-2">
                      <CarouselPrevious className="relative static left-0 translate-y-0 h-9 w-9" />
                      <CarouselNext className="relative static right-0 translate-y-0 h-9 w-9" />
                    </div>
                  </Carousel>
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <Tabs defaultValue={selectedTrade} onValueChange={setSelectedTrade} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent h-auto mb-8">
                {trades.map((trade) => (
                  <TabsTrigger 
                    key={trade.id}
                    value={trade.id}
                    className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-md shadow-sm transition-all duration-300"
                  >
                    {(() => {
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
                    <h3 className="text-2xl font-bold mb-3">{(() => {
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
                          आपण काय शिकाल
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>{(() => {
                            switch(trade.id) {
                              case "carpentry": return "सुतारकाम";
                              case "welding": return "वेल्डिंग";
                              case "plumbing": return "प्लंबिंग";
                              case "electrical": return "इलेक्ट्रिकल";
                              case "tailoring": return "शिंपीकाम";
                              case "handicrafts": return "हस्तकला";
                              default: return trade.name;
                            }
                          })() + " संबंधित तांत्रिक कौशल्य"}
                          </li>
                          <li>आधुनिक तंत्र आणि पारंपरिक कारागिरी</li>
                          <li>साहित्य निवड आणि गुणवत्ता मूल्यांकन</li>
                          <li>साधने वापर, देखभाल आणि सुरक्षा</li>
                          <li>डिझाइन तत्त्वे आणि पॅटर्न तयार करणे</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">
                          अभ्यासक्रम तपशील
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>कालावधी: ३ महिने</li>
                          <li>प्रमाणपत्र: सरकारमान्य</li>
                          <li>प्रात्यक्षिक प्रशिक्षण: ७०%</li>
                          <li>सैद्धांतिक वर्ग: ३०%</li>
                          <li>आर्थिक मदत उपलब्ध</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">
                        <a 
                          href={`https://wa.me/919423281767?text=मला ${(() => {
                            switch(trade.id) {
                              case "carpentry": return "सुतारकाम";
                              case "welding": return "वेल्डिंग";
                              case "plumbing": return "प्लंबिंग";
                              case "electrical": return "इलेक्ट्रिकल";
                              case "tailoring": return "शिंपीकाम";
                              case "handicrafts": return "हस्तकला";
                              default: return trade.name;
                            }
                          })()} प्रशिक्षणाबद्दल अधिक माहिती हवी आहे.`}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {(() => {
                            switch(trade.id) {
                              case "carpentry": return "सुतारकाम";
                              case "welding": return "वेल्डिंग";
                              case "plumbing": return "प्लंबिंग";
                              case "electrical": return "इलेक्ट्रिकल";
                              case "tailoring": return "शिंपीकाम";
                              case "handicrafts": return "हस्तकला";
                              default: return trade.name;
                            }
                          })() + " मध्ये नोंदणी करा"}
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
          )}
        </div>
      </section>
    </div>
  );
};

export default VishwakarmaPage;
