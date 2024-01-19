import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Switzerlandproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/switzerland_dependent_visa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Switzerland Dependent Visa</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Switzerlandproducts