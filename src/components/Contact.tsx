import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import emailjs from '@emailjs/browser' // <-- Importato pacchetto EmailJS

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: 'Please fill in all fields', variant: 'destructive' })
      return
    }
    setIsSubmitting(true)
    
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    console.log("Tentativo di invio con parametri:", templateParams)

    emailjs.send(
      'service_0zwf1yq',   
      'template_tjqz3gr',  
      templateParams,
      'jntYV1bD3XpX83TZM'    
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast({ 
        title: 'Suggestion received!', 
        description: "Thank you! We will review your idea for the next Gallery update." 
      })
      setFormData({ name: '', email: '', message: '' })
    })
    .catch((error) => {
      // Questo ci stamperà l'errore esatto inviato da EmailJS
      console.error('ERRORE DETTAGLIATO EMAILJS:', error)
      toast({ title: 'Failed to send idea. Try again!', variant: 'destructive' })
    })
    .finally(() => {
      setIsSubmitting(false)
    })
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-black">
      
      {/* BACKGROUND IMAGE GRID — Rimosso mix-blend-luminosity per avere i colori veri */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 opacity-80 pointer-events-none">
        <div 
          className="h-full w-full bg-cover bg-center" 
          style={{ backgroundImage: 'url("/images/jw 4.webp")' }} 
        />
        <div 
          className="hidden md:block h-full w-full bg-cover bg-center border-x border-white/10" 
          style={{ backgroundImage: 'url("/images/jw 5.jpg")' }} 
        />
        <div 
          className="hidden md:block h-full w-full bg-cover bg-center" 
          style={{ backgroundImage: 'url("/images/jw 6.webp")' }} 
        />
      </div>

      {/* Overlay sfumato per proteggere la lettura dei testi bianchi */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black z-0" />

      {/* CONTENUTO IN PRIMO PIANO */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
  
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-3 mb-6">
          {/* Questa scritta starà perfettamente SOPRA */}
            <span className="text-3xl sm:text-5xl font-bagel tracking-tighter text-white select-none block mb-1">
            999
            </span>
            <div className="inline-flex items-center gap-3">
            {/* Questa scritta starà perfettamente SOTTO */}
               <span className="text-lg font-semibold text-zinc-200">
               🖤 Fan Voice 🖤
               </span>
             </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-white drop-shadow-md">
            <span className="block mb-2">What Should We Add Next?</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-zinc-100 max-w-4xl mx-auto leading-relaxed drop-shadow">
            This space belongs to all of juice fans. Tell us your ideas, which unreleased eras, alternative concept arts, or fan projects you want to see featured in the Gallery next.
          </p>
        </div>

        {/* Form di Contatto */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-zinc-900/80 px-8 py-6 border-b border-zinc-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white mb-1">
                    Drop an Idea
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Drop your ideas below and the fanpage team will check them out
                  </p>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  <span className="text-sm text-zinc-400 font-medium">Box Open</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-zinc-300 mb-2">Name / Nickname</label>
                  <input
                    id="name"
                    type="text"
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="Your fan name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-zinc-300 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-300 mb-2">Your Idea / Request</label>
                <textarea
                  id="message"
                  rows={5}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                  placeholder='e.g., "It would be amazing to add a specific section for the Outsiders concept art!"...'
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-white text-black font-black text-lg hover:bg-zinc-200 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send to Fanbase'}
              </button>
            </form>
          </div>
        </div>

        {/* Cards in basso */}
        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full" />
              </div>
              <h4 className="font-black text-white mb-2">1. Share Your Vision</h4>
              <p className="text-zinc-400 text-sm">
                Suggest what is missing on the site or highlight awesome fan-art that deserves more recognition.
              </p>
            </div>
            
            <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-emerald-500 rounded-full" />
              </div>
              <h4 className="font-black text-white mb-2">2. Community Review</h4>
              <p className="text-zinc-400 text-sm">
                We read every entry to group the most requested content and source the best available designs.
              </p>
            </div>
            
            <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full" />
              </div>
              <h4 className="font-black text-white mb-2">3. Vault Updates</h4>
              <p className="text-zinc-400 text-sm">
                Chosen ideas are added to the layout gallery, giving full credits to the respective creators.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}