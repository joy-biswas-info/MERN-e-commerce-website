import styled from 'styled-components';
import {popularProducts} from '../../data';
import ProductsItem from './ProductsItem';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Products = () => {
    return (
        <Container>
            {
                popularProducts.map((product)=>(
                    <ProductsItem key={product.id} product={product} />
                ))
            }
        </Container>
    );
};

export default Products;