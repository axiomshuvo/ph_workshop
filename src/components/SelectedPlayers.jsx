import { RiDeleteBinFill } from "react-icons/ri";

export default function SelectedPlayers({
  player,
  markPlayer,
  setMarkPlayer,
  coin,
  setCoin,
}) {
  console.log(player);
  const { id, PlayerName, playertype, image } = player;

  const handleDeletePlayer = (id) => {
    // Implement the logic to remove the player from the selected list
    console.log(`Remove player with id: ${id}`);
    const updatedPlayers = markPlayer.filter((p) => p.id !== id);
    setMarkPlayer(updatedPlayers);
    setCoin(coin + player.price); // Refund the coin when a player is removed
  };

  return (
    <>
      <li key={id} className="list-row">
        <div>
          <img className="size-10 rounded-box" src={image} />
        </div>
        <div>
          <div>{PlayerName}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {playertype}
          </div>
        </div>
        <button
          onClick={() => handleDeletePlayer(id)}
          className="btn btn-link text-red-500"
        >
          <RiDeleteBinFill />
        </button>
      </li>
    </>
  );
}
