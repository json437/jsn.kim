import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';

function PastItem({ name, role, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-baseline gap-2 group cursor-pointer"
      >
        <span className="font-medium">{name}</span>
        <span className="text-secondary">{role}</span>
        <span
          className="text-secondary text-xs ml-auto transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ▼
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          maxHeight: open ? height + 'px' : '0px',
          opacity: open ? 1 : 0,
        }}
      >
        <p className="text-secondary mt-2 pl-0">
          {children}
        </p>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Kim</title>
        <meta name="description" content="Product Builder and Founder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jason Kim" />
        <link rel="canonical" href="https://jsn.kim" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jsn.kim" />
        <meta property="og:title" content="Jason Kim" />
        <meta property="og:description" content="Product Builder and Founder" />
        <meta property="og:site_name" content="Jason Kim" />
        <meta property="og:image" content="https://jsn.kim/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jasonkimvc" />
        <meta name="twitter:title" content="Jason Kim" />
        <meta name="twitter:description" content="Product Builder and Founder" />
        <meta name="twitter:image" content="https://jsn.kim/og-image.jpg" />

        <meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)" />
      </Head>

      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-12 flex items-center gap-5">
          <img
            src="/pfp.jpeg"
            alt="Jason Kim"
            className="w-16 h-16 rounded-full object-cover shrink-0"
          />
          <div>
            <h1 className="text-2xl font-bold mb-2">Jason Kim</h1>
            <p className="text-secondary">
              Product Builder and Founder
            </p>
          </div>
        </header>

        <section className="mb-10">
          <p className="mb-3">
            Born in Korea, raised in Vancouver, based in New York and San Francisco.{' '}
            <a href="https://www.ycombinator.com/verify/nbjeqrz7dcsfxmf6" target="_blank" rel="noopener noreferrer">YC alum</a>.{' '}
            I build at the intersection of AI, cryptography, and markets, turning hard math into products people actually use.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">Now</h2>
          <p className="mb-2">
            <a href="https://bigwhalelabs.com" target="_blank" rel="noopener noreferrer">Big Whale Labs</a>, an applied cryptography and machine learning lab. Backed by Balaji Srinivasan (ex Coinbase CTO), Samsung, Slow Ventures, M13, Road, and more.
          </p>
          <p>
            Our current focus is{' '}
            <a href="https://pigeon.trade" target="_blank" rel="noopener noreferrer">pigeon.trade</a>, a proprietary AI runtime that translates natural language into executable financial trades across 15+ venues. $111M+ in volume, 38K+ users.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">Past</h2>
          <ul className="space-y-4">
            <PastItem name="Taloflow" role="Cofounder, YC W21">
              Started as LocoNoco, building <a href="https://www.slideshare.net/slideshow/introducing-valence-by-loconoco/97205554" target="_blank" rel="noopener noreferrer">Valence</a>, a business logic IDE for non-technical users. Pivoted to an AI agent for DevOps cloud infrastructure. Grew the company from 0 to YC to 100+ engineering teams and profitability. ~$3M raised.
            </PastItem>
            <PastItem name="Grow" role="Head of Product, Employee #10">
              Built back-office automation and ML for KYC and underwriting for major banks. Grew from 0 to millions in ARR. Acquired by ATB Financial.
            </PastItem>
            <PastItem name="Wiivv" role="Founding Team, Growth">
              Joined pre-funding and helped grow from 0 to $250K in initial sales. Custom orthotics using computer vision and industrial 3D printing. Turned 2D images of feet into real footwear delivered to your door. Backed by Formation 8, Evonik, and more.
            </PastItem>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">Writing</h2>
          <ul className="space-y-2">
            {[
              { year: '2025', title: 'Terminal That Builds Terminals', href: 'https://x.com/jasonkimvc/status/2013632264358207671' },
              { year: '2025', title: 'End of Average Software', href: 'https://x.com/jasonkimvc/status/2012604142800289860' },
              { year: '2025', title: 'Claude Code Brood War', href: 'https://x.com/jasonkimvc/status/2009047493154132085' },
              { year: '2025', title: 'Code Creation Is the Interface', href: 'https://x.com/jasonkimvc/status/2006907877152190606' },
              { year: '2025', title: 'Everything Is Korea', href: 'https://x.com/jasonkimvc/status/1997373961957691405' },
              { year: '2018', title: 'Tim: Your Cloud on Autopilot', href: 'https://medium.com/@JasonKimBC/tim-your-cloud-on-autopilot-107f75344f2a' },
            ].map((post) => (
              <li key={post.href} className="flex items-baseline gap-4">
                <span className="text-secondary text-sm tabular-nums w-10 shrink-0">{post.year}</span>
                <a href={post.href} target="_blank" rel="noopener noreferrer">{post.title}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">Investments</h2>
          <p className="text-secondary">
            Not actively angel investing, but supporting friends and smart builders with small checks. Invested in 5+ YC startups including Gru Space, Bree, and more.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">Links</h2>
          <div className="flex gap-5">
            <a href="https://twitter.com/jasonkimvc" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://github.com/json437" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/jasonkimbc" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
    </>
  );
}
