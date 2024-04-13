import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

function TeamGalleryPage() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const { data, error } = await supabase.from("Players").select("");

        if (error) {
          console.error("Error fetching players:", error.message);
        } else {
          setPlayers(data);
        }
      } catch (err) {
        console.error("Error during fetch:", err.message);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>
        <u>Welcome to Your Team Gallery!</u>
      </h1>
      <h2>See who's in your TF2 team!</h2>
      <Link to={`/addplayer`}>Add A New Team Member</Link>
      <ul>
        {players.map((player) => (
          <CharacterCard
            key={player.id}
            id={player.id}
            name={player.name}
            className={player.class}
            mainWeapon={player.main_weapon}
          />
        ))}
      </ul>
    </div>
  );
}

export default TeamGalleryPage;
