import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client";
import "../App.css";

function CharacterCard({ id, name, className, mainWeapon }) {
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {
    switch (className) {
      case "scout":
        setImgURL(
          "https://wiki.teamfortress.com/w/images/thumb/6/69/Scout.png/250px-Scout.png"
        );
        break;
      case "soldier":
        setImgURL(
          "https://wiki.teamfortress.com/w/images/thumb/7/7b/Soldier.png/250px-Soldier.png"
        );
        break;
      case "pyro":
        setImgURL(
          "https://wiki.teamfortress.com/w/images/thumb/c/c8/Pyro.png/250px-Pyro.png"
        );
        break;
      case "demoman":
        setImgURL(
          "https://wiki.teamfortress.com/w/images/thumb/f/fd/Demoman.png/250px-Demoman.png"
        );
        break;
      case "heavy":
        setImgURL(
          "https://wiki.teamfortress.com/w/images/thumb/0/08/Heavy.png/250px-Heavy.png"
        );
        break;
      case "engineer":
        setImgURL(
          "https://wiki.teamfortress.com/w/images/thumb/d/d8/Engineer.png/375px-Engineer.png"
        );
        break;
      case "medic":
        setImgURL(
          "https://wiki.teamfortress.com/w/images/thumb/2/26/Medic.png/250px-Medic.png"
        );
        break;
      case "sniper":
        setImgURL(
          "https://wiki.teamfortress.com/w/images/thumb/8/8f/Sniper.png/250px-Sniper.png"
        );
        break;
      case "spy":
        setImgURL(
          "https://wiki.teamfortress.com/w/images/thumb/3/36/Spy.png/250px-Spy.png"
        );
        break;
    }
  }, []);

  const deletePlayer = async (e) => {
    e.preventDefault();
    await supabase.from("Players").delete().eq("id", id);
    window.location = "/";
  };
  return (
    <Link to={`/players/${id}`}>
      <div className="card">
        <img src={imgURL} />
        <div className="charInfo">
          <u>Name:</u> {name}
          <br />
          <u>Class:</u>{" "}
          {className.charAt(0).toUpperCase() + className.slice(1).toLowerCase()}
          <br />
          <u>Main Weapon:</u> {mainWeapon}
          <br />
          <br />
          <button className="deleteCharButton" onClick={deletePlayer}>
            Delete Player
          </button>
          <br />
          <br />
          <Link to={`/updateplayer/${id}`}>
            <button className="updateCharButton">Update Player</button>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
