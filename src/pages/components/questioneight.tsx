"use client"
import { useFormData } from '../context/context';
// Import React, Chakra UI and Tailwind CSS components
import React, { useEffect, useState } from "react";
import { Box, Text, Stack, Flex, } from "@chakra-ui/react";
import "tailwindcss/tailwind.css";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { form_data, OptionType, QuestionType } from '@/data';


// Define a custom component for the animation or transition
const Question8 = () => {
    const [value, setValue] = useState("");
    const [index, setIndex] = useState(0);
    const Que08: QuestionType = form_data[7];

    const { Step, setStep, formData, setFormData } = useFormData()
    const [style, setStyle] = useState(false)
    function handleSubmit(e: string) {
        //   e.preventDefault
        setStyle(true)
        setStep(12)
        //   addData(e);
        console.log("selected value for page 8", e)
        setFormData({ ...formData, queEight: e })
        console.log("screen page context updated", formData)
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
            <Box color={"white"}
                width={{ sm: "90%", mm: "90%", md: "90%", lg: "90%", xl: "90%", "2xl": "85%" }}
                height={{ sm: "70%", mm: "", md: "75%", lg: "", xl: "", "2xl": "85%" }}
                display={"flex"} margin={"auto"} justifyContent={"flex-start"} alignItems={"start"}
                gap={{ sm: "4px", md: "20px", lg: "24px", xl: "30px" }}>
                <Box width={{ sm: "40px", md: "40px", lg: "60px", xl: "80px" }}
                    display={"flex"} flexDir={"row"} alignItems={"center"} justifyContent={"center"} rowGap={"4px"}>
                    <Text
                        fontSize={{ sm: "12px", md: "20px", lg: "24px", xl: "36px", "2xl": "46px" }}
                    > {Que08.id}</Text>
                    <ArrowForwardIcon
                        fontSize={{ sm: "8px", md: "10px", lg: "14px", xl: "20px", "2xl": "28px" }}
                    />
                </Box>
                <Box>
                    <Box>
                        <Text fontSize={{ sm: "12px", md: "20px", lg: "24px", xl: "36px", "2xl": "48px" }}
                            display={"flex"} alignItems={"center"}>
                            {Que08.text}
                        </Text>
                        <Text fontSize={{ sm: "10px", md: "12px", lg: "14px", xl: "20px", "2xl": "30px" }}
                            textColor={"#9bc0ff"} py={"8px"}>
                            {Que08.subtext} </Text>
                    </Box>
                    <Stack paddingY={{ sm: "10px", md: "10px", lg: "14px", xl: "22px" }}
                        gap={{ sm: "12px", md: "14px", lg: "16px", xl: "24px" }}>
                        {Que08.options.map((data: OptionType, id: number) => {
                            return <Box onClick={(e) => {
                                handleSubmit(data.value as string)
                                setFormData({ ...formData, challenges: data.value })
                                handleOption(data.value)
                            }}
                                border="1px" borderColor="white" borderRadius={{ sm: "3px", xl: "lg" }}
                                width={{ sm: "70%", ml: "60%", md: "35%", lg: "45%", xl: "45%" }}
                                key={id}
                                display='flex' alignItems={"center"} padding={{ sm: "3px", md: "", lg: "10px", xl: "20px" }}
                                paddingY={{ sm: "5px", md: "7px", lg: "10px", xl: "16px", "2xl": "20px" }}
                                paddingX={{ sm: "5px", md: "7px", lg: "10px", xl: "16px", "2xl": "20px" }}
                                gap={{ sm: "10px", md: "12px", lg: "16px", xl: "30px" }}
                                background='rgba(253, 255, 252, 0.30)'
                                _hover={{ backgroundColor: "#9abffe", cursor: "pointer" }} transition="all 0.5s ease-in-out">

                                <Box
                                    width={{ sm: "13px", md: "16px", lg: "18px", xl: "33px" }}
                                    height={{ sm: "13px", md: "16px", lg: "18px", xl: "33px" }}
                                    display={"flex"} justifyContent={"center"} alignItems={"center"}
                                    border="1px" backgroundColor={"#6ea3ff"} borderColor="white" borderRadius="2px">
                                    <Text textAlign={"center"} fontSize={{ sm: "5px", md: "6px", lg: "8px", xl: "14px" }}
                                        lineHeight={{ sm: "20" }}
                                        color={"white"}>{data.opt_no}</Text>
                                </Box>
                                <Text fontSize={{ sm: "8px", md: "10px", lg: "12px", xl: "20px" }} color={"white"}> {data.label}</Text>
                            </Box>
                        })
                        }
                    </Stack>
                </Box>
            </Box>
        </Flex >
    );
};

export default Question8;