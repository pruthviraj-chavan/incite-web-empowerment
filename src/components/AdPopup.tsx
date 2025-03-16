
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const AdPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md p-0 border-0 bg-transparent shadow-none">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="rounded-xl overflow-hidden shadow-xl relative"
        >
          <DialogClose className="absolute top-2 right-2 z-10 bg-white/90 rounded-full p-1 shadow-md hover:bg-white">
            <X size={24} className="text-gray-800" />
          </DialogClose>
          
          <div className="text-center">
            <div className="relative">
              <img 
                src="/m (1).jpeg" 
                alt="Incite Computers Special Offer" 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
            
            <div className="bg-white p-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2 gradient-text">इन्साइट कॉम्प्युटर्स खास ऑफर</h3>
              <p className="text-gray-700 mb-3">नवीन बॅच सुरू होत आहेत - अधिक माहितीसाठी आज संपर्क करा</p>
              <a
                href="tel:9423281767"
                className="inline-flex items-center justify-center py-2 px-6 rounded-full text-white font-medium gradient-orange-pink"
              >
                संपर्क करा: 9423281767
              </a>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default AdPopup;
