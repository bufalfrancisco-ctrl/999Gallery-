import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// Puliamo i valori da eventuali spazi o caratteri nascosti
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim()
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()

// Inizializzazione sicura del client
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function Team() {
  // 1. Legge i follower di partenza dal file .env.local come fallback iniziale
  const baseFollowers = Number(import.meta.env.VITE_TIKTOK_BASE_FOLLOWERS) || 1450
  const [followers, setFollowers] = useState(baseFollowers)

  // 2. Logica di calcolo del Goal Dinamico (+200 ogni volta che si superano i 2000)
  const baseGoal = 2000
  const increment = 200
  
  const currentGoal = followers < baseGoal 
    ? baseGoal 
    : baseGoal + Math.floor((followers - baseGoal) / increment + 1) * increment

  // Calcolo della percentuale esatta per la barra di avanzamento
  const previousGoal = currentGoal === baseGoal ? 0 : currentGoal - increment
  const progressPercent = Math.min(
    Math.max(((followers - previousGoal) / (currentGoal - previousGoal)) * 100, 0),
    100
  )

  // 3. COLLEGAMENTO INTERAMENTE LIVE E REALTIME CON SUPABASE (Senza filtri restrittivi)
  useEffect(() => {
    if (!supabaseUrl || !supabaseAnonKey || supabaseAnonKey.length < 50) {
      console.warn("Supabase non configurato correttamente nel file .env.local");
      return;
    }

    // Funzione unica per recuperare i follower aggiornati dal database
    const fetchFollowers = async () => {
      const { data, error } = await supabase
        .from('metrics')
        .select('tiktok_followers')

      if (!error && data && data.length > 0) {
        // Prende il valore dall'ultimo record disponibile nella tabella
        const lastRecord = data[data.length - 1]
        setFollowers(lastRecord.tiktok_followers)
      } else if (error) {
        console.error("Errore fetch Supabase:", error)
      }
    }

    // Primo caricamento della pagina
    fetchFollowers()

    // ASCOLTO REALE E TOTALMENTE GENERICO
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*', // Ascolta TUTTO: sia UPDATE, sia INSERT, sia DELETE
          schema: 'public',
          table: 'metrics',
        },
        (payload) => {
          console.log("🔥 CAMBIAMENTO DATABASE INTERCETTATO!", payload)
          // Ogni volta che succede qualcosa sulla tabella, rifà il fetch automatico dei dati
          fetchFollowers()
        }
      )
      .subscribe((status) => {
        console.log("Stato connessione Realtime Supabase:", status)
      })

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return (
    <section 
      id="team" 
      aria-label="Team section"
      className="relative py-24 bg-zinc-950 w-full min-h-[160vh] flex flex-col justify-start overflow-hidden text-white"
    >
      
      {/* Immagine di Background Personale */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/images/phoneloook.jpg" 
          alt="Background Concept"
          className="w-full h-full object-cover opacity-40 mix-blend-lightbox" 
        />
      </div>

      {/* GRADIENTE ULTRA-CLEAN: Transizione allungata verso il nero pieno in basso */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-transparent to-zinc-950 via-[percentage:40%] to-[percentage:98%] z-0 pointer-events-none" />
      
      {/* Film Grain Effect adattato allo sfondo scuro */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '3px 3px',
          animation: 'filmGrain 8s infinite'
        }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center w-full gap-20">
        
        {/* 1. Header superiore */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="text-3xl sm:text-5xl font-bagel tracking-tighter text-white select-none block">
              999
            </span>
            <span className="text-lg font-semibold text-zinc-400">
              🖤 Fanpage Growth 🖤
            </span>
          </div>
        </div>
          
        {/* 2. Contenitore del Titolo con Icona di Sfondo GLITCH REALE */}
        <div className="relative flex flex-col items-center justify-center mb-10 text-center select-none w-full">
          
          {/* LOGO TIKTOK GLITCHATO */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-25 scale-125 sm:scale-150 lg:scale-175 animate-pulse [animation-duration:4s]">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              
              {/* Livello Rosso/Magenta */}
              <svg className="absolute top-[5px] left-[5px] w-full h-full text-[#FE2C55] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.19 1.31.22 2.63.2 3.93.18v3.74c-1.14-.01-2.28-.2-3.37-.58-.72-.25-1.39-.63-1.99-1.12v7.1c-.02 1.41-.33 2.82-1.02 4.04-.6 1.05-1.48 1.93-2.54 2.51-1.27.71-2.73 1.03-4.18 1.01-1.41-.01-2.82-.36-4.04-1.05C3.33 19.34 2.45 18.45 1.88 17.4c-.71-1.27-1.03-2.73-1-4.18.01-1.41.36-2.82 1.05-4.04.6-1.05 1.48-1.93 2.54-2.51 1.34-.75 2.89-1.04 4.41-.95v3.83c-1.05-.05-2.12.22-2.99.82-.67.46-1.16 1.15-1.39 1.93-.32 1.04-.15 2.19.44 3.09.47.74 1.21 1.27 2.06 1.48.97.25 2.02.1 2.88-.41.74-.44 1.29-1.15 1.51-1.98.11-.42.15-.86.14-1.3V.02z"/>
              </svg>

              {/* Livello Ciano */}
              <svg className="absolute top-[-3px] left-[-5px] w-full h-full text-[#25F4EE] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.19 1.31.22 2.63.2 3.93.18v3.74c-1.14-.01-2.28-.2-3.37-.58-.72-.25-1.39-.63-1.99-1.12v7.1c-.02 1.41-.33 2.82-1.02 4.04-.6 1.05-1.48 1.93-2.54 2.51-1.27.71-2.73 1.03-4.18 1.01-1.41-.01-2.82-.36-4.04-1.05C3.33 19.34 2.45 18.45 1.88 17.4c-.71-1.27-1.03-2.73-1-4.18.01-1.41.36-2.82 1.05-4.04.6-1.05 1.48-1.93 2.54-2.51 1.34-.75 2.89-1.04 4.41-.95v3.83c-1.05-.05-2.12.22-2.99.82-.67.46-1.16 1.15-1.39 1.93-.32 1.04-.15 2.19.44 3.09.47.74 1.21 1.27 2.06 1.48.97.25 2.02.1 2.88-.41.74-.44 1.29-1.15 1.51-1.98.11-.42.15-.86.14-1.3V.02z"/>
              </svg>

              {/* Livello Corpo Centrale Nero */}
              <svg className="absolute top-0 left-0 w-full h-full text-black fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.19 1.31.22 2.63.2 3.93.18v3.74c-1.14-.01-2.28-.2-3.37-.58-.72-.25-1.39-.63-1.99-1.12v7.1c-.02 1.41-.33 2.82-1.02 4.04-.6 1.05-1.48 1.93-2.54 2.51-1.27.71-2.73 1.03-4.18 1.01-1.41-.01-2.82-.36-4.04-1.05C3.33 19.34 2.45 18.45 1.88 17.4c-.71-1.27-1.03-2.73-1-4.18.01-1.41.36-2.82 1.05-4.04.6-1.05 1.48-1.93 2.54-2.51 1.34-.75 2.89-1.04 4.41-.95v3.83c-1.05-.05-2.12.22-2.99.82-.67.46-1.16 1.15-1.39 1.93-.32 1.04-.15 2.19.44 3.09.47.74 1.21 1.27 2.06 1.48.97.25 2.02.1 2.88-.41.74-.44 1.29-1.15 1.51-1.98.11-.42.15-.86.14-1.3V.02z"/>
              </svg>

            </div>
          </div>

          {/* Testo del Titolo */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white relative z-10 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            <span className="block mb-2">Support The Growth </span>
            <span className="block text-white">TIKTOK</span>
          </h2>

        </div>

        {/* 3. BOX SUPERIORE: MISSION GOAL */}
        <div className="max-w-3xl mx-auto w-full mt-6 border border-zinc-800/50 rounded-[24px] bg-zinc-900/40 backdrop-blur-2xl px-10 py-5 sm:py-6 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.85)] relative overflow-hidden z-10 group">
          
          {/* Sfondo interno al box */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-20 mix-blend-luminosity rounded-[24px] overflow-hidden">
            <img 
              src="/images/bling.png" 
              alt="Box Texture"
              className="w-full h-full object-cover" 
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 200%, rgba(0,0,0,0) 110%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 110%)'
              }}
            />
          </div>

          {/* LIGHT GLARE EFFECT */}
          <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms] ease-in-out pointer-events-none z-10" />

          <div className="relative z-20 flex flex-col items-center justify-center text-center w-full select-none gap-1.5">
            
            {/* Scrittura Sopra il Numero */}
            <h3 className="text-xl sm:text-2xl font-black text-zinc-450 tracking-tight uppercase leading-tight">
              Can we reach
            </h3>
            
            {/* Numero Target Principale */}
            <span className="text-5xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] leading-none block">
              2000
            </span>
            
            {/* Label Sotto il Numero */}
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 font-arial block mt-0.5">
              Followers Main Target
            </span>
            
          </div>
        </div>
        
        {/* 4. BOX INFERIORE: CONTATORE LIVE PROGRESS */}
        <div className="max-w-3xl mx-auto w-full border border-zinc-800/50 rounded-[32px] bg-zinc-900/40 backdrop-blur-2xl p-10 sm:p-14 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9)] relative overflow-hidden z-10 group">
          
          {/* Sfondo interno al box */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-20 mix-blend-luminosity rounded-[32px] overflow-hidden">
            <img 
              src="/images/999wrld.png" 
              alt="Box Texture"
              className="w-full h-full object-cover" 
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 150%, rgba(0,0,0,0) 110%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 110%)'
              }}
            />
          </div>

          {/* EFFETTO LUCE RIFLETTENTE */}
          <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out pointer-events-none z-10" />
          
          {/* Sfumature soft ai lati dello sfondo */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-zinc-800/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-zinc-700/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-20 flex flex-col items-center w-full">
            
            {/* Badge superiore Clean */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-zinc-950/90 border border-zinc-800 shadow-inner mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
              <span className="text-[11px] font-black uppercase tracking-widest text-zinc-300 font-arial">
                Live Followers Tracker
              </span>
            </div>

            {/* Contatore Followers Gigante ed Elegante */}
            <div className="text-center mb-12">
              <span className="text-8xl sm:text-9xl font-black text-white tracking-tighter block bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                {followers.toLocaleString()}
              </span>
              <span className="text-sm font-black uppercase tracking-widest text-zinc-350 mt-3 block font-arial">
                Followers Count
              </span>
            </div>

            {/* Barra di Avanzamento Minimal Linea Elegante */}
            <div className="w-full max-w-xl mx-auto">
              
              {/* Etichette sopra la barra */}
              <div className="flex justify-between items-end text-sm mb-4 font-arial">
                <span className="text-zinc-400 font-black tracking-wider">FOLLOWERS PROGRESS</span>
                <span className="text-white font-black text-base tracking-tight bg-zinc-800 px-3 py-1 rounded-md border border-zinc-700 shadow-sm">
                  {progressPercent.toFixed(1)}%
                </span>
              </div>

              {/* Contenitore Barra */}
              <div className="w-full h-3 bg-zinc-950 rounded-full border border-zinc-850 overflow-hidden relative p-[2px]">
                <div 
                  className="h-full bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-400 rounded-full transition-all duration-1000 ease-out relative shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent h-[40%] rounded-full" />
                </div>
              </div>

              {/* Punti di riferimento sotto la barra */}
              <div className="flex justify-between text-xs font-mono text-zinc-300 mt-4 px-1">
                <div className="flex flex-col gap-0.5">
                  <span className="text-zinc-500 text-[10px] uppercase font-black tracking-wider">BASE</span>
                  <span className="font-black text-zinc-400">{previousGoal.toLocaleString()}</span>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-zinc-500 text-[10px] uppercase font-black tracking-wider">TARGET</span>
                  <span className="font-black text-white">{currentGoal.toLocaleString()}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}