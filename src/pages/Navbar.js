import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex alignItems="center" justifyContent="center" textAlign="right" flexWrap="wrap">
      <div className={styles.navbar}>
      <Text>
          <Link href="/index" className={styles.headerlinks}>Contact</Link>
          <Link href="/index" className={styles.headerlinks}>Gallery</Link>
          <Link href="/index" className={styles.headerlinks}>Merchandise</Link>
        </Text>
      </div>
    </Flex>
  )
}
