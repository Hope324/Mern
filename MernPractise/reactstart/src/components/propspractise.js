import { useEffect, useState } from "react";
import anime from '../Images/demo.jpg'

function Card(props)
{
    


return(
    <>
    <div style={{width:'30%',height:'auto'}}>
        <img src={anime} style={{height:'200px',width:'300px'}} />
    <h4>{props.abilty}</h4>
    <p>
        {props.description}
    </p>
    {/* {props.children} */} 
    <input type='text' onChange={(e)=>{props.changeName(e.target.value)}}/>
    </div>

    </>
)
}
export default Card;

//props: these are the way to pass data from parent to child
//props children: there are the element we kept inside the opening and closing tag of the element
//To pass the data from child to parent we pass the
//function as a prop and that function can receive a value as parameter of that function

