import { supabase } from "../client";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

function PlayerPage() {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [mainWeapon, setMainWeapon] = useState("");
  const [imgURL, setImgURL] = useState("");
  const { id } = useParams();

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
  }, [className]);

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
          setName(data.name);
          setClassName(data.class);
          setMainWeapon(data.main_weapon);
        }
      } catch (err) {
        console.error("Error during fetch:", err.message);
      }
    };

    fetchPlayer();
  }, [id]);

  useEffect(() => {
    switch (className) {
      case "scout":
        setDescription(
          "A fast and agile attacker who excels at hit-and-run tactics and capturing objectives."
        );
        break;
      case "soldier":
        setDescription(
          "A versatile soldier armed with a rocket launcher, capable of dealing area damage and controlling space."
        );
        break;
      case "pyro":
        setDescription(
          "A close-range fighter specializing in area denial and ambushing enemies with flames and explosives."
        );
        break;
      case "demoman":
        setDescription(
          "A demolition expert armed with sticky bombs and grenades, skilled at area denial and breaking enemy defenses."
        );
        break;
      case "heavy":
        setDescription(
          "A heavily armored powerhouse wielding a minigun, capable of soaking up damage and dealing massive firepower."
        );
        break;
      case "engineer":
        setDescription(
          "A builder who constructs sentry guns, dispensers, and teleporters to aid teammates."
        );
        break;
      case "medic":
        setDescription(
          "A healer providing critical healing, buffs, and Ubercharges to protect and empower teammates."
        );
        break;
      case "sniper":
        setDescription(
          "A precision marksman specializing in long-range attacks, headshots, and controlling key areas of the map."
        );
        break;
      case "spy":
        setDescription(
          "A stealthy infiltrator and saboteur who can disguise, cloak, and backstab enemies, gathering intelligence and disrupting enemy operations."
        );
        break;
    }
  }, [className]);
  return (
    <>
      <img className="profileImage" src={imgURL}></img>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>
        Class:
        {className.charAt(0).toUpperCase() + className.slice(1).toLowerCase()}
      </h3>
      <h3>Main Weapon: {mainWeapon}</h3>
      <br />
      <Link to={"/"}>Go Back To Team Gallery</Link>
    </>
  );
}

export default PlayerPage;
