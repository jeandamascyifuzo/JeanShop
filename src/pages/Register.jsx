import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(222,255,255,0.5),
        rgba(222,255,255,0.5)
        ),
     url("https://www.ixpap.com/images/2021/02/whatsapp-wallpaper-ixpap-17.jpg") center;
     display: flex;
     align-items: center;
     justify-content: center;
`;

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white; 
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    word-spacing: 10px;
    letter-spacing: 2px;  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    justify-content: center;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    font-weight: 500;
    font-family: Poppins;
    word-spacing: 5px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    border-radius: 8px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-weight: 600;
    font-family: Poppins; 
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
          <Input placeholder ="First Name" />
          <Input placeholder ="Last Name" />
          <Input placeholder ="UserName" />
          <Input placeholder ="Email" />
          <Input type= "password" placeholder ="Password" />
          <Input type= "password" placeholder ="Confirm Password" />
          <Agreement>
              By creating an account, I consent to the processing of personal
              data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
