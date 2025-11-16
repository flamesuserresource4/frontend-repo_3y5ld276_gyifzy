import { Play, FileDown, Video, Mail } from 'lucide-react'

export default function HubValor() {
  const recursos = ['Plantilla Notion', 'Prompts IA', 'Automatizaciones']
  const videos = [1,2,3,4].map((i)=>`https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg`)
  const newsletters = ['Estrategias de claridad', 'Automatiza tu semana', 'Sistemas que escalan', 'Notion Pro Tips', 'No-Code Growth']

  return (
    <section id="hub" className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-8">Hub de Valor</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 fade-in">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Play size={18} className="text-[#00B8D4]"/> Empieza Aquí</h3>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
          <div className="glass-card p-6 fade-in">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><FileDown size={18} className="text-[#00B8D4]"/> Recursos Gratuitos</h3>
            <ul className="space-y-2">
              {recursos.map((r)=> (
                <li key={r} className="flex items-center justify-between bg-white/40 border border-black/10 px-4 py-3 rounded-xl">
                  <span>{r}</span>
                  <button className="text-sm underline hover:text-[#00B8D4]">Descargar</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6 fade-in">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Video size={18} className="text-[#00B8D4]"/> Últimos Videos</h3>
            <div className="grid grid-cols-2 gap-3">
              {videos.map((src, i)=> (
                <img key={i} src={src} alt="thumb" className="rounded-xl object-cover w-full h-28" loading="lazy" />
              ))}
            </div>
          </div>
          <div className="glass-card p-6 fade-in">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Mail size={18} className="text-[#00B8D4]"/> Newsletter Archive</h3>
            <ul className="space-y-2">
              {newsletters.map((n)=> (
                <li key={n} className="flex items-center justify-between bg-white/40 border border-black/10 px-4 py-3 rounded-xl">
                  <span>{n}</span>
                  <a href="#" className="text-sm underline hover:text-[#00B8D4]">Leer</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
