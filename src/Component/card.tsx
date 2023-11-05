import  { useState } from "react";
import "./style.css";
import Github from "./Github";
import axios from "axios";
import { User } from "../constant/constant";



const Card = () => {
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<User | null>(null);

  const handleSearch = async () => {

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
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSearch()
      }}>
        <input
          type="text"
          placeholder="Enter a GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <Github userData={userData} />

      <p id="copyright">Created By PARBATI NEPAL</p>
    </div>
  );
};

export default Card;
