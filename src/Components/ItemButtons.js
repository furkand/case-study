import React from "react"
import {Link} from "react-router-dom"
import {Button} from "semantic-ui-react"

const ItemButtons = ({username,email}) =>{
    const userMail =" mailto:" + email
    const sendMail = () =>{
        window.location.href=userMail
    }
    const url = "/users/" + username

    return(
        <div className='ui two buttons'>
          
                <Button onClick={sendMail}basic color='green'>
                    Get Contact
                </Button>
            
              
                    <Button basic color='blue'>
                        <Link style={{color:"#2185d0"}}to={url}>
                        Get Details
                        </Link>
                    </Button>
                
        </div>
    )
}

export default ItemButtons;