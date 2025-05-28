import React from 'react'
import {Box, Flex, Heading} from '@chakra-ui/react'
import MyDiv from './dashboard.style'
import {NavBar} from '../../components'

const Dashboard = (props) => {

  return (
    <MyDiv>
      <Box className="page_wrapper">
        <Flex className="page_heading flex_header">
          <Heading as="h1" className="font-poppins font_dark text_semibold text_4xl">Dashboard</Heading>
          <NavBar />
        </Flex>
      </Box>
    </MyDiv>
  )
}

export default Dashboard
