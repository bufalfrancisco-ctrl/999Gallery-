'use client'

import { useEffect, useState } from 'react'
import minimalBestFilm from '../assets/minimal-best-film.png'
import minimalAudienceChoice from '../assets/minimal-audience-choice.png'
import minimalInnovation from '../assets/minimal-innovation.png'
import minimalDirectorsChoice from '../assets/minimal-directors-choice.png'
import minimalExcellence from '../assets/minimal-excellence.png'
import minimalRisingTalent from '../assets/minimal-rising-talent.png'

export function Awards() {
  const awards = [
    { image: minimalBestFilm, delay: "0s" },
    { image: minimalAudienceChoice, delay: "0.5s" },
    { image: minimalInnovation, delay: "1s" },
    { image: minimalDirectorsChoice, delay: "1.5s" },
    { image: minimalExcellence, delay: "2s" },
    { image: minimalRisingTalent, delay: "2.5s" }
  ]

  return (
    <section id="awards" className="relative pt-20 pb-28 bg-zinc-950 overflow-hidden text-white isolate">
      
      {/* Immagine di Background Personale */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/images/bling.png" 
          alt="Background Concept"
          className="w-full h-full object-cover opacity-85 mix-blend-lightbox"
        />
      </div>

      {/* Elegant Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950 pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center gap-2 mb-6 w-full">
            <span className="text-3xl sm:text-5xl font-bagel tracking-tighter text-white select-none block">
              999
            </span>
            <span className="text-lg font-semibold text-zinc-400">
              🖤 TikTok Account 🖤
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">
            Our TikTok Community
          </h2>
          
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Follow us on TikTok to see our latest visual concepts, album previews, and behind the scenes content. We share our creative process and connect with the community through engaging videos that bring unreleased music to life.
          </p>
        </div>

        {/* Contenitore Relativo Principale della Galleria */}
        <div className="relative max-w-5xl mx-auto flex flex-col items-center w-full mb-12">
          
          {/* Immagine interattiva tutta a SINISTRA (ABYSS) */}
          <div className="static lg:absolute lg:-left-36 xl:-left-48 lg:top-1/2 lg:-translate-y-1/2 z-20 mb-8 lg:mb-0">
            <div className="group relative select-none transition-all duration-500 hover:scale-110 active:scale-95 block w-max">
              
              {/* Effetto Bagliore Neon Posteriore */}
              <div className="absolute inset-0 bg-purple-600/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-125 pointer-events-none" />
              
              {/* Immagine attiva con animazione di rotazione all'hover */}
              <div className="relative transition-all duration-500 group-hover:rotate-[-4deg]">
                <img 
                  src="/images/joey.png" 
                  alt="999 Left Interactive Icon" 
                  className="w-24 sm:w-28 lg:w-36 h-auto object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                />
              </div>

            </div>
          </div>

          {/* Nuova Immagine interattiva tutta a DESTRA */}
          <div className="static lg:absolute lg:-right-36 xl:-right-48 lg:top-1/2 lg:-translate-y-1/2 z-20 mb-8 lg:mb-0">
            <div className="group relative select-none transition-all duration-500 hover:scale-110 active:scale-95 block w-max">
              
              {/* Effetto Bagliore Neon Posteriore */}
              <div className="absolute inset-0 bg-purple-600/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-125 pointer-events-none" />
              
              {/* Immagine attiva con animazione di rotazione all'hover (senso orario) */}
              <div className="relative transition-all duration-500 group-hover:rotate-[4deg]">
                <img 
                  src="/images/joey2.png" 
                  alt="999 Right Interactive Icon" 
                  className="w-24 sm:w-28 lg:w-36 h-auto object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                />
              </div>

            </div>
          </div>

          {/* Box con Immagine Fuoco (Prende tutto lo spazio centrale) */}
          <div 
            className="relative w-full group"
            style={{ animationDelay: awards[0].delay }}
          >
            {/* Cornice con bordo originale e backdrop blur */}
            <div className="relative w-full p-4 md:p-6 rounded-2xl border bg-zinc-900/80 border-zinc-800 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:scale-[1.01] flex items-center justify-center z-10"
                 style={{ 
                   boxShadow: '0 12px 32px rgba(0,0,0,0.6)'
                 }}>
              
              <img 
                src="/images/jw999.png" 
                alt="Concept Art Display"
                className="w-full h-auto object-contain rounded-xl select-none pointer-events-none"
                style={{
                  filter: 'contrast(1.02) saturate(1.1)',
                }}
              />
              
            </div>
            
            {/* Animazione Fluttuante */}
            <div className="float-gentle absolute inset-0 pointer-events-none z-0" />
          </div>

        </div>

        {/* Pulsante TikTok ULTRA-PULITO */}
        {/* MODIFICATO: Aggiunto 'py-6' come cuscinetto d'aria invisibile per contenere l'espansione del bottone */}
        <div className="flex justify-center w-full mt-10 py-6">
          <a
            href="https://www.tiktok.com/@_wrldplug_" 
            target="_blank"
            rel="noopener noreferrer"
            /* MODIFICATO: Sostituito 'transition-all' con 'transition-transform' per bloccare i ricalcoli dell'ombra in hover */
            className="group relative inline-flex items-center gap-5 px-12 py-5 bg-zinc-900 text-white font-black text-2xl rounded-2xl transition-transform duration-300 hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-10 select-none border-0 border-none outline-none ring-0 focus:outline-none focus:ring-0 focus:ring-transparent active:outline-none transform-gpu will-change-transform"
            style={{
              WebkitTapHighlightColor: 'transparent',
              outline: 'none',
              border: 'none'
            }}
          >
            {/* Sfondo Interattivo Lucido interno */}
            <div className="absolute inset-0 bg-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 rounded-2xl" />

            {/* Icona TikTok con sdoppiamento cromatico 3D (Cyan & Red Glitch) */}
            <div className="relative w-7 h-8 z-10 scale-110 flex items-center justify-center pointer-events-none">
              {/* Ombra Cyan sinistra */}
              <svg className="absolute top-[1px] left-[-2px] w-full h-full fill-[#00f2fe] mix-blend-screen opacity-90 group-hover:animate-pulse" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18 1.14 1.24 2.74 1.94 4.41 2.04v3.62c-1.67-.02-3.32-.54-4.68-1.51-.15-.1-.29-.22-.42-.33v6.52c-.04 2.87-1.39 5.61-3.71 7.21-2.45 1.74-5.74 2.15-8.55 1.07-2.9-1.07-5.09-3.79-5.54-6.87-.53-3.41 1.2-6.9 4.25-8.42 1.54-.78 3.28-1.04 4.99-.74V10.4c-.95-.29-2-.17-2.86.33-1.28.73-1.99 2.19-1.78 3.66.19 1.48 1.3 2.72 2.76 3.01 1.44.31 2.99-.4 3.59-1.73.29-.62.39-1.31.37-2V.02z"/>
              </svg>
              {/* Ombra Red destra */}
              <svg className="absolute top-[-1px] left-[2px] w-full h-full fill-[#fe0943] mix-blend-screen opacity-90 group-hover:animate-pulse" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18 1.14 1.24 2.74 1.94 4.41 2.04v3.62c-1.67-.02-3.32-.54-4.68-1.51-.15-.1-.29-.22-.42-.33v6.52c-.04 2.87-1.39 5.61-3.71 7.21-2.45 1.74-5.74 2.15-8.55 1.07-2.9-1.07-5.09-3.79-5.54-6.87-.53-3.41 1.2-6.9 4.25-8.42 1.54-.78 3.28-1.04 4.99-.74V10.4c-.95-.29-2-.17-2.86.33-1.28.73-1.99 2.19-1.78 3.66.19 1.48 1.3 2.72 2.76 3.01 1.44.31 2.99-.4 3.59-1.73.29-.62.39-1.31.37-2V.02z"/>
              </svg>
              {/* Icona Bianca Principale sopra */}
              <svg className="absolute w-full h-full fill-white transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18 1.14 1.24 2.74 1.94 4.41 2.04v3.62c-1.67-.02-3.32-.54-4.68-1.51-.15-.1-.29-.22-.42-.33v6.52c-.04 2.87-1.39 5.61-3.71 7.21-2.45 1.74-5.74 2.15-8.55 1.07-2.9-1.07-5.09-3.79-5.54-6.87-.53-3.41 1.2-6.9 4.25-8.42 1.54-.78 3.28-1.04 4.99-.74V10.4c-.95-.29-2-.17-2.86.33-1.28.73-1.99 2.19-1.78 3.66.19 1.48 1.3 2.72 2.76 3.01 1.44.31 2.99-.4 3.59-1.73.29-.62.39-1.31.37-2V.02z"/>
              </svg>
            </div>

            {/* Testo del Pulsante */}
            <span className="relative z-10 tracking-wide font-black uppercase text-white group-hover:text-zinc-200 transition-colors duration-200">
              Follow 
            </span>
          </a>
        </div>

      </div>
      
    </section>
  )
}