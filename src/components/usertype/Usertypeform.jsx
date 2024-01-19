import { Alert, Card, Container, Group, Stack, Text } from '@mantine/core'
import React, { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../App'
import { getDatabase, ref, set } from 'firebase/database'
import app from '../firebase'
function Usertypeform({ cvFile }) {
    const db = getDatabase(app);
    const navigate = useNavigate()
    const { userid } = useContext(UserAuth)

    const updateusertype = useCallback((usertype) => {
        set(ref(db, `users/${userid}/usertypeupdate`), {
            usertype
        })
            .then((res) => {
                console.log('data is stored successfully')
            })
            .catch((error) => {
                console.log(error)
            })

        if (usertype === 'fresher') {
            navigate('/')
        } else {
            navigate('/education')
        }
    }, [])

    return (
        <>
            {
                cvFile ?
                    <>
                        <Stack align="center" justify="center" mt={20}>
                            <Text size="25px" transform="uppercase" weight="600">ARE YOU FRESHER or EXPERIENCED?</Text>
                        </Stack>
                        <Group position="center" mt="xl">
                            <Card withBorder style={{ cursor: 'pointer' }} className="optionjobs" onClick={() => updateusertype('fresher')}>
                                <Text size="20px">Fresher</Text>
                            </Card>
                            <Card withBorder style={{ cursor: 'pointer' }} className="optionjobs" onClick={() => updateusertype('experienced')}>
                                <Text size="20px">Experienced</Text>
                            </Card>
                        </Group>
                    </>
                    :
                    <>
                        <Container size={700} mt={20}>
                            <Alert color="orange">
                                <Text weight={600}>Please upload your resume to move forword</Text>
                            </Alert>
                        </Container>
                    </>
            }

        </>
    )
}

export default Usertypeform