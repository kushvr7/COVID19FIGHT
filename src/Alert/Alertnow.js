import React from 'react';
import Alert from 'react-bootstrap/Alert';
function Alertnow(props) {
    return (
       
        
     
            
      <Alert variant="danger" onClose={props.canc} dismissible>
        <Alert.Heading style={{backgroundColor:"#f8d7da",opacity: 0.5,transition:1}}>Provide valid input</Alert.Heading>
      
      </Alert>
        





       
    )
}

export default Alertnow;
