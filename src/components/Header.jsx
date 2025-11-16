import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { label: 'Sobre Piru', href: '#sobre' },
  { label: 'Hub de Valor', href: '#hub' },
  { label: 'Comunidad', href: '#comunidad' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Prueba Social', href: '#social' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/40 dark:bg-black/30 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-black to-[#00B8D4] grid place-items-center text-white shadow-md">
              <Sparkles size={16} />
            </div>
            <span className="font-black tracking-tight text-lg">CREATECH <span className="font-semibold">by Piru</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-black/70 dark:text-white/80 hover:text-black dark:hover:text-white transition">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="px-4 py-2 rounded-full text-white font-semibold cta-primary shadow-lg">Recibe tu VSL</a>
          </nav>

          <button className="md:hidden p-2 rounded-lg bg-white/10" onClick={() => setOpen(!open)} aria-label="Abrir menú">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full text-white font-semibold cta-primary text-center">Recibe tu VSL</a>
          </div>
        </div>
      )}
    </header>
  )
}
