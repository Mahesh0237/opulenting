import { Button, Divider, Group, Stack, Text } from '@mantine/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/logo1.png'
import logo from '../assets/logo.png'
import { IconCopyright } from '@tabler/icons-react'
import { UserAuth } from '../App'
function Drawernav({ dark }) {
    const { isAuthenticated } = useContext(UserAuth)
    return (
        <Stack>
            <Stack align='center'>
                <Link to={'/'} >
                    <img src={dark ? logo : logo1} height="40px" />
                </Link>
            </Stack>
            <Divider />
            <Stack className='drawernav'>
                <Text component='a' href='/migrate' size={15} color={dark ? 'black' : ''}>Migrate</Text>
                <Text component='a' href='/workabroad' size={15} color={dark ? 'black' : ''}>Work</Text>
                <Text component='a' href='/Investabroad' size={15} color={dark ? 'black' : ''}>Invest</Text>
                <Text component='a' href='/visitvisa' size={15} color={dark ? 'black' : ''}>Visit</Text>
                <Text component='a' href='/training' size={15} color={dark ? 'black' : ''}>Training</Text>
                <Text component='a' href='/visapage' size={15} color={dark ? 'black' : ''}>Visas</Text>
                <Text component='a' href='/overseasjobs' size={15} color={dark ? 'black' : ''}>Overseas Jobs</Text>
                <Text component='a' href='/allproducts' size={15} color={dark ? 'black' : ''}>All Products</Text>
                <Text component='a' href='/recruitfromopulentus' size={15} color={dark ? 'black' : ''}>Recruit From Opulentus</Text>
                <Text component='a' href='/contactus' size={15} color={dark ? 'black' : ''}>Contact Us</Text>
            </Stack>
            {
                !isAuthenticated &&
                <React.Fragment>
                    <Divider />
                    <Group grow>
                        <Button href='/signin' component="a" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Signin</Button>
                        <Button href='/signup' component="a" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Signup</Button>
                    </Group>
                    <Divider />
                </React.Fragment>
            }
            <Text size={15} weight={600} color='blue' ta="center" component='a' href='#'> Copyright <IconCopyright size={16} /> 2023. Opulentus all right reserved</Text>
        </Stack>
    )
}

export default Drawernav