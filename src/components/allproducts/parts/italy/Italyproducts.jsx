import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Italyproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/Eu-bluecard_italy">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>EU Blue Card - Italy</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Italyproducts