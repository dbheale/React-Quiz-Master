import { useEffect, useState } from "react";
import { AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestionThunk, updateActiveQuestion } from "../../store/slices/gameSlice";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import { decode } from "html-entities";
import { audioPlayingSelector, gameSelector } from "../../store/selectors";
import { AnimatePresence, motion } from "framer-motion";

const QuestionRenderer = () => {
  const dispatch: AppDispatch = useDispatch();
  const game = useSelector(gameSelector);
  const audioPlaying = useSelector(audioPlayingSelector);
  const navigate = useNavigate();

  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {

    if (!audioPlaying
      && !game.loading
      && game.questions
      && game.activeQuestion
      && game.answers[game.activeQuestion.id]
    ) {
      const nextIndex = game.activeQuestion.id + 1;
      setIsAnswered(false);
      if (game.questions.length > nextIndex) {
        dispatch(
          updateActiveQuestion(game.questions[nextIndex])
        );
      } else {
        navigate(Routes.Results);
      }
    }
  }, [game, audioPlaying]);

  const onAnswerSelected = (value: string) => {
    if (isAnswered) return;
    setIsAnswered(true);
    dispatch(answerQuestionThunk(value));
  };

  if (game.loading) {
    return <div>Loading...</div>;
  }

  if (!game.activeQuestion) {
    return <div>No active question available.</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={game.activeQuestion.id}
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -150 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="question-wrap"
      >
        <p>
          {game.activeQuestion.id + 1}. {decode(game.activeQuestion.question)}
        </p>
        <p>
          {decode(game.activeQuestion.category)} (
          {game.activeQuestion.difficulty})
        </p>
        <div className="answer-wrap">
          {game.activeQuestion.options?.map((option, index) => (
            <button
              className={
                isAnswered
                  ? option === game.activeQuestion?.answer
                    ? "correct"
                    : "incorrect"
                  : undefined
              }
              key={option + index}
              onClick={() => onAnswerSelected(option)}
            >
              {decode(option)}
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionRenderer;
