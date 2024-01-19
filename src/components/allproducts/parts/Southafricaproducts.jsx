import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Southafricaproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/southafrica_skilled_visa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>South Africa Critical Skilled Visa</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Southafricaproducts