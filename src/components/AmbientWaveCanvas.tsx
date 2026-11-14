import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Pause, Play, Sparkles } from 'lucide-react';

interface AmbientWaveCanvasProps {
  className?: string;
  intensity?: number;
  interactive?: boolean;
  showControls?: boolean;
}

export const AmbientWaveCanvas: React.FC<AmbientWaveCanvasProps> = ({
  className = '',
  intensity = 1.0,
  interactive = true,
  showControls = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const isPlayingRef = useRef(true);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPlaying(false);
      isPlayingRef.current = false;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.025);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 18, 32);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create Holographic Wave Grid
    const gridWidth = 60;
    const gridDepth = 60;
    const gridSegmentsX = 48;
    const gridSegmentsZ = 48;

    const planeGeometry = new THREE.PlaneGeometry(
      gridWidth,
      gridDepth,
      gridSegmentsX,
      gridSegmentsZ
    );
    planeGeometry.rotateX(-Math.PI / 2);

    const count = planeGeometry.attributes.position.count;
    const originalPositions = new Float32Array(count * 3);
    const posAttribute = planeGeometry.attributes.position;
    for (let i = 0; i < count * 3; i++) {
      originalPositions[i] = posAttribute.array[i];
    }

    // Vertex Colors: Cyan to Magenta gradient across grid
    const colors = new Float32Array(count * 3);
    const colorCyan = new THREE.Color(0x00c2ff);
    const colorPurple = new THREE.Color(0x7c3aed);
    const colorMagenta = new THREE.Color(0xd946ef);

    for (let i = 0; i < count; i++) {
      const x = posAttribute.getX(i);
      const z = posAttribute.getZ(i);
      const t = (x / gridWidth + 0.5) * 0.5 + (z / gridDepth + 0.5) * 0.5;

      const vertexColor = new THREE.Color();
      if (t < 0.5) {
        vertexColor.lerpColors(colorCyan, colorPurple, t * 2);
      } else {
        vertexColor.lerpColors(colorPurple, colorMagenta, (t - 0.5) * 2);
      }

      colors[i * 3] = vertexColor.r;
      colors[i * 3 + 1] = vertexColor.g;
      colors[i * 3 + 2] = vertexColor.b;
    }

    planeGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Wireframe Mesh
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      vertexColors: true,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireframeMesh = new THREE.Mesh(planeGeometry, wireframeMaterial);
    scene.add(wireframeMesh);

    // Glowing Particle Nodes at vertices
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.NormalBlending,
    });
    const pointsMesh = new THREE.Points(planeGeometry, pointsMaterial);
    scene.add(pointsMesh);

    // Ambient Floating Data Nodes (Holographic Packets)
    const packetCount = 45;
    const packetGeo = new THREE.BufferGeometry();
    const packetPos = new Float32Array(packetCount * 3);
    const packetSpeeds = new Float32Array(packetCount);

    for (let i = 0; i < packetCount; i++) {
      packetPos[i * 3] = (Math.random() - 0.5) * 50;
      packetPos[i * 3 + 1] = Math.random() * 8 + 2;
      packetPos[i * 3 + 2] = (Math.random() - 0.5) * 50;
      packetSpeeds[i] = Math.random() * 0.05 + 0.02;
    }
    packetGeo.setAttribute('position', new THREE.BufferAttribute(packetPos, 3));

    const packetMat = new THREE.PointsMaterial({
      color: 0x00c2ff,
      size: 0.7,
      transparent: true,
      opacity: 0.75,
    });
    const packetPoints = new THREE.Points(packetGeo, packetMat);
    scene.add(packetPoints);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = normX * 0.6;
      mouse.targetY = normY * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Intersection Observer to stop rendering when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isPlayingRef.current || !isVisibleRef.current) return;

      const elapsedTime = clock.getElapsedTime() * 0.9;

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x = 0 + mouse.x * 6;
      camera.position.y = 18 + mouse.y * 4;
      camera.lookAt(0, 0, 0);

      // Undulating Wave Formula
      const positions = planeGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const x = originalPositions[i * 3];
        const z = originalPositions[i * 3 + 2];

        // Complex harmonic wave calculation
        const wave1 = Math.sin(x * 0.22 + elapsedTime * 1.4) * 1.5;
        const wave2 = Math.cos(z * 0.25 + elapsedTime * 1.2) * 1.5;
        const wave3 = Math.sin((x + z) * 0.15 + elapsedTime * 1.6) * 1.0;
        const wave4 = Math.sin(Math.sqrt(x * x + z * z) * 0.25 - elapsedTime * 1.8) * 0.8;

        const totalY = (wave1 + wave2 + wave3 + wave4) * intensity;
        positions[i * 3 + 1] = totalY;
      }
      planeGeometry.attributes.position.needsUpdate = true;

      // Animate floating packet points
      const pPos = packetGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < packetCount; i++) {
        pPos[i * 3 + 1] += Math.sin(elapsedTime * 2 + i) * 0.02;
        pPos[i * 3 + 2] += packetSpeeds[i];
        if (pPos[i * 3 + 2] > 25) {
          pPos[i * 3 + 2] = -25;
        }
      }
      packetGeo.attributes.position.needsUpdate = true;

      // Subtle rotation for holographic feel
      wireframeMesh.rotation.y = Math.sin(elapsedTime * 0.08) * 0.05;
      pointsMesh.rotation.y = wireframeMesh.rotation.y;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      planeGeometry.dispose();
      wireframeMaterial.dispose();
      pointsMaterial.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [intensity, interactive]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto" />

      {/* Floating 3D Control Pill (rendered when showControls is true) */}
      {showControls && (
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm text-xs font-medium text-slate-600 transition-all hover:bg-white hover:shadow">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPlaying ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-slate-500">
              {isPlaying ? '3D Wave Active (60fps)' : '3D Paused'}
            </span>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause 3D animation' : 'Resume 3D animation'}
            className="p-1 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title={isPlaying ? 'Pause 3D Wave' : 'Resume 3D Wave'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      )}

      {/* Radial soft background glow overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-50/20 to-slate-50/90 pointer-events-none" />
    </div>
  );
};

export default AmbientWaveCanvas;
