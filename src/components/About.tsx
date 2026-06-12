'use client'

import { useEffect, useState } from 'react'

export function About() {
  const [activeFrame, setActiveFrame] = useState(-1)
  const [animationStarted, setAnimationStarted] = useState(false)

  const processSteps = [
    {
      number: "01",
      title: "Audio Archiving & Discovery",
      description: "Collecting, sorting, and preserving unreleased high-quality music tracks.",
      colorClass: "border-blue-500", 
      bgImage: "/images/vocals-raw.png"
    },
    {
      number: "02", 
      title: "Era & Concept Selection",
      description: "Grouping tracks into accurate conceptual eras and custom fan albums.",
      colorClass: "border-emerald-500", 
      bgImage: "/images/eraxski.png"
    },
    {
      number: "03",
      title: "Cover Art & Content Design",
      description: "Creating unique visual artwork and teaser concepts shared on TikTok.",
      colorClass: "border-purple-500", 
      bgImage: "/images/coverartjuice.png"
    },
    {
      number: "04",
      title: "Secure Drive Upload",
      description: "Hosting the finalized high-quality audio folders on Google Drive.",
      colorClass: "border-blue-500", 
      bgImage: "/images/drivee.jpg"
    },
    {
      number: "05",
      title: "Fan Integration & Delivery",
      description: "Providing download access for direct local playback and community experience. Listenable on all platforms through local media players offline!",
      colorClass: "border-purple-500",
      bgImage: "/images/finalxjw.png"
    }
  ]

  useEffect(() => {
    // Start film animation after a 3 second pause
    const animationTimeout = setTimeout(() => {
      setAnimationStarted(true)
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setActiveFrame(index)
        }, index * 2000 + 1000)
      })
    }, 3000)

    return () => clearTimeout(animationTimeout)
  }, [])

  return (
    <section id="about" className="relative py-20 bg-zinc-950 overflow-hidden text-white">
      
      {/* Immagine di Background Personale da cartella /public */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/images/jw%207.png" 
          alt="Juice WRLD Background Concept"
          className="w-full h-full object-cover opacity-35 mix-blend-lightbox" 
        />
      </div>

      {/* Cinematic Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950 z-0 pointer-events-none" />
      
      {/* Film Grain Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '3px 3px',
          animation: 'filmGrain 8s infinite'
        }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="text-3xl sm:text-5xl font-bagel tracking-tighter text-white select-none block">
              999
            </span>
            <span className="text-lg font-semibold text-zinc-400">
              🖤 About us 🖤
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">
            What is this website about?
          </h2>

          <p className="text-lg text-zinc-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            We are a dedicated team archiving and organizing the unreleased history of Juice WRLD, grouping known leaks into conceptual, era-accurate albums like "Blessed Boys" and "Slime WRLD". Our mission is to introduce the fanbase to the artist's hidden musical eras, diving beneath his standard Spotify catalog to uncover the deeper meanings behind his lyrics. Through custom fan-art concepts shared on TikTok, we give our community the chance to download these tracks via Google Drive. By saving the files, supporters can integrate them directly into local playback systems to truly live and experience the music they’ve just discovered.
          </p>
          
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto font-medium">
            Watch our process unfold frame by frame
          </p>
        </div>

        {/* Film Strip Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Film Strip Background */}
          <div className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 rounded-xl overflow-hidden"
               style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.05)' }}>
            
            {/* Film Perforations - Top */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-black z-20 overflow-hidden">
              <div className={`flex items-center justify-between px-12 h-full ${
                animationStarted ? 'perforations-scroll-animation' : ''
              }`} style={{ width: '200%' }}>
                {[...Array(40)].map((_, i) => (
                  <div key={`top-${i}`} className="w-4 h-3 bg-zinc-800 rounded-sm border border-zinc-700 flex-shrink-0" 
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
              </div>
            </div>
            
            {/* Film Perforations - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-black z-20 overflow-hidden">
              <div className={`flex items-center justify-between px-12 h-full ${
                animationStarted ? 'perforations-scroll-animation' : ''
              }`} style={{ width: '200%' }}>
                {[...Array(40)].map((_, i) => (
                  <div key={`bottom-${i}`} className="w-4 h-3 bg-zinc-800 rounded-sm border border-zinc-700 flex-shrink-0"
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
              </div>
            </div>

            {/* Film Frames Container */}
            <div className="relative py-6 px-8 overflow-hidden h-64 max-w-full">
              <div className={`flex transition-transform duration-1000 ease-in-out ${
                animationStarted ? 'film-scroll-animation' : ''
              }`} style={{ width: 'max-content', gap: '32px' }}>
                
                {/* Original sequence */}
                <div className="flex-shrink-0 w-80 h-52 bg-zinc-800 rounded-lg border-2 border-zinc-700 opacity-60 flex items-center justify-center">
                  <div className="text-zinc-400 font-mono tracking-wider">● START</div>
                </div>
                
                {processSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`flex-shrink-0 w-80 h-52 bg-zinc-900 rounded-lg border-4 transition-colors duration-500 relative ${
                      activeFrame >= index ? step.colorClass : 'border-zinc-700'
                    }`}
                    style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.5)' }}
                  >
                    <div className="absolute inset-0 z-0 pointer-events-none select-none rounded-md overflow-hidden">
                      <img 
                        src={step.bgImage} 
                        alt="" 
                        className="w-full h-full object-cover opacity-35" 
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>

                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-black z-20 border-3 border-zinc-900 text-lg shadow-lg">
                      {step.number}
                    </div>

                    <div className="relative h-full p-6 flex flex-col justify-between z-10">
                      <div className="h-4" />
                      
                      <div>
                        <h3 className="font-black text-xl leading-tight mb-2 text-white drop-shadow-md">
                          {step.title}
                        </h3>
                        <p className="text-sm text-zinc-200 leading-relaxed drop-shadow-md">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="absolute left-1 top-1 bottom-1 w-px bg-white/5" />
                      <div className="absolute right-1 top-1 bottom-1 w-px bg-white/5" />
                      <div className="absolute top-1 left-1 right-1 h-px bg-white/5" />
                      <div className="absolute bottom-1 left-1 right-1 h-px bg-white/5" />
                    </div>
                  </div>
                ))}
                
                <div className="flex-shrink-0 w-80 h-52 bg-zinc-800 rounded-lg border-2 border-zinc-700 opacity-60 flex items-center justify-center">
                  <div className="text-zinc-400 font-mono tracking-wider">● END</div>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex-shrink-0 w-80 h-52 bg-zinc-800 rounded-lg border-2 border-zinc-700 opacity-60 flex items-center justify-center">
                  <div className="text-zinc-400 font-mono tracking-wider">● START</div>
                </div>
                
                {processSteps.map((step, index) => (
                  <div
                    key={`duplicate-${step.number}`}
                    className={`flex-shrink-0 w-80 h-52 bg-zinc-900 rounded-lg border-4 transition-colors duration-500 relative ${
                      activeFrame >= index ? step.colorClass : 'border-zinc-700'
                    }`}
                    style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.5)' }}
                  >
                    <div className="absolute inset-0 z-0 pointer-events-none select-none rounded-md overflow-hidden">
                      <img 
                        src={step.bgImage} 
                        alt="" 
                        className="w-full h-full object-cover opacity-35" 
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>

                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-black z-20 border-3 border-zinc-900 text-lg shadow-lg">
                      {step.number}
                    </div>

                    <div className="relative h-full p-6 flex flex-col justify-between z-10">
                      <div className="h-4" />
                      
                      <div>
                        <h3 className="font-black text-xl leading-tight mb-2 text-white drop-shadow-md">
                          {step.title}
                        </h3>
                        <p className="text-sm text-zinc-200 leading-relaxed drop-shadow-md">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="absolute left-1 top-1 bottom-1 w-px bg-white/5" />
                      <div className="absolute right-1 top-1 bottom-1 w-px bg-white/5" />
                      <div className="absolute top-1 left-1 right-1 h-px bg-white/5" />
                      <div className="absolute bottom-1 left-1 right-1 h-px bg-white/5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced Projector Light Effect */}
          {activeFrame >= 0 && (
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,0,0.2) 40%, transparent 60%)',
                  animation: 'projectorLight 12s ease-in-out infinite'
                }}
              />
            </div>
          )}
        </div>

      </div>
    </section>
  )
}