import React from 'react';
import { Circle, Box, Center, Text, Flex, SimpleGrid } from '@chakra-ui/react';
import styles from '@/styles/Body.module.css';
import johnCott from '../../public/images/john-cottrell.jpeg';
import Image from 'next/image';

export default function 
() {
  return (
    <SimpleGrid columns={2} spacingX="5px" backgroundColor="#00aeef" mb={1} padding={8}>
        <Circle className={styles.flex} ml={100} border="2px solid #90c2f4">
            <Image 
            src={johnCott}
            width={600}
            height={200}
            alt="bird-dog-photo"
            className={styles.imagebird} />
        </Circle>
         <Box className={styles.textflex}>
            <Text textAlign="center" fontFamily="owners" ml={5} mr={35} mt={20} fontSize="2em" fontWeight={700} color="#f2f2f2" backgroundColor="#00aeef" >
                On Point's mission is to bring out the natural instincts in your Bird dog
                <br />
                <br />
                Field and Balanced Obedience Training
                to improve your dog's behavior and performance in the field
            </Text>
          </Box>
    </SimpleGrid>
  )
}
