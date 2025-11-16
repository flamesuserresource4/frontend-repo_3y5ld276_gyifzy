import { BadgeCheck, Users, Network } from 'lucide-react'

export default function Comunidad(){
  const pills = ['N8N','Notion Pro','Apps No-Code','Hábitos','Marca Personal','Networking']
  const beneficios = [
    {icon: <BadgeCheck className="text-[#00B8D4]" size={18}/>, title:'Mentoría grupal', desc:'Aprende con pares y avanza más rápido.'},
    {icon: <Users className="text-[#00B8D4]" size={18}/>, title:'Sesiones en vivo', desc:'Workshops prácticos cada mes.'},
    {icon: <Network className="text-[#00B8D4]" size={18}/>, title:'Networking', desc:'Conecta con emprendedores como tú.'},
  ]

  return (
    <section id="comunidad" className="py-24 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-6xl mx-auto px-4">
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-black text-white">🚀 PRÓXIMAMENTE</span>
        <h2 className="text-3xl md:text-4xl font-black mt-4">El lugar donde darás el siguiente paso</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {pills.map((p)=> (
            <span key={p} className="px-4 py-2 rounded-full border border-black/10 bg-white/60 backdrop-blur text-sm">{p}</span>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {beneficios.map((b)=> (
            <div key={b.title} className="glass-card p-6">
              <div className="flex items-center gap-2 font-semibold">{b.icon}{b.title}</div>
              <p className="mt-2 text-black/70 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

        <form className="mt-10 flex flex-col sm:flex-row gap-3" onSubmit={(e)=>{e.preventDefault(); const email=e.target.email.value; window.dispatchEvent(new CustomEvent('submit-email',{ detail:{ email, source:'comunidad' }})); e.target.reset();}}>
          <input type="email" name="email" required placeholder="Tu email" className="flex-1 px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#00B8D4] bg-white/70"/>
          <button className="px-5 py-3 rounded-xl text-white font-semibold cta-primary">Únete a lista de espera</button>
        </form>
      </div>
    </section>
  )
}
