"use client"
import { useFormData } from '../context/context';
// Import React, Chakra UI and Tailwind CSS components
import React, { useEffect, useState } from "react";
import { Box, Text, Stack, Flex, } from "@chakra-ui/react";
import "tailwindcss/tailwind.css";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { form_data, OptionType, QuestionType } from '@/data';

// Define a custom component for the animation or transition
const Question9 = () => {
    const [value, setValue] = useState("");
    const [index, setIndex] = useState(0);
    const Que09: QuestionType = form_data[8];

    const { Step, setStep, formData, setFormData } = useFormData()
    const [style, setStyle] = useState(false)
    function handleSubmit(e: string) {
        //   e.preventDefault()
        setStyle(true)
        setStep(13)
        //   addData(e);
        setFormData({ ...formData, misconceptions: e })
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
        <Flex h="100vh" flexDirection={"column"} backgroundColor={"#7EA2FF"} className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'} opacity={`${style ? '0' : '1'}`}>
            <Box color={"white"} width={{ sm: "95%", mm: "90%", md: "90%", lg: "90%", xl: "85%", "2xl": "90%" }}
                display={"flex"} margin={"auto"} justifyContent={"flex-start"} alignItems={"start"}
                gap={{ sm: "5px", md: "12px", lg: "14px", xl: "30px" }}>
                <Box width={{ sm: "40px", ml: "50px", md: "40px", lg: "50px", xl: "60px" }}
                    display={"flex"} alignItems={"center"}>
                    <Text fontSize={{ sm: "12px", ml: "16px", md: "20px", lg: "26px", xl: "28px" }}> {Que09.id}</Text>
                    <ArrowForwardIcon fontSize={{ sm: "8px", md: "10px", lg: "12px", xl: "18px" }} />
                </Box>
                <Box>
                    <Text fontSize={{ sm: "12px", ml: "16px", md: "20px", lg: "26px", xl: "28px" }}
                        textColor={"white"}
                    >{Que09.text}</Text>
                    <Stack paddingY={{ sm: "8px", md: "10px", lg: "14px", xl: "22px" }}
                        gap={{ sm: "12px", md: "14px", lg: "16px", xl: "24px" }}>
                        {Que09.options.map((data: OptionType, id: number) => {
                            return <Box onClick={() => {
                                handleSubmit(data.value as string)
                                handleOption(data.value)
                            }}
                                border="1px" borderColor="white" borderRadius={{ sm: "3px", xl: "lg" }}
                                width={{ sm: "85%", md: "45%", lg: "45%", xl: "55%", "2xl": "900px" }}
                                height={{ sm: "85%", md: "45%", lg: "45%", xl: "55%", "2xl": "565px" }}
                                key={id}
                                display='flex'
                                alignItems={"center"} padding={{ sm: "3px", md: "", lg: "10px", xl: "20px" }}
                                gap={{ sm: "6px", md: "12px", lg: "14px", xl: "20px" }}
                                paddingY={{ sm: "5px", md: "", lg: "10px", xl: "18px", "2xl": "20px" }}
                                paddingX={{ sm: "8px", md: "", lg: "14px", xl: "26px", "2xl": "30px" }}
                                background='rgba(253, 255, 252, 0.30)'
                                _hover={{ backgroundColor: "#9abffe", cursor: "pointer" }} transition="all 0.5s ease-in-out">

                                <Box
                                    width={{ sm: "13px", md: "16px", lg: "20px", xl: "33px" }}
                                    height={{ sm: "13px", md: "16px", lg: "20px", xl: "33px" }}
                                    display={"flex"} justifyContent={"center"} alignItems={"center"}
                                    border="1px" backgroundColor={"#6ea3ff"} borderColor="white" borderRadius="2px">
                                    <Text textAlign={"center"} fontSize={{ sm: "5px", md: "6px", lg: "8px", xl: "14px" }}
                                        color={"white"}>{data.opt_no}</Text>
                                </Box>

                                <Text
                                    fontSize={{ sm: "7px", mm: "8px", ml: "9px", md: "10px", lg: "12px", xl: "20px" }} color={"white"}> {data.label}</Text>
                            </Box>
                        })
                        }
                    </Stack>
                </Box>
            </Box>
        </Flex >
    );
};

export default Question9;