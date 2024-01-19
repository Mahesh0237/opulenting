import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Irelandproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/irelanddependentvisa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Ireland Dependent Visa</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/ireland_family_immigartion">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Ireland Family Immigration</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            {/* <Grid.Col md={6}>
                <Link to="/australia_family_immigration">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Australia Family Immigration</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/australia_businessvisa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Australian Business Innovation</Badge>
                    </Card>
                </Link>
            </Grid.Col> */}
        </Grid>
    )
}

export default Irelandproducts