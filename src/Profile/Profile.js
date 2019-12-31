import React from 'react'
import './Profile.css'


class Profile extends React.Component {
  render() {
    return(
      <div className="profile">
        <img src={this.props.imageUrl} alt="profile pic" />
        <h1>{this.props.name}</h1>
        <p>
          {this.props.description}
        </p>
        <p>
          <strong>Likes: {this.props.likes}</strong>
        </p>
        <button className="deleteButton">Delete :(</button>
      </div>
    )
  }
}

export default Profile
