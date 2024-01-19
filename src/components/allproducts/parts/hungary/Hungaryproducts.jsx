import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Hungaryproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/hungary_Eu_bluecard">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>EU Blue Card - Hungary</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Hungaryproducts