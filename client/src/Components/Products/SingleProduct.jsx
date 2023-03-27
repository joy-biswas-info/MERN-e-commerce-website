import styled from "@emotion/styled";
import { Add, CardTravel, Description, Remove } from "@mui/icons-material";

const Container = styled.div`
    
`;
const Wraper = styled.div`
    display: flex;
    padding: 20px;
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image= styled.img`
    width: 100%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h2`
    font-weight: 400;
    font-size: 50px;
`;
const Desc= styled.p`
    font-size: 20px;
`;
const Price= styled.span`
    font-size: 40px;
    font-weight: 300;
`;
const Button= styled.button`
    padding: 10px;
    margin: 50px;
    background-color: transparent;
    font-weight: 600;
    border: 1px solid teal;
    cursor: pointer;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;
const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`;
const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin:0 8px;
    cursor: pointer;
`;


const FilterText=styled.span`
font-weight: 200;
font-size: 20px;
`;
const Select = styled.select`
    margin:0 15px;
    padding: 10px;
`;

const Option = styled.option`
    padding: 10px;
`;
const AmountContainer=styled.div`
    display: flex;
    align-items: center;
`;
const AddContainer=styled.div`
    display: flex;
`;
const Amount = styled.span`
    border: 1px solid teal;
    padding: 5px;
    height: 30px;
    width: 30px;
    border-radius: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`;



const SingleProduct = () => {
    return (
        <Container>
            <Wraper>
                <ImageContainer>
                    <Image src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80">
                    </Image>
                </ImageContainer>
                <InfoContainer>
                    <Title>
                        Pink Color Dress
                    </Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente neque esse in! Distinctio ipsam quae quasi impedit enim quos velit.</Desc>
                    <Price>$250</Price>
                    <FilterContainer>
                    <Filter>
                    <FilterText>
                        Color : 
                    </FilterText>
                    <FilterColor color="#ff0000" />
                    <FilterColor color="#5900fd" />
                    <FilterColor color="#73ff00" />
                    <FilterText>
                        Size : 
                    </FilterText>
                    <Select>
                        <Option disabled selected>Size </Option>
                        <Option>M </Option>
                        <Option>S </Option>
                        <Option>L </Option>
                        <Option>XL </Option>
                        <Option>XXL </Option>
                    </Select>
                </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
                </InfoContainer>
            </Wraper>
        </Container>
    );
};

export default SingleProduct;