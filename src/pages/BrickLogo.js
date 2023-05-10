import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Image.module.css';
import clogBricks from '../../public/images/cloglogo.png';

export default function BrickLogo() {
  return (
    <div className={styles.logobox}>
        <Link href="http://bricks-ten.vercel.app" target="_blank">
            <Image 
            src={clogBricks}
            alt="logo-link"
            width={100}
            height={100}
            className={styles.logo} />

        </Link>
    </div>
  )
}