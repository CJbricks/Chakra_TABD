import React from 'react';
import styles from '@/styles/Form.module.css';
import { Box, Flex, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';


export default function Form() {
  return (
    
      <Flex alignItems="center" justifyContent="center" textAlign="center" bg="yellow.50" p={5}>
        <Box w="50%" color="orange.600">
            <FormControl>
              <FormLabel>
                Email Address
              </FormLabel>
                <InputGroup>
                  <InputLeftElement 

                  />
                    <Input type='email' size="sm" />
                </InputGroup>
              <FormLabel>
                Full Name
              </FormLabel>
                <Input type="name" size="sm" />
              <FormLabel>
                Dog Breed
              </FormLabel>
                <Input type="name" size="sm" />
              <FormLabel>
                Tell us about your dog and it's current experience level. 
              </FormLabel>
                <Input type="name" size="lg" />
              <FormHelperText textAlign="left">Any previous training, hunting exp, obedience, etc.</FormHelperText>
            </FormControl>
            <Button colorScheme="orange" mt={6} size="md" variant="outline" >Submit</Button>
          </Box>
      </Flex>
    
  )
}
