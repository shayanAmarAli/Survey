"use client"
import { BsArrowRightShort } from "react-icons/bs"
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag"
import { countries } from "../../countries"
import { Box, Stack, Text } from '@chakra-ui/react'
import { RiArrowDropDownFill } from "react-icons/ri"
import { useFormData } from "../context/context";

function SelectedItem({ selected }: any) {
    return (
        <Box display={"flex"} gap={"10px"} justifyContent={"space-between"} alignItems={"center"} width={"50%"}>
            <ReactCountryFlag style={{ width: '25px', height: '16px' }}
                countryCode={selected?.Code} svg />
            <Text fontSize={"20px"}>{selected?.Name}</Text>
        </Box>)
}

type selexted = {
    Code: string,
    Name: string
}

const Dropdown = () => {
    const [selected, setSelected] = useState<selexted>();
    const [isOpen, setIsOpen] = useState(true);
    const convertedCountries = Object.keys(countries).map((code) => {
        return { code, name: countries[code] };
    });

    const { step, setStep, formData, setFormData } = useFormData()
    const [style, setStyle] = useState(false)
    function handleSubmit() {
        setStyle(true)
        setTimeout(() => {
            setStep(4)
        }, 500);

    }

    return (
        <Box backgroundColor={"#7EA2FF"} 
            border={2} borderColor={"white"}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}
                paddingX={"14px"} 
                paddingY={"10px"} 
                gap={{ sm: "20px", ml: "20px", md: "40px", lg: "50px", xl: "60px", "2xl": "80px" }}
                border={"1px"} borderColor={"white"}>
                <Box
                    cursor={"pointer"}
                    onClick={() => { setIsOpen(!isOpen) }}
                    bgColor={"#7EA2FF"} textColor={"white"}
                    border={2} borderColor={"white"}
                    paddingY={"5px"}
                    width={{ sm: "170px", ml: "190px", md: "220px", lg: "250px", xl: "300px", }}
                    fontSize={{ sm: "12px", ml: "14px", md: "16px", lg: "14px", xl: "22px", }}

                    placeholder={`${selected ? (
                        <ReactCountryFlag
                            style={{ width: '35px', height: '20px' }} 
                            className="bg-slate-300 border-4 rounded-full"
                            placeholder={`${selected.Name}`} countryCode={selected?.Code} svg />)
                        : ("please select your country")}`}>
                    {
                        selected ? <SelectedItem selected={selected} /> : "Please select your country"
                    }
                </Box>

                <Text display={"flex"} textAlign={"center"} alignItems={"center"} textColor={"white"}
                    border={"1px"} borderColor={"white"} width={"22px"} height={"18px"}>
                    <RiArrowDropDownFill fontSize={"30px"} onClick={() => setIsOpen(!isOpen)} />
                </Text>
            </Box>

            <Stack 
            width={{ sm: "250px", ml: "270px", md: "320px", lg: "360px", xl: "420px" }}
            height={"250px"}
            border={2} borderColor={"white"}
                scrollBehavior={"smooth"} overflowY={"auto"} textColor={"white"} 
                backgroundColor={"#A5BFFF"}
                className={`custom-scrollbar `} display={isOpen ? "none" : "block"} >
                {
                    convertedCountries.map((data: any, id: number) => {
                        return <Box key={id}
                            cursor={"pointer"}
                            display={"flex"} alignItems={"center"}
                            paddingY={"3px"} paddingX={"16px"} marginY={"8px"}
                            onClick={() => {
                                setSelected({ Code: data.code, Name: data.name })
                                setFormData({ ...formData, queOne: selected })
                                setIsOpen(!isOpen)
                                handleSubmit()
                            }}>
                            <ReactCountryFlag countryCode={data.code}
                                style={{ width: '25px', height: '16px' }}
                                svg />
                            <p className="text-white text-sm px-2">{data.name}</p>
                        </Box>
                    })
                }
            </Stack>

        </Box>
    );
};

export default Dropdown;