import { use, useState } from "react";
import SelectedPlayers from "./SelectedPlayers";
import SinglePlayer from "./SinglePlayer";

export default function Players({ playersPromise, setCoin, coin }) {
  // console.log(playersPromise);
  const playerData = use(playersPromise);
  // console.log(playerData);

  const [type, setType] = useState("available");
  const [markPlayer, setMarkPlayer] = useState([]);

  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold">
          {type === "available"
            ? "Available Players"
            : `Selected Players (${markPlayer.length}/${playerData.length})`}
        </span>
        <div className="flex items-center">
          <button
            className={`btn btn-neutral btn-outline rounded-none rounded-l-xl ${type === "available" ? "btn-active" : ""}`}
            onClick={() => setType("available")}
          >
            Available
          </button>
          <button
            className={`btn btn-neutral btn-outline rounded-none  rounded-r-xl ${type === "selected" ? "btn-active" : ""}`}
            onClick={() => setType("selected")}
          >
            Selected ({markPlayer.length})
          </button>
        </div>
      </div>

      {type === "available" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
          {playerData.map((player) => (
            <SinglePlayer
              key={player.id}
              player={player}
              coin={coin}
              setCoin={setCoin}
              markPlayer={markPlayer}
              setMarkPlayer={setMarkPlayer}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 ">
          {markPlayer.length > 0 ? (
            markPlayer.map((player) => (
              <ul className="list bg-base-100 rounded-box shadow-md">
                <SelectedPlayers
                  key={player.id}
                  player={player}
                  coin={coin}
                  setCoin={setCoin}
                  markPlayer={markPlayer}
                  setMarkPlayer={setMarkPlayer}
                />
              </ul>
            ))
          ) : (
            <p className="text-center text-2xl font-semibold opacity-70 border border-dashed border-2 border-gray-300 rounded-lg p-20">
              No players selected yet.
            </p>
          )}
        </div>
      )}
    </>
  );
}
