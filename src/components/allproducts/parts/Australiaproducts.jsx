import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Australiaproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/australia-skilled-regional-visa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Australia Skilled Regional Visa</Badge>
                        {/* <Text size={16} ><Image src={australia} width={12} style={{ display: "inline-block", justifyContent: "center", alignItems: "center" }} /> Australia Skilled Regional Visa</Text> */}
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/australia_skilled_independent_visa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Australia Skilled Independent Visa</Badge>
                        {/* <Text size={16} ><Image src={australia} width={12} style={{ display: "inline-block", justifyContent: "center", alignItems: "center" }} /> Australia Skilled Independent Visa</Text> */}
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/australia_family_immigration">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Australia Family Immigration</Badge>
                        {/* <Text size={16} ><Image src={australia} width={12} style={{ display: "inline-block", justifyContent: "center", alignItems: "center" }} /> Australia Family Immigration</Text> */}
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/australia_businessvisa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Australian Business Innovation</Badge>
                        {/* <Text size={16} ><Image src={australia} width={12} style={{ display: "inline-block", justifyContent: "center", alignItems: "center" }} /> Australian Business Innovation</Text> */}
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Australiaproducts