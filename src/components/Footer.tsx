'use client'

export function Footer() {
  const aiTools = [
    'Spotify', 
    'Apple Music / ITunes',
    'Juice Fanbase',
    'Genius',
    'TikTok',
    'Gemini',
    'Google Drive',
    'Audio Editor',
    'Remixing Softwares',
    'Photoshop',
    'Discord'
  ]

  return (
    <footer className="relative py-20 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4">
            <div>
              <div className="font-bagel text-background text-3xl tracking-wider mb-4">
                999 Gallery
              </div>
              <p className="text-background/70 leading-relaxed mb-6">
                This website is a dedicated archive for cataloging and preserving Juice WRLD's unreleased music, organized into era-accurate conceptual albums. Through custom fan-art and creative content, it allows the community to discover the artist's hidden musical history and integrate tracks into their local playback systems.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center space-x-6">
                {/* X (Twitter) */}
                <a
                  href="https://x.com/JuiceWorlddd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 gentle-animation cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#E5E7EB">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* TikTok con i Colori Originali del Logo Vero */}
                <a
                  href="https://www.tiktok.com/@_wrldplug_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 gentle-animation cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="url(#tiktok-gradient)">
                    <defs>
                      <linearGradient id="tiktok-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00f2fe" />
                        <stop offset="50%" stopColor="#4facfe" />
                        <stop offset="100%" stopColor="#fe0979" />
                      </linearGradient>
                    </defs>
                    <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.936-1.315-2.117-1.315-3.338h-3.357v14.826c0 1.543-1.252 2.795-2.795 2.795s-2.795-1.252-2.795-2.795 1.252-2.795 2.795-2.795c.293 0 .576.045.843.13V9.804a6.67 6.67 0 0 0-.843-.054c-3.683 0-6.674 2.99-6.674 6.674s2.99 6.674 6.674 6.674 6.674-2.99 6.674-6.674V9.696a9.577 9.577 0 0 0 5.588 1.786V7.627c-1.319 0-2.54-.529-3.42-1.394a4.902 4.902 0 0 1-1.294-2.671z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/juicewrld999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 gentle-animation cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#833AB4"/>
                        <stop offset="50%" stopColor="#E1306C"/>
                        <stop offset="100%" stopColor="#F56040"/>
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@JuiceWRLD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 gentle-animation cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Spotify */}
                <a
                  href="https://open.spotify.com/user/31oikbbhvrnzedjjrjlndodslxbm?si=79b465c8c34b4572"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 gentle-animation cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1ED760">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.307c-.215.352-.677.463-1.03.248-2.862-1.748-6.464-2.144-10.706-1.177-.403.092-.806-.162-.899-.564-.092-.403.162-.806.564-.899 4.604-1.052 8.567-.604 11.785 1.357.353.215.464.677.248 1.035zm1.467-3.26c-.27 1.439-.44 1.116-.713.94-3.284-2.02-8.293-2.607-12.176-1.428-.49.148-1.01-.132-1.158-.623-.148-.49.132-1.01.623-1.158 4.437-1.347 9.948-.7 13.684 1.597.43.265.57.82.302 1.25-.214.34-.393.163-.562.422zm.126-3.376C15.02 8.22 8.318 8 4.432 9.18c-.61.184-1.255-.168-1.44-.777-.183-.61.168-1.255.777-1.44 4.464-1.353 11.874-1.097 16.53 1.667.548.324.728 1.033.4 1.58-.323.547-1.032.728-1.58.4z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Tools We Use Section */}
          <div className="col-span-12 md:col-span-8">
            <div>
              <h4 className="font-black text-2xl text-background mb-4">TOOLS WE USE</h4>
              
              {/* AI Tools Description */}
              <p className="text-background/70 text-base mb-8 leading-relaxed">
                We create and share our visual concepts and album previews directly on TikTok to connect with the community. All the high-quality unreleased tracks are securely hosted on Google Drive, making it easy for fans to download the files. Once saved, supporters can easily import them into their personal Spotify or Apple Music libraries using the local files feature to listen anywhere.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {aiTools.map((tool, index) => (
                  <div
                    key={tool}
                    className="text-background/80 hover:text-background gentle-animation text-sm font-medium"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Email Aggiornata */}
        <div className="border-t border-background/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-background/70 mb-4 md:mb-0">
              © 2026 999 GALLERY. All rights reserved.
            </div>
            <div className="text-sm text-background/70">
              Contact Team: jwrldplug@gmail.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}