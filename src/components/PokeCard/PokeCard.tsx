import { formatPokeId } from "../../utils/helper";
import "./style.css";

export interface PokeCardProps {
  id: number;
  name: string;
  avatar: string;
  elements: any;
}

const PokeCard = ({ id, name, avatar, elements }: PokeCardProps) => {
  return (
    <div className="flex flex-col items-center p-2 w-full bg-slate-100 rounded-md cursor-pointer shadow-md poke-card">
      <div className="border rounded-sm bg-white w-full flex justify-center"><img className="object-cover" src={avatar} alt={`poke${id}-logo`} />
      </div>
      <div className="text-gray-400 w-full flex flex-col"><span className="text-sm">{formatPokeId(id)}</span><span className="text-black">{name}</span></div>
    </div>
  );
};

export default PokeCard;
