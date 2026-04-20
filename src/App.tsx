import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Careers } from './pages/Careers'
import { Contact } from './pages/Contact'
import { Privacy } from './pages/Privacy'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Careers />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="about" element={<Navigate to="/#about" replace />} />
          <Route path="faq" element={<Navigate to="/#faq" replace />} />
          <Route path="funding" element={<Navigate to="/services#cdhci" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
