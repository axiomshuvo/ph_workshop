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

  const isSelected = markPlayer.some((selected) => selected.id === id);

  const handleSelectPlayer = () => {
    if (isSelected) {
      return;
    }

    // const restCoin = ;

    if (coin - price < 0) {
      toast.error(`You don't have enough coins to select ${PlayerName}. 😞`);
      return;
    }

    setMarkPlayer((prev) => [...prev, player]);
    setCoin((prev) => prev - price);
    toast.success(`${PlayerName} selected! 🎉`);
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
            className={`btn ${isSelected ? "btn-disabled btn-secondary" : "btn-accent"}`}
            type="button"
            onClick={handleSelectPlayer}
            disabled={isSelected}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
}
