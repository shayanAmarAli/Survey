'use client'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { BiRightArrowAlt } from 'react-icons/bi'
import { useFormData } from '../context/context'
import { form_data, OptionType, QuestionType } from '@/data'



const Question14F = ({ data }: any) => {

  const { step, setStep, formData, setFormData, addData } = useFormData()
  const [style, setStyle] = useState(false)
  const Que14 = form_data[13];
  function handleSubmit(selected: any) {
    // e.preventDefault()
    setStyle(true)
    setStep(19)
    setFormData({ ...formData, support: selected })
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
    <Flex height={{sm: "100vh"}} backgroundColor={"#7EA2FF"} className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'} opacity={`${style ? '0' : '1'}`}>
            <Box height={{sm: "80%", mm: "80%", md: "80%", lg: "80%", xl: "70%", "2xl": "80%"}} 
            width={{sm: "90%", md: "85%", lg: "", xl: "80%", "2xl": "90%"}} 
            margin={{sm: "auto"}} 
            display={"flex"} alignItems={"start"} gap={{sm: "10px", md: "12px", lg: "18px", xl:"25px", "2xl": "25px"}}>

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text fontSize={{ sm: "12px", md: "18px", lg: "20px", xl: "38px", "2xl": "48px" }} 
                    textColor={"#FFF"} > {Que14.id} </Text>
                    <Text fontSize={{ sm: "10px", md: "14px", lg: "16px", xl: "26px", "2xl": "35px" }} 
                    textColor={"#FFF"}>
                        <BiRightArrowAlt />
                    </Text>
                </Box>

                <Box display={"flex"} flexDir={"column"} 
                gap={{ sm: "15px", mm: "20px", md: "20px", lg: "28px", xl: "40px", "2xl": "54px" }}>
                    <Box 
                    // width={{ sm: "250px", mm: "250px", md: "450px", lg: "600px", xl: "900px", "2xl": "1200px" }}
                    >
                        <Text fontSize={{ sm: "12px", md: "18px", lg: "20px", xl: "34px", "2xl": "48px"  }} textColor={"#FFF"}
                        >{Que14.text}</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"}
                        gap={{ sm: "8px", md: "12px", lg: "14px", xl: "16px", "2xl": "30px" }} >
                        {
                            Que14.options.map((data: OptionType, id: number) => {
                                return <Box border={"1px"} borderColor={"white"} 
                                backgroundColor={"rgba(253, 255, 252, 0.10)"}
                                display={"flex"} alignItems={"center"} 
                                key={id}
                                gap={{ sm: "10px", md: "12px", lg: "12px", xl: "18px", "2xl": "22px" }}
                                width={{ sm: "200px", ml: "270px", md: "350px", lg: "400px", xl: "500px", "2xl": "800px" }}
                                paddingX={{ sm: "10px", md: "12px", lg: "16px", xl: "18px", "2xl": "20px" }}
                                paddingY={{ sm: "10px", md: "12px", lg: "16px", xl: "18px", "2xl": "20px" }}
                                onClick={ ()=>handleSubmit(data.value)}
                                _hover={{ background: 'rgba(253, 255, 252, 0.30)' }}
                                >
                                    <Box
                                    border={"1px"} borderColor={"white"} 
                                    width={{ sm: "14px", md: "18px", lg: "16px", xl: "22px", "2xl": "30px" }}
                                    paddingX={{ sm: "2px", md: "4px", lg: "4px", xl: "6px", "2xl": "6px" }} 
                                    fontSize={{ sm: "8px",  md: "10px", lg: "10px", xl: "14px", "2xl": "20px" }} 
                                    textColor={"white"}
                                    textAlign={"center"}
                                    >{data.opt_no}</Box>
                                    <Text
                                    fontSize={{ sm: "8px", ml: "10px", md: "12px", lg: "12px", xl: "16px", "2xl": "24px" }}
                                    textColor={"white"}
                                    >{data.label}</Text>
                                </Box>
                            })
                        }
                    </Box>
                </Box>
            </Box>

        </Flex>
  )
}

export default Question14F