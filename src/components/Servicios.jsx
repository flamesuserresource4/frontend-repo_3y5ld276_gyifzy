export default function Servicios(){
  const servicios = [
    {emoji:'🤖', title:'Automatización N8N'},
    {emoji:'📊', title:'Notion para Negocios'},
    {emoji:'🚀', title:'Apps No-Code'},
    {emoji:'🎯', title:'Branding & Roadmaps'},
  ]
  return (
    <section id="servicios" className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Servicios</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {servicios.map((s)=> (
            <div key={s.title} className="glass-card p-6">
              <span className="text-xs px-2 py-1 bg-black text-white rounded-full">PRÓXIMAMENTE</span>
              <div className="mt-3 text-2xl font-semibold">{s.emoji} {s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
