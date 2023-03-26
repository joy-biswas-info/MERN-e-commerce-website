import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";



const Container = styled.div`
        height:60px;        
        padding: 10px 20px; 
`;

const Wraper =styled.div`

    display: flex;
`

const Left= styled.div`
flex:1;
display: flex;
align-items: center;

`;

const Language = styled.span`
    font-style: 14px;
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 5px;
`;
const Input=styled.input`
border: none;

`
const Center= styled.div`
flex:1;
text-align: center;
`;
const Logo = styled.h1`
font-weight: bold;
`

const Right= styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
`;

const MenuItem=styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 25px;
`


const Navbar = () => {
    return (
        <Container>
            <Wraper>
                <Left>
                    <Language>
                        EN 
                    </Language>
                    <SearchContainer>
                        <Input/>
                        <SearchIcon/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        T.Shop
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>Register </MenuItem>  
                    <MenuItem>LogIn</MenuItem>  
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>  
                </Right>
            </Wraper>
        </Container>
    );
};

export default Navbar;