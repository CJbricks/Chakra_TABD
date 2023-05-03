import React from 'react';
import { Box, Flex, SimpleGrid, Text, Center, Spacer } from '@chakra-ui/react';
import styles from '@/styles/Body.module.css';
import brittanyDog from '../../public/images/peggy-paulson-brittany.jpeg';
import Image from 'next/image';



export default function Location() {
  return (
    <>
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" pl={20} bg='orange.400' pt={6} pb={6}>
      <Center>
        <Box mr={200}>
            <Text fontFamily="octin-college, sans-serif;" textAlign="center" ml={[5, 5, 15]} mr={[5, 5, 20]} fontSize={["1em", "1em", "2.2em"]} fontWeight={400} color='orange.50' p={1}>
              We work with: 
              <br />
              American Brittany,
              <br />
              GSP, NovaScotia Duck Toller,
              <br />
              Griffon, Viszla,
              <br /> 
              and more! 
            </Text>
        </Box>
        <Spacer />
        <Box>
          <div className={styles.birdbox}>
            <Image 
            src={brittanyDog}
            alt='brittany-dog-peggy-paulson'
            width={600}
            height={350}
            className={styles.imagebird} />
        </div>
      </Box>
      </Center>
    </Flex>
    </>
  )
}
