"use client"
import { BsArrowRightShort } from "react-icons/bs"
import React, { useState, useEffect } from "react";
import axios from "axios"
import ReactCountryFlag from "react-country-flag"
import { countries } from "../../countries"
import { Box, Button, Code, Flex, Select, Stack, Text, Input } from '@chakra-ui/react'
import { RiArrowDropDownFill } from "react-icons/ri"
import { useFormData } from "../context/context";

function Abc({ selected }: any) {
  return (
    <Box display={"flex"} gap={"3px"} justifyContent={"space-between"} alignItems={"center"}
      width={{ sm: "30%", xl: "18%", "2xl": "20%" }} margin={"auto"}>
      <ReactCountryFlag
        style={{ width: '30px', height: '18px', border: "2px", borderRadius: "50%" }}
        countryCode={selected?.Code} svg />
      <Text fontSize={{ sm: "12px", xl: "18px", "2xl": "20px" }} paddingLeft={{ sm: "5px", xl: "18px", "2xl": "20px" }}>{selected?.Code}</Text>
    </Box>)
}

type selexted = {
  Code: string,
  Name: string
}

const Question = () => {
  const [selected, setSelected] = useState<selexted>();
  const [isOpen, setIsOpen] = useState(true);
  const convertedCountries = Object.keys(countries).map((code: any) => {
    return { code, name: countries[code] };
  });
  const { step, setStep, formData, setFormData, addData } = useFormData()
  const [style, setStyle] = useState(false)
  function handleSubmit() {
    setStyle(true)
    setTimeout(() => {
      setStep(9)
    }, 500);


  }
  return (
    <Box backgroundColor={"#7EA2FF"}
      width={{ sm: "150px", md: "200px", lg: "280px", xl: "400px", "2xl": "600px" }}
      border={2} borderColor={"white"}>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}
        paddingX={{ sm: "", mm: "3px", xl: "20px" }}
        paddingY={{ sm: "5px", mm: "3px", md: "", xl: "12px", "2xl": "20px" }} h={{ md: "60px", ml: "45px" }}
        border={"1px"} borderColor={"white"}
        width={{ sm: "200px", md: "300px", lg: "370px", xl: "500px", "2xl": "700px" }}>
        <Input placeholder="Enter your income" outline={"transparent"} border={"0px"}
          fontSize={{ sm: "10px", md: "14px", lg: "16px", "2xl": "24px" }} h={{ md: "55px", ml: "40px" }}
          width={{ sm: "270px", lg: "400px", md: "300px", xl: "800px", "2xl": "1000px" }}
          textColor={"white"}
          outlineColor={"white"}
          _placeholder={{ color: "#A5BFFF" }} />
        <Box
          cursor={"pointer"}
          bgColor={"#7EA2FF"}
          textColor={"white"}
          border={2}
          borderColor={"white"}
          paddingY={{ sm: "3px", "2xl": "5px" }}
          width={{ sm: "150px", md: "", lg: "34", xl: "500px", "2xl": "500px" }}
          fontSize={{ sm: "12px", md: "", lg: "", xl: "24px", "2xl": "24px" }}
          _placeholder={{ textColor: "white" }}
          placeholder={`${selected ? (
            <ReactCountryFlag
              className="bg-slate-300 border-4 "
              placeholder={`${selected.Name}`} countryCode={selected?.Code} svg />
          ) : ("")}`}
          onClick={() => { setIsOpen(!isOpen); }}>
          {
            selected ? <Abc selected={selected} /> : ""
          }
        </Box>
        <Text display={"flex"} textAlign={"center"} alignItems={"center"} textColor={"white"}
          width={"34px"} height={"28px"} onClick={() => { setIsOpen(!isOpen) }}
        >
          <RiArrowDropDownFill fontSize={"30px"} />
        </Text>
      </Box>

      <Stack width={{ sm: "170px", md: "200px", lg: "250px", xl: "350px", "2xl": "400px" }}
        marginLeft={{ sm: "90px", mm: "90px", md: "170px", lg: "200px", xl: "250px", "2xl": "300px" }}
        scrollBehavior={"smooth"} overflowY={"auto"} textColor={"white"}
        border={"1px"} borderColor={"white"} backgroundColor={"#A5BFFF"}
        height={{ sm: "200px", xl: "350px", "2xl": "400px" }}
        className={`custom-scrollbar h-72 `} display={isOpen ? "none" : "block"} >
        {
          convertedCountries.map((data: any, id: number) => {
            return <Box key={id}
              cursor={"pointer"}
              display={"flex"}
              alignItems={"center"}
              paddingY={"2px"}
              paddingX={{ sm: "10px", "2xl": "25px" }}
              marginY={"8px"}
              onClick={() => {
                setSelected({ Code: data.code, Name: data.name })
                handleSubmit()
                setIsOpen(!isOpen)
              }}>
              <ReactCountryFlag countryCode={data.code}
                style={{ width: '20px', height: '14px' }}
                svg />
              <Text
                textColor={"white"}
                fontSize={{ sm: "10px", xl: "16px", "2xl": "20px" }}
                paddingX={{ sm: "8px", "2xl": "5px" }}
              >{data.name}</Text>
            </Box>
          })
        }
      </Stack>

    </Box>
  );
};

export default Question