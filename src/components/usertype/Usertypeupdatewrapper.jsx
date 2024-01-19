
import { Group, Loader, LoadingOverlay, Card, Container, Stack, Text } from '@mantine/core'
import React, { useContext, useState } from 'react'
import Usertypeform from './Usertypeform'
import { notifications } from '@mantine/notifications'
import { IconX } from '@tabler/icons-react'
import { Dropzone } from '@mantine/dropzone'
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from '@firebase/storage'
import { getDatabase, ref, set } from 'firebase/database'
import { UserAuth } from '../../App'
import app from '../firebase'
function Usertypeupdatewrapper() {
    const db = getDatabase(app);
    const { userid } = useContext(UserAuth)
    const [cvFile, setCvFile] = useState(null)
    const [isLoadingoverlayEffect, setIsLoadingoverlayEffect] = useState(false)
    const handleCvFileDrop = (files) => {
        setIsLoadingoverlayEffect(true)
        const [file] = files
        if (file) {
            setCvFile(file)
            const cvDataRef = ref(db, `users/${userid}/resume`)
            const uniqueFileName = `${Date.now()}_${file.name}`
            const storage = getStorage(app)
            const cvRef = storageRef(storage, `resumes/${uniqueFileName}`)

            // Upload the file to Firebase Storage
            uploadBytes(cvRef, file)
                .then(() => {
                    // Get the download URL of the uploaded file directly from cvRef
                    setIsLoadingoverlayEffect(false)
                    return getDownloadURL(cvRef);
                })
                .then((downloadURL) => {
                    // Store the download URL in Firebase Realtime Database
                    const cvData = {
                        downloadURL,
                        fileName: file.name,
                    }

                    // Use the `set` function to set the data at the specified location
                    set(cvDataRef, cvData)
                        .then(() => {
                            setIsLoadingoverlayEffect(false)
                        })
                        .catch((error) => {
                            setIsLoadingoverlayEffect(false);
                            console.error('Error uploading CV:', error)
                        })
                })
                .catch((error) => {
                    setIsLoadingoverlayEffect(false);
                    console.error('Error uploading CV:', error)
                })
        }
    }
    return (
        <Container size={1150} py={100}>
            <Card withBorder py="70px" >

                <Container size={700} mt={20} >
                    <Dropzone
                        label="Resume"
                        onDrop={handleCvFileDrop}
                        onReject={() => {
                            notifications.show({
                                title: 'Failed to Upload CV',
                                message: 'supported format in pdf/msword and not exceed to 5mb',
                                zIndex: 9999999,
                                color: 'red',
                                icon: <IconX />,
                            })
                        }}
                        maxSize={5 * 1024 ** 2}
                        accept={{
                            'application/pdf': ['.pdf'],
                            'application/msword': ['.doc'],
                            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
                        }}
                    >
                        {cvFile ? (
                            <Group position="center" spacing="xl" style={{ minHeight: 80 }}>
                                <Stack align="center" justify="center">
                                    <Text size="xl" inline weight="bold" color="#00A85A">
                                        {cvFile.name}
                                    </Text>
                                    <Text size="sm" color="dimmed" inline mt={7} align="center">
                                        File size: {Math.round(cvFile.size / 1024)} KB
                                    </Text>
                                </Stack>
                            </Group>
                        ) : (
                            <Group position="center" spacing="xl" style={{ minHeight: 80 }}>
                                <Stack align="center" justify="center">
                                    <Text size="xl" inline weight="bold" color="#00A85A">
                                        Drop your CV
                                    </Text>
                                    <Text size="sm" color="dimmed" inline mt={7} align="center">
                                        Attach your Resume, file should not exceed 5mb, supported format's pdf/word
                                    </Text>
                                </Stack>
                            </Group>
                        )}
                    </Dropzone>
                    <LoadingOverlay visible={isLoadingoverlayEffect} loader={<Loader values='bars' />} />
                </Container>
                <Usertypeform cvFile={cvFile} />
            </Card>
        </Container>
    )
}

export default Usertypeupdatewrapper