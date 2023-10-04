import { useState, useEffect } from "react"
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { form_data } from "@/data";
import { useFormData } from "../context/context";

const Grt2 = () => {
    const [style, setStyle] = useState(false)
    const Que01 = form_data[0];
    const { setStep } = useFormData()

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
        <Flex height={"100vh"}
            className='initialPosition' transitionDuration={'1000ms'}
            transform={`${style ? 'translateY(0px)' : 'translateY(350px)'}`} opacity={`${style ? '0' : '1'}`}
        >
            <Box
                display={"flex"} flexDir={"column"}
                height={{ sm: "1000px", md: "900px", lg: "1000px", xl: "1300px", "2xl": "1400px" }}
                // width={{ sm: "", md: "600px", lg: "36px", xl: "1200px", "2xl": "1400px" }}
                margin={"auto"}
            >
                <Box display={"flex"} flexDir={"column"}
                    gap={{ sm: "10px", md: "26px", lg: "36px", xl: "40px", "2xl": "50px" }}
                    width={{ sm: "", md: "600px", lg: "800px", xl: "1000px", "2xl": "1400px" }} margin={"auto"}
                    color={"white"}
                    textAlign={"center"}
                    height={"600px"}>
                    <Text
                        fontStyle={"normal"} fontWeight={"400"} lineHeight={"normal"}
                        fontSize={{ sm: "14px", mm: "14px", md: "24px", lg: "32px", xl: "40px", "2xl": "48px" }}
                    >First, let’s get to know you!
                    </Text>
                    <Text
                        fontStyle={"normal"} fontWeight={"400"} lineHeight={"normal"}
                        color={"#A5BFFF"}
                        fontSize={{ sm: "12px", mm: "14px", md: "24px", lg: "32px", xl: "36px", "2xl": "40px" }}
                    >
                        Don’t worry, this is all confidential.</Text>
                    <Box
                    
                    >
                        <Text
                            width={{ sm: "150px", mm: "200px", md: "280px", lg: "400px", xl: "450px", "2xl": "529.577px" }}
                            px={{ sm: "6px", mm: "12px", md: "14px", lg: "26px", xl: "16px" }}
                            margin={"auto"}
                            py={{ sm: "4px", mm: "10px", md: "12px", lg: "26px", xl: "14px" }}
                            backgroundColor={"white"}
                            textColor={"#8391B4"}
                            fontSize={{ sm: "10px", mm: "12px", md: "20px", lg: "26px", xl: "28px", "2xl": "32px" }}
                            // textAlign={"center"}

                            onClick={() => {
                                setStyle(true)
                                setTimeout(() => {
                                    setStep(3)
                                }, 500);
                            }}
                        >Sound's Good</Text>

                    </Box>


                    <Box display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} gap={"11px"}>
                        <Image
                            src={"/alfha.gif"}
                            width={{ sm: "60px", mm: "100px", md: "120px", lg: "140px", xl: "160px", "2xl": "200px" }}
                            height={{ sm: "60px", mm: "100px", md: "120px", lg: "140px", xl: "160px", "2xl": "200px" }}
                        alt="Alfha image"
                        />
                        <Text
                            color={"#A5BFFF"}
                            fontSize={{ sm: "6px", mm: "12px", md: "14px", lg: "16px", xl: "20px", "2xl": "24px" }}
                        >
                            #PartyforProgress #ColortheFuture
                        </Text>
                    </Box>

                    <Box>

                    </Box>

                </Box>

            </Box>
        </Flex>
    );
};

export default Grt2;