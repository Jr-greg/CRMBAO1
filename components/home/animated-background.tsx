"use client";

import { useEffect, useRef } from "react";

/**
 * 动态粒子连线背景
 * 基于开源项目改编，适用于科技感网站首屏背景
 * 源自：particles-bg / canvas-nest 等开源项目的实现思路
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 设置 Canvas 尺寸
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // 粒子配置
    const particleCount = 80; // 粒子数量
    const particles: Particle[] = [];
    const maxDistance = 150; // 连线最大距离

    // 初始化粒子
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    // 鼠标位置
    let mouse = { x: -1000, y: -1000 };

    // 动画循环
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 更新和绘制粒子
      particles.forEach((particle, i) => {
        // 更新位置
        particle.x += particle.vx;
        particle.y += particle.vy;

        // 边界检测
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // 绘制粒子
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(14, 165, 233, 0.8)"; // 主题蓝色
        ctx.fill();

        // 与其他粒子连线
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // 与鼠标连线
        const dxMouse = particle.x - mouse.x;
        const dyMouse = particle.y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceMouse < maxDistance * 1.5) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          const opacity = (1 - distanceMouse / (maxDistance * 1.5)) * 0.5;
          ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`; // 亮蓝色
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 鼠标移动事件
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // 鼠标离开事件
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // 窗口调整大小
    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // 清理
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}

