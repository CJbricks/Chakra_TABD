import React from 'react';
import styles from '@/styles/Home.module.css';
import { Flex, Text, Box } from '@chakra-ui/react';
import headImage from "../../public/images/banner.png";
import insta from '../../public/images/insta.png';
import git from '../../public/images/git.png';
import Image from 'next/image';
import Link from 'next/link'


export default function HeaderBar() {
  return (
    <div className={styles.headbox}>
        <Flex flexWrap="wrap" alingItems="center" textAlign="left" justifyContent="center" maxW="100%">
          <Box alignItems="center" justifyContent="center" marginTop={2} marginBottom={2}>
            <Link href="https://www.instagram.com/rangitos_way/" target="_blank">
                <Image
                src={insta}
                width={30}
                height={30}
                alt="instagram-logo"
                className={styles.insta} />
              </Link>
              
              <Link href="https://github.com/CJbricks/" target="_blank">
                <Image
                src={git}
                width={30}
                height={30}
                alt="github-logo"
                className={styles.github} />
              </Link>
          </Box>
            

                <Image
                src={headImage}
                alt="header-image"
                width={800}
                height={500}
                className={styles.headimage}
                />
    </Flex>
   </div>
  )
}
