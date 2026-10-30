// Person C: build the Team section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #team so your CSS only affects your section.
section("team", () => `
  <style>
    #team { padding: 40px 0 8px; text-align: center; }
    #team .team-eyebrow { margin: 0; color: ${SITE.color}; font-size: .8rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
    #team h2 { margin: 6px 0 8px; font-size: clamp(1.6rem, 4vw, 2.2rem); line-height: 1.2; }
    #team .team-intro { margin: 0 auto 28px; max-width: 520px; color: #98a6bc; }
    #team .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; max-width: 640px; margin: 0 auto; }
    #team .team-card { background: #12203a; border: 1px solid #22314d; border-radius: 16px; padding: 28px 20px; transition: transform .2s, border-color .2s; }
    #team .team-card:hover { transform: translateY(-4px); border-color: ${SITE.color}; }
    #team .team-avatar { width: 72px; height: 72px; margin: 0 auto 14px; border-radius: 50%; display: grid; place-items: center; font-size: 1.5rem; font-weight: 700; color: #0b1220; background: ${SITE.color}; }
    #team .team-name { margin: 0; font-size: 1.15rem; }
    #team .team-role { margin: 2px 0 0; color: ${SITE.color}; font-size: .9rem; font-weight: 600; }
  </style>

  <p class="team-eyebrow">The team</p>
  <h2>Who's behind ${SITE.name}</h2>
  <p class="team-intro">We're two students who kept setting goals and losing track of them, so we built the app we wanted.</p>

  <div class="team-grid">
    <div class="team-card">
      <div class="team-avatar">SM</div>
      <h3 class="team-name">Sabrina Montgomery</h3>
      <p class="team-role">Co-founder</p>
    </div>
    <div class="team-card">
      <div class="team-avatar">AG</div>
      <h3 class="team-name">Ayden Gregory</h3>
      <p class="team-role">Co-founder</p>
    </div>
  </div>
`);
