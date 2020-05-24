import React ,  { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Head/Header';
import Inputci from './Inp/Inputci';
import Datdisp from './Datdis/Datdisp';
import Exdata from './Exdat/Exdata';
import Radium , {StyleRoot} from 'radium';
import {Line} from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import {  Bubble } from 'react-chartjs-2';
import {  Bar } from 'react-chartjs-2';
import {  Radar } from 'react-chartjs-2';
import {  Scatter } from 'react-chartjs-2';
import ico from './ico.png';

import { Alert , Container} from 'reactstrap';


function App() {



const inst = ["Maharastra","Gujarat","Tamil Nadu","Delhi"," Rajasthan","Madhya Pradesh","Uttar Pradesh","Andhra Pradesh","West Bengal","Punjab","Telangana","Jammu and Kashmir","Karnataka","Haryana","Bihar","Kerala","Odisha","Chandigarh","Jharkhand","Tripura","Uttarakhand","Assam","Chhattisgarh","Himachal Pradesh","Ladakh","Andaman and Nicobar Islands","Meghalaya","Puducherry","Goa","Manipur","Mizoram","Arunachal Pradesh","Dadra and Nagar Haveli","Nagaland","Daman and Diu","Lakshadweep","Sikkim"];
const states = [];
const disnam = [];
    const act = [];
    const rec = [];
    const dea = [];
    const conf = [];
    const obb = [] ;
    const [ob,setob] = useState({
      arr: [],
    });
const[inddat,setinddat] = useState({
  tc : ' ',
  ac : ' ',
  rc : ' ',
  td : ' ',
  nc:' ',
  nd:' ',
  nr:' ',
  lupd:' ',
  tes:' ',
  ttm:'',
  // tcpm:''
});

const [charData , setcharData ] = useState({});


       const [visible, setVisible] = useState(false);
const [st,setst] = useState({
  ste : [],
});
 
const [ggps,setggps] = useState({
  dis : [],
  ac : [],
  re : [],
  co : [],
  dee : []
});




useEffect(() => {  
  

      
               const urlbb = 'https://api.covid19india.org/v2/state_district_wise.json';

               // const url = ' https://api.newsapi.aylien.com/api/v1';
               fetch(urlbb).then(response => {
                  return response.json();
                }).then(data => {
                  console.log(data);
                 // const  va= [];
                 for(var i=0;i< data.length;i++)
                 {
                   // const ab = data[34].districtData[i].district;
                     const statee = data[i].state;
                    states.push(statee);
                   // console.log(ab);
                 }
                 setst({
                  ste : states,
                 });
                //  console.log(states)
                // const aa = states;
                // console.log(aa);
             
                 }).catch(error =>{
                   console.log(error);
                   })



//  console.log(states);










//==========================================================================


const urla = 'https://api.covid19india.org/data.json';

fetch(urla).then(res => {
   return res.json();
 }).then(daet => {
   console.log(daet);
   const cases = [];
   const totalcase = [];
   const recoveredcase = [];
   const activecase = [];
   const deathcase = [];
  
   const mainact = daet.statewise[0].active;
   const mainconf = daet.statewise[0].confirmed;
   const maindea = daet.statewise[0].deaths;
   const mainrec = daet.statewise[0].recovered;
   const dmainconf = daet.statewise[0].deltaconfirmed;
   const dmainrec = daet.statewise[0].deltarecovered;
   const dmaindea = daet.statewise[0].deltadeaths;
   const last = daet.statewise[0].lastupdatedtime;
    
   for(var i= 1;i<=36;i++)
   {
    cases.push(daet.statewise[i].state);
    activecase.push(parseInt(daet.statewise[i].active));
    totalcase.push(parseInt(daet.statewise[i].confirmed));
    recoveredcase.push(parseInt(daet.statewise[i].recovered));
    deathcase.push(parseInt(daet.statewise[i].deaths)); 
   }

//  console.log("0");
//  console.log(cases);
//  console.log(activecase);
//  console.log(totalcase);
//  console.log(recoveredcase);
setinddat({
  ac : mainact,
  tc : mainconf,
  rc : mainrec,
  td : maindea,
  nc: dmainconf,
  nd: dmaindea,
  nr: dmainrec,
  lupd: last,
  tes: "1,276,781",
  ttm: '925',
  // ttm : tmt,
  // tcpm:tm
  });


setcharData({
  labels : cases,
  datasets: [
    {
      label : 'active',
      data : activecase,
      // borderColor: 'rgb(0, 120, 0)',
      borderColor: 'blue',
      backgroundColor: [
        'rgba(0, 76, 153, 0.3)'
        // 'white'
      ],
      borderWidth: 2,
      pointHoverBorderColor : 'black',
      pointHoverBorderWidth: 10
      // radius : 20
    },
 
    {
      label : 'recovered',
      data : recoveredcase,
      backgroundColor: [
        'rgba(0, 153, 0, 0.3)'
        // 'white'
      ],
      borderColor: 'green',
      borderWidth: 2,
      pointHoverBorderColor : 'black',
      pointHoverBorderWidth: 10
      // radius : 20
    },


    {
      label : 'total case',
      data : totalcase,
        backgroundColor: [
          'rgba(255, 51, 51, 0.3)'
          // 'white'
        ],
        // borderColor: 'rgb(0, 0, 102)',
        borderColor: 'red',
      borderWidth: 2,
      pointHoverBorderColor : 'black',
      pointHoverBorderWidth: 10
      // radius : 20
    },

    
    {
      label : 'Deaths',
      data : deathcase,
      backgroundColor: [
        'rgba(128, 128, 128, 0.3)'
        // 'white'
      ],
      // borderColor: 'rgb(0, 0, 102)',
      borderColor: 'grey',
      borderWidth: 2,
      pointHoverBorderColor : 'black',
      pointHoverBorderWidth: 10
      // radius : 20
    }




  ]




});






 });


//===============================================================================


// return 0;
  },[]);

  // console.log(st.ste);
const Disdata = (stat) => {
                     

// console.log(states);
   const second = stat;
 
  // const na = inst.indexOf(second) + 1;
 const asw = [ "Maharashtra" ,"Tamil Nadu" ,"Gujarat","Delhi","Rajasthan","Madhya Pradesh","Uttar Pradesh","West Bengal","Andhra Pradesh","Bihar","Punjab","Telangana","Karnataka","State Unassigned","Jammu and Kashmir","Odisha","Haryana","Kerala","Jharkhand","Assam","Chandigarh","Tripura","Chhattisgarh","Himachal Pradesh","Uttarakhand","Goa","Ladakh","Andaman and Nicobar Islands","Manipur","Puducherry","Meghalaya","Mizoram","Arunachal Pradesh","Dadra and Nagar Haveli and Daman and Diu","Nagaland","Lakshadweep","Sikkim"];
  // const  statenam = second;
const po = st.ste.indexOf(second)  ;
// console.log(po);
// console.log(st.ste);

const na = asw.indexOf(second) + 1;
// console.log(na);
//  if(na != 0)
if(na > 0)
 {
   setVisible(false);
 

  const ur = 'https://api.covid19india.org/data.json';
  fetch(ur).then(resp => {
     return resp.json();
   }).then(da => {
    //  console.log(da);
    const tccc = da.statewise[na].confirmed;
    const accc = da.statewise[na].active;
    const rccc = da.statewise[na].recovered;
    const tdcc = da.statewise[na].deaths;
    const tncc = da.statewise[na].deltaconfirmed;
    const tndc = da.statewise[na].deltadeaths;
    const tnrc =  da.statewise[na].deltarecovered;
     const lastupdc = da.statewise[na].lastupdatedtime; 






    setinddat({
      ac : accc,
      tc : tccc,
      rc : rccc,
      td : tdcc,
      nc: tncc,
      nd: tndc,
      nr: tnrc,
      lupd: lastupdc,
      tes: "1,276,781",
      ttm: '925',
      // ttm : tmt,
      // tcpm:tm
      });

    });

const urlqq = 'https://api.covid19india.org/v2/state_district_wise.json';
  

fetch(urlqq).then(response => {
   return response.json();
 }).then(data => {
  
  for(var i=0;i< data[po].districtData.length;i++)
  {
     const a = data[po].districtData[i].district;

    disnam.push( a );
    act.push( data[po].districtData[i].active );
    rec.push( data[po].districtData[i].recovered);
    dea.push( data[po].districtData[i].deceased );
    conf.push( data[po].districtData[i].confirmed );
 
obb.push({"name": data[po].districtData[i].district, "confirmed": data[po].districtData[i].confirmed, "active": data[po].districtData[i].active, "recovered": data[po].districtData[i].recovered, "death": data[po].districtData[i].deceased, "dact": data[po].districtData[i].delta.confirmed, "drec": data[po].districtData[i].delta.recovered, "ddea": data[po].districtData[i].delta.deceased});

  }


setggps({
    dis : disnam,
    ac : act,
    re : rec,
    dee: dea,
    co:conf,

});

 
 setcharData({
  labels : ggps.dis,
  datasets: [
    {
      label : 'active',
      data : ggps.ac,
     
      borderColor: 'blue',
      backgroundColor: [
        'rgba(0, 76, 153, 0.3)'
    
      ],
      borderWidth: 2,
      pointHoverBorderColor : 'black',
      pointHoverBorderWidth: 10
      // radius : 20
    },
 
    {
      label : 'recovered',
      data : ggps.re,
      backgroundColor: [
        'rgba(0, 153, 0, 0.3)'
      
      ],
      borderColor: 'green',
      borderWidth: 2,
      pointHoverBorderColor : 'black',
      pointHoverBorderWidth: 10
    
    },


    {
      label : 'total case',
      data : ggps.co,
        backgroundColor: [
          'rgba(255, 51, 51, 0.3)'
          // 'white'
        ],
        // borderColor: 'rgb(0, 0, 102)',
        borderColor: 'red',
      borderWidth: 2,
      pointHoverBorderColor : 'black',
      pointHoverBorderWidth: 10
      // radius : 20
    },

    
    {
      label : 'Deaths',
      data : ggps.dee,
      backgroundColor: [
        'rgba(128, 128, 128, 0.3)'
        // 'white'
      ],
      // borderColor: 'rgb(0, 0, 102)',
      borderColor: 'grey',
      borderWidth: 2,
      pointHoverBorderColor : 'black',
      pointHoverBorderWidth: 10
      // radius : 20
    }




  ]




});


setob({
  arr : obb,
});


})



}else{
  setVisible(true);
   
  setinddat({
   ac : '',
   tc : '',
   rc : '',
   td : '',
   nc: '',
   nd: '',
   nr: '',
   lupd: '',
   tes: "1,276,781",
   ttm: '925',
   // ttm : tmt,
   // tcpm:tm
   });
}
}





    // console.log(ac);
   const dae = {
    color: "#b9bdb5",
    fontFamily: "'Teko', sans-serif",
    textAlign: "center",
   }

   var spinnerKeyframes = Radium.keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '33%': { transform: 'rotate(120deg)' },
    '66%': { transform: 'rotate(240deg)' },
    '99%': { transform: 'rotate(360deg)' },
});

   const imgstyle = {
    virus: {
     marginTop : 30,
     marginLeft: "46%",
    //  textAlign: "center",
     width: '8%',
     animation: 'q 15s linear infinite',
     animationName: spinnerKeyframes 
     }
   }


  //======================================

  let sd = ob.arr;
  // console.log(sd);
  let sf = sd.map((dd) =>
      //  <div>{dd.name}</div>
      <tr >
         <td>{dd.name}</td>  
  <td>{ dd.dact > 0 ? <span style={{color:"#bb0e32",fontSize:12}}> [  +{dd.dact} ]  </span> : null }&nbsp;&nbsp;&nbsp;<span style={{fontSize: 20}}>{dd.confirmed}</span></td>
      <td>   {dd.active}</td>
  <td>{ dd.drec > 0 ? <span style={{color:"#257e3a",fontSize:12}}> [  +{dd.drec} ]  </span> : null }&nbsp;&nbsp;&nbsp;<span style={{fontSize: 20}}>  {dd.recovered}</span></td>
  <td>{ dd.ddea > 0 ? <span style={{color:"white",fontSize:12}}> [  +{dd.ddea} ] </span> : null }&nbsp;&nbsp;&nbsp; <span style={{fontSize: 20}}>{dd.death}</span></td>
      </tr>
  )



  //========================================


  return (

    

    <div className="App">
   
       <Header/>
    
  <Container>
  <Alert color="primary" isOpen={visible}  fade={true} style={{color:'black' ,fontSize: 14,backgroundColor:'rgba(201,0,0,0.3)', fontFamily : "'DM Sans', sans-serif" ,textAlign:"center"}}>
   Please provide VALID input &nbsp;&nbsp;(Double click SEARCH to get the graph of district)
 </Alert>
</Container>
{/* <Togg /> */}
{/* <StyleRoot> */}
<Inputci find={Disdata} />
<img src={ico}  style={imgstyle.virus} />
{/* </StyleRoot> */}
       {/* <img src="https://www.transparentpng.com/thumb/hindu-flag/india-flag-icon-13.png" alt="india flag icon @transparentpng.com" height="40" width="80"></img> */}
       {/* <img src="https://www.transparentpng.com/thumb/hindu-flag/india-flag-png-1.png" alt="india flag png @transparentpng.com"  height="42" width="72"></img> */}
       {/* <img src="https://www.transparentpng.com/thumb/hindu-flag/india-flag-png-transparent-images--28.png" alt="india flag png transparent images  @transparentpng.com" height="42" width="72"></img> */}
       {/* <Inputci find={Disdata}/><br/> */}
  <p style={dae}>Last updated :&nbsp;&nbsp;{inddat.lupd}</p><br/>
  
  
       <Datdisp dat={inddat.tc} data={inddat.ac} datb={inddat.rc} datc={inddat.td} newc={inddat.nc} newd={inddat.nd} newr={inddat.nr} />
       <br/>
       <p style={{fontSize:22 , color:'#b9bdb5',fontFamily : "'DM Sans', sans-serif",textAlign: "center",}}>Data Visualization of the Cases </p><br/>
       <p style={{fontSize:12, color:'#b9bdb5',fontFamily : "'DM Sans', sans-serif",textAlign: "center",}}>( &nbsp;&nbsp; Uncheck data boxes to remove the dataset &nbsp;&nbsp;  ) </p><br/>
       <Line data={charData} />
       {/* <p  style={{color:"black",fontSize:12,backgroundColor:"#bb0e32",width:150,height:40,fontFamily : "'DM Sans', sans-serif",opacity:0.5}}><br/><span>PLEASE STAY IN HOME !</span>  </p><p style={{color:"Black",fontSize:12,backgroundColor:"#095fbc",width:150,fontFamily : "'DM Sans', sans-serif",marginLeft:"40%",marginTop:-40,height:40,opacity:0.5}}><br/><span>SOCIAL DISTANCING</span></p><p style={{color:"Black",fontSize:12,backgroundColor:"#257e3a",fontFamily : "'DM Sans', sans-serif",width:111,marginLeft:"80%",marginTop:-40,height:40,opacity:0.5}}><br/><span>BE SAFE !</span>  </p> */}
    {/* <br/> */}
    <br/>
    {/* marginLeft:"12%" */}
    {/* marginLeft:"13%", */}
    <table style={{width:"100%"}}>
    <tr style={{paddingBottom:10,width:"50%",fontFamily : "'DM Sans', sans-serif",height:"15%"}}>
         <td style={{backgroundColor:"black",color:"grey",borderRadius: 1,textAlign:"center" ,width:"10%" }} >District</td>  
        <td style={{backgroundColor:"black",color:"#bb0e32",borderRadius: 1,textAlign:"center", width:"5%"}} >Confirmed</td>
      <td style={{backgroundColor:"black",borderRadius: 1,color:"#095fbc",textAlign:"center" ,width:"5%"}} > Active</td>
        <td style={{backgroundColor:"black",borderRadius: 1,color:"#25622c",textAlign:"center", width:"5%"}} >Recovered</td>
        <td style={{backgroundColor:"black",borderRadius: 1,color:"#808080",textAlign:"center" ,width:"5%"}} >Death</td>
      </tr>
      {sf}
    </table><br/>
    <Exdata />

    
    <br/>
    {/* <p style={{backgroundColor:'rgba(0,0,0,0.5)',height:70,width:'100%',textAlign: "center",}}>
      <a href="https://www.linkedin.com/in/kush-singh-7a0304193/"><i id="link"  class="fab fa-linkedin fa-3x"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://www.instagram.com/kushv.r7/" ><i id="inst" class="fab fa-instagram fa-3x"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://github.com/kushvr7"><i id="git" class="fab fa-github fa-3x"></i></a>
      </p> */}
      {/* </StyleRoot> */}
    </div>

      // </StyleRoot> 

  );
}

export default Radium(App);
// export default RadiumApp;
// {date}