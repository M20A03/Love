import React from 'react';

const Hero = () => {
  return (
    <section className="hero section-transparent">
      <div className="hero-content floating-element">
        <div className="crescent"></div>
        <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem, 10vw, 3.5rem)', marginBottom: '10px', lineHeight: '1.2' }}>
          Assalamu Alaikum, <span className="love-font">My Dearest</span>
        </h1>
        <p className="arabic-text" style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', marginBottom: '20px' }}>
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', maxWidth: '800px', margin: '0 auto', padding: '0 20px', lineHeight: '1.6' }}>
          On this beautiful day that Allah (SWT) brought you into this world,
          I want to celebrate the light, the joy, and the immense blessing you have been in my life.
        </p>
      </div>
    </section>
  );
};

export default Hero;
