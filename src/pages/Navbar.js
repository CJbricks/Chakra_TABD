import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Flex, Text, Center } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex alignItems="center" justifyContent="center" textAlign="center" flexWrap="wrap">
      <div className={styles.navbar}>
      <Center>
      <Text fontFamily='octin-college, sans-serif;' fontWeight={400} fontSize='2.25em' w="100%" color='yellow.50'>
          <Link href="/index" className={styles.headerlinks}>Contact</Link>
          <Link href="/index" className={styles.headerlinks}>Gallery</Link>
          <Link href="/index" className={styles.headerlinks}>FAQ</Link>
        </Text>
        </Center>
      </div>
    </Flex>
  )
}
