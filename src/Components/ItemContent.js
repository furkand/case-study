import React from "react"    
import {Image,Card} from "semantic-ui-react"
import moment from "moment"

    const ItemContent = ({name,thumbnail,registerDate,country,city,state})=>{
        return(
            <Card.Content>
                <Image
                floated='left'
                size='mini'
                src={thumbnail}
                />
                <Card.Header>{name}</Card.Header>
                <Card.Meta>Registered {moment(registerDate).fromNow()}</Card.Meta>
                <Card.Description>
                <b>Country:</b> {country} - <b>State:</b> {state} - <b>City:</b> {city} 
                </Card.Description>
            </Card.Content>            
        )
    }
        
export default ItemContent