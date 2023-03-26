import {Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    font-size: 50px;
`;
const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
`;
const InputContainer = styled.div`
    background-color: white;
    border: 1px solid teal;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 550px;
`;
const Input = styled.input`
    border: none;
    padding: 10px;
    flex: 8;
    &:focus{
        border: 1px solid teal;
        outline: none;
    }
`;

const Button = styled.button`
    border: 0;
    flex: 1;
    background-color: teal;
    color: white;
`;



const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter </Title>
            <Description>Get Timely Updets About Offers and Promotins </Description>
            <InputContainer>
            <Input placeholder="Your Email Here"/>
            <Button>
                <Send color="#fff"></Send>
            </Button>
            </InputContainer>
        </Container>
    );
};

export default NewsLetter;