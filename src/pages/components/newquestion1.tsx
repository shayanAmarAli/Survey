import React from 'react'
import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import { RiArrowDownSLine } from 'react-icons/ri'
import Dropdown2 from './dropdown2'
import { useEffect, useState } from "react"
import { useFormData } from '../context/context'

const Newscreen = () => {

    const { step, setStep, formData, setFormData, addData } = useFormData()
    const [style, setStyle] = useState(false);
    const [newPhoneNo, setNewPhoneNo] = useState<string>("");

    function handleSubmit() {
        // e.preventDefault()
        setStyle(true)
        setStep(24)

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
        <Box background={"white"} display={"flex"}
            flexDirection={{ xl: "row", lg: "row", md: "row", sm: "column" }}
            height={{ xl: "1088px", sm: "100vh" }} w={{ xl: "1728px", md: "100%", sm: "100%", lg: "" }}
            className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'}
            opacity={`${style ? '0' : '1'}`}
        >
            <Box w={{ xl: "1137px", lg: "67%", md: "70%" }} height={{ xl: "1088px", lg: "100vh", md: "100vh", sm: "100vh" }} mx={{ xl: "50px", lg: "35px", md: "30px", sm: "15px" }}>
                <Box mt={{ xl: "120px", lg: "100px", md: "80px", sm: "15px" }} display={"flex"} justifyContent={"center"} >
                    <Image height={{ xl: "295.135px", lg: "200px", md: "150px", sm: "120px" }}
                        w={{ xl: "320px", lg: "250px", md: "180px" }} src='/thanks.gif' /></Box>
                <Box w={{ xl: "922px" }} mx={"auto"} textAlign={"start"} color={'#7EA2FF'} fontSize={{ xl: "32px", lg: "22px", sm: "12px" }}
                    py={{ xl: "60px", lg: "40px" }}
                >
                    <Text fontSize={{}}>
                        You’re all done!


                    </Text>
                    <Text mt={{ xl: "25px", md: "10px" }} fontSize={""}>
                        If you would like to stay in the loop on our activities, please provide your contact information so we can
                        stay in touch and update you on the latest developments.
                    </Text>
                </Box>
            </Box>
            <Box width={{ xl: "567px", lg: "29%" }} h={{ xl: "1088px", sm: "100vh" }} background={"#7EA2FF"} textColor={"white"} fontFamily={"McLaren"} >
                <Box mt={{ xl: "150px", lg: "125px", md: "100px", sm: "20px" }}   >
                    <Text fontSize={{ xl: "36px", lg: "22px", sm: "16px" }} mx={{ xl: "70px", md: "30px", sm: "60px" }} fontWeight={"400px"} fontFamily={"McLaren"} >LET’S STAY IN TOUCH!</Text>
                    <Box display={"flex"} flexDirection={"column"} gap={{ xl: "50px", lg: "30px", md: "20px", sm: "5px" }} mt={{ xl: "50px", lg: "40px", md: "30px", sm: "5px" }} mx={{ xl: "79px", lg: "30px", md: "30px", sm: "70px" }} w={{ xl: "376px", lg: "250px", md: "200px" }} fontSize={{ xl: "24px", md: "15px", sm: "12px" }} >
                        <Box><Text>Full Name</Text>
                            <Input borderBottom={"1px"} rounded={"none"} border={"1"} placeholder='Hira Khan' _placeholder={{ color: "#A5BFFF", fontsize: { xl: "24px", md: "10px" } }} px={"none"} />
                        </Box>
                        <Box><Text>Email</Text>
                            <Input borderBottom={"1px"} rounded={"none"} border={"1"} placeholder='example@gmail.com' _placeholder={{ color: "#A5BFFF", fontsize: "24px" }} px={"none"} />
                        </Box>
                        <Box ><Text>Phone Number</Text>
                            <Box display={"flex"} justifyContent={"space-between"} >
                                <Box >
                                    <Dropdown2 />
                                </Box>
                                <Box width={{ xl: "300px", lg: "180px", md: "140px" }}>

                                    <Input borderBottom={"1px"} rounded={"none"} border={"1"} placeholder='0300-123-4567'

                                        _placeholder={{ color: "#A5BFFF", fontsize: "24px" }} px={"none"} />
                                </Box>
                            </Box>
                        </Box>
                        <Button h={{ xl: "75px", lg: "40px", md: "30px", sm: "20px" }} w={{ xl: "376px", lg: "250px", md: "200px" }} _placeholder={{ color: "#8391B4" }}
                            backgroundColor={"#fff"}
                            textColor={"#8391B4"}
                            fontSize={{ xl: "32px", lg: "20px", md: "15px", sm: "12px" }} rounded={"none"}
                            onClick={() => {
                                handleSubmit()
                            }}
                        > Submit</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Newscreen;