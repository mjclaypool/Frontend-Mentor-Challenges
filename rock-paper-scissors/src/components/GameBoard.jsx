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
          <div className="flex items-center gap-8 lg:gap-24 my-12">
            <div id="user-pick">
              <h3 className="hidden lg:block font-barlow font-bold text-md lg:text-lg text-stone-100 my-6">YOU PICKED</h3>
              <Button type={playerPick} />
              <h3 className="lg:hidden font-barlow font-bold text-md lg:text-lg text-stone-100 my-6">YOU PICKED</h3>
            </div>
            <div className="hidden lg:block">
              <h2 className="font-barlow font-bold text-5xl text-stone-100">YOU {gameCtx.result}</h2>
              <button
                className="font-barlow font-bold py-3 px-12 mt-6 bg-stone-100 rounded-md"
                onClick={() => setShowResults(false)}
              >
                PLAY AGAIN
              </button>
            </div>
            <div id="house-pick">
              <h3 className="hidden lg:block font-barlow font-bold text-md lg:text-lg text-stone-100 my-6">THE HOUSE PICKED</h3>
              <Button type={gameCtx.housePick} />
              <h3 className="lg:hidden font-barlow font-bold text-md lg:text-lg text-stone-100 my-6">THE HOUSE PICKED</h3>
            </div>
          </div>
          <div className="lg:hidden">
            <h2 className="font-barlow font-bold text-5xl text-stone-100">YOU {gameCtx.result}</h2>
            <button
              className="font-barlow font-bold py-3 px-12 mt-6 bg-stone-100 rounded-md"
              onClick={() => setShowResults(false)}
            >
              PLAY AGAIN
            </button>
          </div>
        </>
      :
        <div className="w-[200px] lg:w-[300px]">
          <img src={triangle} />
          <div
            onClick={() => handleClick('rock')}
            className="absolute w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] -bottom-[70px] lg:-bottom-[100px] inset-x-0 mx-auto"
          >
            <Button type="rock" />
          </div>
          <div
            onClick={() => handleClick('paper')}
            className="absolute w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] -top-[70px] -left-[70px] lg:-top-[100px] lg:-left-[100px]"
          >
            <Button type="paper" />
          </div>
          <div
            onClick={() => handleClick('scissors')}
            className="absolute w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] -top-[70px] -right-[70px] lg:-top-[100px] lg:-right-[100px]"
          >
            <Button type="scissors" />
          </div>
        </div>
      }
    </div>
  )
}