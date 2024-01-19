import { Card, Container, List, Stack, Text } from '@mantine/core'
import { IconPointFilled } from '@tabler/icons-react'
import React from 'react'

function Migratecanada() {
    return (
        <>
            <Card withBorder p={15}>
                <Stack>
                    <Stack>
                        <Text size={18} weight={600} color='#0042aa'>Canada</Text>
                        <Text size={16} ta="justify">
                            The Canadian Federal and Provincial Governments consistently introduce fresh laws and programs designed to facilitate the seamless resettlement of immigrants.
                            A plethora of avenues exists through which individuals can access and establish themselves in the enchanting nation of Canada, often referred to as the "Maple Country."
                            These options reflect Canada's commitment to offering diverse pathways for immigration and successful integration into its vibrant society.
                        </Text>
                    </Stack>
                    <Stack>
                        <Text size={18} weight={600} color='#0042aa'>Express Entry System</Text>
                        <Text size={16} ta="justify">
                            Citizenship and Immigration Canada (CIC) has introduced the Express Entry system to effectively manage applications for permanent residency.
                            This system extends an invitation to individuals worldwide who meet the criteria of the Federal Skilled Worker Program (FSWP), Canadian Experience Class (CEC),
                            Federal Skilled Trades Program (FSTP), or a segment of the Provincial Nominee Program (PNP).
                            Successful applicants will receive an Invitation to Apply for Permanent Residency from the authorities.
                        </Text>
                        <Text size={16} ta="justify">
                            The prerequisites to secure an invitation differ based on the specific program. For eligibility under the FSWP and FSTP,
                            candidates must have a job offer sanctioned by the competent Canadian authorities. Meanwhile, those seeking Permanent Residency through
                            the PNP route must attain a state nomination, and individuals applying under the Canadian Experience Class must align with the selection criteria outlined for the program.
                            This comprehensive approach ensures that diverse avenues exist for skilled individuals to pursue permanent residency in Canada.
                        </Text>
                    </Stack>
                    <Stack>
                        <Text size={16} weight={600} color='#0042aa'>To sum up, once the online application is received it goes through the following steps:</Text>
                        <List
                            spacing="xs"
                            size="sm"
                            center
                            listStyleType='disc'
                            withPadding
                        >
                            <List.Item>
                                <Text size={16}><Text component='a' href='#' weight={600}>Step 1</Text>- Candidates create an Express Entry profile identifying their skills and qualifications in an online resume.
                                    The profile is then ranked against other applicants based on various factors that indicate that the candidate will be an asset to the Canadian
                                    workforce.</Text>
                            </List.Item>
                            <List.Item>
                                <Text size={16}><Text component='a' href='#' weight={600}>Step 2</Text>- Those applicants that do not have a Canadian job offer from an employer will need to register in the Canada Job Bank site.</Text>
                            </List.Item>
                            <List.Item>
                                <Text size={16}>
                                    <Text component='a' href='#' weight={600}>Step 3</Text>- Assessment of every profile in the Job Bank is done to judge who could meet the criteria of
                                    a federal economic program and then upgraded with other entries in the Express Entry pool.
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text size={16}><Text component='a' href='#' weight={600}>Step 4</Text>- If an application is selected, the applicant will be issued an Invitation to Apply to which he/she needs to respond within 60 days’ time to qualify for permanent residence.</Text>
                            </List.Item>
                        </List>
                    </Stack>
                    <Stack>
                        <Text size={18} weight={600} color='#0042aa'>Federal Skilled Worker Program</Text>
                        <Text size={16} ta="justify">Receiving permanent residency through the Express Entry system bestows upon you a visa that grants the privilege to reside and engage in
                            lawful employment throughout the entirety of the country. This is made possible by your official status as a Permanent Resident, which is conferred
                            based on a comprehensive evaluation of factors such as your educational background, professional experience,
                            and various other qualifying criteria. This status solidifies your ability to contribute to and partake in the Canadian society as a long-term resident.
                        </Text>
                        <Text size={16} ta="justify">
                            From January 1, 2015, Federal Skilled Worker applications are being processed through the Express Entry selection system for immigration to Canada.
                            Candidates eligible under the Federal Skilled Worker Program must first make an Expression of Interest in immigrating to Canada to start the Express Entry procedure.
                        </Text>
                        <Text size={16} ta="justify">To qualify for this category, the following conditions must be met:</Text>
                        <List
                            spacing="xs"
                            size="sm"
                            center
                            listStyleType='disc'
                            withPadding
                        >
                            <List.Item>
                                <Text size={16} >
                                    <Text component='a' href='#' weight={600}>Skilled Work Experience: </Text>
                                    You must possess at least one year of consecutive full-time or equivalent paid work experience within the last 10 years,
                                    in a skilled occupation classified as National Occupational Classification (NOC) skill level 0, A, or B.
                                    This work experience should demonstrate your expertise and competence in the relevant field.
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text size={16} >
                                    <Text component='a' href='#' weight={600}>Education:</Text>
                                    It is required that you obtain an Educational Credential Assessment (ECA) report from an agency sanctioned by Citizenship & Immigration Canada (CIC).
                                    This report verifies that your educational background is equivalent to Canadian education standards, substantiating your academic qualifications.
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text size={16} >
                                    <Text component='a' href='#' weight={600}>Language Skills:</Text>
                                    Meeting the minimum language proficiency of Canadian Language Benchmark (CLB) level 7 is essential. You are obligated to take a
                                    language test approved by Citizenship and Immigration Canada (CIC) that verifies your proficiency in speaking, listening, reading, and writing skills.
                                </Text>
                            </List.Item>
                        </List>
                    </Stack>
                    <Stack>
                        <Text size={20} weight={600} color='#0042aa'>Federal Skilled Trades Program</Text>
                        <Text size={16} ta="justify">
                            The described program stands as a dedicated and streamlined initiative aimed at revolutionizing Canada's immigration system into one that is rapid and adaptable,
                            with a primary focus on job creation, economic expansion, and sustained prosperity. This new program places heightened emphasis on catering to industry requirements
                            during the processing of eligible immigration applications. The overarching goal is to ensure a symbiotic relationship between immigration and economic demands,
                            resulting in a more efficient and aligned immigration process that benefits both the country's growth and the applicants' aspirations.
                        </Text>
                        <Text size={16} ta="justify">
                            The Federal Skilled Trades Program is specifically designed for individuals seeking permanent residency based on their qualifications in a skilled trade.
                            To apply under this category, there are certain conditions that applicants must ensure they meet in order to be eligible.
                            These conditions are set to determine the suitability of candidates for the program and their potential contribution to the Canadian workforce and economy.
                        </Text>
                    </Stack>
                </Stack>
            </Card>
        </>
    )
}

export default Migratecanada