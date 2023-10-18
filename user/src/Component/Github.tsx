
import React, { useState, useEffect } from 'react';
import axios from 'axios'

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

const Github: React.FC = ({userData}) => {

  return (
    <div>
      <h1>GitHub User Search</h1>
      
      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt="Profile" />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <div>
            <p>{userData.followers} Followers</p>
            <p>{userData.following} Following</p>
            <p>{userData.public_repos} Repositories</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Github;
