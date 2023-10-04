"use client"
import React, { useEffect } from 'react'
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react'
import { Lemonada } from 'next/font/google'
const lemonada = Lemonada({ subsets: ['latin'] })
import { useFormData } from '../context/context';
import { useState } from 'react';
import { BsArrowRightShort } from "react-icons/bs"
import { BiRightArrowAlt } from 'react-icons/bi';
import { form_data, OptionType, QuestionType } from '@/data';

const Question7 = () => {
  const { Step, setStep, formData, setFormData } = useFormData()
  const [style, setStyle] = useState(false)

  const Que07 = form_data[6];

  function handleSubmit(e: string) {
    // e.preventDefault()
    setStyle(true)
    setStep(11)
    // addData(e)
    setFormData({ ...formData, companies_prefer: e })
  }
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".initialPosition"
    );
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the "animate" class when the element is in the viewport
          entry.target.classList.add("animate");
        }
      });
    });
    elements.forEach((element) => {
      observer.observe(element);
    });
  }, [])

  return (
    // <Box className='initialPosition' transitionDuration={'1000ms'} transform={ 'translateY(350px)'} opacity={`${style ? '0' : '1'}`} >
    // <Box pt={{xl:'198px',lg:"110px",sm:"70px",md:"80px"}} pl={{xl:"162", lg:'100px',sm:"40px",md:"60px"}} background={"#7EA2FF"} height={{xl:"1088",lg:"0px",sm:"00"}}  textColor={"#ffff"}  className={lemonada.className}> <Box display={"flex"} alignItems={"start"}><Text fontSize={{xl:"48", lg:"30px",sm:"15px"}} mt={{xl:"1",lg:"4", sm:"1"}}>7</Text><Text mt={{xl:"4",md:"5px" ,sm:"5px",lg:"6"}} fontSize={{xl:"48px", sm:"20px", lg:"30px"}}   ><BsArrowRightShort /></Text><Heading  fontSize={{xl:"48px",lg:"30px",sm:"15px",md:"20px"}} pl={{lg:'15px',sm:"0"}} lineHeight={{lg:'70px',sm:"30px"}} > Do you think companies prefer to hire 
    // male employees over female employees?</Heading> </Box>
    // <Text pl={{xl:'87px',lg:"87px",sm:"30px"}} fontSize={{xl:"32px",lg:"20px",sm:"12px",md:"16px"}} pt={{xl:"20px",lg:"2px",sm:"2px"}}textColor={"#A5BFFF"}>Please select the right option.</Text>
    // <Box  display={"flex"} gap={{xl:"30px" , lg:"10px",sm:"10px"}} mt={{xl:"30px",lg:"20px",sm:"10px",md:"15px"}} pl={{lg:"90px",sm:"30px",md:"38px"}}>
    //  <Box  border={"solid 1px"}  w={ {xl:'300px',lg:"150px",sm:"80px",md:"150px"}} h={{xl:"350px",lg:"175px",sm:"90px",md:"160px"}} bgColor={'rgba(253, 255, 252, 0.10)'}  py={{xl:'50px',lg:"25px",sm:"10px",md:"20px"}} px={{xl:'35px',lg:"15px",sm:"10px",md:"20px"}} onClick={(e) => handleSubmit("yes")}><Image height={{xl:"224px", lg:"110px",sm:"50px",md:"100px"}} w={{xl:"224px" ,lg:"160px",sm:"60px",md:"110px"}} src={"/yes.gif"}/>
    // <Text fontSize={{xl:"24px",lg:"15px",sm:"10px",md:"12px"}}  pt={{xl:"8px", lg:'4px',md:"10px",sm:"5px"}}  textAlign={"center"} >yes</Text> 
    // </Box>
    // <Box border={"solid 1px"} w={ {xl:'300px',lg:"150px",sm:"80px",md:"150px"}} h={{xl:"350px",lg:"175px",sm:"90px",md:"160px"}} bgColor={'rgba(253, 255, 252, 0.10)'}  py={{xl:'50px',lg:'25px',sm:"10px",md:"20px"}} px={{xl:'35px',lg:"15px",sm:"10px",md:"20px"}}  onClick={(e) => handleSubmit("no")}><Image height={{xl:"224px", lg:"110px",sm:"50px",md:"100px"}} w={{xl:"224px",lg:"160px",sm:"60px",md:"110px"}} src={"/no.gif"}/>
    // <Text  fontSize={{xl:"24px",lg:"15px",sm:"10px",md:"12px"}}  pt={{xl:"8px", lg:'4px',md:"10px",sm:"5px"}}  textAlign={"center"}>no</Text> 
    // </Box>

    // </Box>

    // </Box>
    // </Box>
    <Flex height={{ sm: "100vh" }} backgroundColor={"#7EA2FF"} overflow={'hidden'} flexDirection={"column"} bg={"#7EA2FF"}>
      <Box height={{ sm: "70%", mm: "80%", md: "70%", lg: "", xl: "70%", "2xl": "70%" }}
        className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'}
        opacity={`${style ? '0' : '1'}`}
        width={{ sm: "90%", md: "85%", lg: "", xl: "85%", "2xl": "85%" }}
        margin={{ sm: "auto" }}
        display={"flex"} alignItems={"start"} 
        gap={{ sm: "10px", md: "20px", lg: "", xl: "25px", "2xl": "25px" }}>

        <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} >
          <Text fontSize={{ sm: "16px", ml: "18px", md: "26px", lg: "28px", xl: "36px", "2xl": "48px" }}
            textColor={"#FFF"}>{Que07.id}</Text>
          <Text fontSize={{ sm: "12px", ml: "10px", md: "18px", lg: "16px", xl: "24px", "2xl": "35px" }}
            textColor={"#FFF"}>
            <BiRightArrowAlt />
          </Text>
        </Box>

        <Box display={"flex"} flexDir={"column"} gap={{ sm: "10px", md: "14px", lg: "18px", xl: "20px" }}>
          <Box width={{ sm: "", md: "", lg: "700px", xl: "900px" }}>
            <Text fontSize={{ sm: "16px", ml: "18px", md: "26px", lg: "28px", xl: "36px", "2xl": "48px" }}
              textColor={"#FFF"} >{Que07.text}</Text>
            <Text fontSize={{ sm: "10px", ml: "12px", md: "18px", lg: "16px", xl: "24px", "2xl": "32px" }} textColor={"#A5BFFF"}
              paddingTop={{ sm: "4px", md: "10px", lg: "", xl: "15px", "2xl": "15px" }} >{Que07.subtext}</Text>
          </Box>
          <Box display={"flex"} gap={"20px"} 
          paddingTop={{ sm: "10px", md: "20px", lg: "", xl: "15px", "2xl": "15px" }}>
            {
              Que07.options.map((data: OptionType, id: number) => {
                return <Box border={"solid 1px white"} key={id}
                  w={{ sm: "80px", md: "150px", lg: "180px", xl: '270px' }}
                  h={{ sm: "90px", md: "170px", lg: "200px", xl: "300px" }}
                  display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}
                  gap={{ sm: "4px", md: "10px", lg: "8px", xl: "10px" }}
                  bgColor={'rgba(253, 255, 252, 0.10)'}

                  paddingX={{ sm: "7px", md: "15px", lg: "25px", xl: "35px" }}
                  paddingY={{ sm: "10px", md: "20px", lg: "40px", xl: "40px" }}
                  _hover={{ background: 'rgba(253, 255, 252, 0.30)' }}
                  onClick={() => handleSubmit(data.value as string)}>
                  <Image
                    height={{ sm: "50px", md: "120px", lg: "230px", xl: "224px" }}
                    width={{ sm: "60px", md: "120px", lg: "230px", xl: "224px" }}
                    src={data.src} />
                  <Text fontSize={{ xl: "24px", lg: "15px", sm: "8px", md: "12px" }}
                    textColor={"white"}
                    textAlign={"center"}>{data.label}</Text>
                </Box>
              })
            }
          </Box>

        </Box>

      </Box>
    </Flex>

  )
}

export default Question7



