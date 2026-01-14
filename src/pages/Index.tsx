import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/motion/Reveal';
import { SignatureEffect } from '@/components/effects/SignatureEffect';
import { SignatureInteraction } from '@/components/effects/SignatureInteraction';
import { LuArrowRight } from 'react-icons/lu';

const Index = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="bg-[#050505] text-white font-sans overflow-x-hidden min-h-screen selection:bg-[#00f3ff] selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&family=Syncopate:wght@400;700&display=swap');
        
        :root {
          --neon-purple: #b026ff;
          --neon-cyan: #00f3ff;
          --void-black: #050505;
          --glass: rgba(255, 255, 255, 0.05);
        }
        
        body {
          cursor: none;
        }
        
        .font-syncopate {
          font-family: 'Syncopate', sans-serif;
        }
        .font-manrope {
          font-family: 'Manrope', sans-serif;
        }
        
        .text-outline {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          color: transparent;
          transition: all 0.5s ease;
        }
        
        .group:hover .text-outline {
          -webkit-text-stroke: 1px var(--neon-cyan);
          text-shadow: 0 0 20px rgba(0, 243, 255, 0.5);
        }

        .glass-card {
          background: var(--glass);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.4s ease, border-color 0.4s ease;
        }
        .glass-card:hover {
          border-color: var(--neon-purple);
          transform: translateY(-5px);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: var(--neon-cyan);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        .room-img {
          filter: grayscale(100%) contrast(120%);
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .group:hover .room-img {
          filter: grayscale(0%) contrast(100%);
          transform: scale(1.05);
        }
      `}</style>

      {/* Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-[9999] rounded-full border border-white mix-blend-difference transition-all duration-300 ease-out"
        style={{ 
          left: cursorPos.x, 
          top: cursorPos.y, 
          width: isHovering ? '60px' : '20px',
          height: isHovering ? '60px' : '20px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: isHovering ? 'white' : 'transparent'
        }}
      />

      <SignatureEffect effect="noise" />

      {/* Navigation */}
      <nav className="fixed w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-bold tracking-tighter font-syncopate">AETHER<span className="text-[#00f3ff]">.</span></div>
        <div className="hidden md:flex space-x-12 text-sm tracking-widest uppercase font-manrope">
          <a href="#rooms" className="nav-link relative cursor-pointer">Environments</a>
          <a href="#lineup" className="nav-link relative cursor-pointer">Lineup</a>
          <a href="#elixirs" className="nav-link relative cursor-pointer">Elixirs</a>
        </div>
        <button className="border border-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 font-manrope cursor-pointer">
          Book Table
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <SignatureInteraction type="parallax" className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1570876050997-2fdefb00c004?q=80&w=2940&auto=format&fit=crop" 
            alt="Club Atmosphere" 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </SignatureInteraction>

        <div className="relative z-10 text-center flex flex-col items-center">
          <SignatureInteraction type="hero">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 text-cyan-300 animate-pulse font-manrope">
              Dallas, TX // Est. 2024
            </p>
          </SignatureInteraction>
          
          <SignatureInteraction type="text-reveal">
            <h1 className="text-[15vw] leading-[0.8] font-bold mix-blend-overlay opacity-80 select-none font-syncopate">
              NIGHT
            </h1>
          </SignatureInteraction>

          <SignatureInteraction type="text-reveal">
            <h1 className="text-[15vw] leading-[0.8] font-bold text-transparent select-none relative -mt-4 md:-mt-8 font-syncopate">
              <span className="absolute inset-0 text-outline blur-[2px] opacity-70">SHIFT</span>
              <span className="relative text-white">SHIFT</span>
            </h1>
          </SignatureInteraction>
          
          <SignatureInteraction type="hero">
            <div className="mt-12 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white/30"></div>
              <span className="text-xs tracking-widest uppercase text-gray-400 font-manrope">Scroll to Enter</span>
              <div className="h-[1px] w-12 bg-white/30"></div>
            </div>
          </SignatureInteraction>
        </div>
      </header>

      {/* Environments Section */}
      <section id="rooms" className="py-32 px-4 md:px-12 bg-[#050505] relative font-manrope">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-900/10 blur-[120px] pointer-events-none"></div>
        
        <Reveal>
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
            <h2 className="text-5xl md:text-7xl font-bold max-w-2xl font-syncopate">Sonic <br/><span className="text-gray-700">Architecture</span></h2>
            <p className="mt-4 md:mt-0 max-w-sm text-gray-400 text-sm leading-relaxed text-right">
              Five distinct dimensions of sound. From deep house in the Vault to high-octane bass on the Main Stage.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
          {/* Room 1 */}
          <div className="md:col-span-6 relative overflow-hidden glass-card cursor-pointer group">
            <img src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=2076&auto=format&fit=crop" className="w-full h-[300px] md:h-full object-cover room-img" alt="Main Stage" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
              <h3 className="text-3xl md:text-4xl font-syncopate">Main Stage</h3>
              <p className="text-cyan-300 text-xs tracking-widest mt-2 uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                EDM / House / Visuals
              </p>
            </div>
          </div>

          <div className="md:col-span-6 grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
               {/* Room 2 */}
              <div className="group relative overflow-hidden glass-card cursor-pointer">
                <img src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop" className="w-full h-[200px] md:h-full object-cover room-img" alt="The Vault" />
                 <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-syncopate">The Vault</h3>
                    <p className="text-purple-400 text-[10px] tracking-widest mt-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity">Underground Techno</p>
                </div>
              </div>
              {/* Room 3 */}
              <div className="group relative overflow-hidden glass-card cursor-pointer">
                <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2787&auto=format&fit=crop" className="w-full h-[200px] md:h-full object-cover room-img" alt="Neon Garden" />
                 <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-syncopate">Neon Garden</h3>
                    <p className="text-pink-400 text-[10px] tracking-widest mt-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity">Retro / Synthwave</p>
                </div>
              </div>
            </div>
            {/* Room 4 */}
            <div className="group relative overflow-hidden glass-card cursor-pointer">
              <img src="https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=2787&auto=format&fit=crop" className="w-full h-[200px] md:h-full object-cover room-img object-top" alt="Onyx Lounge" />
               <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-syncopate">Onyx Lounge</h3>
                  <p className="text-amber-200 text-xs tracking-widest mt-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity">VIP / Bottle Service / R&B</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live DJ Lineup */}
      <section id="lineup" className="py-24 bg-black relative font-manrope overflow-hidden">
         <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/5 whitespace-nowrap select-none pointer-events-none font-syncopate">
            SATURDAY
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="flex justify-between items-center mb-16">
                <h2 className="text-4xl md:text-5xl font-syncopate">Live Series</h2>
                <span className="text-[#00f3ff] border border-cyan-500/30 px-4 py-1 rounded-full text-xs uppercase">This Weekend</span>
            </div>
          </Reveal>

          <div className="space-y-0">
            {/* Artist 1 */}
            <Reveal delay={0.1}>
              <div className="group flex flex-col md:flex-row items-center justify-between border-t border-white/10 py-10 hover:bg-white/5 transition-colors duration-300 px-4 cursor-pointer">
                  <div className="flex items-center gap-8">
                      <span className="text-gray-500 font-mono text-sm">22:00</span>
                      <h3 className="text-3xl md:text-5xl text-outline group-hover:text-white transition-all duration-300 font-syncopate">KAYTRA</h3>
                  </div>
                  <span className="text-sm text-gray-400 uppercase tracking-widest mt-4 md:mt-0">Deep House</span>
              </div>
            </Reveal>
            
            {/* Artist 2 */}
            <Reveal delay={0.2}>
              <div className="group flex flex-col md:flex-row items-center justify-between border-t border-white/10 py-10 hover:bg-white/5 transition-colors duration-300 px-4 cursor-pointer">
                   <div className="flex items-center gap-8">
                      <span className="text-gray-500 font-mono text-sm">00:00</span>
                      <h3 className="text-3xl md:text-5xl text-outline group-hover:text-white transition-all duration-300 font-syncopate">NEON NOIR</h3>
                  </div>
                  <span className="text-sm text-gray-400 uppercase tracking-widest mt-4 md:mt-0">Techno / Industrial</span>
              </div>
            </Reveal>

            {/* Artist 3 */}
            <Reveal delay={0.3}>
              <div className="group flex flex-col md:flex-row items-center justify-between border-t border-b border-white/10 py-10 hover:bg-white/5 transition-colors duration-300 px-4 cursor-pointer">
                   <div className="flex items-center gap-8">
                      <span className="text-gray-500 font-mono text-sm">02:00</span>
                      <h3 className="text-3xl md:text-5xl text-outline group-hover:text-white transition-all duration-300 font-syncopate">VOID WALKER</h3>
                  </div>
                  <span className="text-sm text-gray-400 uppercase tracking-widest mt-4 md:mt-0">Drum & Bass</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bar Program */}
      <section id="elixirs" className="py-32 relative overflow-hidden font-manrope">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#000000]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 blur-[100px] rounded-full"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 space-y-8">
                  <Reveal>
                    <h2 className="text-5xl md:text-6xl leading-tight font-syncopate">Alchemy & <br/><span className="text-purple-400">Ice</span></h2>
                    <p className="text-gray-400 leading-relaxed mt-4">
                        Our mixology program pushes the boundaries of molecular gastronomy. 
                        Featuring rare Japanese whiskies, liquid nitrogen infusions, and botanicals sourced from the Amazon.
                    </p>
                  </Reveal>
                    
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <Reveal delay={0.2}>
                      <div className="glass-card p-6">
                          <div className="text-2xl mb-2 font-syncopate">Midnight Mule</div>
                          <p className="text-xs text-gray-400">Black vodka, charcoal ginger beer, lime caviar.</p>
                      </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                      <div className="glass-card p-6">
                          <div className="text-2xl mb-2 font-syncopate">Neon Demon</div>
                          <p className="text-xs text-gray-400">Mezcal, electric dust, dragon fruit reduction.</p>
                      </div>
                    </Reveal>
                  </div>

                  <Reveal delay={0.4}>
                    <button className="mt-8 text-sm uppercase tracking-[0.2em] border-b border-white pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-pointer">
                        View Full Menu
                    </button>
                  </Reveal>
                </div>

                <div className="order-1 md:order-2 relative">
                  <Reveal delay={0.2}>
                    <div className="relative z-10">
                        <img src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1964&auto=format&fit=crop" className="w-full h-[600px] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" alt="Bar" />
                    </div>
                    {/* Decor element */}
                    <div className="absolute -bottom-8 -left-8 w-full h-full border border-white/10 z-0"></div>
                  </Reveal>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 border-t border-white/5 font-manrope">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-10 md:mb-0">
                <h2 className="text-3xl font-bold tracking-tighter mb-4 font-syncopate">AETHER.</h2>
                <p className="text-gray-500 text-sm max-w-xs">
                    Redefining nightlife in the heart of Dallas.<br/>
                    Dress code strictly enforced.
                </p>
            </div>
            
            <div className="flex gap-12 text-xs uppercase tracking-widest text-gray-400">
                <div className="flex flex-col gap-4">
                    <span className="text-white font-bold">Location</span>
                    <a href="#" className="hover:text-white cursor-pointer">2500 Main St, Dallas</a>
                    <span>Valet Available</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-white font-bold">Contact</span>
                    <a href="#" className="hover:text-white cursor-pointer">rsvp@aetherdallas.com</a>
                    <a href="#" className="hover:text-white cursor-pointer">+1 (214) 555-0199</a>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-white font-bold">Social</span>
                    <a href="#" className="hover:text-white cursor-pointer">Instagram</a>
                    <a href="#" className="hover:text-white cursor-pointer">TikTok</a>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex justify-between text-[10px] text-gray-600 uppercase">
            <span> 2026 Aether Nightclub</span>
            <span>Designed by Elite</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
