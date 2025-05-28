import React from 'react'
import { Box, Image, Input } from '@chakra-ui/react'
import MyDiv from './login.style'
import { CustomButton } from '../../components'
import { useNavigate } from 'react-router-dom'
import { setItem } from '../../utilities/authUtils'
import * as routesNames from '../../constants/routes'

const Login = (props) => {

  const navigate = useNavigate()

  const handleClick = () => {
    setItem('token', 'token')
    navigate(routesNames.DASHBOARD)
  }

  return (
    <MyDiv>
      <Box className=''>
        <Input type="email" size="md" name="email" placeholder="Email" />
        <CustomButton size="md" type="submit" title="Next" onClick={handleClick} />
      </Box>
    </MyDiv>
  )
}
export default Login