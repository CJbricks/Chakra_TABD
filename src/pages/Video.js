import React from 'react';
import { Box, Flex, SimpleGrid, Text, Center, Container, AspectRatio } from '@chakra-ui/react';




export default function Video() {
  

  return (
    <>
      <Container>
        <Box alignItems='center' justifyContent='center'>
          <AspectRatio ratio={16 / 9}>
            <iframe 
            title="brittany-video" 
            id="ytvideo"
            type="text/html"
            src="https://www.youtube.com/embed/xT5zE5oiqoY"
            alt="embedded-video-example" 
            width='640'
            height='360'
            allowFullScreen />
          </AspectRatio>
        </Box>
      </Container>
    </>
  )
}
