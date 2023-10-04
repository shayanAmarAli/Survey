import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { form_data } from "@/data";
import { useFormData } from "../context/context";
import {useState, useEffect} from "react"

const Grt2 = () => {
    const [style, setStyle] = useState(false)
    const Que01 = form_data[0];
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

        <Flex height={"100vh"}>
            <Box display={"flex"} flexDir={"column"}
                rowGap={{ sm: "10px", md: "16px", xl: "40px" }}
                width={"1400px"} margin={"auto"}
                height={"500px"}
            >
                <Box
                    color={"#FFF"} fontFamily={"McLaren"}
                    fontSize={{ sm: "10px", mm: "14px", md: "24px", lg: "32px", xl: "48px" }}
                    fontStyle={"normal"} fontWeight={"400"} lineHeight={"normal"}>
                    <Text align={"center"}>We’re almost done!
                    </Text>
                    <Text align={"center"}>Just a few more fun questions.
                    </Text>
                    <Text align={"center"}
                        fontSize={{ sm: "10px", mm: "14px", md: "24px", lg: "32px", xl: "48px" }}
                    >
                        We want to ask you about your experience.</Text>
                </Box>
                <Box width={{ xl: "600px" }} margin={"auto"} display={"flex"} flexDir={"column"}
                    gap={"15px"}
                    alignItems={"center"}>
                    <Text textColor={"#8391B4"}
                        fontSize={{ sm: "10px", mm: "12px", md: "20px", lg: "26px", xl: "32px" }}
                        textAlign={"center"}
                        backgroundColor={"white"}
                        px={{ sm: "6px", mm: "12px", md: "14px", lg: "26px", xl: "16px" }}
                        py={{ sm: "4px", mm: "12px", md: "12px", lg: "26px", xl: "14px" }}
                        width={"500px"}
                        onClick={()=>{
                            setStyle(true)
                            setTimeout(() => {
                                setStep(10)
                            }, 500);
                        }}
                    >Grrrrreat!</Text>
                </Box>

                <Box display={"flex"} justifyContent={"center"}>
                    <Image
                        src={"/happy.gif"}
                        width={{ sm: "80px", mm: "100px", md: "120px", lg: "140px", xl: "200px" }}
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
                            lg: "28px",
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

export default Grt2;