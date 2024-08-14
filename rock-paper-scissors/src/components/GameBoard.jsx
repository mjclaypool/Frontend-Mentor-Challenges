import { useState, useContext } from 'react';
import GameContext from '../store/GameContext';
import Button from './Button';

import triangle from '../assets/bg-triangle.svg';

export default function GameBoard() {
  const [showResults, setShowResults] = useState(false);
  const [playerPick, setPlayerPick] = useState('');
  const gameCtx = useContext(GameContext);

  function handleClick(pick) {
    setPlayerPick(pick)
    setShowResults(true);
    gameCtx.checkForWin(pick);
  }

  return (
    <div className="relative mx-auto">
      {showResults ?
        <>
          <div className="flex gap-8 my-12">
            <div>
              <Button type={playerPick} />
              <h3 className="font-barlow font-bold text-md text-stone-100 my-6">YOU PICKED</h3>
            </div>
            <div>
              <Button type={gameCtx.housePick} />
              <h3 className="font-barlow font-bold text-md text-stone-100 my-6">THE HOUSE PICKED</h3>
            </div>
          </div>
          <h2 className="font-barlow font-bold text-5xl text-stone-100">YOU {gameCtx.result}</h2>
          <button
            className="font-barlow font-bold py-3 px-12 mt-6 bg-stone-100 rounded-md"
            onClick={() => setShowResults(false)}
          >
            PLAY AGAIN
          </button>
        </>
      :
        <div className="w-[200px]">
          <img src={triangle} />
          <div
            onClick={() => handleClick('rock')}
            className="absolute w-[140px] h-[140px] -bottom-[70px] inset-x-0 mx-auto"
          >
            <Button type="rock" />
          </div>
          <div
            onClick={() => handleClick('paper')}
            className="absolute w-[140px] h-[140px] -top-[70px] -left-[70px]"
          >
            <Button type="paper" />
          </div>
          <div
            onClick={() => handleClick('scissors')}
            className="absolute w-[140px] h-[140px] -top-[70px] -right-[70px]"
          >
            <Button type="scissors" />
          </div>
        </div>
      }
    </div>
  )
}