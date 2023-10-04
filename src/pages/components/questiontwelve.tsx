"use client"
import React, { useEffect } from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/react'
import { Button, useDisclosure } from '@chakra-ui/react'
import { useFormData } from '../context/context';
import { useState } from 'react';
import { form_data } from '@/data'
import { BsArrowRightShort } from "react-icons/bs"

const Question12 = () => {
  const { step, setStep, formData, setFormData } = useFormData()
  const [style, setStyle] = useState(false);

  const Que12 = form_data[11];
  function handleSubmit(e: string) {
    // e.preventDefault()
    setStyle(true)
    // if (formData.gender == "male") {
    // }
    setStep(16)
    setFormData({ ...formData, balance: e })
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


    <Box w={{ xl: "auto", sm: "100%" }}>

      <Box className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'}
        opacity={`${style ? '0' : '1'}`} pt={{ xl: '198px', lg: "110px", sm: "70px", md: "80px" }}
        pl={{ xl: "162", lg: '100px', sm: "10px", md: "60px" }} background={"#7EA2FF"}
        height={{ xl: "1088", lg: "0px", sm: "00" }} textColor={"#ffff"} >
        <Box display={"flex"} alignItems={"center"}  >
          <Text fontSize={{ sm: "12px", md: "18px", lg: "28px", xl: "48px", }}>{Que12.id}</Text>
          <Image w={{ xl: "35px", sm: "10px", md: "16px", lg: "20px" }}
            h={{ xl: "35px", sm: "12px", md: "18px", lg: "20px" }} src='/BiRightArrowAlt.png' />
          <Text fontSize={{ sm: "12px", md: "20px", lg: "30px", xl: "48px", }}
            pl={{ sm: "6px", lg: "30px", xl: "60px", md: "25px" }} >
            {Que12.text}</Text> </Box>
        <Text pl={{ xl: '150px', lg: "80px", sm: "30px", md: "60px" }}
          fontSize={{ xl: "32px", lg: "20px", sm: "8px", md: "16px" }}
          pt={{ xl: "20px", lg: "2px", sm: "2px", }} textColor={"#A5BFFF"}>{Que12.subtext}</Text>

        <Box display={"flex"} flexWrap={"wrap"} gap={{ xl: "30px", md: "8px", lg: "10px", sm: "10px" }}
          mt={{ xl: "64px", lg: "20px", sm: "10px", md: "15px" }}
          pl={{ xl: "160px", lg: "80px", sm: "30px", md: "60px" }}
          width={{ sm: "100%", xl: "90%" }}
          paddingY={"5px"}>
          {
            Que12.options.map((data: any, id: number) => {
              return <Box border={"solid 1px"} w={{ xl: '300px', lg: "150px", sm: "80px", md: "150px" }}
                key={id}
                h={{ xl: "350px", lg: "175px", sm: "90px", md: "160px" }} bgColor={'rgba(253, 255, 252, 0.10)'}
                _hover={{ background: 'rgba(253, 255, 252, 0.30)' }}
                py={{ xl: '50px', lg: "25px", sm: "10px", md: "20px" }}
                px={{ xl: '35px', lg: "15px", sm: "10px", md: "20px" }}
                onClick={() => handleSubmit(data.value)}>
                <Image height={{ xl: "224px", lg: "110px", sm: "50px", md: "100px" }}
                  w={{ xl: "224px", lg: "160px", sm: "60px", md: "110px" }} src={data.src} />
                <Text fontSize={{ xl: "24px", lg: "12px", sm: "8px", md: "12px" }}
                  pt={{ xl: "8px", lg: '4px', md: "5px", sm: "2px" }} textAlign={"center"} >{data.label}</Text>
              </Box>
            })
          }


        </Box>
      </Box>

    </Box>


  )
}

export default Question12




