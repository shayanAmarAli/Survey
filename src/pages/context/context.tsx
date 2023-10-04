"use client"
import { useState, createContext, useContext } from "react";
import {useEffect} from "react"

const initial_context = {
    country: "",
    gender: "",
    age: 0,
    education: "",
    employment_status: "",
    income: 0,
    companies_prefer: "",
    challenges: "",
    misconceptions: "",
    experience: "",
    easy_to_work: "",
    balance: "",
    permission: "",
    support: "",
    send_school: "",
    email: "default",
    phone: "default"
  }

  export type data = {
    [x: string]: number | string | string[]
};

export const FormContext = createContext<any>(null);

export default function FormProvider({ children }: any) {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<data>(initial_context);
    const key = "form-responses"
    
    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('survey-response') as string)
        if (localStorageData !== null) {
            setFormData(localStorageData)
        } else {
            localStorage.setItem('survey-response', JSON.stringify(formData))
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem("survey-response", JSON.stringify(formData));
    },[formData])
    console.log("the updated context is", formData)

    return (
        <FormContext.Provider value={{ step, setStep, formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
}

export const useFormData = () => useContext(FormContext); 