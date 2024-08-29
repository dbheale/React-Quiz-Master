import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { src, isPlaying } = useSelector((state: RootState) => state.audioPlayer);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current && src) {
      audioRef.current.src = src;
      audioRef.current.load();
    }
  }, [src]);

  return (
    <div>
      <audio ref={audioRef} />
    </div>
  );
};

export default AudioPlayer;
