import React from 'react'
import Header from '../components/Header'
import { Button, Group, Stack } from '@mantine/core'
import pagenotfound from '.././assets/pagenotfound.avif'
function Dynamicpage() {
    return (
        <>
            {/* <Header /> */}
            <Stack align='center' justify='center' style={{ height: "90vh" }} >
                <img src={pagenotfound} alt='image'  />
                <Group>
                    <Button color='red' component='a' href='/homepage'>Go back to Home Page</Button>
                </Group>
            </Stack>
        </>
    )
}

export default Dynamicpage