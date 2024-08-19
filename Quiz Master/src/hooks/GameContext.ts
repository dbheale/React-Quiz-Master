import { useContext } from "react";
import { GameContext } from "../GameContextProvider";

export const useGameContext = () => {
    return useContext(GameContext);
}