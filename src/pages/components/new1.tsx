import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { HiMiniClock } from "react-icons/hi2";
import { useEffect, useState } from "react"
import { form_data } from "@/data";
import { useFormData } from "../context/context";

const Gb1 = () => {
    const [style, setStyle] = useState(false)
    const { step, setStep, formData, setFormData } = useFormData()


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
            <Box display={"flex"} flexDir={"column"} rowGap={{ sm: "10px", md: "16px", lg: "22px", xl: "50px" }}
                width={"1400px"} margin={"auto"}
            >
                <Box
                    color={"#FFF"}
                    fontSize={{ sm: "10px", mm: "14px", md: "24px", lg: "32px", xl: "48px" }}
                    fontStyle={"normal"} fontWeight={"400"} lineHeight={"normal"}>
                    <Text align={"center"}>Global Insights: Education & Empowerment
                    </Text>
                    <Text align={"center"} bgColor={"#ffa112"} textColor={"black"}
                        borderRadius={{ sm: "2px", lg: "8px", xl: "16px" }}
                        marginX={"100px"}
                        fontSize={{ sm: "10px", mm: "14px", md: "24px", lg: "32px", xl: "48px" }}
                        pt={"6px"}
                    >
                        Because changing the world is serious business,</Text>
                    <Text align={"center"}

                    >but we promise our survey isn't!</Text>
                </Box>

                <Box fontSize={{ sm: "10px", mm: "12px", md: "22px", lg: "26px", xl: "40px" }}>
                    <Text color={"#A5BFFF"} align={"center"}>
                        This survey is completely anonymous & confidential
                    </Text>
                </Box>

                <Box width={{ xl: "600px" }} margin={"auto"} display={"flex"} flexDir={"column"}
                    gap={"15px"}
                    alignItems={"center"}
                    onClick={() => {
                        setStyle(true)
                        setTimeout(() => {
                            setStep(2)
                        }, 500);
                    }}
                >
                    <Text textColor={"#8391B4"}
                        fontSize={{ sm: "10px", mm: "12px", md: "20px", lg: "22px", xl: "32px" }}
                        textAlign={"center"}
                        backgroundColor={"white"}
                        px={{ sm: "6px", mm: "12px", md: "14px", lg: "12px", xl: "16px" }}
                        py={{ sm: "4px", mm: "12px", md: "12px", lg: "10px", xl: "14px" }}
                    >Ready to 'Insightify' the world?</Text>
                    <Box display={"flex"}
                        alignItems={"center"}
                        fontSize={{ sm: "8px", mm: "12px", md: "14px", lg: "18px", xl: "16px" }}
                        color={"#FFF"}>
                        <Box><HiMiniClock /></Box>
                        <Text align={"center"}> Takes 3 minutes</Text>
                    </Box>
                </Box>

                <Box display={"flex"} justifyContent={"center"}>
                    <Image
                        src={"/earath.gif"}
                        width={{ sm: "80px", mm: "100px", md: "120px", lg: "120px", xl: "200px" }}
                        alt="earthImage"
                    />
                </Box>
                <Box>
                    <Text
                        color={"#A5BFFF"}
                        align={"center"}
                        fontSize={{
                            sm: "10px",
                            mm: "14px",
                            md: "20px",
                            lg: "20px",
                            xl: "24px",
                        }}
                    >
                        #PartyforProgress #ColortheFuture
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
};

export default Gb1;