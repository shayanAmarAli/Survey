"use client"
import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, Image, Text, Input, Button } from "@chakra-ui/react"
import { BiRightArrowAlt } from 'react-icons/bi'
import { color } from 'framer-motion'
import { useFormData } from '../context/context'
import axios from 'axios'
import { form_data, OptionType, QuestionType } from '@/data'

const Question17 = ({ data }: any) => {
  const { step, setStep, formData, setFormData, addData } = useFormData()
  const [style, setStyle] = useState(false);
  const [newPhoneNo, setNewPhoneNo] = useState<string>("");
  const Que17 = form_data[16];

  function handleSubmit() {
    // e.preventDefault()
    setStyle(true)
    setStep(23)

  }

  const submissionHandler = async () => {
    setStyle(true)
    setStep(1)
    console.log("Result that is send to api....", formData);
    const response = await axios.post("/api/data", {
      body: JSON.stringify(formData),
    })

    console.log(response.data);
    alert("FORM SUBMIT SUCCESSFULLY")
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
    <Flex height={{ sm: "100vh" }} backgroundColor={"#7EA2FF"} justifyContent={"space-around"}
     className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'} 
     opacity={`${style ? '0' : '1'}`}>
      <Box height={{ sm: "80%", mm: "80%", md: "70%", lg: "70%", xl: "70%", "2xl": "70%" }}
        width={{ sm: "90%", mm: "80%", md: "80%", lg: "", xl: "80%", "2xl": "80%" }}
        margin={{ sm: "auto" }}
        display={"flex"} alignItems={"start"} gap={{ sm: "10px", md: "12px", lg: "", xl: "25px", "2xl": "25px" }}>

        <Box display={"flex"} justifyContent={"space-around"} mt={"40px"} alignItems={"center"} >
          <Text fontFamily={""} fontSize={{ sm: "10px", md: "18px", lg: "24px", xl: "48px", "2xl": "44px" }}
            textColor={"#FFF"}
          >{Que17.id}</Text>
          <Text fontSize={{ sm: "10px", md: "16px", lg: "18px", xl: "32px", "2xl": "35px" }} textColor={"#FFF"}>
            <BiRightArrowAlt />
          </Text>
        </Box>

        <Box width={{sm: "90%", md: "80%"}}>
          <Box display={"flex"} >
            <Box mt={{sm: "20px", mm: "30px", ml: "38px", md: "40px", lg: "40px", xl: '50px', "2xl": "60px"}}>
              <Text fontSize={{ sm: "10px", md: "18px", lg: "28px", xl: "48px", "2xl": "44px" }} 
              textColor={"#FFF"}
                lineHeight={{ sm: "10px", mm: "18px", md: "28px", lg: "40px", xl: "55px", "2xl": "60px" }}
              >{Que17.text}</Text>
              <Text fontSize={{ sm: "10px", md: "14px", lg: "20px", xl: "32px", "2xl": "32px" }} 
              textColor={"#A5BFFF"}
                paddingTop={{ sm: "4px", md: "10px", lg: "12px", xl: "12px", "2xl": "15px" }}
              >{Que17.subtext}</Text>
            </Box>
            <Box 
            mt={{sm: "20px", ml: "28px", md: "15px", lg: "10px", xl: '10px', "2xl": "50px"}}
            padding={{ sm: "6px", md: "15px", lg: "10px", xl: '10px', "2xl": "50px" }}
            paddingY={{ sm: "6px", md: "15px", lg: "10px", xl: '10px', "2xl": "50px" }}
            >
              <Image src={"/Phone.png"}
                width={{ sm: "50px", md: "150px", lg: "100px", xl: '170px', "2xl": "500px" }} alt='Email' />
            </Box>

          </Box>
          <Box>
            <Input placeholder='name@example.com'
              _placeholder={{ color: "#A5BFFF" }} px={"none"}
              fontSize={{ sm: "10px", lg: "20px", xl: '24px', "2xl": "32px" }}
              paddingY={{ "2xl": "3px" }}
              width={{ sm: "200px", md: "320px", lg: "500px", xl: '850px', "2xl": "900px" }}
              height={{ sm: "20px", lg: "60px" }}
              border={"0"} rounded={"none"} borderBottom={"1px"} borderColor={""}
              onChange={(e: any) => {
                e.preventDefault();
                setNewPhoneNo(e.target.value)
              }}
              textColor={"#FFF"}
            ></Input>
          </Box>
          <Box display={"flex"} justifyContent={"end"} 
          padding={{ sm: "20px", md: "30px", lg: "60px", xl: "32px", "2xl": "40px" }}
          paddingX={{ sm: "20px", md: "30px", lg: "60px", xl: "32px", "2xl": "40px" }}
          >
            <Button
              textColor={"white"}
              fontSize={{ sm: "12px", md: "14px", lg: "16px", xl: "18px", "2xl": "22px" }}
              border={"1px solid white"}
              borderRadius={"3px"}
              backgroundColor={"rgba(253, 255, 252, 0.10)"}
              _hover={{ textColor: "rgba(253, 255, 252, 0.10)", backgroundColor: "#7EA2FF" }}
              onClick={() => {
                submissionHandler()
              }}
            >Submit</Button>
          </Box>
        </Box>

      </Box>
    </Flex>
  )
}

export default Question17