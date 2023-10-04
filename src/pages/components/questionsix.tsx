"use client"
import Question from "./dropdown1";
import React from 'react'
import { Box, Flex, Heading, Image, Text, Input } from "@chakra-ui/react"
import { BiRightArrowAlt } from 'react-icons/bi'
import { useEffect, useState } from "react"
import axios from "axios"
import { useFormData } from "../context/context";
import { form_data } from "@/data";

const Question6 = ({ data }: any) => {
  const [datas, setDatas] = useState([]);
  const { step, setStep, formData, setFormData, addData } = useFormData()
  const [style, setStyle] = useState(false)
  const Que06 = form_data[5];

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
    <Flex height={{ sm: "100vh" }} backgroundColor={"#7EA2FF"} className='initialPosition' 
    transitionDuration={'1000ms'} transform={'translateY(350px)'} opacity={`${style ? '0' : '1'}`}>
      <Box height={{ sm: "60%", mm: "70%", md: "70%", lg: "60%", xl: "60%", "2xl": "70%" }}
        width={{ sm: "90%", md: "85%", lg: "", xl: "85%", "2xl": "85%" }}
        margin={{ sm: "auto" }}
        display={"flex"} alignItems={"start"} 
        gap={{ sm: "8px", md: "20px", lg: "20px", xl: "30px", "2xl": "25px" }}>

        <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} >
          <Text fontSize={{ sm: "14px", ml: "16px", md: "20px", lg: "30px", xl: "40px", "2xl": "48px" }}
            textColor={"#FFF"}>{Que06.id}</Text>
          <Text fontSize={{ sm: "8px", ml: "12px", md: "14px", lg: "20px", xl: "28px", "2xl": "35px" }}
            textColor={"#FFF"}>
            <BiRightArrowAlt />
          </Text>
        </Box>

        <Box display={"flex"} flexDir={"column"} >
          <Box>
            <Text fontSize={{ sm: "14px", ml: "16px", md: "20px", lg: "30px", xl: "40px", "2xl": "48px" }} 
            textColor={"#FFF"} > {Que06.text}</Text>
            <Text fontSize={{ sm: "10px", ml: "10px", md: "14px", lg: "20px", xl: "28px", "2xl": "32px" }}
              textColor={"#A5BFFF"}
              paddingTop={{ sm: "6px", md: "10px", lg: "", xl: "15px", "2xl": "15px" }}
            >{Que06.subtext}</Text>
          </Box>
          <Box>
            <Box display={{ sm: "flex" }}
              gap={{ sm: "10px", md: "", lg: "", xl: "30px", "2xl": "30px" }}
              paddingY={{ sm: "15px", mm: "20px", md: "30px", lg: "30px", xl: "34px", "2xl": "64px" }}>
              <Question />
            </Box>
          </Box>
        </Box>


        <Image src="/money.gif" w={{ md: "180px", ml: "100px", sm: "80px" }}  />


      </Box>

    </Flex>
  )
}

export default Question6
