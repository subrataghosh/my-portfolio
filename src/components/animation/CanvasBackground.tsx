// components/CanvasBackground.tsx
"use client"; // Mark this file as a Client Component

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  angle: number;
}

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles: Particle[] = [];
  const numParticles = 150; // Number of particles
  const mouse = { x: 0, y: 0 }; // Mouse position

  const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height); // Clear the canvas

    // Draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Calculate distance to mouse
      const distX = mouse.x - p.x;
      const distY = mouse.y - p.y;
      const distance = Math.sqrt(distX * distX + distY * distY);

      // Move particle towards mouse, but add some fluid motion
      if (distance < 150) {
        const angle = Math.atan2(distY, distX);
        const force = (150 - distance) / 150; // Calculate the force of attraction
        p.x += Math.cos(angle) * p.speed * force; // Move towards mouse
        p.y += Math.sin(angle) * p.speed * force;
      } else {
        // Add fluid motion (slightly randomize movement)
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.angle += 0.1; // Change angle to create circular motion
      }

      // Draw particle with color gradient
      ctx.beginPath();
      const color = `rgba(0, 150, 255, ${Math.min(1, (150 - distance) / 150)})`; // Color based on distance to mouse
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize particles only on client-side
    const initParticles = () => {
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 3 + 3,
          speed: Math.random() * 1 + 0.5,
          angle: Math.random() * 2 * Math.PI, // Random angle for circular motion
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Update mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas(); // Initial resize
    initParticles(); // Initialize particles

    const animate = () => {
      draw(ctx, canvas.width, canvas.height);
      requestAnimationFrame(animate);
    };

    animate(); // Start the animation

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default CanvasBackground;