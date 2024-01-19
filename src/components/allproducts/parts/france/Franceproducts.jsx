
import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Franceproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/france-eu-blue-card-france">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Eu Blue Card France</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Franceproducts