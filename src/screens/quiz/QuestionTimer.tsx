import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { audioPlayingSelector, gameLoadingSelector } from "../../store/selectors";

export type QuestionTimerArgs = {
  onExpiry: () => void;
  timeInMinutes: number;
};

const QuestionTimer: React.FC<QuestionTimerArgs> = ({
  onExpiry,
  timeInMinutes,
}) => {
  const [time, setTime] = useState(timeInMinutes * 60);
  const audioPlaying = useSelector(audioPlayingSelector);
  const isLoading = useSelector(gameLoadingSelector);
  const timerId = useRef<number | null>(null);

  useEffect(() => {
    if (!audioPlaying && !isLoading) {
      timerId.current = window.setInterval(() => {
        setTime((prevTime) => {
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerId.current !== null) {
        clearInterval(timerId.current);
      }
    };
  }, [audioPlaying, isLoading]);

  useEffect(() => {
    if (time <= 0) {
      if (timerId.current !== null) {
        clearInterval(timerId.current);
        timerId.current = null;
      }
      onExpiry();
    }
  }, [time, onExpiry]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <p>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
    </div>
  );
};

export default QuestionTimer;
