"use client"
import { useFormData } from '../context/context';
import React, { useEffect, useState } from "react";
import { Box, Text, Stack, Flex, } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { form_data, OptionType, QuestionType } from '@/data';
import { BiRightArrowAlt } from 'react-icons/bi';

const Question3 = () => {
    const { Step, setStep, formData, setFormData } = useFormData()
    const [style, setStyle] = useState(false)

    const Que3: QuestionType = form_data[2];

    function handleSubmit(e: string) {
        setStyle(true)
        setStep(6)
        setFormData({ ...formData, queThree: e })
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
        <Flex height={{ sm: "100vh" }} backgroundColor={"#7EA2FF"} overflow={'hidden'} flexDirection={"column"}
            bg={"#7EA2FF"} className='initialPosition' transitionDuration={'1000ms'}
            transform={`${style ? 'translateY(0px)' : 'translateY(350px)'}`} opacity={`${style ? '0' : '1'}`}>
            <Box height={{ sm: "70%", mm: "80%", md: "70%", lg: "70%", xl: "80%", "2xl": "60%" }}
                width={{ sm: "90%", md: "80%", lg: "", xl: "85%", "2xl": "85%" }}
                margin={{ sm: "auto" }}
                display={"flex"} alignItems={"start"}
                gap={{ sm: "10px", md: "12px", lg: "16px", xl: "25px", "2xl": "25px" }}>

                <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} >
                    <Text fontSize={{ sm: "14px", ml: "20px", md: "24px", lg: "26px", xl: "40px", "2xl": "48px" }}
                        textColor={"#FFF"}>{Que3.id}</Text>
                    <Text fontSize={{ sm: "12px", ml: "14px", md: "14px", lg: "20px", xl: "28px", "2xl": "34px" }}
                        textColor={"#FFF"}>
                        <BiRightArrowAlt />
                    </Text>
                </Box>

                <Box display={"flex"} flexDir={"column"} gap={{ sm: "10px", md: "14px", lg: "8px", xl: "20px" }}>
                    <Box>
                        <Text fontSize={{ sm: "14px", ml: "20px", md: "24px", lg: "26px", xl: "40px", "2xl": "48px" }} textColor={"#FFF"}
                        >{Que3.text}</Text>
                        <Text
                            fontSize={{ sm: "8px", ml: "12px", md: "14px", lg: "18px", xl: "28px", "2xl": "34px" }}
                            textColor={"#A5BFFF"}
                            width={{ lg: "600px", xl: "800px" }}
                            > {Que3.subtext} </Text>
                    </Box>
                    <Box>
                        <Stack paddingY={{ sm: "3px", md: "10px", lg: "14px", xl: "22px" }}
                            gap={{ sm: "12px", md: "14px", lg: "16px", xl: "24px" }}>
                            {Que3.options.map((data: OptionType, id: number) => {
                                return <Box 
                                key={id}
                                onClick={(e) => {
                                    handleSubmit(data.value as string)
                                    handleOption(data.value)
                                }}
                                    border="1px" borderColor="white" borderRadius={{ sm: "3px", xl: "lg", lg: "5px" }}
                                    width={{ sm: "50%", md: "30%", lg: "40%", xl: "50%" }}
                                    display='flex'
                                    alignItems={"center"} padding={{ sm: "3px", md: "", lg: "10px", xl: "20px" }}
                                    paddingY={{ sm: "5px", md: "", lg: "10px", xl: "20px" }}
                                    paddingX={{ sm: "5px", md: "", lg: "8px", xl: "20px" }}
                                    gap={{ sm: "12px", md: "12px", lg: "14px", xl: "20px" }}
                                    backgroundColor={"#7eacff"}
                                    _hover={{ backgroundColor: "#9abffe", cursor: "pointer" }} transition="all 0.5s ease-in-out">
                                    <Box
                                        width={{ sm: "13px", md: "16px", lg: "18px", xl: "33px" }}
                                        height={{ sm: "13px", md: "16px", lg: "18px", xl: "33px" }}
                                        display={"flex"} justifyContent={"center"} alignItems={"center"}
                                        border="1px" backgroundColor={"#6ea3ff"} borderColor="white" borderRadius="2px">
                                        <Text textAlign={"center"}
                                            fontSize={{ sm: "5px", md: "8px", lg: "10px", xl: "14px" }}
                                            color={"white"}>{data.opt_no}</Text>
                                    </Box>
                                    <Text
                                        fontSize={{ sm: "8px", md: "10px", lg: "12px", xl: "20px" }}
                                        color={"white"}> {data.label}</Text>
                                </Box>
                            })
                            }
                        </Stack>
                    </Box>
                </Box>
            </Box>

        </Flex>
    );
};

export default Question3;