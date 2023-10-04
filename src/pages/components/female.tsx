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
import Question13F from './questionthirteenF';
import Question14F from './questionfourteenF';
import Question15 from './questionfifteen';
import Male from './male';


export default function Female() {

  const { step, setStep, formData, setFormData } = useFormData()

  // const [Step, setStep] = useState(8)
  // console.log(setStep())
  console.log("hello", formData.queTwo)


  return (
    <Box>
      {step == 5 && (
        <Question10 />
      )
      }
      {step == 6 && (
        <Question12 />
      )
      }
      {step == 7 && (
        <Question13F />
      )
      }
      {step == 8 && (
        <Question14F />
      )
      }
      {step == 9 && (
        <Question15 />
      )
      }
    </Box>
  )
}



