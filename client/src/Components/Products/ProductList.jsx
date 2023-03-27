import styled from "@emotion/styled";
import Products from "./Products";

const Container = styled.div`
    padding: 20px;
`;
const Title = styled.h2`
    margin: 20px;
    text-align: center;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    
`;
const FilterText=styled.span`
    font-weight: 600;
    font-size: 20px;
`;
const Select = styled.select`
    margin-left: 20px;
    padding: 10px;
`;

const Option = styled.option`
    padding: 10px;
`;



const ProductList = () => {
    return (
        <Container>
            <Title>Dress </Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products : 
                    </FilterText>
                    <Select>
                        <Option disabled selected>Color </Option>
                        <Option>Red </Option>
                        <Option>Black </Option>
                        <Option>Blue </Option>
                        <Option>Yellow </Option>
                        <Option>Green </Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size </Option>
                        <Option>M </Option>
                        <Option>S </Option>
                        <Option>L </Option>
                        <Option>XL </Option>
                        <Option>XXL </Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products :
                    </FilterText>
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Price Low To High </Option>
                        <Option>Price High To Low</Option>
                        <Option>On Sale </Option>
                </Select>
                </Filter>
            </FilterContainer>
            <Products/>
        </Container>
    );
};

export default ProductList;