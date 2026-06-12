'use client'

import { Play, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 bg-white overflow-hidden">
      
      {/* 🌌 IMMAGINE CON SFUMATURE NERE PROGRESSIVE */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/images/featurev2.png" 
          alt="Background Concept"
          className="w-full h-full object-cover opacity-90 mix-blend-multiply" 
        />
        
        {/* Sfumatura nera dall'alto verso il centro */}
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-zinc-950 via-zinc-950/40 to-transparent opacity-90" />
        
        {/* Sfumatura nera dal basso verso il centro */}
        <div className="absolute inset-x-0 bottom-0 h-[32rem] bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-95" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          
          {/* Allineamento verticale per il brand 999 */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="text-3xl sm:text-5xl font-bagel tracking-tighter text-white select-none block drop-shadow-md">
              999
            </span>
            <span className="text-lg font-semibold text-zinc-300 drop-shadow">
              🖤 Works 🖤
            </span>
          </div>
          
          {/* Titolo Principale con Contorno Nero e Testo Bianco */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-white drop-shadow-lg"
            style={{
              WebkitTextStroke: '2px #000000',
              textStroke: '2px #000000'
            }}
          >
            <span className="block mb-2">Unreleased Album Projects Fan Made</span>
          </h2>
          
          {/* Paragrafo Descrittivo in Grassetto Bianco/Zinco Chiaro per Leggibilità */}
          <p className="text-2xl lg:text-4xl text-zinc-200 font-bold max-w-4xl mx-auto leading-relaxed drop-shadow-md"
            style={{
              WebkitTextStroke: '1px #000000',
              textStroke: '4px #000000'
            }}
          >
            <span className="block mb-2">Some of the works did till now, crazy unreleased album projects   CHECK THEM OUT!</span>
          </p>
        </div>

        {/* GRIGLIA ALLARGATA (max-w-[95vw] / lg:max-w-[85vw]) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[95vw] lg:max-w-[85vw] mx-auto px-2">
          
          {/* WORK 1 - SINISTRA (Blessed Boys) */}
          <div className="relative bg-white clean-border rounded-3xl overflow-hidden elevated-shadow flex flex-col">
            <div className="aspect-square bg-zinc-900 relative w-full">
              <img
                src="/images/BBC.png"
                alt="Blessed Boys Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="glass-effect rounded-xl px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  Blessed Boys
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded-full">Concept Art</span>
                <h3 className="text-xl font-bold text-foreground mt-3 mb-2">BLESSED BOYS</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Blessed Boys" is an unreleased collab project between Juice WRLD and Lil Yachty (2018-2019).
                  The tracks blend Juice’s melodic energy with Yachty’s quirky, autotuned, and bouncy flows.
                  Never officially dropped, it lives on as a cult classic through leaks and fan-made compilations.
                </p>
              </div>
            </div>
          </div>

          {/* WORK 2 - CENTRO (Evil Twins) */}
          <div className="relative bg-white clean-border rounded-3xl overflow-hidden elevated-shadow flex flex-col">
            <div className="aspect-square bg-zinc-900 relative w-full">
              <img
                src="/images/ETC.png"
                alt="Evil Twins Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="glass-effect rounded-xl px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  Evil Twins
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded-full">Concept Art</span>
                <h3 className="text-xl font-bold text-foreground mt-3 mb-2">EVIL TWINS</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This unconfirmed tracklist is compiled from recent singles, snippets, and social media leaks.
                  It is purely speculative and has not been officially verified by Ski Mask or Juice WRLD.
                  The project data will be immediately updated as soon as more verified information comes to light.
                </p>
              </div>
            </div>
          </div>

          {/* WORK 3 - DESTRA (Slime WRLD) */}
          <div className="relative bg-white clean-border rounded-3xl overflow-hidden elevated-shadow flex flex-col">
            <div className="aspect-square bg-zinc-900 relative w-full">
              <img
                src="/images/SWC.jpg"
                alt="Slime WRLD Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="glass-effect rounded-xl px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  Slime WRLD
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded-full">Concept Art</span>
                <h3 className="text-xl font-bold text-foreground mt-3 mb-2">SLIME WRLD</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Slime WRLD" is an unreleased collab tape between Juice WRLD and Young Thug, originally canceled in 2020.
                  While some tracks were repurposed over the years, a full mixtape release was recently teased by management.
                  This speculative tracklist compiles their legendary leaked songs, unreleased gems, and circulating rumors.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}