import React, { useContext, useState } from 'react'
import logo1 from '../assets/logo1.png'
import logo from '../assets/logo.png'
import { IconLogout, IconMenu2, IconUser } from '@tabler/icons-react'
import { Anchor, Avatar, Button, Drawer, Group, Menu, Text, useMantineColorScheme } from '@mantine/core'
import { useViewportSize, useWindowScroll } from '@mantine/hooks'
import Drawernav from './Drawernav'
import { useLocation, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import app from './firebase'
import { getAuth } from 'firebase/auth'
import { UserAuth } from '../App'
import { notifications } from '@mantine/notifications'
import { useUserAuth } from '../zustand/useUserAuth'
import { userTypeUpdate } from '../zustand/UserTypeUpdate'
const auth = getAuth(app)

function Header() {
    const { userLoggedin } = useUserAuth()
    const { updateUsertype } = userTypeUpdate()
    const { isAuthenticated, useremail } = useContext(UserAuth)
    const { width } = useViewportSize()
    const navigate = useNavigate()
    const location = useLocation()
    const currentPath = location.pathname
    const [scroll] = useWindowScroll()
    const { colorScheme } = useMantineColorScheme()
    const dark = colorScheme === 'dark'
    const [navbarDrawer, setNavbarDrawer] = useState(false)

    const openNavbarDrawer = () => {
        setNavbarDrawer(true)
    }
    const closeNavbarDrawer = () => {
        setNavbarDrawer(false)
    }

    const logoutUser = () => {
        signOut(auth).then(() => {
            notifications.show({
                title: 'Success',
                message: 'Signed out successfully!',
                color: 'green',
                zIndex: 9999999,
            })
            userLoggedin(false)
            updateUsertype(false)
            navigate('/')
        }).catch((error) => {
            console.log('signout error', error.message)
        })
    }

    return (
        <header className={`drawer ${scroll.y > 100 ? 'position-sticky' : 'position-relative'}`}>
            <nav className={`navbar navbar-expand-lg navbar-light ${dark ? 'bg-dark' : 'bg-white'}`}>
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={dark ? logo : logo1} alt="" height="35px" width="150px" /></a>
                    <Group>
                        {
                            isAuthenticated &&
                            width < 1400 &&
                            <Menu shadow="md" width={150}>
                                <Menu.Target>
                                    <Avatar color="cyan" radius="xl" style={{ cursor: "pointer" }}>
                                        {
                                            useremail ?
                                                useremail.charAt(0).toUpperCase()
                                                :
                                                <IconUser />
                                        }
                                    </Avatar>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Item icon={<IconUser size={14} />} component='a' href='/user_education_details'>My Profile</Menu.Item>
                                    <Menu.Divider />
                                    <Menu.Item icon={<IconMenu2 size={14} />} component='a' href='/userenquireypreview'>Leads</Menu.Item>
                                    <Menu.Divider />
                                    <Menu.Item icon={<IconLogout size={14} />} color='red' onClick={logoutUser}>Log Out</Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        }
                        <Button className="navbar-toggler" py={5} px={5} size='xs' color='red' variant={dark ? 'white' : 'default'} onClick={openNavbarDrawer}>
                            <IconMenu2 />
                        </Button>
                    </Group>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item dropdown">
                                <Anchor href='/migrate' className={`nav-link ${currentPath === '/migrate' ? 'active' : ''}`} style={{ fontWeight: "bold" }} underline={false} ><Text color={dark && 'white'}>Migrate</Text></Anchor>
                            </li>
                            <li className="nav-item dropdown">
                                <Anchor href='/workabroad' className={`nav-link ${currentPath === '/workabroad' ? 'active' : ''}`} style={{ fontWeight: "bold" }} underline={false} ><Text color={dark && 'white'}>Work</Text></Anchor>
                            </li>
                            <li className="nav-item dropdown">
                                <Anchor href='/Investabroad' className={`nav-link ${currentPath === '/Investabroad' ? 'active' : ''}`} style={{ fontWeight: "bold" }} underline={false} ><Text color={dark && 'white'}>Invest</Text></Anchor>
                            </li>
                            <li className="nav-item dropdown">
                                <Anchor href='/visitvisa' className={`nav-link ${currentPath === '/visitvisa' ? 'active' : ''}`} style={{ fontWeight: "bold" }} underline={false} ><Text color={dark && 'white'}>Visit</Text></Anchor>
                            </li>
                            <li className="nav-item dropdown">
                                <Anchor href='/training' className={`nav-link ${currentPath === '/training' ? 'active' : ''}`} style={{ fontWeight: "bold" }} underline={false} ><Text color={dark && 'white'}>Training</Text></Anchor>
                            </li>
                            <li className="nav-item dropdown">
                                <Anchor href='/visapage' className={`nav-link ${currentPath === '/visapage' ? 'active' : ''}`} style={{ fontWeight: "bold" }} underline={false} ><Text color={dark && 'white'}>Visas</Text></Anchor>
                            </li>
                            <li className="nav-item dropdown">
                                <Anchor href='/overseasjobs' className={`nav-link ${currentPath === '/overseasjobs' ? 'active' : ''}`} style={{ fontWeight: "bold" }} underline={false} ><Text color={dark && 'white'}>Overseas Jobs</Text></Anchor>
                            </li>
                            <li className="nav-item dropdown">
                                <Anchor href='/allproducts' className={`nav-link ${currentPath === '/allproducts' ? 'active' : ''}`} style={{ fontWeight: "bold" }} underline={false} ><Text color={dark && 'white'}>All Products</Text></Anchor>
                            </li>
                            <li className="nav-item dropdown">
                                <Anchor href='/recruitfromopulentus' className={`nav-link ${currentPath === '/recruitfromopulentus' ? 'active' : ''}`} style={{ fontWeight: "bold" }} underline={false} ><Text color={dark && 'white'}>Recruit From Opulentus </Text></Anchor>
                            </li>
                            <li className="nav-item dropdown">
                                <Anchor href='/contactus' className={`nav-link ${currentPath === '/contactus' ? 'active' : ''}`} style={{ fontWeight: "bold" }} underline={false} ><Text color={dark && 'white'}>Contact Us</Text></Anchor>
                            </li>
                        </ul>
                        <Group>
                            {
                                isAuthenticated ?
                                    <Menu shadow="md" width={150}>
                                        <Menu.Target>
                                            <Avatar color="teal" radius="xl" style={{ cursor: "pointer" }}>
                                                {
                                                    useremail ?
                                                        useremail.charAt(0).toUpperCase()
                                                        :
                                                        <IconUser />
                                                }
                                            </Avatar>
                                        </Menu.Target>

                                        <Menu.Dropdown>
                                            <Menu.Item icon={<IconUser size={14} />} component='a' href='/user_education_details'>My Profile</Menu.Item>
                                            <Menu.Divider />
                                            <Menu.Item icon={<IconMenu2 size={14} />} component='a' href='/userenquireypreview'>Leads</Menu.Item>
                                            <Menu.Divider />
                                            <Menu.Item icon={<IconLogout size={14} />} color='red' onClick={logoutUser}>Log Out</Menu.Item>
                                        </Menu.Dropdown>
                                    </Menu>
                                    :
                                    <>
                                        <Button component='a' href='/signin' size='xs' variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Sign in</Button>
                                        <Button color='red' component='a' href='/signup' size='xs' >Sign Up</Button>
                                    </>
                            }
                        </Group>
                    </div>
                </div>
            </nav>
            <Drawer
                opened={navbarDrawer}
                onClose={closeNavbarDrawer}
                position="right"
                size="xs"
                zIndex={999999}
            >
                <Drawernav
                    dark={dark}
                />
            </Drawer>
        </header>
    )
}

export default Header

