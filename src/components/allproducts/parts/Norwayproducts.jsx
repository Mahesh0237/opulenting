import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Norwayproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/norwayproduct">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Norway Documentation Assistance</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Norwayproducts