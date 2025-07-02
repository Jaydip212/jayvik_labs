import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50" data-id="wdces90sy" data-path="src/components/HeroSection.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" data-id="u6yuih9np" data-path="src/components/HeroSection.tsx">
        <div className="grid lg:grid-cols-2 gap-12 items-center" data-id="ciglxm7s7" data-path="src/components/HeroSection.tsx">
          {/* Left Column - Content */}
          <div className="space-y-8" data-id="ennzvvb1t" data-path="src/components/HeroSection.tsx">
            <div className="space-y-4" data-id="243qoy9jc" data-path="src/components/HeroSection.tsx">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium" data-id="8ovasuev6" data-path="src/components/HeroSection.tsx">
                <Zap className="w-4 h-4 mr-2" data-id="qr9ny2veb" data-path="src/components/HeroSection.tsx" />
                Powered by JayvikLabs
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight" data-id="3yipulv0p" data-path="src/components/HeroSection.tsx">
                Next-Gen
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="40sbdymn7" data-path="src/components/HeroSection.tsx">
                  Digital Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed" data-id="38geufp81" data-path="src/components/HeroSection.tsx">
                Jayvik Labs delivers cutting-edge technology solutions that transform businesses and drive growth. 
                We specialize in web development, cloud solutions, and digital transformation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4" data-id="yt7u26qe0" data-path="src/components/HeroSection.tsx">
              <Button
                size="lg"
                onClick={() => scrollToSection('#services')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg" data-id="bv2j79zh8" data-path="src/components/HeroSection.tsx">

                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" data-id="k5t4rqxj1" data-path="src/components/HeroSection.tsx" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg" data-id="b3i6a8yx2" data-path="src/components/HeroSection.tsx">

                Get In Touch
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200" data-id="soo5oxo17" data-path="src/components/HeroSection.tsx">
              <div className="text-center" data-id="qqmwcwwzq" data-path="src/components/HeroSection.tsx">
                <div className="text-3xl font-bold text-blue-600" data-id="rwi3umrpw" data-path="src/components/HeroSection.tsx">500+</div>
                <div className="text-gray-600 text-sm" data-id="lfuf7b4gm" data-path="src/components/HeroSection.tsx">Projects Delivered</div>
              </div>
              <div className="text-center" data-id="pmpk4s9b8" data-path="src/components/HeroSection.tsx">
                <div className="text-3xl font-bold text-purple-600" data-id="38vah4fz7" data-path="src/components/HeroSection.tsx">50+</div>
                <div className="text-gray-600 text-sm" data-id="dtrmcpbxe" data-path="src/components/HeroSection.tsx">Happy Clients</div>
              </div>
              <div className="text-center" data-id="fu5et52y7" data-path="src/components/HeroSection.tsx">
                <div className="text-3xl font-bold text-green-600" data-id="llqojzn0j" data-path="src/components/HeroSection.tsx">99%</div>
                <div className="text-gray-600 text-sm" data-id="4l913xr0v" data-path="src/components/HeroSection.tsx">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative" data-id="m05kce07s" data-path="src/components/HeroSection.tsx">
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-2xl" data-id="sa5acgnne" data-path="src/components/HeroSection.tsx">
              <div className="grid grid-cols-2 gap-6" data-id="6t8lcnc01" data-path="src/components/HeroSection.tsx">
                <div className="bg-white rounded-xl p-6 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300" data-id="aj7rumtul" data-path="src/components/HeroSection.tsx">
                  <Code className="w-8 h-8 text-blue-600 mb-4" data-id="mej23tyk6" data-path="src/components/HeroSection.tsx" />
                  <h3 className="font-semibold text-gray-900 mb-2" data-id="jfwo5dzee" data-path="src/components/HeroSection.tsx">Web Development</h3>
                  <p className="text-gray-600 text-sm" data-id="fcvbn15hx" data-path="src/components/HeroSection.tsx">Modern, responsive websites built with latest technologies</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-6" data-id="mfh1efwcf" data-path="src/components/HeroSection.tsx">
                  <Globe className="w-8 h-8 text-purple-600 mb-4" data-id="dm5ekwnc4" data-path="src/components/HeroSection.tsx" />
                  <h3 className="font-semibold text-gray-900 mb-2" data-id="10xtzmrw6" data-path="src/components/HeroSection.tsx">Cloud Solutions</h3>
                  <p className="text-gray-600 text-sm" data-id="glvy5uyk4" data-path="src/components/HeroSection.tsx">Scalable cloud infrastructure and deployment</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300 col-span-2" data-id="rg1365ykf" data-path="src/components/HeroSection.tsx">
                  <Zap className="w-8 h-8 text-green-600 mb-4" data-id="v48wkudze" data-path="src/components/HeroSection.tsx" />
                  <h3 className="font-semibold text-gray-900 mb-2" data-id="hxprc52jg" data-path="src/components/HeroSection.tsx">Digital Transformation</h3>
                  <p className="text-gray-600 text-sm" data-id="sueecgiz9" data-path="src/components/HeroSection.tsx">End-to-end digital solutions for business growth</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse" data-id="bbqtl7k8o" data-path="src/components/HeroSection.tsx"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000" data-id="juomoqmw9" data-path="src/components/HeroSection.tsx"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;