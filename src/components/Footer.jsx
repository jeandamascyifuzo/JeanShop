import { Call, Email, Facebook, GitHub, Instagram, Room, Twitter, WhatsApp } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    letter-spacing: 2px;
    font-weight: bold;
    font-family: Poppins;
`;

const Desc = styled.p`
    margin: 20px 0px;
    line-height: 25px;
    word-spacing: 5px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h2`
    margin-top: 10px;
    margin-bottom: 25px;
    letter-spacing: 1px;
    font-weight: bold;
    font-family: Poppins;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 75%;
    height: 40px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>Jean.</Logo>
          <Desc>
          In publishing and graphic design, Lorem 
          ipsum is a placeholder text commonly used to 
          demonstrate the visual form of a document or a typeface withou
          </Desc>
          <SocialContainer>
              <SocialIcon color = "3B5999">
                  <Facebook />
              </SocialIcon>
              <SocialIcon color = "55ACEE" >
                  <Twitter />
              </SocialIcon>
              <SocialIcon color = "E4405F">
                  <Instagram />
              </SocialIcon>
              <SocialIcon color = "E60023">
                  <GitHub />
              </SocialIcon>
              <SocialIcon color = "04F404">
                  <WhatsApp />
              </SocialIcon>
          </SocialContainer>
      </Left>

      <Center>
          <Title>Useful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man Fashion</ListItem>
              <ListItem>Woman Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>WishList</ListItem>
              <ListItem>Terms</ListItem>
          </List>
      </Center>

      <Right>
          <Title>Cantact</Title>
          <ContactItem>
              <Room style={{marginRight:"10px", cursor:"pointer"}}/> Kigali/Rwanda
          </ContactItem>
          <ContactItem>
              <Call style={{marginRight:"10px", cursor:"pointer"}}/> +250 781917267
          </ContactItem>
          <ContactItem>
              <Email style={{marginRight:"10px", cursor:"pointer"}}/> jeancyifuzodamas@gmail.com
          </ContactItem>
          <Payment src = "data:image/png;base64,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" />
      </Right>
    </Container>
  )
}

export default Footer
