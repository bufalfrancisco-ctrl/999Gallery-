'use client'

import { motion } from 'framer-motion'
import { Volume2, VolumeX, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

// 1. Definiamo le Props che la Hero riceve dal file principale App.tsx
interface HeroProps {
  onNavigateToUnreleased: () => void;
}

export function Hero({ onNavigateToUnreleased }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Ensure video is muted immediately on load
  useEffect(() => {
    if (videoRef.current) {
      console.log('Video element found, setting up...')
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
        playPromise
          .then(() => console.log('Video autoplay successful'))
          .catch(error => console.error('Video autoplay failed:', error))
      }
    }
  }, [])

  // Update video mute state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.volume = isMuted ? 0 : 0.7
    }
  }, [isMuted])

  // Handle body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileMenuOpen])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* MASSIVE VIDEO */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-110"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Full-Width Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div 
          className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${
            isScrolled 
              ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="font-bagel text-white text-xl tracking-wider">999 Gallery</span>
            </motion.div>

            {/* Navigation Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#portfolio" className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105">
                Work
              </a>
              <a href="#awards" className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105">
                Community
              </a>
              <a href="#about" className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105">
                About
              </a>
              <a href="#services" className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105">
                Songs Download
              </a>
              <a href="#team" className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105">
                Growth
              </a>
              <a href="#contact" className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105">
                Contact
              </a>
            </div>

            {/* Right Side - Video Controls + CTA + Mobile Menu */}
            <div className="flex items-center space-x-3 relative">
              <div className="relative">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="glass-effect p-3 rounded-full text-white hover:bg-white/20 gentle-animation cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                {isMuted && (
                  <div className="absolute -bottom-10 right-0 flex items-center text-white/80">
                    <span className="whitespace-nowrap font-medium text-sm mr-2">Sound On</span>
                    <span className="text-lg">↗</span>
                  </div>
                )}
              </div>
              
              {/* BOTTONE ROSSO DESKTOP MODIFICATO */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNavigateToUnreleased}
                className="hidden sm:block bg-red-600 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md hover:bg-red-700 gentle-animation ml-4 cursor-pointer"
              >
                Download Songs
              </motion.button>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer z-[120] relative"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black/90 backdrop-blur-xl border-l border-white/10 z-[90] mobile-menu-panel pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col px-6 pb-6 h-full">
            <div className="flex flex-col space-y-4 text-white">
              <a href="#portfolio" className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
              <a href="#awards" className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Community</a>
              <a href="#about" className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              
              {/* Menu Mobile: link indirizzato alla funzione */}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateToUnreleased();
                }}
                className="mobile-menu-link text-left px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg cursor-pointer bg-transparent border-none"
              >
                Songs Download
              </button>

              <a href="#team" className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Growth</a>
              <a href="#contact" className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>

            {/* BOTTONE ROSSO MOBILE MODIFICATO */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigateToUnreleased();
              }}
              className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 active:bg-red-800 gentle-animation mt-8 cursor-pointer"
            >
              Download Songs
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Big Studio Title - Lower Left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-6 sm:left-8 lg:left-12 z-40"
      >
        <div className="max-w-2xl">
          {/* Piccolo indicatore di posizione corrente con Fade Arancione */}
          <div className="flex items-center space-x-2 mb-3">
            {/* Ho allungato leggermente la barretta verticale per seguire l'altezza del testo */}
            <span className="h-4 w-0.5 rounded-full bg-amber-500" />
            <span className="text-lg font-black tracking-widest uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-600">
              HOME
            </span>
          </div>

          {/* Titolo principale */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-none text-white tracking-tight uppercase space-y-1">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              JUICE WRLD
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              UNRELEASED ALBUMS
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              PRODUCTION
            </span>
          </h1>
        </div>
      </motion.div>
    </div>
  )
}