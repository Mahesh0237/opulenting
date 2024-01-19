import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Netherlandsproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/netherland_Eu_bluecardvisa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Netherlands EU Blue Card</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Netherlandsproducts