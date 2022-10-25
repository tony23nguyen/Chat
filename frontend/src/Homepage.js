import React from 'react'
import {Container,Box,Text,  Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from './components/Authentication/Login'
import SignUp from './components/Authentication/SignUp'

const Homepage = () => {
  return (
    <Container maxW='xl' centerContent>
        <Box display='flex' justifyContent='center' p={3} bg={'white'} w='100%' m='40px 0 15px 0' borderRadius = 'lg' borderWidth= '1px'>
          <Text fontSize='4xl' fontFamily='Work Sans' color={'black'} >
              ChatBubble.io
          </Text>
        </Box>
        <Box p={4} bg={'white'} w='100%' m='0px 0 15px 0' borderRadius = 'lg' borderWidth= '1px'>
              <Tabs variant='soft-rounded' colorScheme='blue'>
                  <TabList mb='1em' display={'flex'} justifyContent='center'>
                    <Tab width={'50%'}>Login</Tab>
                    <Tab width={'50%'}>Sign Up</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Login></Login>
                    </TabPanel>
                    <TabPanel>
                      <SignUp></SignUp>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
        </Box>
    </Container>
  )
}

export default Homepage