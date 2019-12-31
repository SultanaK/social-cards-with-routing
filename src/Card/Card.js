import React from 'react'
import './Card.css';

function Card(props) {

    return (
        <section className="card">
            <img src={props.imageUrl} alt="profile pic" />
            <div className="card-content">
                <p>
                    My name: {props.name}
                </p>
                <p>
                    My age: {props.age}
                </p>
                <button onClick={() => props.handleClick(props.id)} style={{background: "white", border: "1px solid black"}}>LIKE!!!</button>
                <br />
                <button onClick={() => props.handleDelete(props.id)} style={{background: "white", border: "1px solid red"}}>DELETE :(</button>
                <br />
                <p>Likes: {props.likes}</p>
                <br />
                {props.description}            
            </div>
        </section>
    )
}

export default Card
