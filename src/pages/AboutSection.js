import React from 'react';
import { Circle, Box, Center, Text, Flex, Spacer, SimpleGrid } from '@chakra-ui/react';
import styles from '@/styles/Body.module.css';
import johnCott from '../../public/images/john-cottrell.jpeg';
import Image from 'next/image';

export default function 
() {
  return (
    <div className={styles.gridOverBox}>
    <SimpleGrid columns={[1, 1, 2]} gridSpacing={5} bg='orange.100' padding={6} w="100%" flexWrap="wrap">
      <Box w="50%" mr="150px">
          <Circle className={styles.flex} ml={100} w='500px' bg="orange.100">
              <Image 
              src={johnCott}
              width={600}
              height={200}
              alt="bird-dog-photo"
              className={styles.imagebird} />
          </Circle>
      </Box>
        
         <Box w="50%" className={styles.textflex} ml="150px">
            <Text textAlign="center" fontFamily="octin-college, sans-serif;" ml={5} mr={35} mt={20} fontSize="2em" fontWeight={700} color="orange.400">
                On Point's mission:
                <br />
                Our goal is to bring out the natural instincts in your Bird Dog.
                <br />
                Field and Balanced Obedience Training
                to improve your dog's behavior and performance in the field
            </Text>
          </Box>
    </SimpleGrid>
    </div>
  )
}
