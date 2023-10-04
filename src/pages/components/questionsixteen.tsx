"use client"
import React, { useEffect, useState } from 'react'
import { Box, Flex, Button, Image, Text, Input } from "@chakra-ui/react"
import { BiRightArrowAlt } from 'react-icons/bi'
import { color } from 'framer-motion'
import { useFormData } from '../context/context'
import { form_data, OptionType, QuestionType } from '@/data'


const Question16 = () => {
    const { step, setStep, formData, setFormData, addData } = useFormData();
    const [newEmail, setNewEmail] = useState<string>("");
    const [style, setStyle] = useState(false);

    const Que16 = form_data[15];
    function handleSubmit() {
      // e.preventDefault()
      setStyle(true)
      setStep(22)
      setFormData({...formData, email: newEmail})
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
        <Flex height={{ sm: "100vh" }} backgroundColor={"#7EA2FF"} className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'} opacity={`${style ? '0' : '1'}`}>
            <Box height={{ sm: "80%", mm: "80%", md: "70%", lg: "70%", xl: "70%", "2xl": "70%" }}
                width={{ sm: "90%", md: "85%", lg: "", xl: "80%", "2xl": "80%" }}
                margin={{ sm: "auto" }}
                display={"flex"} alignItems={"start"} gap={{ sm: "10px", md: "12px", lg: "", xl: "25px", "2xl": "25px" }}>

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mt={"20"} >
                    <Text fontSize={{ sm: "12px", md: "18px", lg: "24px", xl: "38px", "2xl": "44px" }} textColor={"#FFF"}
                    >{Que16.id}</Text>
                    <Text fontSize={{ sm: "10px", md: "16px", lg: "20px", xl: "28px", "2xl": "35px" }} textColor={"#FFF"}>
                        <BiRightArrowAlt />
                    </Text>
                </Box>

                <Box width={"90%"}>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box mt={"20"}>
                            <Text fontSize={{ sm: "12px", md: "18px", lg: "28px", xl: "48px", "2xl": "44px" }} textColor={"#FFF"}
                                lineHeight={{ sm: "15px", mm: "22px", md: "28px", lg: "40px", xl: "55px", "2xl": "60px" }}
                            >{Que16.text}</Text>
                            <Text fontSize={{ sm: "10px", md: "14px", lg: "20px", xl: "32px", "2xl": "32px" }} textColor={"#A5BFFF"}
                                paddingTop={{ sm: "4px", md: "10px", lg: "12px", xl: "12px", "2xl": "15px" }}
                            >{Que16.subtext}</Text>
                        </Box>
                        <Box right={{xl:"0px",lg:"300px"}}>
                            <Image src={"/blue.png"} 
                            width={{sm: "100px", md: "200px", lg: "150px", xl: '250px', "2xl": "500px"}} 
                            alt='Email' />
                        </Box>
                    </Box>
                    <Box 
                        paddingY={{ sm: "10px", mm: "20px", md: "20px", lg: "45px", xl: "35px", "2xl": "54px" }}>
                        <Input placeholder='name@example.com'
                                _placeholder={{color:"#A5BFFF"}}
                                px={"none"}
                        
                            fontSize={{sm: "10px", lg: "20px", xl: '24px', "2xl": "32px"}}
                            paddingY={{"2xl": "3px"}}
                            width={{sm: "200px", md: "450px", lg: "700px", xl: '900px', "2xl": "900px"}}
                            height={{sm:"20px",lg:"60px"}}
                            border={"0"}
                            rounded={"none"}
                            borderBottom={"1px"}
                            borderColor={""}
                            value={newEmail}
                            onChange={(e: any)=> 
                              {
                                e.preventDefault();
                                setNewEmail(e.target.value)
                              }}
                            textColor={"#FFF"}
                        ></Input>
                    </Box>
                    <Box>
                      <Button
                      textColor={"white"}
                      fontSize={{ sm: "12px", md: "14px", lg: "16px", xl: "18px", "2xl": "22px" }}
                      border={"1px solid white"}
                      borderRadius={"3px"}
                      backgroundColor={"rgba(253, 255, 252, 0.10)"}
                      _hover={{textColor: "rgba(253, 255, 252, 0.10)", backgroundColor: "#7EA2FF"}}
                      onClick={()=>{
                        
                        handleSubmit()
                      }}
                      >Next</Button>
                    </Box>
                </Box>
            </Box>

        </Flex>
    )
}

export default Question16