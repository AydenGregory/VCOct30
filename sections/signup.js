// Person D: build the Sign up section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #signup so your CSS only affects your section.
section("signup", () => `
  <style>
    #signup .signup-box { background: #12203a; border: 1px solid ${SITE.color}; border-radius: 20px; padding: 40px 24px; text-align: center; }
    #signup h2 { margin: 0 0 8px; font-size: clamp(1.6rem, 4vw, 2.2rem); line-height: 1.2; }
    #signup .signup-tagline { margin: 0 auto 6px; max-width: 520px; color: ${SITE.color}; font-weight: 600; }
    #signup .signup-pitch { margin: 0 auto 24px; max-width: 520px; color: #98a6bc; }
    #signup form { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 480px; margin: 0 auto; }
    #signup input { flex: 1 1 240px; min-width: 0; padding: 14px 16px; font: inherit; color: #eef3fa; background: #0b1220; border: 1px solid #3a4a66; border-radius: 12px; }
    #signup input::placeholder { color: #6b7a93; }
    #signup input:focus { outline: none; border-color: ${SITE.color}; box-shadow: 0 0 0 3px color-mix(in srgb, ${SITE.color} 30%, transparent); }
    #signup button { flex: 0 0 auto; padding: 14px 24px; font: inherit; font-weight: 700; color: #0b1220; background: ${SITE.color}; border: 0; border-radius: 12px; cursor: pointer; transition: transform .15s, filter .15s; }
    #signup button:hover { transform: translateY(-2px); filter: brightness(1.1); }
    #signup .signup-note { margin: 14px 0 0; color: #6b7a93; font-size: .82rem; }
    #signup .signup-thanks { display: none; margin: 0; font-size: 1.1rem; color: ${SITE.color}; font-weight: 600; }
  </style>

  <div class="signup-box">
    <h2>Start reaching your goals with ${SITE.name}</h2>
    <p class="signup-tagline">${SITE.tagline}</p>
    <p class="signup-pitch">Set a goal, break it into small steps, and watch your progress add up. Join the waitlist to get early access.</p>

    <form onsubmit="event.preventDefault(); this.style.display = 'none'; this.parentNode.querySelector('.signup-thanks').style.display = 'block';">
      <input type="email" required placeholder="you@example.com" aria-label="Email address">
      <button type="submit">Join the waitlist</button>
    </form>
    <p class="signup-thanks">You're on the list! We'll be in touch soon.</p>
    <p class="signup-note">This is a demo form. Nothing is sent or saved.</p>
  </div>
`);
