import React from 'react';
import { Circle, Box, Center, Text, Container, Spacer, SimpleGrid, Image } from '@chakra-ui/react';
import styles from '@/styles/Body.module.css';

export default function 
() {
  return (
   
    <SimpleGrid columns={[1, 1, 3]} gridSpacing={2} bg='orange.100' padding={2} w="100%" pl={[10, 15, 20]}>
      <Container mt={5}>
      <Circle mb={5}>
              <Image 
              src="/images/john-cottrell.jpeg"
              width={[200, 250, 350]}
              height={[200, 250, 350]}
              alt="bird-dog-photo"
              className={styles.imagebird} />
          
      </Circle>
      <Spacer />
         <Box>
            <Text textAlign="center" fontFamily="octin-college, sans-serif;" ml={[5, 5, 15]} mr={[5, 5, 20]} mt={8} fontSize={["14px", "18px", "32px"]} fontWeight={400} color="orange.400">
                Field and Balanced Obedience Training
                to improve your dog's performance in the field
            </Text>
        </Box>
        </Container>
        <Container mt={5}>
        <Circle mb={5}>
              <Image 
              src="/images/rhett-unsplash.jpeg"
              width={[200, 250, 350]}
              height={[200, 250, 350]}
              alt="bird-dog-photo"
              className={styles.imagebird} />
          
      </Circle>
        <Spacer />
        <Box>
              <Text fontFamily="octin-college, sans-serif;" textAlign="center" ml={[5, 5, 15]} mr={[5, 5, 20]} fontSize={["14px", "18px", "32px"]} fontWeight={400} color='orange.500'>
                Hunt alongside your dog and feel the difference.
                <br />
                Trained dogs improve your efficieny and overall hunt.
              </Text>
          </Box>
        </Container>
        <Container mt={5}>
        <Circle mb={5}>
              <Image 
              src="/images/peggy-paulson-brittany.jpeg"
              width={[200, 250, 350]}
              height={[200, 250, 350]}
              alt="bird-dog-photo"
              className={styles.imagebird} />
          
      </Circle>
        <Spacer />
        <Box>
              <Text fontFamily="octin-college, sans-serif;" textAlign="center" ml={[5, 5, 15]} mr={[5, 5, 20]} fontSize={["14px", "18px", "32px"]} fontWeight={400} color='orange.600'>
                We work with 
                <br />
                All types and breeds of bird dogs.
                <br />
                Bring out your dogs natural instinct.
              </Text>
          </Box>
        </Container>
    </SimpleGrid>
   
  )
}
