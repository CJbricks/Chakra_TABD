import React from 'react';
import { Box, Flex, SimpleGrid, Text, Center } from '@chakra-ui/react';
import styles from '@/styles/Body.module.css';
import brittanyDog from '../../public/images/peggy-paulson-brittany.jpeg';
import Image from 'next/image';



export default function Location() {
  return (
    <>
    <Box flexWrap="wrap" justifyContent="center" alignItems="center" pl={20} backgroundColor="#f2f2f2">
      <Center>
      <Text fontFamily="owners" textAlign="center" ml={15} mr={5} fontSize="2.75em" fontWeight={400} color="#00aeef">
          American Brittany,
          <br />
          German Short Haired Pointer,
          <br />
          Griffon, Viszla,
          <br /> 
          and more. 
        </Text>
      <div className={styles.birdbox}>
        <Image 
        src={brittanyDog}
        alt='brittany-dog-peggy-paulson'
        width={600}
        height={350}
        className={styles.imagebird} />
      </div>
      </Center>
    </Box>
    </>
  )
}
