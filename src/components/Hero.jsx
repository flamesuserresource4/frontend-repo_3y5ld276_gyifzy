import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-24 overflow-hidden bg-white text-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-black to-[#00B8D4] opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-black to-[#00B8D4] opacity-10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-10">
        <div className="fade-in">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-black text-white">
            ✨ CREATECH
          </span>
          <h1 className="mt-6 font-black leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            Menos ruido. Más claridad.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-black/70 max-w-xl">
            El lugar donde emprendedores tech aprenden automatización y Notion
          </p>

          <form id="hero-form" className="mt-8 flex items-center gap-3" onSubmit={(e)=>{e.preventDefault(); const email=e.target.email.value; window.dispatchEvent(new CustomEvent('submit-email',{ detail:{ email, source:'hero' }})); e.target.reset();}}>
            <input name="email" type="email" required placeholder="Tu email" className="flex-1 px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#00B8D4] bg-white/70" />
            <button type="submit" className="px-5 py-3 rounded-xl text-white font-semibold cta-primary">
              Recibe tu VSL Personalizado
            </button>
          </form>

          <div className="mt-6 flex items-center gap-6 text-sm text-black/60">
            <div className="relative h-14 w-14 rounded-full">
              <div className="absolute inset-0 rounded-full p-[2px] bg-[conic-gradient(var(--tw-gradient-stops))] from-black via-[#00B8D4] to-black animate-[rotate_6s_linear_infinite]"></div>
              <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop" alt="Piru" className="relative z-10 h-full w-full rounded-full object-cover" style={{ animation: 'floating 6s ease-in-out infinite' }} />
            </div>
            <span className="px-3 py-1 rounded-full bg-black text-white text-xs">✨ CREATECH</span>
          </div>
        </div>

        <div className="relative h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden fade-in">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <a href="#sobre" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-black/60 animate-bounce">↓</a>
    </section>
  )
}
