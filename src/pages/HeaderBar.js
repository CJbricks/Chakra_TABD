import React from 'react';
import styles from '@/styles/Home.module.css';
import { Flex, Text, Box } from '@chakra-ui/react';
import headImage from "../../public/images/bannedonpoint.jpg";
import igIcon from '../../public/images/insta.png';
import git from '../../public/images/git.png';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar.js';


export default function HeaderBar() {
  return (
    
        <Flex flexWrap="nowrap" alingItems="center" textAlign="center" justifyContent="center" w="100%" bg="orange.100">
            <Navbar />
                <Image
                src={headImage}
                alt="header-image"
                width={800}
                height={500}
                className={styles.headimage}
                />
    </Flex>
   
  )
}
