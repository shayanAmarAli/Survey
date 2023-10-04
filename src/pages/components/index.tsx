"use client"
import { Box } from '@chakra-ui/react'

import { useFormData } from '../context/context'
import Gb1 from './new1';
import Grt2 from './new2';
import Question1 from './questionone';
import Question2 from './questiontwo';
import Question3 from './questionthree';
import Question4 from './questionfour';
import Question5 from './questionfive';
import Question8 from './questioneight';
import Question7 from './questionseven';
import Question9 from './questionnine';
import Question6 from './questionsix';
import Gr3 from './questionsixB';
import Question11 from './questioneleven';
import Question12 from './questiontwelve';
import Question16 from './questionsixteen';
import Question17 from './questionseventeen';
import Question10 from './questionten';
import Question13 from './questionthirteenF';
import Question14 from './questionfourteenM';
import Question15 from './questionfifteen';
import Newscreen from './newquestion1';
import Endscreen from './newquestion2';

import Male from './male';
import Female from './female';
import Question14M from './questionfourteenM';
import Question14F from './questionfourteenF';


export default function Form() {

  const { step, setStep, formData, setFormData } = useFormData()
  return (
    <Box>
      {step == 1 && (

        <Gb1 /> //Both
      )
      }
      {step == 2 && (
        <Grt2 /> //Both
      )
      }
      {step == 3 && (
        <Question1 /> //Both
      )
      }
      {step == 4 && (
        <Question2 /> //Both
      )
      }
      {step == 5 && (
        <Question3 /> //Both
      )
      }
      {step == 6 && (
        <Question4 /> //Both
      )
      }
      {step == 7 && (
        <Question5 /> //Both
      )
      }
      {step == 8 && (
        <Question6 /> //Both
      )
      }
      {step == 9 && (
        <Gr3 />
      )
      }
      {step == 10 && (
        <Question7 /> //Both
      )
      }
      {step == 11 && (
        <Question8 /> //Both
      )
      }
      {step == 12 && (
        <Question9 /> //Both
      )
      }
      {step == 13 && (
        <Question10 /> //Both
      )
      }
      {step == 14 && (
        <Question11 /> //Both
      )
      }
      {step == 15 && (
        <Question12 /> //Both
      )
      }
      {step == 16 && (
        <Question13 /> //Both
      )
      }
      {step == 17 && (
        <Question14 /> //Both
      )
      }
      {step == 18 && (
        <Question14F /> //Both
      )
      }
      {step == 19 && (
        <Question14M /> //Both
      )
      }
      {step == 20 && (
        <Question15 /> //Both
      )
      }
      {step == 21 && (
        <Question16 /> //Both
      )
      }
      {step == 22 && (
        <Question17 /> //Both
      )
      }
      {step == 23 && (
        <Newscreen />
      )
      }
      {step == 24 && (
        <Endscreen />
      )
      }
      {/* <Question4 /> */}
    </Box>
  )
}



