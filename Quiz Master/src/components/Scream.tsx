import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { resetAudio } from '../store/slices/audioPlayerSlice';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dispatch = useDispatch();
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

  useEffect(() => {
    const handleEnded = () => {
      dispatch(resetAudio());
    };

    const audioElement = audioRef.current;
    
    if (audioElement) {
      audioElement.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', handleEnded);
      }
    };
  }, [dispatch]);

  return (
    <div>
      <audio ref={audioRef} />
    </div>
  );
};

export default AudioPlayer;
