import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SobrePiru from './components/SobrePiru'
import HubValor from './components/HubValor'
import Comunidad from './components/Comunidad'
import Servicios from './components/Servicios'
import PruebaSocial from './components/PruebaSocial'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in
    const io = new IntersectionObserver((entries)=>{
      entries.forEach((e)=>{
        if(e.isIntersecting){ e.target.classList.add('visible') }
      })
    }, { threshold: 0.2 })
    document.querySelectorAll('.fade-in').forEach((el)=> io.observe(el))

    // Scroll progress bar
    const bar = document.createElement('div')
    bar.style.position = 'fixed'; bar.style.top = '0'; bar.style.left='0'; bar.style.height='3px'; bar.style.background='#00B8D4'; bar.style.zIndex='60'; bar.style.boxShadow='0 0 12px rgba(0,184,212,0.8)';
    document.body.appendChild(bar)
    const onScroll = () => {
      const h = document.documentElement
      const p = (h.scrollTop)/(h.scrollHeight - h.clientHeight)
      bar.style.width = `${p*100}%`
    }
    window.addEventListener('scroll', onScroll); onScroll()

    // Smooth anchor scroll
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if(a){
        const id = a.getAttribute('href').slice(1)
        const el = document.getElementById(id)
        if(el){ e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
      }
    }
    document.addEventListener('click', onClick)

    // Email submission handler → send to webhook + toast
    const submitHandler = async (ev) => {
      const { email, source } = ev.detail
      try {
        const url = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://example.com/webhook'
        await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email, source }) })
        showToast('¡Listo! Te contactaremos pronto 🚀')
      } catch (err) {
        showToast('No pudimos enviar tu email. Intenta de nuevo.', true)
      }
    }
    window.addEventListener('submit-email', submitHandler)

    // Toast element
    const toast = document.createElement('div')
    toast.style.position='fixed'; toast.style.bottom='24px'; toast.style.left='50%'; toast.style.transform='translateX(-50%)'; toast.style.padding='12px 16px'; toast.style.borderRadius='12px'; toast.style.backdropFilter='blur(10px)'; toast.style.background='rgba(255,255,255,0.6)'; toast.style.border='1px solid rgba(0,0,0,0.1)'; toast.style.boxShadow='0 10px 30px rgba(0,184,212,0.3)'; toast.style.zIndex='60'; toast.style.display='none';
    document.body.appendChild(toast)
    function showToast(msg, error=false){
      toast.textContent = msg
      toast.style.background = error ? 'rgba(255,0,0,0.1)' : 'rgba(255,255,255,0.7)'
      toast.style.display='block'
      setTimeout(()=> toast.style.display='none', 2500)
    }

    return () => {
      io.disconnect(); window.removeEventListener('scroll', onScroll); document.removeEventListener('click', onClick); window.removeEventListener('submit-email', submitHandler); document.body.removeChild(bar); document.body.removeChild(toast)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      <Header/>
      <Hero/>
      <SobrePiru/>
      <HubValor/>
      <Comunidad/>
      <Servicios/>
      <PruebaSocial/>
      <FAQ/>
      <CTA/>
      <footer className="py-10 text-center text-sm text-black/60">© {new Date().getFullYear()} CREATECH by Piru</footer>
    </div>
  )
}

export default App
