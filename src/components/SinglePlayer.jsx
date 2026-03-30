import { useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";
import { PiFlagDuotone } from "react-icons/pi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SinglePlayer({
  player,
  setCoin,
  coin,
  markPlayer,
  setMarkPlayer,
}) {
  const {
    id,
    PlayerName,
    PlayerCountry,
    playertype,
    rating,
    batstyle,
    bowlingstyle,
    price,
    image,
  } = player;
  // console.log(player);

  const [isSeleted, setIsSeleted] = useState(false);

  const handleSelectPlayer = () => {
    setIsSeleted(true);

    const restCoin = coin - price;
    if (restCoin >= 0) {
      setCoin(restCoin);
      toast.success(`${PlayerName} selected! 🎉`);
    } else {
      toast.error(`You don't have enough coins to select ${PlayerName}. 😞`);
      return;
    }

    setMarkPlayer([...markPlayer, player]);
  };

  return (
    <div
      key={id}
      className="card bg-base-100 shadow-sm border border-amber-500 mb-4 "
    >
      <figure>
        <img src={image} alt={PlayerName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser />
          {PlayerName}
        </h2>
        <div className="flex justify-between ">
          <span className="flex items-center gap-1">
            <PiFlagDuotone /> {PlayerCountry}
          </span>
          <span className="btn btn-sm btn-secondary">{playertype}</span>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between ">
          <h2 className="font-bold">Rating</h2>
          <span className="flex items-center gap-1">
            <FaStar /> {rating}
          </span>
        </div>

        <div className="flex justify-between  ">
          <span className="">{batstyle}</span>
          <span className="">{bowlingstyle}</span>
        </div>
        <div className="flex justify-between items-center text-xl">
          <span className="">Price : ${price}</span>
          <button
            className="btn btn-accent "
            type="button"
            onClick={() => handleSelectPlayer()}
            disabled={isSeleted}
          >
            {isSeleted ? "Selected" : " Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
}
