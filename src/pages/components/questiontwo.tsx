"use client"
import React, { useEffect } from 'react'
import { Box, Text, Image, Flex } from '@chakra-ui/react'
import { Button, useDisclosure } from '@chakra-ui/react'
import { Lemonada } from 'next/font/google'
const lemonada = Lemonada({ subsets: ['latin'] })
import { useFormData } from '../context/context';
import { useState } from 'react';
import { form_data } from '@/data'
import { BiRightArrowAlt } from 'react-icons/bi'
import { OptionType } from '@/data'

const Question2 = () => {
  const { step, setStep, formData, setFormData } = useFormData()
  const [style, setStyle] = useState(false);
  const Que2 = form_data[1];

  function handleSubmit(gender: string) {
    // e.preventDefault()
    setStyle(true)
    setStep(5)
    setFormData({ ...formData, gender: gender })
    console.log(gender)
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
    <Flex height={{ sm: "100vh" }} backgroundColor={"#7EA2FF"} overflow={'hidden'} flexDirection={"column"} bg={"#7EA2FF"}>
      <Box height={{ sm: "70%", mm: "70%", md: "70%", lg: "", xl: "70%", "2xl": "70%" }}
        className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'}
        opacity={`${style ? '0' : '1'}`}
        width={{ sm: "90%",mm: "80%", md: "85%", lg: "", xl: "85%", "2xl": "85%" }}
        margin={{ sm: "auto" }}
        display={"flex"} alignItems={"start"} 
        gap={{ sm: "10px", ml: "14px", md: "16px", lg: "20px", xl: "24px", "2xl": "25px" }}>

        <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} >
          <Text fontSize={{ sm: "16px", ml: "20px", md: "26px", lg: "30px", xl: "40px", "2xl": "48px" }}
            textColor={"#FFF"}>{Que2.id}</Text>
          <Text fontSize={{ sm: "10px", ml: "12px", md: "18px", lg: "20px", xl: "28px", "2xl": "35px" }}
            textColor={"#FFF"}>
            <BiRightArrowAlt />
          </Text>
        </Box>
        <Box >
          <Box>
            <Text fontSize={{ sm: "16px", ml: "20px", md: "26px", lg: "30px", xl: "40px", "2xl": "48px" }}
              textColor={"#FFF"}
            >{Que2.text}</Text>
            <Text fontSize={{ sm: "10px", ml: "12px", md: "18px", lg: "20px", xl: "28px", "2xl": "32px" }}
              textColor={"#A5BFFF"}
            >{Que2.subtext}</Text>
          </Box>
          <Box display={"flex"} gap={"20px"} 
          paddingTop={{ sm: "10px", md: "20px", lg: "", xl: "15px", "2xl": "24px" }}>
            {
              Que2.options.map((data: OptionType, id: number) => {
                return <Box border={"solid 1px white"} key={id}
                  w={{ sm: "80px", md: "150px", lg: "180px", xl: '270px' }}
                  h={{ sm: "90px", md: "170px", lg: "200px", xl: "300px" }}
                  display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}
                  gap={{ sm: "4px", md: "10px", lg: "8px", xl: "10px" }}
                  bgColor={'rgba(253, 255, 252, 0.10)'}

                  paddingX={{ sm: "7px", md: "15px", lg: "15px", xl: "35px" }}
                  paddingY={{ sm: "10px", md: "20px", lg: "20px", xl: "40px" }}
                  _hover={{ background: 'rgba(253, 255, 252, 0.30)' }}
                  onClick={() => handleSubmit(data.value as string)}>
                  <Image
                    height={{ sm: "60px", md: "120px", lg: "250px", xl: "224px" }}
                    width={{ sm: "60px", md: "120px", lg: "250px", xl: "224px" }}
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

export default Question2