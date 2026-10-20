// ==========================================================================
// دار حكاية للعطور (HIKAYA Haute Parfumerie)
// 5. Golden Dust Particles Engine
// Floating antique gold particles & chiaroscuro shimmer
// ==========================================================================

(function initHikayaGoldParticles() {
  const canvas = document.getElementById('goldParticlesCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Dynamic particle count based on screen area
  const particleCount = Math.min(Math.floor((width * height) / 15000), 100);
  const particles = [];

  class HikayaParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.0 + 0.6; // Soft delicate flakes
      this.speedY = -(Math.random() * 0.40 + 0.12); // Upward float
      this.speedX = (Math.random() - 0.5) * 0.30; // Gentle drift
      this.alpha = Math.random() * 0.55 + 0.15;
      this.twinkleSpeed = Math.random() * 0.015 + 0.005;
      this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
      // Antique gold spectrum (hue ~38)
      this.hue = 37 + (Math.random() * 6 - 3);
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01) * 0.2;

      // Twinkle effect
      this.alpha += this.twinkleSpeed * this.twinkleDir;
      if (this.alpha >= 0.80) {
        this.twinkleDir = -1;
      } else if (this.alpha <= 0.12) {
        this.twinkleDir = 1;
      }

      // Reset when particle drifts off screen
      if (this.y < -20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

      // Antique Gold radial gradient (#B8945F -> #8C6D3F)
      const grad = ctx.createRadialGradient(
        this.x,
        this.y,
        0,
        this.x,
        this.y,
        this.size * 1.8
      );
      grad.addColorStop(0, `hsla(${this.hue}, 55%, 72%, ${this.alpha})`);
      grad.addColorStop(0.5, `hsla(${this.hue}, 48%, 54%, ${this.alpha * 0.7})`);
      grad.addColorStop(1, `hsla(${this.hue}, 50%, 35%, 0)`);

      ctx.fillStyle = grad;
      ctx.shadowColor = 'rgba(184, 148, 95, 0.45)';
      ctx.shadowBlur = this.size * 3;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new HikayaParticle());
  }

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(render);
  }

  render();
})();
