import React, { useContext, useState } from 'react'
import { Alert, Badge, Button, Group, Menu, ScrollArea, Table, Text } from '@mantine/core'
import { IconDotsVertical, IconDownload, IconEye, IconTrash } from '@tabler/icons-react'
import { UserAuth } from '../../../../App'
import app from '../../../firebase'
import { getDatabase, ref, remove, set } from 'firebase/database'
import { notifications } from '@mantine/notifications'
import { openConfirmModal } from '@mantine/modals'
function Telephonicdatawrapper({ telephonicdata }) {
    const { userid } = useContext(UserAuth)
    const db = getDatabase(app)
    const updateStatus = (id, value) => {
        set(ref(db, `users/${userid}/user_enquirey_data/telephonic_counselling/${id}/status`), {
            status: value
        })
            .then((res) => {
                notifications.show({
                    title: 'Updated',
                    message: '',
                    color: 'green',
                    zIndex: 9999999,
                })
            })
            .catch((error) => {
                console.log('error', error)
            })
    }
    const deleteData = (id) => {
        openConfirmModal({
            title: (
                <Text weight={600} size={16}>Please confirm your action!</Text>
            ),
            children: (
                <Text size="sm">Are you sure you want to delete? This action is destructive and you will have
                    to contact support to restore the data. </Text>
            ),
            labels: { confirm: 'Delete', cancel: "No don't delete it" },
            onConfirm: () => {
                const dataRef = ref(db, `users/${userid}/user_enquirey_data/telephonic_counselling/${id}`)
                remove(dataRef)
                    .then((res) => {
                        notifications.show({
                            title: 'notification',
                            message: 'deleted successfully! 🤥',
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
    }

    return (
        <>
            <ScrollArea w="100%" scrollbarSize={6}>
                <Table withBorder withColumnBorders verticalSpacing="sm" >
                    <thead>
                        <tr>
                            <th>Client Name</th>
                            <th>Mail</th>
                            <th>Mobile Number</th>
                            <th>Country intrested</th>
                            <th>Resume</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            telephonicdata !== null ?
                                Object.keys(telephonicdata).map((id) => {
                                    const userData = telephonicdata[id]
                                    return (
                                        <tr key={id}>
                                            <td>{userData.name}</td>
                                            <td>{userData.email}</td>
                                            <td>{userData.countryCode} {userData.mobileNumber}</td>
                                            <td>{userData.countryIntrested}</td>
                                            <td>
                                                {
                                                    userData.ResumeUrl ?
                                                        <Button variant='light' color='cyan' component='a' target="_blank" href={userData.ResumeUrl.downloadURL} compact><IconEye size={14} />&nbsp;view</Button>
                                                        :
                                                        <Text>--</Text>
                                                }
                                            </td>
                                            <td>
                                                <Group position='apart'>
                                                    {
                                                        userData.status ?
                                                            userData.status.status &&
                                                            <>
                                                                {
                                                                    userData.status.status === "Reg_full_service" &&
                                                                    <Badge color='green'>{userData.status.status}</Badge>
                                                                }
                                                                {
                                                                    userData.status.status === "processing" &&
                                                                    <Badge color="yellow">{userData.status.status}</Badge>
                                                                }
                                                                {
                                                                    userData.status.status === "new" &&
                                                                    <Badge >{userData.status.status}</Badge>
                                                                }
                                                                {
                                                                    userData.status.status === "not_intrested" &&
                                                                    <Badge color='red'>{userData.status.status}</Badge>
                                                                }
                                                                {
                                                                    userData.status.status === "reg_irr" &&
                                                                    <Badge color='orange'>{userData.status.status}</Badge>
                                                                }
                                                                {
                                                                    userData.status.status === "counseled" &&
                                                                    <Badge color='grape'>{userData.status.status}</Badge>
                                                                }
                                                            </>
                                                            :
                                                            <Badge>New</Badge>
                                                    }
                                                    <Menu shadow="md" width={150} zIndex={99999} position='left-start' withArrow arrowPosition="center">
                                                        <Menu.Target>
                                                            <Text component='a' href='#'><IconDotsVertical size={18} /></Text>
                                                        </Menu.Target>

                                                        <Menu.Dropdown >
                                                            <Menu.Item onClick={() => { updateStatus(id, 'new') }} >New</Menu.Item>
                                                            <Menu.Item onClick={() => { updateStatus(id, 'Reg_full_service') }} >Registered Full Service</Menu.Item>
                                                            <Menu.Item onClick={() => { updateStatus(id, 'processing') }} >Processing</Menu.Item>
                                                            <Menu.Item onClick={() => { updateStatus(id, 'not_intrested') }} >Not Intrested</Menu.Item>
                                                            <Menu.Item onClick={() => { updateStatus(id, 'reg_irr') }} >Registered IRR</Menu.Item>
                                                            <Menu.Item onClick={() => { updateStatus(id, 'counseled') }} >Counseled</Menu.Item>
                                                            <Menu.Divider />
                                                            <Menu.Item color="red" icon={<IconTrash size={14} />} onClick={() => { deleteData(id) }}>Delete</Menu.Item>
                                                        </Menu.Dropdown>
                                                    </Menu>
                                                </Group>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <Alert>
                                    No data is available
                                </Alert>
                        }
                    </tbody>
                </Table>
            </ScrollArea>
        </>
    )
}

export default Telephonicdatawrapper