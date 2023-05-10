import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import igIcon from '../../public/images/insta.png';
import ghIcon from '../../public/images/git.png';
import styles from '@/styles/Home.module.css';
import clogBricks from '../../public/images/cloglogo.png';


export default function FootIcons() {

  return (
    <>
        <Flex alignItems="center" justifyContent="center" display="inline-flex" >
            <Box mr={5}> 
                <Link href="https://www.instagram.com/rangitos_way/" target="_blank" >
                    <Image
                    src={igIcon}
                    width={90}
                    height={90}
                    alt="instagram-logo"
                    className={styles.icons}
                    />
                </Link>
              </Box>
              
              <Box mr={5}>
                <Link href="https://github.com/CJbricks/" target="_blank">
                    <Image
                    src={ghIcon}
                    width={90}
                    height={90}
                    alt="github-logo"
                    className={styles.icons}
                    />
                </Link>
              </Box>
              <Box mr={5}>
                  <Link href="http://bricks-ten.vercel.app" target="_blank">
                      <Image 
                      src={clogBricks}
                      width={90}
                      height={90}
                      alt="bbb-design-logo"
                      className={styles.icons}
                       />
                  </Link>
              </Box>
          </Flex>
    </>
  )
}
