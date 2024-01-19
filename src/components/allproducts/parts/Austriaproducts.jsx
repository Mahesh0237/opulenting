import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Austriaproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/austriapage">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Austria Red-White-Red Card</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Austriaproducts