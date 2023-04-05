import React from 'react';
import { Box, Flex, SimpleGrid, Image, StylesProvider} from '@chakra-ui/react';
import styles from '@/styles/Body.module.css';
import brittanyDog from '../../public/images/peggy-paulson-brittany.jpeg';



export default function 
() {
  return (
    <>
    <Box boxSize='sm' display="inline-flex" flexWrap="wrap">
        <Image 
        src={brittanyDog}
        alt='brittany-dog-peggy-paulson'
        width={300}
        height={150}
        className={styles.imagebird} />
    </Box>
    </>
  )
}
