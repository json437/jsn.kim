import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    // Animate the waves with a smooth flowing motion
    const waves = document.querySelector('.waves-svg');
    if (!waves) return;
    
    let time = 0;
    
    function animateWaves() {
      time += 0.005;
      
      // Create a gentle horizontal movement
      const x = Math.sin(time) * 15;
      // Add a subtle vertical bobbing
      const y = Math.sin(time * 1.5) * 3;
      // Add a very subtle scale pulsing
      const scale = 1.02 + Math.sin(time * 0.8) * 0.01;
      
      waves.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
      
      requestAnimationFrame(animateWaves);
    }
    
    animateWaves();

    // Create clouds
    const cloudsContainer = document.querySelector('.clouds-container');
    if (cloudsContainer) {
      for (let i = 0; i < 15; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.top = `${Math.random() * 70 + 5}%`;
        
        // Scatter clouds across the screen initially
        if (i < 8) {
          // Initial clouds scattered across viewport
          cloud.style.left = `${Math.random() * 100}%`;
          cloud.style.animationDelay = `-${Math.random() * 50}s`; // Negative delay to start mid-animation
        } else {
          // Additional clouds starting from left
          cloud.style.left = `${-300 + Math.random() * 200}px`;
          cloud.style.animationDelay = `${(i - 8) * 5}s`;
        }
        
        cloud.style.animationDuration = `${60 + Math.random() * 40}s`;
        cloud.style.opacity = 0.25 + Math.random() * 0.25;
        cloudsContainer.appendChild(cloud);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Jason Kim</title>
        <link rel="stylesheet" href="/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css" />
      </Head>
      
      <div className="min-h-screen">
        {/* Light rays effect */}
        <div className="light-rays"></div>
        
        {/* Clouds container */}
        <div className="clouds-container"></div>
        
        <main className="content-wrapper max-w-screen-lg mx-auto px-6">
        <div className="space-y-12 md:space-y-16">
          {/* Header Section */}
          <header className="space-y-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-black">
              Jason Kim
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-black tracking-tight">
              building{' '}
              <a 
                href="https://pigeon.trade" 
                className="text-[#A3FF12] font-medium hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                pigeon.trade
              </a>{' '}
              — AI quant for infinite markets
            </p>
            <p className="text-xl md:text-2xl text-black opacity-80 font-light">
              YC alum
            </p>
          </header>

          {/* Investments Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
              Investments
            </h2>
            <p className="text-lg md:text-xl text-black opacity-90 leading-relaxed font-light">
              YieldBasis, Utopia (acq Coinbase), Bluelight (W21), Leah Labs (W19), Bree (S21), LayerUp (S22), and more
            </p>
          </section>

          {/* Find Me Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
              Find me
            </h2>
            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-black opacity-90 font-light">
                <span className="font-medium">Twitter:</span>{' '}
                <a 
                  href="https://twitter.com/jasonkimvc" 
                  className="text-black underline hover:opacity-70 transition-opacity italic font-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @jasonkimvc
                </a>
              </p>
              <p className="text-xl md:text-2xl text-black opacity-90 font-light">
                <span className="font-medium">LinkedIn:</span>{' '}
                <a 
                  href="https://linkedin.com/in/jasonkimbc"
                  className="text-black underline hover:opacity-70 transition-opacity italic font-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/jasonkimbc
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

        {/* Ocean Waves */}
        <div className="ocean-waves">
          <img src="/waves.svg" alt="Ocean Waves" className="waves-svg" />
        </div>
      </div>
    </>
  )
}