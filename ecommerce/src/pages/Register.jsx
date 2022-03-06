import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(
        rgba(222,255,255,0.5),
        rgba(222,255,255,0.5)
        ),
     url("https://www.ixpap.com/images/2021/02/whatsapp-wallpaper-ixpap-17.jpg") center;
    
`;

const Wrapper = styled.div`
    width: 50%;
    height: 90vh;
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

align-items: center;
justify-content: center;
`;

const Input = styled.input`
    
    min-width: 50%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span``;

const Button = styled.button``;

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
          <Input placeholder ="Password" />
          <Input placeholder ="Confirm Password" />
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
