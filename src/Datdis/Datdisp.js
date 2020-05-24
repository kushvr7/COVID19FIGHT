import React from 'react';
import Radium , {StyleRoot} from 'radium';

function Datdisp(props) {
    
   const tc ={
        width: "22%",
        height:90,
        color: "#ff073a",
        fontFamily : "'DM Sans', sans-serif",
        // backgroundColor: "red",
        backgroundColor: "#262529",
        borderRadius: 5,
        opacity: 0.7,
        textAlign: "center",
        marginLeft: "2%",
        '@media (min-width: 365 px)':{
             width: 20,
        }
   }

   const ac ={
    width: "22%",
    height:90,
    color: "#007bff",
    fontFamily : "'DM Sans', sans-serif",
    // backgroundColor: "red",
    backgroundColor: "#262529",
    textAlign: "center",
    borderRadius: 5,
    opacity: 0.7,
    marginLeft: "27%",
    marginTop: -90
}

const rc ={
    width: "22%",
    height:90,
    color: "#28a745",
    fontFamily : "'DM Sans', sans-serif",
    // backgroundColor: "red",
    backgroundColor: "#262529",
    textAlign: "center",
    borderRadius: 5,
    opacity: 0.7,
    // marginLeft: 220,
    marginLeft: "54%",
    marginTop: -90
}


const td ={
    width: "20%",
    height:90,
    color: "#6c757d",
    fontFamily : "'DM Sans', sans-serif",
    backgroundColor: "#262529",
    borderRadius: 5,
    opacity: 0.4,
    // marginLeft: 333,
    marginLeft: "80%",
    textAlign: "center",
    marginTop: -90
}

const siz = {
    fontSize: 22
}

const op = {
    opacity: 0.5,
    // fontSize: 11
}

const wi = window.innerWidth;
const maiin = {
    // marginLeft : wi - 360,
    // position: "absolute",
    // position: "fixed"
}

    return (
        <StyleRoot>
        <div style={maiin}>
       
            <div style={tc}>
              <p>Confirmed</p> <br/>    
              <p style={op}>[ +{props.newc} ]</p>
                <span style={siz}>{props.dat}</span>
                </div>
           
            <div style={ac}>
             <p>Active</p><br/><br/>
             <span style={siz}>{props.data}</span>           
               </div>
          

         
            <div style={rc}>
             <p>Recovered</p><br/>
             <p style={op}>[ +{props.newr} ]</p>  
               <span style={siz}>{props.datb}</span> 
            </div>
          

          
            <div style={td}>
            <p>Deaths</p><br/>
    <p style={op}>[ +{props.newd} ]</p>
               <span  style={siz}>{props.datc}</span> 
            </div>
  
        </div>
        </StyleRoot>
    )
}

export default Radium(Datdisp);
