import React from 'react';
import styles from '@/styles/Form.module.css';
import { Box, Flex, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import FormBar from './FormBar.js';


export default function Form() {

  //Empty array to store array of input info
  const stateArr = [];

  // state for all input fields
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [comment, setComment] = useState("")

  // Push to array
  stateArr.push([email, name, breed, comment])

  return (
    <>
      <FormBar />
      <Flex alignItems="center" justifyContent="center" textAlign="center" bg="yellow.50" p={5}>
        
        <Box w="50%" color="orange.600">
            <FormControl>
              <FormLabel>
                Email Address
              </FormLabel>
                    <Input 
                    type='email'
                    size="sm"
                    onChange={(e) => setEmail(e.target.value)}
                    
                     />
              <FormLabel>
                Full Name
              </FormLabel>
                <Input 
                type="name"
                size="sm"
                onChange={(e) => setName(e.target.value)} />
              <FormLabel>
                Dog Breed
              </FormLabel>
                <Input 
                type="name" 
                size="sm" 
                onChange={(e) => setBreed(e.target.value)}
                />
              <FormLabel>
                Tell us about your dog and it's current experience level. 
              </FormLabel>
                <Input type="name" 
                size="lg" 
                onChange={(e) => setComment(e.target.value)}
                />
              <FormHelperText textAlign="left">Any previous training, hunting exp, obedience, problems, etc.</FormHelperText>
            </FormControl>
              <Button colorScheme="orange"
              mt={6}
              size="md" 
              variant="outline"
              onClick={(e) => console.log(stateArr[0], stateArr[1], stateArr[2], stateArr[3])}
              >Submit</Button>
          </Box>
      </Flex>
    </>
    
  )
}
