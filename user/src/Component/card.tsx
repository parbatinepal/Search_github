import React, { useState } from "react";
import "./style.css";
import Github from "./Github";
import axios from "axios";

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

const Card = () => {
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<User | null>(null);

  const handleSearch = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);

      if (response.status === 200) {
        setUserData(response.data);
        setUsername(""); 
      } else {
        console.error("GitHub API request failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="Enter a GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </form>

      <Github userData={userData} />

      <p id="copyright">Created By PARBATI NEPAL</p>
    </div>
  );
};

export default Card;
