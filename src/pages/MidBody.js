import React from 'react';
import{ Box, Center, Flex, Text } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import programImage from '../../public/images/matthew-lancaster-unsplash.jpg';
import txIcon from '../../public/images/tx.png';

export default function MidBody() {
  return (
    <div className={styles.headbox} >
        <Flex  flexWrap="wrap" alingItems="center" justifyContent="center" maxW="100%">
                <Image
                    src={programImage}
                    alt='body-image-programs'
                    width={800}
                    height={500}
                    className={styles.headimage}
                    />
            <div>
                <Box display='inline-flex' alignItems='center' justifyContent='center'>
                    <Text 
                    fontFamily='octin-college, sans-serif;' 
                    fontWeight={600} 
                    fontSize='2em' 
                    w="100%" 
                    color='orange.700'
                    mt={2}
                    mb={2}
                    ml={2}
                    mr={4}>Located in Austin TX.</Text>
                        <Image 
                        src={txIcon}
                        width={30}
                        height={30}
                        alt="tx-icon"
                        className={styles.txlogo}
                        />
                </Box>
            </div>
            
        </Flex>
    </div>
  )
}
