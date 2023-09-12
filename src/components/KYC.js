import React, { useState, useRef } from 'react';
import { Button, Form, Grid, Header, Icon, Input, Message, Segment } from 'semantic-ui-react';
// import AudioRecorder from 'react-audio-recorder';
import Webcam from 'react-webcam'; 

const KycForm = ({history}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [studentLoanAmount, setStudentLoanAmount] = useState('');
  const [image, setImage] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  
  const webcamRef = useRef(null);

  const handleImageCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const handleAudioStop = (blob) => {
    setAudioBlob(blob);
  };

  const handleSubmit = () => {
    history.push('/kyc-save');
    console.log({
      name,
      age,
      address,
      studentLoanAmount,
      image,
      audioBlob,
    });
  };

  return (
    <div className="kyc-form">
      <Grid textAlign="center" verticalAlign="middle" style={{ height: '100vh' }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Icon name="id card outline" /> KYC Form
          </Header>
          <Segment stacked>
            <Form size="large">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{ width: '100%', marginBottom: '20px' }}
              />

              <Button color="teal" fluid onClick={handleImageCapture}>
                Capture Image
              </Button>
              {image && <img src={image} alt="User" style={{ width: '100%', marginBottom: '20px' }} />}

              <Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                fluid
                icon="calendar"
                iconPosition="left"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />

              <Input
                fluid
                icon="address card"
                iconPosition="left"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <Input
                fluid
                icon="money bill alternate outline"
                iconPosition="left"
                placeholder="Loan Amount Required"
                value={studentLoanAmount}
                onChange={(e) => setStudentLoanAmount(e.target.value)}
              />

              {/* <AudioRecorder
                onRecordingStop={handleAudioStop}
                style={{ marginBottom: '20px' }}
              /> */}

              <Button color="teal" fluid onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default KycForm;
