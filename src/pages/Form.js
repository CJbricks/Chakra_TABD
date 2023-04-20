import React from 'react';
import styles from '@/styles/Form.module.css';
import { Box, Flex, FormControl, FormLabel, FormHelper, FormErrorMessage, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';


export default function Form() {
  return (
    <Flex alignItems="center" justifyContent="center" textAlign="center" bg="yellow.50" p={2}>
      <Box w="50%" color="orange.600">
          <FormControl>
            <FormLabel>
              Email Address
            </FormLabel>
              <Input type='email' />
            <FormLabel>
              Full Name
            </FormLabel>
              <Input type="" />
            <FormLabel>
              Dog Breed
            </FormLabel>
              <Input type="" />
          </FormControl>
        </Box>
    </Flex>
  )
}
