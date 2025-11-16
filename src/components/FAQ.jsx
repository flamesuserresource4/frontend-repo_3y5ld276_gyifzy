import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: '¿Qué es CREATECH?', a: 'Es un hub para emprendedores tech hispanohablantes enfocado en automatización, Notion y claridad ejecutable.' },
  { q: '¿Cuánto cuesta?', a: 'Mucho del contenido es gratuito. Los programas y productos se anunciarán con precios claros.' },
  { q: '¿Necesito saber programar?', a: 'No. Nos apoyamos en No-Code, IA y herramientas accesibles.' },
  { q: '¿En qué países está disponible?', a: 'Global. Todo el contenido está en español.' },
  { q: '¿Cómo me suscribo?', a: 'Deja tu email en los formularios y recibirás novedades y recursos.' },
  { q: '¿Puedo cancelar?', a: 'Sí, un clic en cualquier email.' },
]

export default function FAQ(){
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="py-24 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-6">Preguntas Frecuentes</h2>
        <div className="divide-y divide-black/10 rounded-2xl border border-black/10 overflow-hidden">
          {faqs.map((f, idx)=> {
            const isOpen = open === idx
            return (
              <div key={idx} className="bg-white/60">
                <button className="w-full flex items-center justify-between px-6 py-5 text-left" onClick={()=> setOpen(isOpen ? null : idx)}>
                  <span className="font-semibold">{f.q}</span>
                  {isOpen ? <Minus size={18}/> : <Plus size={18}/>}
                </button>
                <div className={`px-6 overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                  <p className="text-black/70 text-sm">{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
