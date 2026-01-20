// components/BackgroundMusicPlayer.js
"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  MusicalNoteIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/24/solid";

// Extract video ID dari URL YouTube (tetap sama)
const getYouTubeID = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const YOUTUBE_URL =
  "https://www.youtube.com/watch?v=HL1JFUs8XA8&list=RDHL1JFUs8XA8&start_radio=1";
const VIDEO_ID = getYouTubeID(YOUTUBE_URL);

export default function BackgroundMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Pastikan kode berjalan di browser
    if (typeof window === "undefined" || !VIDEO_ID) return;

    // Tambahkan YT API ke window jika belum ada
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Inisialisasi Player
    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player(playerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          loop: 1,
          playlist: VIDEO_ID,
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
            event.target.setVolume(50);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!player) return;

    try {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        // Penting: playVideo harus dipanggil oleh interaksi pengguna untuk audio
        player.playVideo();
      }
    } catch (error) {
      console.error("YouTube player error:", error);
    }
  };

  return (
    // POSISI BARU: fixed top-4 right-4
    <div className="relative">
      <button
        onClick={handlePlayPause}
        // STYLE BARU: Lebih kecil, dark mode, ikon saja
        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-700 transition-colors disabled:opacity-50"
        disabled={!player}
        aria-label={
          isPlaying ? "Pause background music" : "Play background music"
        }
      >
        {isPlaying ? (
          <PauseIcon className="w-5 h-5" />
        ) : (
          <MusicalNoteIcon className="w-5 h-5" /> // Pakai ikon musik saat di-pause
        )}
      </button>

      <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden">
        <div ref={playerRef} />
      </div>
    </div>
  );
}
