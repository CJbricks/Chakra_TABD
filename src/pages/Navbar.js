import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Flex, Text, Center } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex alignItems="center" justifyContent="center" textAlign="center" flexWrap="wrap">
      <Box className={styles.navbar}>
        <Center>
            <Text fontFamily='octin-college, sans-serif;' fontWeight={400} fontSize={["1rem", "2rem", '2.25em']}  w="100%" color='yellow.50'>
              <Link href="/" className={styles.headerlinks}>Contact</Link>
              <Link href="/" className={styles.headerlinks}>Gallery</Link>
              <Link href="/" className={styles.headerlinks}>FAQ</Link>
              <Link href="/" className={styles.headerlinks}>PROGRAMS</Link>
            </Text>
          </Center>
      </Box>
    </Flex>
  )
}
