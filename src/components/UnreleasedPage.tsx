'use client'

import { motion } from 'framer-motion'
import { Volume2, VolumeX, Image as ImageIcon, ArrowRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { Footer } from './Footer'

interface UnreleasedPageProps {
  onBackToHome: () => void;
  onNavigateToConceptArt: () => void; // Nuova prop per la navigazione
}

export function UnreleasedPage({ onBackToHome, onNavigateToConceptArt }: UnreleasedPageProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const unreleasedAlbums = [
    { 
      id: 1, 
      title: "JUICED UP THE EP", 
      era: "Early SoundCloud Era (2015-2016)", 
      desc: "This marks the very beginning of Jarad Higgins' musical journey, originally released under his early pseudonym \"Juicethekidd\" on SoundCloud. Raw and unpolished tracks that showcase the early stages of his melodic trap style. Most songs were recorded using basic equipment or mobile phones, capturing his raw freestyle potential.", 
      coverUrl: "/images/juicedouptheep.jpg",
      link: "https://samply.app/p/AiB6A9aiEXEfebr42FFi?si=9pDLPpyKTrSSfZrNTOzr3xs1uVc2" 
    },
    { 
      id: 2, 
      title: "AFFLICTION", 
      era: "Pre-999 Era (2017)", 
      desc: "A crucial underground project released in early 2017, marking the formal transition to the moniker \"Juice WRLD.\" Heavy punk-rock, emo, and grunge influences begin to take root. The tracks heavily explore themes of emotional vulnerability, isolation, and dark introspective thoughts.", 
      coverUrl: "/images/affliction.png",
      link: "https://samply.app/p/JErx9fDXo5sgKMh6PS8Y?si=9pDLPpyKTrSSfZrNTOzr3xs1uVc2"
    },
    { 
      id: 3, 
      title: "HEARTBROKEN IN HOLLYWOOD 9 9 9", 
      era: "Underground Era (2017)", 
      desc: "Recorded during a transitional underground period in 2017 as the aesthetics and philosophy of the \"999\" collective were starting to take a definitive shape. The lyrics focus on the stark contrast between his rapid rise in the underground music scene and the lingering feelings of emotional emptiness or romantic disillusionment.", 
      coverUrl: "/images/niggy (1).png",
      link: "https://samply.app/p/UaYnVCXIQIXVWhfMyWkm?si=9pDLPpyKTrSSfZrNTOzr3xs1uVc2"
    },
    { 
      id: 4, 
      title: "JUICEWRLD999 (SESSIONS)", 
      era: "Breakthrough EP (2017)", 
      desc: "The definitive breakthrough EP published on SoundCloud in June 2017. Produced largely by Nick Mira and Sidepce, this body of work caught the attention of major record labels. Featuring the original version of \"Lucid Dreams,\" this project set the blueprint for modern emo-trap: melancholic samples, filtered acoustic guitars, heavy 808 rhythms, and highly infectious vocal hooks.", 
      coverUrl: "/images/juicewrld9999.png",
      link: "https://samply.app/p/gGUXYusUdWXC9ot1Gjjl?si=9pDLPpyKTrSSfZrNTOzr3xs1uVc2"
    },
    { 
      id: 5, 
      title: "BINGEDRINKINGMUSIC", 
      era: "Pre-Debut Era (2017)", 
      desc: "A specific thematic pocket of his 2017 underground era, focusing on destructive coping mechanisms and escaping reality before achieving global stardom. Lo-fi atmospheres, dark beats, and raw storytelling that dive into alienation, melancholy, and the internal struggle of dealing with emotional pain.", 
      coverUrl: "/images/bingedrinkingmusic.jpg",
      link: "https://samply.app/p/rcAoKFX0wx5boz2RLZQ7?si=9pDLPpyKTrSSfZrNTOzr3xs1uVc2"
    },
    { 
      id: 6, 
      title: "NOTHING'S DIFFERENT </3", 
      era: "Major Label Signing Era (2017)", 
      desc: "A compact three-track EP released in late 2017 that served as the final bridge leading to his major-label signing with Interscope Records. A consolidation of the emo-rap formula. The production is clean and intensely focused on blending explicit heartbreak lyrics with somber acoustic guitar arrangements.", 
      coverUrl: "/images/nothing different.jpg",
      link: "https://samply.app/p/y7Uq7JOJFlGG7GF4s5f3?si=9pDLPpyKTrSSfZrNTOzr3xs1uVc2"
    },
    { 
      id: 7, 
      title: "GOODBYE & GOOD RIDDANCE", 
      era: "Golden Era Debut (2018)", 
      desc: "The era surrounding his massive debut studio album in May 2018, which launched him into global superstardom. A cohesive concept album structured entirely around a toxic relationship and its aftermath. Sonically, it perfectly bridges mid-2000s pop-punk melodies with modern Atlanta trap beats.", 
      coverUrl: "/images/gbgr.jpg",
      link: "https://samply.app/p/TzRAGGEgKaeCsVqtbLCq?si=9pDLPpyKTrSSfZrNTOzr3xs1uVc2"
    },
    { 
      id: 8, 
      title: "WRLD ON DRUGS", 
      era: "Collaborative Project Era (2018)", 
      desc: "A collaborative studio album released in October 2018 alongside Future, who was one of Juice WRLD's biggest musical inspirations. A shift toward darker, more aggressive traditional trap sounds. The tracks balance high-energy production with deep streams of consciousness regarding the weight of fame and internal struggles.", 
      coverUrl: "/images/wrldondrugs.jpg",
      link: "https://samply.app/p/l2W7LCc5Cj3ej18K3WqA?si=nWaVharp09fuQGaKRh51fpjeywy2"
    },
    { 
      id: 9, 
      title: "DEATH RACE FOR LOVE", 
      era: "Creative Peak Era (2019)", 
      desc: "His sophomore studio album era (March 2019), characterized by immense studio productivity and incredibly fast recording sessions driven almost entirely by pure freestyle. Extreme versatility and genre-bending experimentation. The era ranges from hard-hitting rap and pop-punk to dancehall, synth-pop, and piano ballads, proving his unique ability to conquer any instrumental.", 
      coverUrl: "/images/drfl.png",
      link: "https://samply.app/p/qZNqxmaXkgRFU9b9TW3r?si=eT7owl7fxpakhj9GV3zxiJXN0CR2"
    },
    { 
      id: 10, 
      title: "OUTSIDERS", 
      era: "Final Conceptual Era (Late 2019)", 
      desc: "The conceptual project Jarad was meticulously working on in the late months of 2019, originally intended to be his third official studio album. A mature and evolved artistic direction featuring a highly narrative, complex structure aimed at exploring the psychological impact of sudden global fame.", 
      coverUrl: "/images/outsiders.jpg",
      link: "https://samply.app/p/Flp9CI4flxM01zKoTC8U?si=eT7owl7fxpakhj9GV3zxiJXN0CR2"
    },
    { 
      id: 11, 
      title: "POSTHUMOUS", 
      era: "Legacy Era (2020-Present)", 
      desc: "The ongoing era dedicated to managing the massive vault of unreleased material left behind, resulting in official posthumous albums like Legends Never Die and Fighting Demons. Retrospective collections celebrating his artistic legacy, balancing celebratory anthems with deeply emotional tracks that document his continuous battles with inner turmoil.", 
      coverUrl: "/images/niggy (2).png",
      link: "https://samply.app/p/YGDHxtfiPqL546ZgjIcB?si=nWaVharp09fuQGaKRh51fpjeywy2"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0
      videoRef.current.muted = true
      videoRef.current.defaultMuted = true
      
      videoRef.current.addEventListener('play', () => {
        if (videoRef.current) {
          videoRef.current.muted = isMuted
          videoRef.current.volume = isMuted ? 0 : 0.7
        }
      })
      
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => console.error('Vault video autoplay failed:', error))
      }
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.volume = isMuted ? 0 : 0.7
    }
  }, [isMuted])

  return (
    <main className="relative min-h-screen w-full overflow-y-auto bg-black text-white">
      
      {/* BACKGROUND VIDEO */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover scale-110"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/valutvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* HEADER DELLA NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 w-full z-[110] bg-black/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="w-full px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer" onClick={onBackToHome}>
              <span className="font-bagel text-white text-xl tracking-wider">999 Gallery</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <span className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105 cursor-default">Studio Audio</span>
              
              {/* Pulsante Concept Art Interattivo con evento onClick e cursore abilitato */}
              <span 
                onClick={onNavigateToConceptArt}
                className="text-white hover:text-amber-400 font-medium gentle-animation hover:scale-105 cursor-pointer transition-colors"
              >
                Concept Art
              </span>
              
              <span className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105 cursor-default">Tracklist</span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="glass-effect p-2.5 rounded-full text-white hover:bg-white/20 gentle-animation cursor-pointer border border-white/10"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button 
                onClick={onBackToHome}
                className="text-xs font-sans text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 px-4 py-2 rounded-md transition-all cursor-pointer"
              >
                BACK TO GALLERY
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* SEZIONE COPERTINA */}
      <div className="relative h-screen w-full z-40 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-6 sm:left-8 lg:left-12 max-w-2xl text-left pointer-events-auto"
        >
          <div className="flex items-center space-x-2 mb-3">
            <span className="h-4 w-0.5 rounded-full bg-amber-500" />
            <span className="text-lg font-black tracking-widest uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-600">
              VAULT
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-none text-white tracking-tight uppercase space-y-1">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">JUICE WRLD</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">UNRELEASED ALBUMS</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">PRODUCTION</span>
          </h1>
        </motion.div>
      </div>

      {/* NUOVO CORPO DELLA PAGINA CON IMMAGINE DI SFONDO DIRETTA */}
      <section 
        id="services" 
        className="relative py-24 bg-cover bg-center bg-no-repeat min-h-[85vh] flex items-center justify-center border-t border-white/5 z-10" 
        style={{
          backgroundImage: "url('/images/3tjw.jpg')",
          overflow: 'visible'
        }}
      >
        
        {/* Overlay scuro per profondità e leggibilità dei testi sopra l'immagine */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90 pointer-events-none" />

        <div className="container mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 relative z-10" style={{ overflow: 'visible' }}>
          
          {/* INTESTAZIONE INTEGRATA */}
          <div className="text-center mb-24">
            <div className="flex flex-col items-center gap-2 mb-6">
              <span className="text-3xl sm:text-5xl font-bagel tracking-tighter text-white select-none block">999</span>
              <span className="text-lg font-semibold text-zinc-200">🖤 Songs Download 🖤</span>
            </div>
            
            <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              Studio Audios Leak
            </h2>
            
            <p className="text-xl font-sans text-zinc-300 leading-relaxed max-w-6xl mx-auto">
              Juice WRLD's extensive studio leaks offer an unprecedented look into his creative evolution, spanning distinct musical eras from the raw heartbreak of *Goodbye & Good Riddance* to the dark, introspective depths of *Death Race for Love*. These unreleased tracks and raw studio sessions highlight his legendary freestyle ability, revealing how effortlessly he constructed complex melodies and vulnerable hooks in real time. Across thousands of leaked files, fans can trace his transition from a melodic SoundCloud pioneer into a global powerhouse, creating a massive, community-driven alternate discography.
            </p>
          </div>
          
          {/* SEZIONE 11 LINEE GRIGIE INTERATTIVE */}
          <div className="flex flex-col space-y-20 mt-16">
            {unreleasedAlbums.map((album) => (
              <div key={album.id} className="w-full flex flex-col">
                
                {/* 1. Linea Grigia Separatrice */}
                <div className="w-full h-[1px] bg-zinc-800/60 mb-10" />

                {/* 2. Contenuto avvolto da un tag Link <a> con Sfondo Diretto Dedicato */}
                <a 
                  href={album.link}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col sm:flex-row items-start gap-8 sm:gap-10 group cursor-pointer select-none bg-black/60 backdrop-blur-md border border-white/5 p-4 sm:p-6 rounded-2xl shadow-xl hover:bg-white/10 hover:border-zinc-500 transition-all duration-300"
                >
                  
                  {/* Quadrato Copertina Ingrandito */}
                  <div className="relative aspect-square w-32 sm:w-44 lg:w-52 flex-shrink-0 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl group-hover:border-zinc-400 transition-all duration-300">
                    {album.coverUrl ? (
                      <img 
                        src={album.coverUrl} 
                        alt={album.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <ImageIcon className="w-12 h-12 text-zinc-700 group-hover:text-amber-500 transition-colors" />
                    )}
                    
                    {/* Badge numerico */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 rounded text-[10px] font-mono text-zinc-400">
                      #{album.id.toString().padStart(2, '0')}
                    </div>
                  </div>

                  {/* Testi Ingranditi in Arial (font-sans) */}
                  <div className="flex flex-col justify-center pt-2 min-w-0 font-sans">
                    {/* Era in arancione */}
                    <span className="text-sm sm:text-base font-bold tracking-wider uppercase text-amber-500 mb-2">
                      {album.era}
                    </span>
                    
                    {/* Titolo Album */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase group-hover:text-amber-400 transition-colors leading-tight">
                      {album.title}
                    </h3>
                    
                    {/* Descrizione */}
                    <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mt-4 max-w-3xl group-hover:text-white transition-colors">
                      {album.desc}
                    </p>
                  </div>

                </a>
              </div>
            ))}
            
            {/* 3. BOTTONE DI NAVIGAZIONE VERSO LE CONCEPT ART (Aggiunto alla fine dell'elenco) */}
            <div className="w-full flex justify-center pt-10 pb-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={onNavigateToConceptArt}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 font-sans font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer text-white"
              >
                Explore Concept Art Gallery
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Riga di chiusura finale */}
            <div className="w-full h-[1px] bg-zinc-800/60 pt-2" />
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  )
}