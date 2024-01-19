import { Alert, Button, Card, Container, Grid, Group, Loader, LoadingOverlay, Modal, Text, Tooltip } from '@mantine/core'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import EducationModal from './parts/EducationModal'
import { useViewportSize } from '@mantine/hooks';
import { getDatabase, onValue, ref, remove } from 'firebase/database';
import { UserAuth } from '../../App';
import app from '../firebase';
import { IconArrowRight, IconEdit, IconTrash } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import EditeducationModal from './parts/editparts/EditeducationModal';
import { openConfirmModal } from '@mantine/modals';
function UserEducationdetailswrapper() {
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const { userid } = useContext(UserAuth)
    const db = getDatabase(app)
    const navigate = useNavigate()
    const { width } = useViewportSize();
    const [education, setEducation] = useState(false)
    const openEducationalModal = () => {
        setEducation(true)
    }
    const closeEducationModal = () => {
        setEducation(false)
    }
    const [editId, setEditId] = useState(null)
    const [editEducation, setEditEducation] = useState(false)
    const openEditEducationModal = useCallback((value) => {
        setEditEducation(true)
        if (value) {
            setEditId(value)
        } else {
            setEditId(null)
        }
    }, [])
    const closeEditEducationModal = () => {
        setEditEducation(false)
    }
    let modalSize;
    if (width >= 1441) {
        modalSize = "55%"
    } else if (width >= 768) {
        modalSize = "75%"
    } else if (width >= 426) {
        modalSize = "70%"
    } else if (width <= 425) {
        modalSize = "100%"
    }
    const [userEducationData, setUserEducationData] = useState({})

    function getUserEducationData() {
        setIsLoadingEffect(true)
        const starCountRef = ref(db, `users/${userid}/userdetails/EducationData`)
        onValue(starCountRef, (snapshot) => {
            setIsLoadingEffect(false)
            const user_data = snapshot.val()
            setUserEducationData(user_data)
        })
    }

    const refresherEducationData = useCallback(() => {
        getUserEducationData()
    }, [userid])

    useEffect(() => {
        getUserEducationData()
    }, [userid])

    const deleteUserEducationData = useCallback((value) => {
        openConfirmModal({
            title: (
                <Text weight={600} size={16}>Please confirm your action!</Text>
            ),
            children: (
                <Text size="sm">Are you sure you want to delete your details? This action is destructive and you will have
                    to contact support to restore your data. </Text>
            ),
            labels: { confirm: 'Delete', cancel: "No don't delete it" },
            onConfirm: () => {
                const dataRef = ref(db, `users/${userid}/userdetails/EducationData/${value}`)
                remove(dataRef)
                    .then((res) => {
                        refresherEducationData()
                        notifications.show({
                            title: 'notification',
                            message: 'education details deleted successfully! 🤥',
                            color: 'green',
                            position: 'bottom-right',
                            zIndex: 9999999,
                        })
                    })
                    .catch((error) => {
                        console.error(`Error deleting data: ${error}`)
                    })
            },
            confirmProps: {
                color: ''
            },
            onCancel: () => console.log('Cancel'),
            centered: true,
            withCloseButton: false,
            closeOnClickOutside: false,
            closeOnEscape: false,
            zIndex: 999999999999999
        })

    }, [])

    const redirectEmploymentPage = () => {
        if (userEducationData !== null) {
            navigate('/user_employment_details')
        } else {
            alert('first fill the education details')
        }
    }

    return (
        <Container py={50}>
            <Card withBorder >
                <Card.Section inheritPadding withBorder py="md">
                    <Group position='apart'>
                        <Text color='rgb(255, 0, 0)' size={18} mb={3} weight={600}>Education Details</Text>
                        <Button color="dark" size="xs" onClick={openEducationalModal} >Add New</Button>
                    </Group>
                </Card.Section>
                <Card.Section inheritPadding withBorder py="md">
                    {
                        userEducationData !== null ?
                            Object.keys(userEducationData).map((id) => {
                                const userData = userEducationData[id];
                                return (
                                    <React.Fragment key={id}>
                                        <Text size={14} color='blue' weight="bold" mb={5}>{userData.qualification}:</Text>
                                        <Card mb="xs" withBorder >
                                            <Grid>
                                                <Grid.Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Group position="right">
                                                        <Tooltip
                                                            label="edit"
                                                            withArrow
                                                            arrowPosition="center"
                                                        >
                                                            <Button
                                                                variant='light'
                                                                size='xs'
                                                                radius="50%"
                                                                pl={7} pr={7}
                                                                onClick={() => { openEditEducationModal(id) }}
                                                            >
                                                                <IconEdit size={15} />
                                                            </Button>
                                                        </Tooltip>
                                                        <Tooltip
                                                            label="delete"
                                                            withArrow
                                                            position="top-end"
                                                        >
                                                            <Button
                                                                variant='light'
                                                                size='xs'
                                                                radius="50%"
                                                                color='red'
                                                                pl={7} pr={7}
                                                                onClick={() => { deleteUserEducationData(id) }}
                                                            >
                                                                <IconTrash size={15} />
                                                            </Button>
                                                        </Tooltip>
                                                    </Group>
                                                </Grid.Col>
                                                <Grid.Col xs={6} sm={4} md={3} lg={3} xl={3}>
                                                    <Text size={15} weight={600} color='#4A0058'>Degree </Text>
                                                    <Text>{userData.qualification}</Text>
                                                </Grid.Col>
                                                {
                                                    (userData.qualification === '12th') || (userData.qualification === '10th') ?
                                                        <>
                                                            <Grid.Col xs={6} sm={4} md={3} lg={3} xl={3}>
                                                                <Text size={15} weight={600} color='#4A0058'>Board</Text>
                                                                <Text>{userData.board}</Text>
                                                            </Grid.Col>
                                                            <Grid.Col xs={6} sm={4} md={3} lg={3} xl={3}>
                                                                <Text size={15} weight={600} color='#4A0058'>School Medium</Text>
                                                                <Text>{userData.schoolMedium}</Text>
                                                            </Grid.Col>
                                                        </>
                                                        :
                                                        <>
                                                            <Grid.Col xs={6} sm={4} md={3} lg={3} xl={3}>
                                                                <Text size={15} weight={600} color='#4A0058'>University/Institute</Text>
                                                                <Text>{userData.university}</Text>
                                                            </Grid.Col>
                                                            <Grid.Col xs={6} sm={4} md={3} lg={3} xl={3}>
                                                                <Text size={15} weight={600} color='#4A0058'>Course</Text>
                                                                <Text>{userData.course}</Text>
                                                            </Grid.Col>
                                                            <Grid.Col xs={6} sm={4} md={3} lg={3} xl={3}>
                                                                <Text size={15} weight={600} color='#4A0058'>Specialization</Text>
                                                                <Text>{userData.specialization}</Text>
                                                            </Grid.Col>
                                                            <Grid.Col xs={6} sm={4} md={3} lg={3} xl={3}>
                                                                <Text size={15} weight={600} color='#4A0058'>Corse Type</Text>
                                                                <Text>{userData.courseType}</Text>
                                                            </Grid.Col>
                                                            <Grid.Col xs={6} sm={4} md={3} lg={3} xl={3}>
                                                                <Text size={15} weight={600} color='#4A0058'>Persuing</Text>
                                                                <Text>{userData.isPersuing}</Text>
                                                            </Grid.Col>
                                                            <Grid.Col xs={6} sm={4} md={3} lg={3} xl={3}>
                                                                <Text size={15} weight={600} color='#4A0058'>Course From</Text>
                                                                <Text>{userData.course_from}</Text>
                                                            </Grid.Col>
                                                        </>
                                                }
                                                {
                                                    (userData.isPersuing === 'No') &&
                                                    <>
                                                        <Grid.Col xs={6} sm={4} md={3} lg={3} xl={3}>
                                                            <Text size={15} weight={600} color='#4A0058'>{(userData.qualification === '12th') || (userData.qualification === '10th') ? 'Passing out Year' : 'Course To'}</Text>
                                                            <Text>{userData.course_to}</Text>
                                                        </Grid.Col>
                                                        <Grid.Col xs={6} sm={4} md={3} lg={3} xl={3}>
                                                            <Text size={15} weight={600} color='#4A0058'>Marks in %</Text>
                                                            <Text>{userData.marks}</Text>
                                                        </Grid.Col>
                                                    </>
                                                }
                                            </Grid>
                                        </Card>
                                    </React.Fragment>
                                )
                            })
                            :
                            <Alert color="orange">
                                <Group>
                                    No Education details
                                    <Button size="xs" onClick={openEducationalModal} variant="light">Update Education</Button>
                                </Group>
                            </Alert>
                    }
                    <LoadingOverlay visible={isLoadingEffect} loader={<Loader variant="bars" color="green" />} />
                </Card.Section>
                <Card.Section inheritPadding py="sm">
                    <Group position='right'>
                        <Button onClick={redirectEmploymentPage} variant='default'>Next to Employment <IconArrowRight size={16} /></Button>
                    </Group>
                </Card.Section>
            </Card>
            <Modal
                opened={education}
                onClose={closeEducationModal}
                withCloseButton={false}
                zIndex={999999999}
                size={modalSize}
                closeOnClickOutside={false}
                closeOnEscape={false}
            >
                {
                    education === true &&
                    <EducationModal
                        refresherEducationData={refresherEducationData}
                        closeEducationModal={closeEducationModal}
                    />
                }
            </Modal>
            <Modal
                opened={editEducation}
                onClose={closeEditEducationModal}
                withCloseButton={false}
                zIndex={999999999}
                size={modalSize}
                closeOnClickOutside={false}
                closeOnEscape={false}
            >
                {
                    editEducation === true &&
                    <EditeducationModal
                        editId={editId}
                        refresherEducationData={refresherEducationData}
                        closeEditEducationModal={closeEditEducationModal}
                    />
                }
            </Modal>
        </Container>
    )
}

export default UserEducationdetailswrapper