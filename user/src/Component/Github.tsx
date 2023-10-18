import React from 'react';
import { User } from '../constant/constant';



interface GithubProps {
  userData: User | null;
}

const Github: React.FC<GithubProps> = (props) => {
  return (
    <div>
      <h1>GitHub User Search</h1>
      
      {props.userData && (
        <div className="user-card">
          <img src={props.userData.avatar_url} alt="Profile" />
          <h2>{props.userData.name}</h2>
          <p>{props.userData.bio}</p>
          <div>
            <p>{props.userData.followers} Followers</p>
            <p>{props.userData.following} Following</p>
            <p>{props.userData.public_repos} Repositories</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Github;
