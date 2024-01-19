import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Polandproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/Eu_bluecarad_poland">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>EU Blue Card - Poland</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Polandproducts