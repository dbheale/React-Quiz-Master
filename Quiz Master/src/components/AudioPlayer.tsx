import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAudio } from '../store/slices/audioPlayerSlice';
import { audioSelector } from '../store/selectors';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dispatch = useDispatch();
  const { src, isPlaying } = useSelector(audioSelector);

  useEffect(() => {
    if (audioRef.current && src) {
      if (isPlaying) {
        audioRef.current.src = src;
        audioRef.current.load();
        audioRef.current.play();
      }
    }
  }, [isPlaying, src]);

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
