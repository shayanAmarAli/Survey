"use client"
import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { BiRightArrowAlt } from 'react-icons/bi'
import Dropdown from './dropdown'
import { useFormData } from '../context/context'
import { form_data } from '@/data'
import { QuestionType } from '@/data'

const Question1 = () => {
  const [style, setStyle] = useState(false)
  const Que01: QuestionType = form_data[0];

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
    <Flex height={{ sm: "100vh" }} backgroundColor={"#7EA2FF"} overflow={'hidden'} flexDirection={"column"} 
    bg={"#7EA2FF"} className='initialPosition' transitionDuration={'1000ms'} 
    transform={`${style ? 'translateY(0px)' : 'translateY(350px)'}`} opacity={`${style ? '0' : '1'}`}>
      <Box height={{ sm: "70%", mm: "80%", md: "70%", lg: "", xl: "70%", "2xl": "70%" }}
        width={{ sm: "90%", md: "85%", lg: "", xl: "85%", "2xl": "85%" }}
        margin={{ sm: "auto" }}
        display={"flex"} alignItems={"start"} 
        gap={{ sm: "10px", ml: "14px", md: "18px", lg: "", xl: "25px", "2xl": "25px" }}>

        <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} >
          <Text fontSize={{ sm: "14px", mm: "18px", ml: "22px", md: "26px", lg: "32px", xl: "40px", "2xl": "48px" }}
            textColor={"#FFF"}>{Que01.id}</Text>
          <Text fontSize={{ sm: "10px", mm: "12px", ml: "12px", md: "16px", lg: "20px", xl: "28px", "2xl": "35px" }}
            textColor={"#FFF"}>
            <BiRightArrowAlt />
          </Text>
        </Box>

        <Box >
          <Box>
            <Text fontSize={{ sm: "14px", mm: "18px", ml: "22px", md: "26px", lg: "30px", xl: "40px", "2xl": "48px" }} 
            textColor={"#FFF"}
            >{Que01.text}</Text>
            <Text fontSize={{ sm: "8px", mm: "12px", ml: "12px", md: "16px", lg: "20px", xl: "28px", "2xl": "32px" }} 
            textColor={"#A5BFFF"}
            >{Que01.subtext}</Text>
          </Box>
          <Box display={{ sm: "flex" }} flexWrap={"wrap"}
            gap={{ sm: "10px", md: "", lg: "", xl: "30px", "2xl": "30px" }}
            paddingY={{ sm: "15px", mm: "20px", md: "30px", lg: "", xl: "44px", "2xl": "64px" }}>
            <Dropdown />
          </Box>
        </Box>
      </Box>

    </Flex>
  )

}

export default Question1