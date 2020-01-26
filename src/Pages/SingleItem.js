import React ,{useContext}from "react"
import {UsersContext} from "../context/context"
import { geolocated } from "react-geolocated";
import GoogleMap from "../map"
import {Link} from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';


const SingleItem = (props)=>{
    const userId = props.match.params.userId;
    const users = useContext(UsersContext)
    const singleUser = users.filter( user=>
        user.login.username === userId
    )
    const user = singleUser[0]
    const lta = parseFloat(user.location.coordinates.latitude)
    const lng = parseFloat(user.location.coordinates.longitude)
    console.log( lta + lng)
    return(
        <div>
        <div className="navigation">
        <Link to="/">
        <div className="button_cont" align="center">
            <a className="example_f" href="add-website-here" target="_blank" rel="nofollow">
                <span>Back</span></a>
                </div>
        </Link>
        </div>
        <div className="single-item-container"> 
            <div className="user-image"> <img src={user.picture.medium} alt=""/></div>
            <div className="additional-info"><h2 className="name">{user.name.title}.{user.name.first} {user.name.last}</h2></div>
            <div className="contact-informations"> 
            <div className="email"><span>Email: </span>{user.email}</div>
            <div className="number"><span>Number: </span>{user.phone}</div>
            <div className="number"><span>Nationality: </span>{user.nat}</div>

            </div>
            <GoogleMap lat= {lta} lng= {lng }isMarkerShown/>
        </div>
        </div>

    )
}

export default  geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(SingleItem);