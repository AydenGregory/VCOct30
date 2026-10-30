// Person B: build the Features section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #features so your CSS only affects your section.
section("features", () => `
  <style>
    #features { padding: 40px 0 8px; text-align: center; }
    #features .feat-eyebrow { margin: 0; color: ${SITE.color}; font-size: .8rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
    #features h2 { margin: 6px 0 8px; font-size: clamp(1.6rem, 4vw, 2.2rem); line-height: 1.2; }
    #features .feat-intro { margin: 0 auto 32px; max-width: 540px; color: #98a6bc; }
    #features .feat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; text-align: left; }
    #features .feat-card { display: flex; flex-direction: column; background: #12203a; border: 1px solid #22314d; border-radius: 16px; padding: 24px 22px; transition: transform .2s, border-color .2s; }
    #features .feat-card:hover { transform: translateY(-4px); border-color: ${SITE.color}; }
    #features .feat-num { width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center; font-weight: 800; color: #0b1220; background: ${SITE.color}; margin-bottom: 14px; }
    #features h3 { margin: 0 0 6px; font-size: 1.15rem; }
    #features .feat-card > p { margin: 0 0 18px; color: #98a6bc; font-size: .95rem; }

    #features .feat-demo { margin-top: auto; background: #0b1220; border: 1px solid #1f2d4a; border-radius: 12px; padding: 14px; font-size: .85rem; }

    #features .feat-tree { list-style: none; margin: 0; padding: 0; }
    #features .feat-tree li { padding: 3px 0; color: #b4c0d3; }
    #features .feat-tree .feat-big { font-weight: 700; color: #eef3fa; }
    #features .feat-tree .feat-sub { padding-left: 16px; border-left: 2px solid color-mix(in srgb, ${SITE.color} 45%, #1f2d4a); margin-left: 6px; }

    #features .feat-row { display: flex; justify-content: space-between; color: #b4c0d3; margin-bottom: 4px; }
    #features .feat-row b { color: ${SITE.color}; }
    #features .feat-bar { height: 8px; border-radius: 999px; background: #1f2d4a; overflow: hidden; margin-bottom: 12px; }
    #features .feat-bar:last-child { margin-bottom: 0; }
    #features .feat-bar i { display: block; height: 100%; border-radius: inherit; background: ${SITE.color}; }

    #features .feat-week { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; text-align: center; color: #98a6bc; font-size: .75rem; }
    #features .feat-day { aspect-ratio: 1; border-radius: 8px; margin-top: 4px; background: #1f2d4a; }
    #features .feat-day.on { background: ${SITE.color}; }
    #features .feat-day.today { background: transparent; border: 2px dashed ${SITE.color}; }
    #features .feat-nudge { margin: 12px 0 0; color: #eef3fa; }

    @media (prefers-reduced-motion: reduce) {
      #features .feat-card { transition: none; }
      #features .feat-card:hover { transform: none; }
    }
  </style>

  <p class="feat-eyebrow">How it works</p>
  <h2>Big goals, one small step at a time</h2>
  <p class="feat-intro">${SITE.name} turns a goal that feels too big into steps you can actually finish this week.</p>

  <div class="feat-grid">
    <div class="feat-card">
      <div class="feat-num">1</div>
      <h3>Break it down</h3>
      <p>Write down the big goal, then split it into milestones and small tasks. Each one is something you can check off.</p>
      <div class="feat-demo">
        <ul class="feat-tree">
          <li class="feat-big">🏁 Run a marathon</li>
          <li class="feat-sub">Finish a 10K</li>
          <li class="feat-sub">Run a half marathon</li>
          <li class="feat-sub">Long run every Saturday</li>
        </ul>
      </div>
    </div>

    <div class="feat-card">
      <div class="feat-num">2</div>
      <h3>See your progress</h3>
      <p>Every small win moves the bar on the big goal, so you can see how far you've come instead of how far is left.</p>
      <div class="feat-demo">
        <div class="feat-row"><span>Run a marathon</span><b>50%</b></div>
        <div class="feat-bar"><i style="width: 50%"></i></div>
        <div class="feat-row"><span>Learn Spanish</span><b>30%</b></div>
        <div class="feat-bar"><i style="width: 30%"></i></div>
        <div class="feat-row"><span>Save $1,000</span><b>75%</b></div>
        <div class="feat-bar"><i style="width: 75%"></i></div>
      </div>
    </div>

    <div class="feat-card">
      <div class="feat-num">3</div>
      <h3>Stay on track</h3>
      <p>Gentle reminders and weekly streaks help you keep going, so a busy week doesn't stop the big goal.</p>
      <div class="feat-demo">
        <div class="feat-week">
          <div>M<div class="feat-day"></div></div>
          <div>T<div class="feat-day on"></div></div>
          <div>W<div class="feat-day on"></div></div>
          <div>T<div class="feat-day on"></div></div>
          <div>F<div class="feat-day on"></div></div>
          <div>S<div class="feat-day today"></div></div>
          <div>S<div class="feat-day"></div></div>
        </div>
        <p class="feat-nudge">🔔 Saturday long run is today. You're on a 4-day streak.</p>
      </div>
    </div>
  </div>
`);
