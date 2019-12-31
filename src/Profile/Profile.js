import React from 'react'
import './Profile.css'

// id: "001",
// name: "Fuzzy",
// imageUrl: "https://source.unsplash.com/mx0DEnfYxic/300x300",
// age: 5,
// description: "Lorem ipsum dolor sit amet",
// likes: 0,


class Profile extends React.Component {
  render() {
    return(
      <div className="profile">
        <img src="https://source.unsplash.com/mx0DEnfYxic/300x300" />
        <h1>Name</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          <strong>Likes: 1</strong>
        </p>
        <button className="likeButton">Like</button>
        <br/>
        <button className="deleteButton">Delete :(</button>
      </div>
    )
  }
}

export default Profile
