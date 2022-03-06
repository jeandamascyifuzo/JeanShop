import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 700;
    font-family: Poppins;
    letter-spacing: 2px;
    font-size: 18px;
`;

const Desc = styled.p`
    margin: 20px 0px;
    word-spacing: 2px;
    font-size: 15px;
    line-height: 20px;
`;

const Price = styled.span`
    font-weight: 500;
    font-family: Poppins;
    font-size: 25px;
`;

const FilterContainer = styled.div`
    width: 60%;
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 18px;
    font-weight: 500;
    font-family: Poppins;
    letter-spacing: 2px;
`;

const FilterColor = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props)=> props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 5px;
    padding: 2px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 3px;
`;

const Button = styled.button`
    padding: 10px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 600;
    font-family: Poppins;
    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
        <ImgContainer>
            <Image src="https://cdn.pixabay.com/photo/2021/10/26/16/51/amsterdam-6744567__340.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                In publishing and graphic design, 
                Lorem ipsum is a placeholder text 
                commonly used to demonstrate the visual 
                form of a document or a typeface without 
                relying on meaningful content. 
                </Desc>
                <Price>$ 40 </Price>
                <FilterContainer>
                    <Filter>
                    <FilterTitle>Colors</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="gray" />
                    <FilterColor color="red" />
                    </Filter>
                    <Filter>
                    <FilterTitle>Sizes</FilterTitle>
                    <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
      
    </Container>
  )
}

export default Product
