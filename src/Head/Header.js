import React from 'react';


function Header() {

  const stylea ={
      fontSize : 30,
      fontWeight : "bold",
      fontFamily: " 'Concert One', cursive",
      textAlign: "center",
    //   marginTop
  }

 const sdiv ={
     opacity : 1,
     backgroundColor: "#262529" ,
    //  backgroundColor:'rgba(0,0,0,0.5)',
     width: "100%",
     height: 40,
    //  position: "absolute",
    //  opacity: 1
    //  fontSize: 
 }

 const spa ={
    color: "#b9bdb5",
    // marginLeft:"42%"
    // color: "blue"
}

const spb ={
    color: "#f70939"
}
const home ={
    marginLeft : 10,

}


    return (
        <div style={sdiv}>
            
            {/* <div style={{home}}>
            <i  class="fas fa-home fa-2x"></i>
             <p>State</p>
             </div> 
                         */}
             {/* <div style={{marginleft:40}}>
             State
             </div> */}
            {/* <ul style={{listStyle:"none"}}>
                <li style={{marginLeft:"1%"}}><i  class="fas fa-home fa-2x"></i> </li>
                <li style={{marginLeft:"5%",marginTop: -25}}>State</li>
                <li style={{marginLeft:"93%",marginTop: -26}}>State</li>
            </ul> */}
            
            <p style={stylea}> <span style={spa}>COVID</span><span style={spb}>19</span></p> 
     {/* <p style={{home}}></p> */}
        </div>
    )
}

export default Header;
