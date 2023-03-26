import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import {sliderItems} from '../../data';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    width: 40px;
    height: 40px;
    background-color: #fff1f1;
    opacity: 0.5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction==="left" && "10px"};
    right: ${props=>props.direction==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 1111;
`;

const Wraper=styled.div`
        height: 100%;
        display: flex;
        transition: 0.9s ease;
        transform: translateX(${props=>props.sliderIndex * -100}vw);
    `

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props=>props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title=styled.h1`
    font-size: 74px;
`;

const Description = styled.p`
    margin: 50px 0 ;
    font-weight: 400;
    letter-spacing: 3px;
    font-size: 25px;
`;

const Button = styled.button`
background-color: transparent;
font-size: 20px;
padding: 10px;
cursor: pointer;
border: 1px solid;
    
`;

const Image = styled.img`
    height: 80%;
`;

const Slider = () => {

    const [sliderIndex,setSliderIndex]=useState(0);
    console.log(sliderIndex);

    const handleClick=(direction)=>{
        console.log('clicked');
        if(direction==="left"){
            setSliderIndex(sliderIndex > 0 ? sliderIndex-1 : 1)
        }else{
            setSliderIndex(sliderIndex < 1 ? sliderIndex+1 : 0)
        }
    };


    return (
        <Container>
            <Arrow direction='left' onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>

            <Wraper sliderIndex={sliderIndex}>
                {
                    sliderItems.map(item=>(
                    <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
                    ))
                }
            </Wraper>

            <Arrow direction='right'  onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
};

export default Slider;