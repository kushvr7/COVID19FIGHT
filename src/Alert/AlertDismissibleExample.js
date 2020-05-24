import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertDismissibleExample(props) {
    // const [show, setShow] = useState(true);
  
    
      return (
        <Alert variant="danger" onClose={props.canc} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    
    // return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }

  export default AlertDismissibleExample;