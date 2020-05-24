import React from 'react';
// import { linkedin} from 'react-icons/fa';
import Radium from 'radium';
// import {Route, Router} from 'react-router';

function Exdata(props) {

//   const cs ={
//       fontSize: 17,
//       color: "white",
    //   fontFamily : "'DM Sans', sans-serif",
    // fontFamily: "'Yanone Kaffeesatz', sans-serif",
    //   opacity: 0.7,
    //   marginLeft:-250      
//   }

// const num = {
//     fontSize: 17,
//     color: "white",
//     fontFamily: " 'Teko', sans-serif"
// }
// #0073b1
// let hi =  window.innerHeight - 571 ;
// window.innerHeight
// const lin = {
//     color: "grey",
//     ':hover' : {
//         color: '#0073b1',
//       },

//     ':focus':{
//         color:"#0073b1",
//     }
// };

// const ins = {
//     color: "grey",
//     ':hover' : {
//         color: '#ff5950',
//       },
//     ':focus':{
//         color:"#ff5950",
//     }
// };

// const git = {
//     color: "grey",
//     ':hover' : {
//         color: 'red',
//       },
//       ':focus' : {
//         color: 'red',

    // console.log(props.pmm);
    return (
        <div >
             <p style={{  backgroundColor: "#262529",marginBottom:0,width:'50%',borderRadius:10,marginLeft:"25%",textAlign: "center",}}>
      <a href="https://www.linkedin.com/in/kush-singh-7a0304193/"><i id="link"  class="fab fa-linkedin fa-3x"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://www.instagram.com/kushv.r7/" ><i id="inst" class="fab fa-instagram fa-3x"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://github.com/kushvr7"><i id="git" class="fab fa-github fa-3x"></i></a>
      </p>
    {/* //         <p><span style={cs}>Total tested cases :   </span>&nbsp;<span style={num}>  {props.tt}</span></p><br/>
    // <p><span style={cs}>Test per 1m population :    </span>&nbsp;<span style={num}>   {props.tpm}</span>
    style={{backgroundColor: "black" , opacity: 0.6,height:102,marginTop:59,width:"100%"}} */}
    
    
    
    {/* </p> */}
    {/* <p></p> */}
    {/* <p  style={{marginTop:-30,marginLeft:210,width:20}}><i  style={lin} class="fab fa-linkedin fa-3x"></i><a target="_blank" href="https://www.linkedin.com/in/kush-singh-7a0304193/" ></a></p>
    <p  style={{marginTop:-47,marginLeft:280,width:20}}><i   style={{color:"grey" }} class="fab fa-instagram fa-3x"></i><a target="_blank" href="https://www.instagram.com/kushv.r7/"></a></p>
    <p  style={{ marginTop:-47,marginLeft:350,width:20}} ><i   style={{color:"grey" }} class="fab fa-github fa-3x"></i><a target="_blank" href="https://github.com/kushvr7" ></a></p>
   */}
   
    {/* <p style={{marginLeft:30}}><i style={{color:"grey"}} class="fab fa-linkedin-in fa-2x"></i></p>
    <p style={{marginTop:-37,marginLeft:130}}><i style={{color:"grey"}} class="fab fa-instagram fa-2x"></i></p>
    <p style={{marginTop:-32,marginLeft:250}}><i style={{color:"grey"}} class="fab fa-github fa-2x"></i></p>
   */}






        </div>
    )
}

export default Radium(Exdata);
