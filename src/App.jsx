import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import './index.css'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}
