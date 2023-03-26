import styled from "styled-components";

const Container=styled.div`
height: 30px;
background-color: teal;
color: white;
text-align: center;
padding: 2px;
    
`

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping On Order over $50
        </Container>
    );
};

export default Announcement;