import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#ff4f4f2b,#5857577d),url('https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80');
`;

const Wraper = styled.div`
    width: 40%;
    padding: 40px;
    background-color: white;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Title = styled.h2`
    
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`;

const Button = styled.button`
    width: 40%;
    border: 1px solid teal;
    background-color: teal;
    color: wheat;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;

`;


const Register = () => {
    return (
        <Container>
            <Wraper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="e-mail" type='email' />
                    <Input placeholder="password" type="password" />
                    <Input placeholder="confirm password" type='password' />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data according to the <b>PRIVECY POLICY </b>
                    </Agreement>

                </Form>
                <Button>CREATE</Button>
            </Wraper>
        </Container>
    );
};

export default Register;