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
     background-size: cover;
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
    margin: 10px 0px;
    padding: 10px;
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
    margin-bottom: 10px;
    margin-top: 10px;
`;

const Link = styled.a`
    margin: 3px 0px;
    font-size: 12px;
    font- weight: 500;
    font-family: Poppins;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
        <Input placeholder ="UserName or Email" />
        <Input type= "password" placeholder ="Password" />
        <Link>Forget Password?</Link>
        <Button>LOGIN</Button>
        <Link>Create a new account</Link>
        </Form>
    </Wrapper>
  </Container>
  )
}

export default Login
