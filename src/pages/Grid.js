import React from 'react';
import styles from '@/styles/Grid.module.css';
import { Box, SimpleGrid } from '@chakra-ui/react';


export default function Grid() {
  return (
    <div className={styles.gridcont}>
    <SimpleGrid columns={3} gridSpacing={2}>
     
        <Box textAlign="center" alignItems="center" justifyContent="center"  className={styles.gridone}>X</Box>
        <Box textAlign="center" alignItems="center" justifyContent="center"  className={styles.gridone}>X</Box>
        <Box textAlign="center" alignItems="center" justifyContent="center"  className={styles.gridone}>X</Box>
      
    </SimpleGrid>
    </div>
    
  )
}
