"use client"
import { Box } from '@chakra-ui/react'

import { useFormData } from '../context/context'

import Question1 from './questionone';
import Question2 from './questiontwo';
import Question3 from './questionthree';
import Question4 from './questionfour';
import Question5 from './questionfive';
import Question8 from './questioneight';
import Question7 from './questionseven';
import Question9 from './questionnine';
import Question6 from './questionsix';
import Question11 from './questioneleven';
import Question12 from './questiontwelve';
import Question16 from './questionsixteen';
import Question17 from './questionseventeen';
import Question10 from './questionten';
import Question13M from "./questionthirteenM"
import Question14M from './questionfourteenM';
import Question15 from './questionfifteen';



export default function Male() {

  const { step, setStep, formData, setFormData } = useFormData()

  // const [Step, setStep] = useState(8)
  // console.log(setStep())
  console.log("hello", formData.queTwo)


  return (
    <Box>

      {step == 5 && (
        <Question7 />
      )}
      {step == 6 && (
        <Question10 />
      )}
      {step == 7 && (
        <Question11 />
      )}

      {step == 8 && (
        <Question12 />
      )}
      {step == 9 && (
        <Question13M />
      )}
      {step == 10 && (
        <Question15 />
      )}
      
    </Box>
  )
}



