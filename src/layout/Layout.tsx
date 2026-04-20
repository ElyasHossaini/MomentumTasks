import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MobileCallBar } from '../components/MobileCallBar'
import { SeoHead } from '../components/SeoHead'
import './Layout.css'

export function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [pathname, hash])

  return (
    <div className="layout">
      <SeoHead />
      <Header />
      <main className="layout__main" id="main-content">
        <Outlet />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
