import React , {useState} from 'react'
import Radium from 'radium';
import { findAllByAltText } from '@testing-library/react';

function Inputci(props) {

const [state, setstate] = useState({
      nam:'',
});


const StaCit = (event) => {
        setstate({
           nam: event.target.value,
        });
};


// const str = state.nam;
// const arr = str.split(",");

// console.log(arr[0] , arr[1]);



  const inpi = {
      border: "none",
      opacity : 0.2,
      height: 40,
      width: 260,
      fontSize : 20,
      paddingLeft: 10,
      borderRadius: 8,
      marginTop: 20,
      color: "black",
    //   fontweigth: "bold",
      boxShadow: "3px 1px 8px 1px #888888",
      transition: "0.5s",
      ':focus' : {
        width: 290,
        // borderColor: "black",
        // Outline:"none"
        // borderColor: "aquamarine",
        
      }
    //   borderBottom: " 2  black "

  }

  const sty ={
      color: "#b9bdb5",
      fontSize:14,
    //   fontWeight: "bold",
      fontFamily : "'Inria Sans', sans-serif"
  }

 const buts = {
     width: 90,
     height: 30,
     border: "none",
     borderRadius: 5,
     Outline:0,
    //  backgroundColor:  "#f70939"
    backgroundColor: "#b9bdb5",
    // fontFamily: "'Viga', sans-serif"
    // fontFamily: "'Londrina Sketch', cursive"
    fontFamily: "'Inria Sans', sans-serif",
    fontWeight: "bold"
 }



    return (
        <div style={{marginTop: 20,textAlign: "center"}}>
            <p style={sty}>Search your State </p>
            {/* <p style={sty}>|</p> */}
          <input type="text" style={inpi} onChange={StaCit} placeholder="Uttar Pradesh"  /> <br/><br/>
            <button style={buts}  onClick={ () => props.find(state.nam) }  >SEARCH</button>
        </div>
    )
}

export default Radium(Inputci);
