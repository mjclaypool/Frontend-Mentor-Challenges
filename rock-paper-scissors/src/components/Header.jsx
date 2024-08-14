import { useContext } from "react"
import GameContext from "../store/GameContext"

export default function Header() {
  const gameCtx = useContext(GameContext);

  return (
    <div className="flex items-center justify-between border-2 border-header-outline rounded-md p-4">
      <div className="flex flex-col items-start">
        <h1 className="font-barlow font-bold text-2xl text-stone-100 leading-5">Rock</h1>
        <h1 className="font-barlow font-bold text-2xl text-stone-100 leading-5">Paper</h1>
        <h1 className="font-barlow font-bold text-2xl text-stone-100 leading-5">Scissors</h1>
      </div>
      <div className="flex flex-col justify-center px-6 py-2 bg-stone-100 rounded-md">
        <h2 className="font-barlow font-semibold text-xs text-score-text tracking-wider">SCORE</h2>
        <h3 className="font-barlow font-bold text-4xl text-dark-txt">{gameCtx.score}</h3>
      </div>
    </div>
  )
}