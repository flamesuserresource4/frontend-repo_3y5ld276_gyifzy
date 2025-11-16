export default function CTA(){
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-black via-[#0b3b43] to-[#00B8D4] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-black" style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>Da el primer paso, pero no solo</h2>
        <p className="mt-3 text-white/80">Sumate y recibe recursos prácticos cada semana.</p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center" onSubmit={(e)=>{e.preventDefault(); const email=e.target.email.value; window.dispatchEvent(new CustomEvent('submit-email',{ detail:{ email, source:'cta' }})); e.target.reset();}}>
          <input name="email" type="email" required placeholder="Tu email" className="flex-1 min-w-[220px] px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-300"/>
          <button className="px-6 py-3 rounded-xl font-semibold cta-primary">Quiero claridad</button>
        </form>
        <div className="mt-4 text-xs text-white/70 flex flex-wrap gap-3 justify-center">
          <span>🔒 Sin spam</span>
          <span>✅ Valor</span>
          <span>📧 Cancela cuando quieras</span>
        </div>
      </div>
    </section>
  )
}
