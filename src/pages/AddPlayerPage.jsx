import { supabase } from "../client";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function AddPlayerPage() {
  const [name, setName] = useState("");
  const [playerClass, setPlayerClass] = useState("");
  const [mainWeapon, setMainWeapon] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClassChange = (e) => {
    setPlayerClass(e.target.value);
  };

  const handleWeaponChange = (e) => {
    setMainWeapon(e.target.value);
  };

  const createChar = async (e) => {
    if (name == "") {
      alert("Please enter a name!");
      return;
    } else if (playerClass == "") {
      alert("Please select a class!");
      return;
    } else if (mainWeapon == "") {
      alert("Please indicate a main weapon!");
      return;
    } else {
      e.preventDefault();

      await supabase
        .from("Players")
        .insert({
          name: name,
          class: playerClass,
          main_weapon: mainWeapon,
        })
        .select();

      alert("Character successfully added to team!");
      window.location = "/";
    }
  };
  return (
    <>
      <h1>Add a player to your team!</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <br />

        <label>Class:</label>
        <br />
        <input
          type="radio"
          id="scout"
          name="class"
          value="scout"
          onChange={handleClassChange}
        />
        <label htmlFor="scout">Scout</label>
        <br />
        <input
          type="radio"
          id="soldier"
          name="class"
          value="soldier"
          onChange={handleClassChange}
        />
        <label htmlFor="soldier">Soldier</label>
        <br />
        <input
          type="radio"
          id="pyro"
          name="class"
          value="pyro"
          onChange={handleClassChange}
        />
        <label htmlFor="pyro">Pyro</label>
        <br />
        <input
          type="radio"
          id="demoman"
          name="class"
          value="demoman"
          onChange={handleClassChange}
        />
        <label htmlFor="demoman">Demoman</label>
        <br />
        <input
          type="radio"
          id="heavy"
          name="class"
          value="heavy"
          onChange={handleClassChange}
        />
        <label htmlFor="heavy">Heavy</label>
        <br />
        <input
          type="radio"
          id="engineer"
          name="class"
          value="engineer"
          onChange={handleClassChange}
        />
        <label htmlFor="engineer">Engineer</label>
        <br />
        <input
          type="radio"
          id="medic"
          name="class"
          value="medic"
          onChange={handleClassChange}
        />
        <label htmlFor="medic">Medic</label>
        <br />
        <input
          type="radio"
          id="sniper"
          name="class"
          value="sniper"
          onChange={handleClassChange}
        />
        <label htmlFor="sniper">Sniper</label>
        <br />
        <input
          type="radio"
          id="spy"
          name="class"
          value="spy"
          onChange={handleClassChange}
        />
        <label htmlFor="spy">Spy</label>
        <br />
        <br />

        <label htmlFor="main_weapon">Main Weapon:</label>
        <input
          type="text"
          id="main_weapon"
          name="main_weapon"
          value={mainWeapon}
          onChange={handleWeaponChange}
        />
        <br />
        <br />

        <input type="submit" value="Submit" onClick={createChar} />
      </form>
      <br />
      <br />
      <Link to={"/"}>Go Back To Team Gallery</Link>
    </>
  );
}

export default AddPlayerPage;
