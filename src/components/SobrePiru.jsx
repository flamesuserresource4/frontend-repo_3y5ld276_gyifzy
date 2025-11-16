import { CheckCircle2, Link as LinkIcon, Wrench } from 'lucide-react'

export default function SobrePiru() {
  const items = [
    { icon: <Wrench size={18} />, text: 'Automatizaciones con n8n' },
    { icon: <Wrench size={18} />, text: 'Sistemas en Notion para negocios' },
    { icon: <Wrench size={18} />, text: 'Apps No-Code y prototipos' },
    { icon: <Wrench size={18} />, text: 'Branding y roadmaps' },
  ]

  return (
    <section id="sobre" className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="glass-card p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center fade-in">
          <div>
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Piru" className="w-full h-64 object-cover rounded-2xl" loading="lazy" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-black">Sobre Piru</h2>
            <p className="mt-4 text-black/70">Mi historia en 30s: emprendedor tech obsesionado con la claridad, la automatización y construir sistemas simples que multiplican resultados.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {items.map((i, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm bg-white/40 border border-black/10 px-3 py-2 rounded-xl">
                  <CheckCircle2 className="text-[#00B8D4]" size={18} /> {i.text}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm">
              <a href="#" className="underline hover:text-[#00B8D4] flex items-center gap-1">
                <LinkIcon size={16} /> Twitter
              </a>
              <a href="#" className="underline hover:text-[#00B8D4] flex items-center gap-1">
                <LinkIcon size={16} /> YouTube
              </a>
              <a href="#" className="underline hover:text-[#00B8D4] flex items-center gap-1">
                <LinkIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
