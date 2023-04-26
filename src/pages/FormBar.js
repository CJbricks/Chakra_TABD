import React from 'react';
import{ Box, Text } from '@chakra-ui/react';

export default function FormBar() {
  return (
    <>
      <Box alignItems='center' justifyContent='center' textAlign="center" bg="teal.700" p={3}>
                    <Text 
                        fontFamily='octin-college, sans-serif;' 
                        fontWeight={600} 
                        fontSize='2em' 
                        w="100%" 
                        color='orange.50'
                        mt={2}
                        mb={2}
                        ml={2}
                        mr={4}>
                            Request more information about our programs.</Text>
                        
                        
        </Box>
    </>
  )
}
