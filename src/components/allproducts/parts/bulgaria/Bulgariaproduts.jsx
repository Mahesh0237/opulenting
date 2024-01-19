import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Bulgariaproduts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/Eu_bluecard_bulgaria">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>EU Blue Card - Bulgaria</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Bulgariaproduts