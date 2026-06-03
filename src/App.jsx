import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>

      {/* ── Dot grid pattern ── */}
      <div className="dot-grid" aria-hidden="true" />

      {/* ── Ambient glow blobs ── */}
      <div aria-hidden="true" style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
      }}>
        {/* Primary purple glow — top center */}
        <div style={{
          position: 'absolute',
          top: '-15%', left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px', height: '700px',
          background: 'radial-gradient(ellipse at center, rgba(108,99,255,0.18) 0%, rgba(108,99,255,0.04) 45%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
        }} />
        {/* Violet accent — top right */}
        <div style={{
          position: 'absolute',
          top: '5%', right: '-10%',
          width: '600px', height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(167,139,250,0.1) 0%, transparent 65%)',
          borderRadius: '50%',
        }} />
        {/* Warm amber — bottom left */}
        <div style={{
          position: 'absolute',
          bottom: '10%', left: '-8%',
          width: '500px', height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.07) 0%, transparent 65%)',
          borderRadius: '50%',
        }} />
        {/* Deep purple — bottom right */}
        <div style={{
          position: 'absolute',
          bottom: '-5%', right: '5%',
          width: '500px', height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.09) 0%, transparent 65%)',
          borderRadius: '50%',
        }} />
      </div>

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;
