import { supabase } from "../client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../App.css";

function UpdatePlayerPage() {
  const [originalName, setOriginalName] = useState("");
  const [originalPlayerClass, setOriginalPlayerClass] = useState("");
  const [originalMainWeapon, setOriginalMainWeapon] = useState("");
  const [name, setName] = useState("");
  const [playerClass, setPlayerClass] = useState("");
  const [mainWeapon, setMainWeapon] = useState("");
  const { id } = useParams();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClassChange = (e) => {
    setPlayerClass(e.target.value);
  };

  const handleWeaponChange = (e) => {
    setMainWeapon(e.target.value);
  };

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const { data, error } = await supabase
          .from("Players")
          .select()
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching players:", error.message);
        } else {
          setOriginalName(data.name);
          setOriginalPlayerClass(data.class);
          setOriginalMainWeapon(data.main_weapon);
        }
      } catch (err) {
        console.error("Error during fetch:", err.message);
      }
    };

    fetchPlayer();
  }, [id]);

  const updatePlayer = async (e) => {
    e.preventDefault();
    if (name != "") {
      await supabase
        .from("Players")
        .update({
          name: name,
        })
        .eq("id", id);
    }
    if (playerClass != "") {
      await supabase
        .from("Players")
        .update({
          class: playerClass,
        })
        .eq("id", id);
    }
    if (mainWeapon != "") {
      await supabase
        .from("Players")
        .update({
          main_weapon: mainWeapon,
        })
        .eq("id", id);
    }
    alert("Character successfully updated!");
    window.location = "/";
  };

  return (
    <>
      <h1>Update Player</h1>
      <h2>
        Name: {originalName}
        <br />
        Class:{" "}
        {originalPlayerClass.charAt(0).toUpperCase() +
          originalPlayerClass.slice(1).toLowerCase()}
        <br />
        Main Weapon: {originalMainWeapon}
        <br />
      </h2>
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

        <input type="submit" value="Submit" onClick={updatePlayer} />
      </form>
      <br />
      <br />
      <Link to={"/"}>Go Back To Team Gallery</Link>
    </>
  );
}
export default UpdatePlayerPage;
