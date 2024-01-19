import { Card, Image, Stack, Text } from '@mantine/core'
import React, { useState } from 'react'

function Productcard({ visa, typeofvisa, desc }) {
    let link;
    if (typeofvisa === 'Canada Provincial Nominee') {
        link = '/canada_provisionalvisa'
    } else if (typeofvisa === 'Canada Federal Skilled Worker') {
        link = "/canada_fedral_skilled_visa"
    } else if (typeofvisa === 'Canada Post Graduate Work Permit') {
        link = "/canad_postgraduate_work_permit"
    } else if (typeofvisa === 'Canada Open Work Permit') {
        link = "/canad_open_work_permit"
    } else if (typeofvisa === "Australia Skilled Regional Visa") {
        link = "/australia-skilled-regional-visa"
    } else if (typeofvisa === "Australia Skilled Independent") {
        link = "/australia_skilled_independent_visa"
    } else if (typeofvisa === 'Australia Family Immigration') {
        link = "/australia_family_immigration"
    } else if (typeofvisa === 'Australian Business Innovation') {
        link = "/australia_businessvisa"
    } else if (typeofvisa === 'Germany National Visa') {
        link = "/germany_nationalvisa"
    } else if (typeofvisa === 'Germany Dependent Visa') {
        link = "/germany_dependenyt_visa"
    } else if (typeofvisa === 'Germany Skilled Job Seeker Visa') {
        link = "/germanyskilled_jobseeker"
    } else if (typeofvisa === "USA Student visa") {
        link = "/usa_studentvisa"
    } else if (typeofvisa === "Austria Red-White-Red Card") {
        link = "/austriapage"
    } else if (typeofvisa === "South Africa Critical Skilled Visa") {
        link = "/southafrica_skilled_visa"
    } else if (typeofvisa === "Hong Kong Quality Migrant Admiss") {
        link = "/hongkong_quality_migrate_visa"
    } else if (typeofvisa === "Dependent QMAS HK") {
        link = "/hingkong_dependent_visa"
    }
    return (
        <Card padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={visa}
                    height={160}
                    alt="products_card"
                />
            </Card.Section>
            <Stack mt={10} spacing={5}>
                <Text component='a' href={link} size={16} weight={600} color='#0c4aae'>{typeofvisa}</Text>
                <Text ta="justify" size={15}>{desc}</Text>
            </Stack>
            <Text component='a' href={link} className='btn-link' style={{ textDecoration: "none" }}>Read More</Text>
        </Card>
    )
}

export default Productcard