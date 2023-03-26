import styled from "@emotion/styled";
import { Facebook, Instagram, Mail, PaidOutlined, PaymentOutlined, Phone, Pinterest, PointOfSaleOutlined, Room, YouTube } from "@mui/icons-material";

const Container= styled.div`
    display: flex;
    padding: 20px;
`;
const Left= styled.div`
    flex:1;
`;
const Logo= styled.h1`
    
`;
const Desc=styled.p`
    
`;
const SocialContainer=styled.div`
    display: flex;
`
const SocialIcons=styled.div`
    display: flex;
    height: 40px;
    width: 40px;
    margin-right: 20px;
    border-radius: 50%;
    background-color:#${props=>props.bg};
    color: #fff;
    justify-content: center;
    align-items: center;
    transition: all.3s ease;
    cursor: pointer;
    &:hover{
        transform: scale(.8);
    }
`;



const Center= styled.div`
    flex:1;
`;

const Title=styled.h3`
    margin-bottom: 15px;
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;



const Right= styled.div`
    flex:1;
`;

const ContactItem= styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    T. Shop
                </Logo>
                <Desc>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita consequatur at, molestiae enim possimus quasi.
                </Desc>
                <SocialContainer>
                    <SocialIcons bg="B52887">
                        <Instagram/>
                    </SocialIcons>
                    <SocialIcons bg="395693"> 
                        <Facebook/>
                    </SocialIcons>
                    <SocialIcons bg="F40000">
                        <YouTube/>
                    </SocialIcons>
                    <SocialIcons bg="F40000">
                        <Pinterest/>
                    </SocialIcons> 
                </SocialContainer>
            </Left>

            <Center>
                <Title>
                    Useful Links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Products</ListItem>
                    <ListItem>Women Cloth</ListItem>
                    <ListItem>Men Cloth</ListItem>
                    <ListItem>Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Privecy policy </ListItem>
                    <ListItem>Terms and conditions</ListItem>
                </List>

            </Center>

            <Right>
                <Title>
                    Contact
                </Title>
                
                <ContactItem>
                    <Room style={{marginRight:'10px'}} />123, Hex, Bangladesh-7620
                </ContactItem>
                <ContactItem>
                    <Mail style={{marginRight:'10px'}} />contact@tshop.com
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:'10px'}} />+8801845727676
                </ContactItem>
                <ContactItem>
                    <PaymentOutlined style={{marginRight:'10px'}} />
                    <PaidOutlined style={{marginRight:'10px'}} />
                    <PointOfSaleOutlined style={{marginRight:'10px'}} />
                </ContactItem>
            </Right>
        </Container>
    );
};

export default Footer;