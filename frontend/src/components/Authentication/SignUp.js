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

const SignUp = () => {

  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const postDetails = (pics) => {}
  const Submithandler = () => {}

  const handleClick = () => setShow (!show) 
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleuserNameChange = (e) => setUserName(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)

  const emailErr = email === ''
  const nameErr = userName === ''
  const passErr = password === ''
  const confirmErr = confirmPassword !== password
  return (
    
    <Stack >
      <FormControl isRequired isInvalid={nameErr}>
          <FormLabel>Username</FormLabel>
          <Input type='name' value={userName} onChange={handleuserNameChange}/>
          {!nameErr ? (
        <FormHelperText>
          Enter your username.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Username is required.</FormErrorMessage>
      )}
      </FormControl>

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

      <FormControl isRequired isInvalid={confirmErr}>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input type={show? "text":'password'} value={confirmPassword} onChange={handleConfirmPasswordChange}/>
            <InputRightElement width='4.5rem'>
              <Button h={'1.75rem'} size='sm' onClick={handleClick}>
                {show ? "Hide":' Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          {!confirmErr ? (
               <FormHelperText>
                   Confirm your password.
              </FormHelperText>
      ) : (
        <FormErrorMessage>does not match</FormErrorMessage>
      )}
      </FormControl>

      <FormControl id='pic'>
        <FormLabel> Upload your Picture</FormLabel>
        <Input type={'file'} p={1.5} accept='image/' onChange={(e) => postDetails(e.target.files[0])}>
        
        </Input>
      </FormControl>

      <Button style={{marginTop:15}} colorScheme='blue' type='submit' width='100%' onClick={Submithandler}>
            Sign Up
          </Button>

        
    </Stack>
  
  )}

export default SignUp

// function errorMessage() {
//   const [input, setInput] = useState('')

//   const handleInputChange = (e) => setInput(e.target.value)

//   const isError = input === ''

//   return (
//     <FormControl isInvalid={isError}>
//       <FormLabel>Email</FormLabel>
//       <Input type='email' value={input} onChange={handleInputChange} />
//       {!isError ? (
//         <FormHelperText>
//           Enter the email you'd like to receive the newsletter on.
//         </FormHelperText>
//       ) : (
//         <FormErrorMessage>Email is required.</FormErrorMessage>
//       )}
//     </FormControl>
//   )
// }