import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Finlandproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/finland_Eu_bluecardvisa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>EU Blue Card - Finland</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Finlandproducts