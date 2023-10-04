import React from 'react'
import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
// import DropDown2 from './dropdown2'
import { RiArrowDownSLine } from 'react-icons/ri'

const Endscreen = () => {
    return (
        <Box background={"white"} display={"flex"} flexDirection={{ xl: "row", lg: "row", md: "row", sm: "column" }}
            height={{ xl: "1088px", lg: "100vh", md: "100vh", sm: "100vh" }} w={{ xl: "1728px", md: "100%", sm: "100%" }}  >
            <Box w={{ xl: "1137px", lg: "67%", md: "70%" }} height={{ xl: "1088px", lg: "100vh", md: "100vh", sm: "100vh" }}
                mx={{ xl: "119px", lg: "35px", md: "30px", sm: "15px" }} >
                <Box display={"flex"} justifyContent={"center"} mt={{ xl: "150px", lg: "80px", md: "80px", sm: "30px" }} ><Image height={{ xl: "295.135px", lg: "200px", md: "150px", sm: "120px" }}
                    w={{ xl: "320px", lg: "250px", md: "180px" }} src='/thakyou.gif' /></Box>
                <Box w={{ xl: "922px" }} textAlign={{ xl: "start", lg: "start", md: "start", sm: "center" }}
                    color={'#7EA2FF'} fontSize={{ xl: "32px", lg: "22px", md: "18px", sm: "14px" }}
                    py={{ xl: "60px", lg: "40px" }}
                    mt={{ xl: "39.86px", lg: "px", md: "px", sm: "px" }}
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
            <Box pt={{ xl: "414px", lg: "260px", md: "180px", sm: "65px" }} width={{ xl: "567px", lg: "30%", md: "35%" }}
                h={{ xl: "1088px", sm: "70vh", md: "100vh", lg: "100%" }} background={"#7EA2FF"} textColor={"white"}
                fontFamily={"McLaren"} fontSize={{ xl: "36px", lg: "25px", md: "18px", sm: "14px" }} textAlign={"center"}
                px={{ xl: "85px", md: "10px", sm: "60px" }}>
                <Text mb={{ xl: "55px", lg: "30px", md: "25px" }}>Awesome!</Text>
                <Text>We’ll be in touch with
                    updates and amazing
                    opportunities!</Text>
            </Box>
        </Box>
    )
}

export default Endscreen