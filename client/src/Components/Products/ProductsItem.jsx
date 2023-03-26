import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";


const Info = styled.div`
    background-color: #05050552;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    flex: 1;
    margin: 8px;
    min-width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }

`;


const Image = styled.img`
    width: 85%;
    height: 350px;
`;

const Icon = styled.div`
    background-color: #fff;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all.3s;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
`



const ProductsItem = ({product}) => {

    return (
        <Container>
            <Image src={product.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined></ShoppingCartOutlined>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
                <Icon>
                    <Search />
                </Icon>
            </Info>

        </Container>
    );
};

export default ProductsItem;