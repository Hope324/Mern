//1.Get the Data in the Card manually for limited data

// import React, { useState } from 'react'
// //import './App.css';
// //import Login from './components/Login';
// //import LifeCycleComponent from './components/LifeCycleComponent'
// //import Usestateexplain from './components/usestateexplain';
// import Card from './components/propspractise';
// function App() {
//   const [Onigiri,setOnigiri]=useState('Onigiri')
//    const handleclick=(value)=>{
//      setOnigiri(value)
//    }
//   return (
//     <>
//     <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',height:'100vh',width:'100vw'}}>
//     <Card abilty='bankai' description='Its all about the increase in ability and strength' />
//     <Card abilty='rasengan' description='Its all about the increase in energy force'/>
//     <Card abilty='chidori' description='Its all about controlling the lightning'/>
//     <Card abilty='Kamehameha' description='Its all about throwing the energy'/>
//     <Card abilty='Chenra tensei' description='Its all about controlling the Gravity'/>
//     <Card abilty={Onigiri} description='surpass the limit of the body' changeName={(value=>handleclick(value))}> 

//     </Card>
// </div>
//     </>
//   )
// }

// export default App;



//2.Get the data with n number of cards and use the manual Array
// import React, { useState } from 'react'
// //import './App.css';
// //import Login from './components/Login';
// //import LifeCycleComponent from './components/LifeCycleComponent'
// //import Usestateexplain from './components/usestateexplain';
// import Ncards from './components/ncards';



// const products = [
//   {
//       imageUrl:
//         "https://rukminim1.flixcart.com/image/416/416/k6mibgw0/mobile/j/z/b/samsung-galaxy-s20-ultra-sm-g988bzapinu-original-imafpfkb6mkgyegk.jpeg",
//       label: "SAMSUNG Galaxy S20 Ultra (Cosmic Gray, 128 GB)  (12 GB RAM)",
//       id: "1",
//       brand: "SAMSUNG",
//       categoryId: "mobiles",
//       price: "₹1,03,000",
//     },
//     {
//       imageUrl:
//         "https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/z/h/x/galaxy-note-10-plus-256-c-sm-n975fzkdins-samsung-12-original-imafj58jfcumtrjg.jpeg",
//       label: "SAMSUNG Galaxy Note 10 Plus (Aura Black, 512 GB)  (12 GB RAM)",
//       id: "2",
//       brand: "SAMSUNG",
//       categoryId: "mobiles",
//       price: "₹95,000",
//     },
//     {
//       imageUrl:
//         "https://rukminim1.flixcart.com/image/416/416/ktizdzk0/mobile/p/e/h/c01-plus-ta-1396-ds-nokia-original-imag6updekaksnrp.jpeg",
//       label: "Nokia Lumia M21 + Plus (Blue, 16 GB)  (2 GB RAM)",
//       id: "3",
//       brand: "NOKIA",
//       categoryId: "mobiles",
//       price: "₹6,429",
//     },
//     {
//       imageUrl:
//         "https://rukminim1.flixcart.com/image/416/416/ksgehzk0/mobile/7/l/x/gt-5g-rmx2202-realme-original-imag6yg3rqbgev4r.jpeg",
//       label: "REALME GT 5 (8 GB RAM, 256 GB Internal Storage)",
//       id: "4",
//       brand: "REALME",
//       categoryId: "mobiles",
//       price: "₹43,999",
//     },

// ]



//   function App() {
//   const [data,setData]=useState(products)
//   //  const handleclick=(value)=>{
//   //    setOnigiri(value)
//   //  }
//   return (
//     <>
//     <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',height:'100vh',width:'100vw',overflow:'auto'}}>

//     {
//       data.map((element)=>{
//         return(
//           <>
//            <Ncards Image={element.imageUrl} title={element.label} brand={element.brand}/>
//           </>
//         )
//       })
//     }
//     </div>
//     </>
//   )
// }

// export default App





//3.get the data using axios Axios

import React from 'react'
import Navbar from './components/navbar'
import Routes from './Routes/Routes'
//import Flightcontext from './context/Flightcontext'
// import {Provider} from 'react-redux'
// import Store from './Redux/Store'

function App() {

    return (
        <>
            
            <Navbar />
            <Routes />
            <Flightcontext>
                {/* <Provider store={Store}>
                
                </Provider> */}
            </Flightcontext>
        </>

    )
}

export default App