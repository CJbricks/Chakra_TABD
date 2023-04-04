import React from 'react';
import styles from '@/styles/Grid.module.css';
import { Box, SimpleGrid, Center } from '@chakra-ui/react';
import boxOne from '../../public/images/hunter.png';
import boxTwo from '../../public/images/pointing.png';
import boxThree from "../../public/images/quail.png";
import Image from 'next/image';


export default function Grid() {
  return (
    <Center>
      <div className={styles.gridcont}>
        <SimpleGrid columns={3} gridSpacing={2} backgroundColor="#f2f2f2">
        
            <Box textAlign="center" alignItems="center" justifyContent="center"  className={styles.gridone} pl={75} pt={25}>
              <Image 
              src={boxOne}
              width={300}
              height={300}
              alt="grid-hunter-drawing"
              className={styles.image}
               />
            </Box>
            <Box textAlign="center" alignItems="center" justifyContent="center"  className={styles.gridone} pl={75} pt={25}>
              <Image 
                src={boxTwo}
                width={300}
                height={300}
                alt="grid-hunter-drawing"
                className={styles.image}
                />
            </Box>
            <Box textAlign="center" alignItems="center" justifyContent="center"  className={styles.gridone} pl={75} pt={25}>
              <Image 
                src={boxThree}
                width={300}
                height={300}
                alt="grid-hunter-drawing"
                className={styles.image}
                />
            </Box>
          
        </SimpleGrid>
      </div>
    </Center>
    
  )
}
