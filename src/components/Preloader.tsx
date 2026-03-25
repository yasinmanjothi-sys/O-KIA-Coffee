"use client";

import { useEffect, useState, useRef } from 'react';

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const [fade, setFade] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // If we've already seen it this session, we could potentially skip,
    // but the requirement says "first visit to the URL".
    // For now we'll play it every mount if not cached.
    const hasSeenPreloader = sessionStorage.getItem('okia-preloader');
    if (hasSeenPreloader) {
      setComplete(true);
      return;
    }
  }, []);

  const handleVideoEnd = () => {
    setFade(true);
    // Smooth 1s fade-out, matching requirement "execute a smooth, 1-second CSS fade-out transition"
    setTimeout(() => {
      setComplete(true);
      sessionStorage.setItem('okia-preloader', 'true');
    }, 1000);
  };

  if (complete) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#6E0D31] transition-opacity duration-1000 ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        src="/Pre Loader Video.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
