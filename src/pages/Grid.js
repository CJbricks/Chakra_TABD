import React from 'react';
import styles from '@/styles/Grid.module.css';
import { Box, SimpleGrid, Spacer, Flex, Text, Center } from '@chakra-ui/react';
import boxOne from '../../public/images/hunter.png';
import boxTwo from '../../public/images/pointing.png';
import boxThree from "../../public/images/quail.png";
import Image from 'next/image';


export default function Grid() {
  return (
    <Center>
      <div className={styles.gridcont}>
        <SimpleGrid columns={3} gridSpacing={2}>
            <Box textAlign="center" alignItems="center" justifyContent="center"  className={styles.gridone} p={10} bg="orange.100">
              <Text fontFamily="octin-college, sans-serif;" fontWeight={700} fontSize='1.5em'>
                Obedience Training
                <br />
              </Text>
              <Text fontFamily="octin-college, sans-serif" fontWeight={400} fontSize='1em'>
                Your dog will learn:
                <br />
                essential obedience commands
                 <br />
                such as:
                <br />
                Sit, Down,
                <br />
                Stay in place, Heel
                <br />

                MOST IMPORTANTLY FOR ANY 
                <br />
                FIELD DOG... RECALL!!!
              </Text>
               
            </Box>

            <Box textAlign="center" alignItems="center" justifyContent="center"  className={styles.gridone} p={10} bg="orange.300">
            <Text fontFamily="octin-college, sans-serif;" fontWeight={600} fontSize='1.5em'>
                Mentorship Program
                <br />
              </Text>
              <Text fontFamily="octin-college, sans-serif" fontWeight={400} fontSize='1em'>
                You will learn:
                <br />
                essential hunter's safety protocol,
                 <br />
                how to operate in the field,
                <br />
                where and how to find upland birds,
                <br />
                how to read your dog's behavior and maintain their training,
                <br />
                how to command your dog with confidence,
                <br />
                and most importantly, 
                <br />
                you will BOND with your Bird Dog!
              </Text>
            </Box>

            <Box textAlign="center" alignItems="center" justifyContent="center"  className={styles.gridone} p={12} bg='orange.200'>
            <Text fontFamily="octin-college, sans-serif;" fontWeight={700} fontSize='1.5em'>
                Field Training
                <br />
              </Text>
              <Text fontFamily="octin-college, sans-serif" fontWeight={400} fontSize='1em'>
                Your dog will learn:
                <br />
                extensive field protocol
                 <br />
                such as:
                <br />
                Whoa, Heel,
                <br />
                Point!, Flush,
                <br />
                Retrieve, and Gun Breaking!
              </Text>
            </Box>
           
          
        </SimpleGrid>
      </div>
    </Center>
    
  )
}
