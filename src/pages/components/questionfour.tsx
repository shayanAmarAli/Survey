"use client"
import { useFormData } from '../context/context';
import React, { useEffect, useState } from "react";
import { Box, Text, Stack, Flex, Image, Center } from "@chakra-ui/react";
import "tailwindcss/tailwind.css";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { form_data, OptionType, QuestionType } from '@/data';

const Question4 = () => {
    const { Step, setStep, formData, setFormData, } = useFormData()
    const [style, setStyle] = useState(false)

    const Que04: QuestionType = form_data[3];
    
    function handleSubmit(e: string) {
        setStyle(true)
        setStep(7)
        setFormData({ ...formData, queFour: e })
    }
    const handleOption = (selectedOPT: any) => {
        console.log(selectedOPT);
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
        <Flex height={{ sm: "100vh" }} backgroundColor={"#7EA2FF"} overflow={'hidden'}
            flexDirection={"column"} bg={"#7EA2FF"} className='initialPosition'
            transitionDuration={'1000ms'} transform={`${style ? 'translateY(0px)' : 'translateY(350px)'}`}
            opacity={`${style ? '0' : '1'}`}>
            <Box height={{ sm: "80%", mm: "80%", ml: "90%", md: "70%", lg: "90%", xl: "80%", "2xl": "70%" }}
                width={{ sm: "90%", md: "85%", ml: "85%", lg: "90%", xl: "80%", "2xl": "75%" }}
                margin={{ sm: "auto" }}
                display={"flex"} alignItems={"start"} justifyContent={"start"}
                gap={{ sm: "10px", md: "12px", lg: "", xl: "25px", "2xl": "25px" }}>
                <Box color={"white"}
                    width={{ sm: "100%", mm: "90%", ml: "100%", md: "90%", xl: "100%" }}
                    height={{ sm: "70%", mm: "80%", ml: "", md: "70%", lg: "80%", xl: "80%", "2xl": "70%" }}
                    display={"flex"} margin={"auto"} >
                    <Box width={{ sm: "40px", md: "40px", lg: "60px", xl: "80px" }}>
                        <Text display={"flex"} fontSize={{ sm: "12px", ml: "", md: "20px", lg: "30px", xl: "40px" }}
                            paddingX={"10px"} alignItems={"center"}> 4
                            <ArrowForwardIcon paddingRight={{ sm: "5px", md: "12px", lg: "16px", xl: "20px" }}
                                width={{ sm: "14px", ml: "", md: "25px", lg: "30px", xl: "45px" }}
                                height={{ sm: "14px", ml: "", md: "25px", lg: "30px", xl: "45px" }} /></Text>
                    </Box>
                    <Box display={"flex"} flexDir={"column"} gap={{ sm: "10px", md: "14px", lg: "20px", xl: "50px" }}>
                        <Box>
                            <Box w={{ xl: "700px" }}>
                                <Text fontSize={{ sm: "10px", ml: "14px", md: "20px", lg: "30px", xl: "40px" }}
                                    display={"flex"} alignItems={"center"} >{Que04.text}</Text>
                                <Text fontSize={{ sm: "10px", ml: "12px", md: "12px", lg: "20px", xl: "30px" }}
                                    textColor={"#9bc0ff"} lineHeight={{sm: "30px", xl: "50px"}} >{Que04.subtext}</Text>
                            </Box>
                        </Box>
                        <Stack 
                            gap={{ sm: "12px", md: "14px", lg: "16px", xl: "24px" }}>
                            {Que04.options.map((data: OptionType, id: number) => {
                                return <Box onClick={(e) => {
                                    handleSubmit(data.value as string)
                                    handleOption(data.value)
                                }}
                                    key={id}
                                    border="1px" borderColor="white" borderRadius={{ sm: "3px", xl: "lg", lg: "5px" }}
                                    width={{ sm: "60%", ml: "50%", md: "35%", lg: "45%", xl: "40%" }}
                                    display='flex'
                                    alignItems={"center"} padding={{ sm: "3px", md: "", lg: "10px", xl: "20px" }}
                                    paddingY={{ sm: "5px", md: "", lg: "14px", xl: "20px" }}
                                    paddingX={{ sm: "5px", md: "", lg: "10px", xl: "20px" }}
                                    background='rgba(253, 255, 252, 0.30)'
                                    _hover={{ backgroundColor: "#9abffe", cursor: "pointer" }}
                                    transition="all 0.5s ease-in-out">
                                    <Box
                                        width={{ sm: "13px", md: "16px", lg: "20px", xl: "33px" }}
                                        height={{ sm: "13px", md: "16px", lg: "20px", xl: "33px" }}
                                        display={"flex"} justifyContent={"center"} alignItems={"center"}
                                        border="1px" backgroundColor={"#6ea3ff"} borderColor="white" borderRadius="2px">
                                        <Text textAlign={"center"} fontSize={{ sm: "5px", md: "8px", lg: "10px", xl: "14px" }}
                                            color={"white"}>{data.opt_no}</Text>
                                    </Box>
                                    <Text paddingX={{ sm: "12px", md: "12px", lg: "16px", xl: "20px" }}
                                        fontSize={{ sm: "8px", md: "10px", lg: "14px", xl: "20px" }} 
                                        color={"white"}> {data.label}</Text>
                                </Box>
                            })
                            }
                        </Stack>
                    </Box>
                    <Box >
                        <Image height={{ xl: '250px', lg: "200px", md: "140px", sm: "100px" }}
                            width={{ xl: "100%", lg: "140px", md: "100px", sm: "50px" }} 
                            src='/Results.png' />
                    </Box>
                </Box>
            </Box>

        </Flex>
    );
};

export default Question4;

