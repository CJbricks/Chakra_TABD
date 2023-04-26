import React from 'react';
import { Text, Box, SimpleGrid, Center } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Grid.module.css';
import FootIcons from './FootIcons.js';

export default function Footer() {
  return (
    <>
            <SimpleGrid columns={3} alignItems="center" justifyContent="center" bg="orange.100" p={3}>
              
                <Box width="50%" pl={75}>
                  <Link href='https://maps.google.com'>
                    <Text color="teal.600" fontFamily="owners">
                      Visit us in person
                    </Text>
                    <Text color="teal.600" fontFamily="owners">
                      303-555-3663
                    </Text>
                    <Text fontFamily="owners" color="blackAlpha.700">
                    9020 QUAIL BLVD #108
                    AUSTIN TX 78758-5720
                    USA
                    </Text>
                    
                  </Link>
                </Box>
                <Box width="50%" pl={75} display="inline">
                  <FootIcons />
                </Box>
                <Box width="50%" pl={75} fontFamily="owners">
                  <Text color="teal.600">
                    Hours:
                  </Text>
                  <Text color="blackAlph.700">
                    Monday: 12pm - 8pm
                    <br />
                    Tuesday: 12pm - 8pm
                    <br />
                    Wednesday: 12pm - 8pm
                    <br />
                    Thursday: 12pm - 8pm
                    <br />
                    Friday: 3pm - 9pm
                    <br />
                    Sat & Sun: 8am - 2pm
                  </Text>
                </Box>
            </SimpleGrid>
       
    </>
  )
}
