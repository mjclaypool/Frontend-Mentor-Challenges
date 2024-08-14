import triangle from '../assets/bg-triangle.svg';
import rock from '../assets/icon-rock.svg';
import paper from '../assets/icon-paper.svg';
import scissors from '../assets/icon-scissors.svg';

export default function GameBoard() {
  return (
    <div className="relative w-[200px] mx-auto">
      <img src={triangle} />
      <div className="absolute w-[140px] h-[140px] -bottom-[70px] inset-x-0 mx-auto rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[hsl(349,_71%,_52%)] to-[hsl(349,_70%,_56%)]">
        <div className="absolute w-[110px] h-[110px] inset-0 m-auto rounded-full bg-stone-300 shadow-inside">
          <img src={rock} className="absolute inset-0 m-auto" />
        </div>
      </div>
      <div className="absolute w-[140px] h-[140px] -top-[70px] -left-[70px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[hsl(230,_89%,_62%)] to-[hsl(230,_89%,_65%)]">
        <div className="absolute w-[110px] h-[110px] inset-0 m-auto rounded-full bg-stone-300 shadow-inside">
          <img src={paper} className="absolute inset-0 m-auto" />
        </div>
      </div>
      <div className="absolute w-[140px] h-[140px] -top-[70px] -right-[70px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[hsl(39,_89%,_49%)] to-[hsl(40,_84%,_53%)]">
        <div className="absolute w-[110px] h-[110px] inset-0 m-auto rounded-full bg-stone-300 shadow-inside">
          <img src={scissors} className="absolute inset-0 m-auto" />
        </div>
      </div>
    </div>
  )
}