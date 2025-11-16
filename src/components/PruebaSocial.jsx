import { useEffect, useRef, useState } from 'react'

function useCounter(target){
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  useEffect(()=>{
    const el = ref.current
    if(!el) return
    const io = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){
        const start = performance.now()
        const duration = 1200
        const from = 0
        const to = target
        const tick = (t)=>{
          const p = Math.min(1, (t - start)/duration)
          setValue(Math.floor(from + (to - from)*p))
          if(p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        io.disconnect()
      }
    }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [target])
  return { ref, value }
}

export default function PruebaSocial(){
  const a = useCounter(150)
  const b = useCounter(500)
  const c = useCounter(1000)

  const testimonios = [
    {name:'Ana', text:'Creé sistemas que me ahorran horas cada semana.'},
    {name:'Luis', text:'Automatizamos ventas y soporte. Clave.'},
    {name:'María', text:'Notion dejó de ser caos. Ahora es mi ventaja.'},
    {name:'Julián', text:'La claridad que necesitaba para mi marca.'},
  ]

  return (
    <section id="social" className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div ref={a.ref} className="glass-card p-8 text-center"><div className="text-4xl font-black">{a.value}+</div><div className="text-black/60 mt-2">Automatizaciones</div></div>
          <div ref={b.ref} className="glass-card p-8 text-center"><div className="text-4xl font-black">{b.value}+</div><div className="text-black/60 mt-2">Emprendedores</div></div>
          <div ref={c.ref} className="glass-card p-8 text-center"><div className="text-4xl font-black">{c.value}+</div><div className="text-black/60 mt-2">Horas ahorradas</div></div>
        </div>

        <div className="mt-10 overflow-x-auto [-webkit-overflow-scrolling:touch]">
          <div className="flex gap-4 w-max">
            {testimonios.map((t,i)=> (
              <div key={i} className="glass-card p-6 w-80">
                <div className="font-semibold">{t.name}</div>
                <p className="text-black/70 mt-2 text-sm">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
