import React, { useEffect } from 'react'
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react'
import { Button, useDisclosure } from '@chakra-ui/react'
import { Lemonada } from 'next/font/google'
const lemonada = Lemonada({ subsets: ['latin'] })
import { useFormData } from '../context/context';
import { useState } from 'react';
import { form_data, OptionType, QuestionType } from '@/data'
import { BiRightArrowAlt } from 'react-icons/bi'

const Question5 = () => {
  const { step, setStep, formData, setFormData } = useFormData()
  const [style, setStyle] = useState(false)

  const Que05 = form_data[4];

  function handleSubmit(e: string) {
    // e.preventDefault()
    setStyle(true)
    setStep(8)
    // addData(e);
    setFormData({ ...formData, employment_status: e })
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
      <Box height={{ sm: "70%", mm: "80%", md: "70%", lg: "", xl: "70%", "2xl": "70%" }}
        className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'}
        opacity={`${style ? '0' : '1'}`}
        width={{ sm: "90%", md: "85%", lg: "", xl: "85%", "2xl": "85%" }}
        margin={{ sm: "auto" }}
        display={"flex"} alignItems={"start"} 
        gap={{ sm: "10px", md: "12px", lg: "20px", xl: "24px" }}>

        <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} >
          <Text fontSize={{ sm: "16px", ml: "22px", md: "30px", lg: "32px", xl: "40px", "2xl": "48px" }}
            textColor={"#FFF"}>{Que05.id}</Text>
          <Text fontSize={{ sm: "12px", ml: "14px", md: "20px", lg: "20px", xl: "28px", "2xl": "35px" }}
            textColor={"#FFF"}>
            <BiRightArrowAlt />
          </Text>
        </Box>
        <Box display={"flex"} flexDir={"column"} gap={{ sm: "10px", md: "14px", lg: "24px", xl: "30px" }}>
          <Box>
            <Text fontSize={{ sm: "16px", ml: "22px", md: "30px", lg: "30px", xl: "40px", "2xl": "48px" }} textColor={"#FFF"}
            >{Que05.text}</Text>
            <Text fontSize={{ sm: "12px", ml: "14px", md: "20px", lg: "20px", xl: "28px", "2xl": "32px" }}
              textColor={"#A5BFFF"}
              paddingTop={{ sm: "4px", md: "10px", lg: "", xl: "15px", "2xl": "15px" }}
            >{Que05.subtext}</Text>
          </Box>
          <Box display={"flex"} gap={{ sm: "18px" , md: "20px", lg: "45px", xl: "50px" }} >
            {
              Que05.options.map((data: OptionType, id: number) => {
                return <Box border={"solid 1px white"} key={id}
                  w={{ xl: '300px', lg: "180px", md: "150px", sm: "80px", ml: "110px" }}
                  h={{ xl: "350px", lg: "200px", md: "170px", sm: "95px", ml: "140px" }}
                  display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}
                  gap={{ xl: "18px", lg: "8px", md: "10px", sm: "4px", }}
                  bgColor={'rgba(253, 255, 252, 0.10)'}
                  paddingX={{ sm: "5px", ml: "10px", md: "15px", lg: "20px", xl: "40px" }}
                  paddingY={{ sm: "20px", ml: "20px", md: "20px", lg: "50px", xl: "50px" }}
                  _hover={{ background: 'rgba(253, 255, 252, 0.30)' }}
                  onClick={() => handleSubmit("male")}>
                  <Image
                    height={{ xl: "224px", lg: "230px", sm: "50px", md: "100px", ml: "80px" }}
                    width={{ xl: "224px", lg: "230px", sm: "60px", md: "110px", ml: "80px" }} src={data.src} />
                  <Text fontSize={{ xl: "24px", lg: "15px", sm: "10px", md: "14px" }}
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

export default Question5