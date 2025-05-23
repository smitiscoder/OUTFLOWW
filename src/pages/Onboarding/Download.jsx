// In src/pages/Onboarding/Download.jsx
import React, { useEffect, useState } from "react";
import { Smartphone, Globe, Laptop, ChevronRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Download = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center py-8 sm:py-16 md:py-24 relative overflow-hidden bg-[#0D0D0D] text-white">
      {/* Background and Particle Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_70%)] -z-10" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="shimmer absolute top-[20%] left-[15%] w-24 sm:w-32 h-24 sm:h-32 opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="shimmer absolute top-[50%] right-[10%] w-48 sm:w-64 h-48 sm:h-64 opacity-5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Back Button and Download Text */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center space-x-2">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-[#1A1A1A]"
        >
          <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
        <h1 className="text-lg sm:text-2xl font-bold">Download</h1>
      </div>

      <div className="container-section relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
          {/* Header */}
          <h1
              className={`mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Install Our PWA App
              </span>
            </h1>

          <p
            className={`text-white/80 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-full sm:max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Add our app to your device in a few simple steps for seamless access to your financial tools.
          </p>

          {/* Installation Instructions */}
          <div
            className={`space-y-8 sm:space-y-12 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Android Instructions */}
            <div className="bg-black/10 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-outflow-accent mr-2" />
                <h2 className="text-xl sm:text-2xl font-semibold">For Android (Using Chrome)</h2>
              </div>
              <ul className="text-left text-white/70 text-sm sm:text-base space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>Open the website in Google Chrome.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>If you see the “Install” prompt, tap on it.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>
                    If the prompt doesn't appear:
                    <ul className="ml-4 sm:ml-6 mt-2 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-outflow-accent mr-2 mt-1" />
                        <span>Tap the three dots (menu) in the top-right corner.</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-outflow-accent mr-2 mt-1" />
                        <span>Scroll down and select “Add to Home screen”.</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-outflow-accent mr-2 mt-1" />
                        <span>Then tap on “Install”.</span>
                      </li>
                    </ul>
                  </span>
                </li>
              </ul>
            </div>

            {/* iPhone Instructions */}
            <div className="bg-black/10 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-outflow-accent mr-2" />
                <h2 className="text-xl sm:text-2xl font-semibold">For iPhone (Using Safari)</h2>
              </div>
              <ul className="text-left text-white/70 text-sm sm:text-base space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>Open the website in the Safari browser.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>Tap the “Share” button (the square with an arrow pointing up).</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>Select “Add to Home Screen”.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>Tap “Add” to confirm installation.</span>
                </li>
              </ul>
            </div>

            {/* macOS Instructions */}
            <div className="bg-black/10 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Laptop className="h-6 w-6 sm:h-8 sm:w-8 text-outflow-accent mr-2" />
                <h2 className="text-xl sm:text-2xl font-semibold">For macOS (Using Safari)</h2>
              </div>
              <ul className="text-left text-white/70 text-sm sm:text-base space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>Open the website in the Safari browser.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>Click the “Share” button in the toolbar (a square with an arrow pointing up).</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>Select “Add to Dock” from the menu.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>Confirm the installation, and the app icon will appear in the Dock.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>
                    Alternatively:
                    <ul className="ml-4 sm:ml-6 mt-2 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-outflow-accent mr-2 mt-1" />
                        <span>Click “File” in the menu bar and select “Add to Dock”.</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-outflow-accent mr-2 mt-1" />
                        <span>Confirm the installation.</span>
                      </li>
                    </ul>
                  </span>
                </li>
              </ul>
            </div>

            {/* Desktop Instructions */}
            <div className="bg-black/10 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Laptop className="h-6 w-6 sm:h-8 sm:w-8 text-outflow-accent mr-2" />
                <h2 className="text-xl sm:text-2xl font-semibold">For Desktop (Using Chrome or Edge)</h2>
              </div>
              <ul className="text-left text-white/70 text-sm sm:text-base space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>Open the website in Google Chrome or Microsoft Edge.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>Look for the “Install” icon in the address bar (a plus sign or download arrow).</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>Click the “Install” icon and confirm the installation prompt.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-outflow-accent mr-2 mt-1" />
                  <span>
                    If the icon is not visible:
                    <ul className="ml-4 sm:ml-6 mt-2 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-outflow-accent mr-2 mt-1" />
                        <span>Click the three dots (menu) in the top-right corner.</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-outflow-accent mr-2 mt-1" />
                        <span>Hover over “New tab” or “Downloads” and select “Install App” or “Add to Desktop”.</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-outflow-accent mr-2 mt-1" />
                        <span>Confirm the installation.</span>
                      </li>
                    </ul>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;