"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Maximize2, Download, X, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeViewer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const fileId = "1TXv4_Lsx-B46MOliHQMUoy03D-a0GM-4";
  const drivePreview = `https://drive.google.com/file/d/${fileId}/preview`;
  const driveFull = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) setLoadError(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <section id="resume" className="py-12 bg-transparent transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center">
          
          {/* Section Header */}
          <div className="text-center mb-8">
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Curriculum Vitae</h3>
             <p className="text-slate-500 dark:text-slate-400 text-sm">A quick overview of my professional background</p>
          </div>

          {/* The Visualizer Box */}
          <div className="relative w-full max-w-2xl group">
            
            <div className={`relative h-[400px] w-full rounded-3xl 
              border border-white/40 dark:border-slate-700/80 
              bg-white/20 dark:bg-slate-900/40 backdrop-blur-md 
              overflow-hidden shadow-xl transition-all duration-500 
              ${loadError ? 'h-auto py-10' : ''}`}>
              
              {!loadError ? (
                <>
                  {isLoading && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50">
                      <Loader2 className="animate-spin text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                  
                  <iframe
                    src={drivePreview}
                    className="w-full h-[800px] border-none grayscale-[0.1] dark:invert-[0.05] dark:hue-rotate-180" 
                    onLoad={() => setIsLoading(false)}
                  />

                  {/* Dynamic Gradient Overlay - Switches based on theme */}
                  <div className="absolute bottom-0 left-0 right-0 h-40 
                    bg-gradient-to-t from-slate-50 dark:from-[#0a0a0a] 
                    via-slate-50/80 dark:via-[#0a0a0a]/80 to-transparent z-20" />
                  
                  {/* Floating Action Overlay */}
                  <div className="absolute inset-0 z-30 flex items-end justify-center pb-8">
                    <Button 
                      onClick={() => setIsModalOpen(true)}
                      className="rounded-full bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white px-8 py-6 shadow-2xl hover:scale-105 transition-all flex gap-3"
                    >
                      <Maximize2 size={18} />
                      View Full Resume
                    </Button>
                  </div>
                </>
              ) : (
                /* Fallback State */
                <div className="flex flex-col items-center px-6 text-center">
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-full mb-4">
                    <AlertCircle className="text-red-500 dark:text-red-400 w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Resume Preview Unavailable</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-xs">
                    We couldn't load the live preview. You can still view or download the full document below.
                  </p>
                  <Button 
                    onClick={() => window.open(driveFull, "_blank")}
                    className="rounded-xl bg-slate-900 dark:bg-blue-600 px-6"
                  >
                    Open Resume
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-5xl h-[90vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col border dark:border-slate-700"
            >
              <div className="flex items-center justify-between p-4 border-b dark:border-slate-800">
                <span className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                  <FileText size={18} className="text-blue-600 dark:text-blue-400" />
                  Priyanshu_Singh_Resume.pdf
                </span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="dark:text-slate-300" onClick={() => window.open(driveFull, "_blank")}>
                    <Download size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="dark:text-slate-300" onClick={() => setIsModalOpen(false)}>
                    <X size={20} />
                  </Button>
                </div>
              </div>
              <iframe src={drivePreview} className="flex-1 w-full border-none dark:bg-slate-800" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}