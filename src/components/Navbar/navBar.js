import { Flex, Menu, MenuButton, Button, Avatar, Heading, MenuList, MenuDivider, MenuItem, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routesNames from '../../constants/routes'
import ArrowDownIcon from '../../assets/images/arrow-down.svg'
import MyDiv from './navBar.style'

const NavBar = (props) => {

  return (
    <MyDiv>
      <Menu className="my">
        <Flex className="profile_menu">
          <MenuButton as={Button} leftIcon={<Avatar size='sm' name={'Manmohan Kumar'} />} rightIcon={<Image src={ArrowDownIcon} />}>
            <Heading as="h1" className="font-poppins font_dark text_semibold text_md">Manmohan Kumar</Heading>
          </MenuButton>
        </Flex>
        <MenuList className="dropdown_list">
          <MenuItem><NavLink className="font-poppins font_dark text_medium text_md" to={routesNames.PROFILE}>Profile</NavLink></MenuItem>
          <MenuDivider mt={0} mb={0} className="divider" />
          <MenuItem className="font_poppins font_dark text_md text_medium logout_user">Log out</MenuItem>
        </MenuList>
      </Menu>
    </MyDiv>
  )
}

export default NavBar
