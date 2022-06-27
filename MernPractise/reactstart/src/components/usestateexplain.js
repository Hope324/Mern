import { useEffect, useState ,useContext} from "react";
import anime from '../Images/demo.jpg'
import { Flight } from "../context/Flightcontext";
function Usestateexplain()
{
    //usestate is used so that react can understand the change
    //usestate is used to detect the change
//     const [email,setEmail]=useState('dispesh')
//     let data='dipesh'
//     const handleclick =()=>{
//         setEmail('devendra')
//     }
//     return(
//         <>
// <h3>{email}</h3>
// <button onClick={()=>{handleclick()}}>click me</button>
//         </>
//     )


//useEffect(callback function,[])=> componentdidmount it comes up when the component loads
//useEffect(callback function,[state])=> componentdidmount it comes up when the component loads
//useEffect(call back)=> whenever there is a change in particular state the callback function
const[pvalue,setPValue]=useState(0)
const[nvalue,setnValue]=useState(0)
useEffect(confirm,[pvalue])
function confirm(){
    window.confirm('hello')
    console.log('inside useEffect')
}
const {name:ContextName}=useContext(Flight);

return(
    <>
<h1>{ContextName}</h1>
    <div style={{marginTop:'300px',marginLeft:'300px'}}>
        <img src={anime} />
    <h4>Value updated-:{pvalue}</h4>
    <button onClick={()=>{setPValue(pvalue+1)}}>click me</button>
    <h4>Value updated-:{nvalue}</h4>
    <button onClick={()=>{setnValue(nvalue-1)}}>click me</button>
    </div>

    </>
)
}
export default Usestateexplain;

