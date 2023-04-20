import React from 'react';
import { Box, Flex, Center, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import igIcon from '../../public/images/insta.png';
import ghIcon from '../../public/images/git.png';
import styles from '@/styles/Home.module.css';


export default function FootIcons() {

  return (
    <>
        <Flex alignItems="center" justifyContent="center" display="inline-flex" >
            <Box mr={5}> 
                <Link href="https://www.instagram.com/rangitos_way/" target="_blank" >
                    <Image
                    src={igIcon}
                    width={60}
                    height={60}
                    alt="instagram-logo"
                    />
                </Link>
              </Box>
              
              <Box mr={5}>
                <Link href="https://github.com/CJbricks/" target="_blank">
                    <Image
                    src={ghIcon}
                    width={60}
                    height={60}
                    alt="github-logo"
                    />
                </Link>
              </Box>
          </Flex>
    </>
  )
}
