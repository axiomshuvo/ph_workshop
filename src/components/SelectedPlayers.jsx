import { RiDeleteBinFill } from "react-icons/ri";
import { toast } from "react-toastify";

export default function SelectedPlayers({
  markPlayer,
  setMarkPlayer,
  coin,
  setCoin,
}) {
  if (markPlayer.length === 0) {
    return (
      <div className="text-center text-gray-500 p-16">
        No players selected yet.
      </div>
    );
  }

  const handleDeletePlayer = (player) => {
    setMarkPlayer(markPlayer.filter((p) => p.id !== player.id));
    setCoin(coin + player.price);
    toast.info(
      `${player.PlayerName} removed from selection. Coins refunded! 💰`,
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 ">
        <ul className="list bg-base-100 rounded-box shadow-md">
          {markPlayer.map((player) => (
            <li key={player.id} className="list-row">
              <div>
                <img
                  className="size-10 rounded-box"
                  src={player.image}
                  alt={player.PlayerName}
                />
              </div>
              <div>
                <div>{player.PlayerName}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {player.playertype}
                </div>
              </div>

              <button
                className="btn btn-ghost text-red-500"
                onClick={() => handleDeletePlayer(player)}
              >
                <RiDeleteBinFill />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
