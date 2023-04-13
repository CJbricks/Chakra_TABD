import React from 'react';
import { Text, Box, SimpleGrid, Center } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Grid.module.css';

export default function Footer() {
  return (
    <>
            <SimpleGrid columns={4} alignItems="center" justifyContent="center" bg="orange.100" p={3}>
                <Box width="25%">x</Box>
                <Box width="25%">x</Box>
                <Box width="25%">x</Box>
                <Box width="25%">x</Box>
            </SimpleGrid>
       
    </>
  )
}
