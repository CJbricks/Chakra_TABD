import React from 'react';
import { Box, Flex, SimpleGrid, Text, Center, Container, AspectRatio } from '@chakra-ui/react';




export default function Video() {
  

  return (
    <>
      <Container>
        <Box alignItems='center' justifyContent='center'objectFit="fill" w="700px">
          <AspectRatio maxW='1000px' ratio={1}>
            <iframe 
            title="brittany-video" 
            src="https://www.youtube.com/embed/xT5zE5oiqoY"
            alt="embedded-video-example" 
            allowFullScreen />
          </AspectRatio>
        </Box>
      </Container>
    </>
  )
}
