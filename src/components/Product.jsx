import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from "styled-components"
import { Link } from "react-router-dom";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    
`;

const Image = styled.img`
    height: 75%;
    width: 75%;
    object-fit: cover;
    z-index: 1;
    align-items: center;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    background-color: white;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;


const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
         <Icon>
         <Link to={`/product/${item._id}`}>
             <ShoppingCartOutlined />
             </Link>
         </Icon>
         <Icon>
          <SearchOutlined />
         </Icon>
         <Icon>
             <FavoriteBorderOutlined />
         </Icon>
      </Info>
    </Container>
  )
}

export default Product
