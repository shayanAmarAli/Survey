"use client"
import React, { useEffect } from 'react'
import { Box, Heading, Text, Image, Flex, Stack } from '@chakra-ui/react'
import { Button, useDisclosure } from '@chakra-ui/react'
import { useFormData } from '../context/context';
import { useState } from 'react';
import { BsArrowRightShort } from "react-icons/bs"
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Que10 = {
  id: 10,
  text: "People who have faced a lot of failures in life often blame their elementary education for their  misfortune because they couldn’t afford good schooling and never got the better opportunities in life. How strongly do you feel about this?",
  subtext: "Please select the right option.",
  options: [
    { value: "i strongly agree", src: "/smile.gif", label: "I strongly agree" },
    { value: "i somewhat agree", src: "/thumbsUP.gif", label: "I somewhat agree" },
    { value: "i don't have idea about this", src: "/confuse.gif", label: "I don't have idea about this" },
    { value: "i somewhat disagree", src: "/thumbsDown.gif", label: "I somewhat disagree" },
    { value: "i strongly disagree", src: "/disappointed.gif", label: "I strongly disagree" },
  ],
}

const Question10 = () => {
  const { step, setStep, formData, setFormData } = useFormData();
  const [style, setStyle] = useState(false)

  function handleSubmit(e: string) {
    // e.preventDefault()
    setStyle(true)
    // if (formData.gender == "female") {
    //   setStep(13)
    // }
    // else {
    //   setStep(11)
    // }

    setStep(14)
    setFormData({ ...formData, experience: e })
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
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}
      backgroundColor={"#7EA2FF"}
      height={"100vh"}

      className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'} 
      opacity={`${style ? '0' : '1'}`}>
      <Box
        height={{ sm: "90%", mm: "70%", md: "70%", lg: "80%", xl: "70%", "2xl": "80%" }}
        display={"flex"} flexDirection={"column"} margin={"auto"} justifyContent={"flex-start"} alignItems={"start"}
      >
        <Box color={"white"} width={{ sm: "95%", mm: "90%", md: "90%", lg: "80%", xl: "80%" }}
          display={"flex"} margin={"auto"} justifyContent={"flex-start"} alignItems={"start"}
          gap={{ sm: "5px", md: "15px", lg: "25px", xl: "45px", "2xl": "49px" }}
        >

          <Box width={{ sm: "40px", md: "40px", lg: "60px", xl: "80px" }} display={"flex"} alignItems={"center"}>
            <Text fontSize={{ sm: "12px", md: "22px", lg: "20px", xl: "46px" }}> {Que10.id}</Text>
            <ArrowForwardIcon fontSize={{ sm: "10px", md: "12px", lg: "14px", xl: "30px" }} />
          </Box>
          <Box width={{ sm: "95%", mm: "90%", md: "90%", lg: "80%", xl: "80%" }}>
            <Text fontSize={{ sm: "12px", md: "24px", lg: "22px", xl: "48px" }} display={"flex"} alignItems={"center"}>
              {Que10.text} </Text>
            <Text fontSize={{ sm: "10px", md: "12px", lg: "14px", xl: "30px" }} textColor={"#9bc0ff"} pt={"12px"}>
              {Que10.subtext}</Text>
          </Box>
        </Box>
        <Box display={"flex"} gap={{ sm: "14px", md: "16px", lg: "30px", xl: "40px", "2xl": "57px" }}
          flexWrap={"wrap"}
          justifyContent={{ sm: "space-around", mm: "center", md: "100%", lg: "85%", xl: "90%", "2xl": "70%" }}
          width={{ sm: "90%", mm: "90%", md: "100%", lg: "85%", xl: "90%", "2xl": "70%" }}
          
          margin={"auto"}
        >
          {
            Que10.options.map((data: any, id: number) => {
              return <Box key={id}
                display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}
                gap={"10px"}
                width={{ sm: "100px", md: "130px", lg: "150px", xl: "230px", "2xl": "250px" }}
                height={{ sm: "100px", md: "130px", lg: "150px", xl: "230px", "2xl": "250px" }}
                border={"1px solid white"}
                borderRadius={"3px"}
                _hover={{ background: 'rgba(253, 255, 252, 0.30)' }}
                bg={"rgba(253, 255, 252, 0.10)"}
                onClick={() => {
                  handleSubmit(data.value)
                }}
              >
                <Image src={data.src} alt={data.value}
                  width={{ sm: "50px", md: "65px", lg: "70px", xl: "130px", "2xl": "150px" }}
                  height={{ sm: "50px", md: "65px", lg: "70px", xl: "130px", "2xl": "150px" }}
                />
                <Text
                  fontSize={{ sm: "6px", mm: "8px", md: "12px", lg: "14px", xl: "18px", "2xl": "20px" }}
                  textAlign={"center"}
                  textColor={"white"}
                >{data.label}</Text>
              </Box>
            })
          }
        </Box>

      </Box>
    </Box>
  )
}

export default Question10




