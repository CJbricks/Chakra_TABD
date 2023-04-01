import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex alignItems="center" justifyContent="center" textAlign="center" flexWrap="wrap">
    <div className={styles.navbar}>
        <Text>Contact</Text>
        <Text>Gallery</Text>
        <Text>Dogs</Text>
        <Text>Merch</Text>
    </div>
    </Flex>
  )
}
