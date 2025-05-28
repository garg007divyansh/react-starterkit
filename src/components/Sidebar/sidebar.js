import React, {useEffect, useState} from 'react'
import {Box, Flex, Image, Stack} from '@chakra-ui/react'
import {NavLink, useLocation} from 'react-router-dom'
import * as routesNames from '../../constants/routes'
import MyDiv from './sidebar.style'

const Menus = [
  {
    id: 1,
    menuName: 'Dashboard',
    menuLogo: '',
    link: routesNames.DASHBOARD,
  },
]

const Sidebar = (props) => {

  const location = useLocation();
  const [menuId, setMenuId] = useState(null)


  useEffect(() => {
    const menuItem = Menus.find((item) => 
      item.link === location.pathname
    );
    if (menuItem) {
      setMenuId(menuItem.id);
    }
  }, [location.pathname]);
  
  const handleMenu = (item) => {
    setMenuId(item)
  }

  return (
    <MyDiv>
      <Box className='sidebar_wrapper'>
        <Flex className="top_header">
          <Image src={'AppLogo'} className='logo' />
        </Flex>
        <Box className='sidebar_box'>
          <Stack spacing="3" className="menu_box">
            {Menus?.map((item) => {
              return (
                <Box key={item.id} onClick={() => handleMenu(item.id)}>
                  <Flex className={item.id === menuId ? 'active_menu menu_item' : 'menu_item'}>
                    <NavLink to={item.link} className="font_poppins font_dark">
                      <Image src={item.menuLogo} className="icon_size" />
                      {item.menuName}
                    </NavLink>
                  </Flex>
                </Box>
              )
            })}
          </Stack>
        </Box>
      </Box>
    </MyDiv>
  )
}

export default Sidebar
