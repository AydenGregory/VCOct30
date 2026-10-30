// Person A: build the Hero section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #hero so your CSS only affects your section.
section("hero", () => `
  <style>
    #hero .hero-wrap {
      position: relative;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 40px;
      align-items: center;
      padding: 56px 40px;
      border-radius: 20px;
      background:
        radial-gradient(circle at 85% 15%, color-mix(in srgb, ${SITE.color} 22%, transparent), transparent 55%),
        linear-gradient(160deg, #111c33, #0b1220);
      border: 1px solid #1f2d4a;
    }
    #hero .hero-eyebrow {
      display: inline-block;
      font-size: .8rem;
      font-weight: 600;
      letter-spacing: .08em;
      text-transform: uppercase;
      color: ${SITE.color};
      background: color-mix(in srgb, ${SITE.color} 12%, transparent);
      padding: 4px 12px;
      border-radius: 999px;
      margin-bottom: 18px;
    }
    #hero h1 {
      margin: 0 0 14px;
      font-size: clamp(2.4rem, 6vw, 3.6rem);
      line-height: 1.05;
      letter-spacing: -.02em;
    }
    #hero h1 span { color: ${SITE.color}; }
    #hero .hero-tagline {
      margin: 0 0 28px;
      font-size: 1.15rem;
      color: #b4c0d3;
      max-width: 34ch;
    }
    #hero .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    #hero .hero-btn {
      display: inline-block;
      padding: 14px 28px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 1.05rem;
      text-decoration: none;
      color: #0b1220;
      background: ${SITE.color};
      box-shadow: 0 8px 24px color-mix(in srgb, ${SITE.color} 35%, transparent);
      transition: transform .15s ease, box-shadow .15s ease;
    }
    #hero .hero-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 30px color-mix(in srgb, ${SITE.color} 50%, transparent); }
    #hero .hero-btn:focus-visible { outline: 3px solid #eef3fa; outline-offset: 3px; }
    #hero .hero-link { color: #b4c0d3; text-decoration: none; font-weight: 600; padding: 14px 8px; }
    #hero .hero-link:hover { color: #eef3fa; }

    #hero .hero-ladder {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column-reverse;
      gap: 10px;
    }
    #hero .hero-step {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 12px;
      background: #12203a;
      border: 1px solid #1f2d4a;
      font-size: .95rem;
      opacity: 0;
      animation: hero-rise .5s ease forwards;
    }
    #hero .hero-step:nth-child(1) { margin-right: 40%; animation-delay: .05s; }
    #hero .hero-step:nth-child(2) { margin-right: 30%; margin-left: 10%; animation-delay: .15s; }
    #hero .hero-step:nth-child(3) { margin-right: 20%; margin-left: 20%; animation-delay: .25s; }
    #hero .hero-step:nth-child(4) { margin-right: 10%; margin-left: 30%; animation-delay: .35s; }
    #hero .hero-step:nth-child(5) { margin-left: 40%; animation-delay: .45s; }
    #hero .hero-dot {
      flex: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: .75rem;
      font-weight: 800;
      border: 2px solid #3a4a66;
      color: #0b1220;
    }
    #hero .hero-step.done .hero-dot { background: ${SITE.color}; border-color: ${SITE.color}; }
    #hero .hero-step.done { color: #98a6bc; }
    #hero .hero-step.now { border-color: ${SITE.color}; }
    #hero .hero-step.now .hero-dot { border-color: ${SITE.color}; }
    #hero .hero-step.goal {
      font-weight: 700;
      background: color-mix(in srgb, ${SITE.color} 14%, #12203a);
      border-color: color-mix(in srgb, ${SITE.color} 45%, #1f2d4a);
    }
    #hero .hero-step.goal .hero-dot { border: none; font-size: 1rem; }
    #hero .hero-tag {
      margin-left: auto;
      font-size: .7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .06em;
      color: ${SITE.color};
    }
    #hero .hero-progress { margin-top: 18px; font-size: .85rem; color: #98a6bc; }
    #hero .hero-bar { height: 8px; border-radius: 999px; background: #1f2d4a; margin-top: 6px; overflow: hidden; }
    #hero .hero-bar i { display: block; height: 100%; width: 50%; background: ${SITE.color}; border-radius: inherit; }

    @keyframes hero-rise {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: none; }
    }
    @media (prefers-reduced-motion: reduce) {
      #hero .hero-step { animation: none; opacity: 1; }
      #hero .hero-btn { transition: none; }
    }
    @media (max-width: 720px) {
      #hero .hero-wrap { grid-template-columns: 1fr; padding: 36px 20px; gap: 32px; }
      #hero .hero-step:nth-child(n) { margin-left: 0; margin-right: 0; }
    }
  </style>

  <div class="hero-wrap">
    <div>
      <span class="hero-eyebrow">Big goals, small steps</span>
      <h1>${SITE.name}<span>.</span></h1>
      <p class="hero-tagline">${SITE.tagline}</p>
      <div class="hero-actions">
        <a class="hero-btn" href="goals.html">Start your first goal</a>
        <a class="hero-link" href="#features">See how it works →</a>
      </div>
    </div>

    <div aria-label="Example: a big goal broken into smaller steps">
      <ol class="hero-ladder">
        <li class="hero-step done"><span class="hero-dot">✓</span>Run 1 mile without stopping</li>
        <li class="hero-step done"><span class="hero-dot">✓</span>Finish a 5K</li>
        <li class="hero-step now"><span class="hero-dot"></span>Finish a 10K<span class="hero-tag">Up next</span></li>
        <li class="hero-step"><span class="hero-dot"></span>Run a half marathon</li>
        <li class="hero-step goal"><span class="hero-dot">🏁</span>Run a marathon</li>
      </ol>
      <div class="hero-progress">
        2 of 4 steps done
        <div class="hero-bar"><i></i></div>
      </div>
    </div>
  </div>
`);
