import {React,useState} from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

const Login = () => {

  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const postDetails = (pics) => {}
  const Submithandler = () => {}

  const handleClick = () => setShow (!show) 
  
  const handleEmailChange = (e) => setEmail(e.target.value)

  const handlePasswordChange = (e) => setPassword(e.target.value)


  const emailErr = email === ''

  const passErr = password === ''

  return (
    
    <Stack >
      <FormControl isRequired isInvalid={emailErr}>
          <FormLabel>Email address</FormLabel>
          <Input type='email' value={email} onChange={handleEmailChange} />
          {!emailErr ? (
        <FormHelperText>
          Enter your email.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      </FormControl>

      <FormControl isRequired isInvalid={passErr}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
          <Input type= {show? "text":'password'} value={password} onChange={handlePasswordChange} />
            <InputRightElement width='4.5rem'>
              <Button h={'1.75rem'} size='sm' onClick={handleClick}>
                {show ? "Hide":' Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          {!passErr ? (
        <FormHelperText>
          Enter your password.
        </FormHelperText>
      ) : (
        <FormErrorMessage>password is required.</FormErrorMessage>
      )}
      </FormControl>

      <Button style={{marginTop:15}} colorScheme='blue' type='submit' width='100%' onClick={Submithandler}>
            Login
      </Button>
      <Button style={{marginTop:15}} colorScheme='red' type='submit' width='100%' onClick={() => { setEmail('guest@example.com'); setPassword('123456')}}>
            Get guest user credentials
      </Button>

        
    </Stack>
  
  )}

export default Login