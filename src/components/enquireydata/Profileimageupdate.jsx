import React, { useState } from 'react'
import { Stack, Group, Text, Button, Card, Loader, LoadingOverlay } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { openConfirmModal } from '@mantine/modals';
import { IconTrash } from '@tabler/icons-react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
function Profileimageupdate({ closeProfilpicmodel }) {
    const [finalCropedImage, setFinalCropedImage] = useState(null)
    const [fileSrc, setFileSrc] = useState(null)
    const acceptedfile = (value) => {
        setFileSrc(URL.createObjectURL(value[0]));
    }

    const changeImage = () => {
        setFinalCropedImage(null)
        setFileSrc(null)
    }

    const rejectedfile = (value) => {
        let filrerror = value[0].errors[0]
        let code = filrerror.code
        if (code === 'file-too-large') {
            openConfirmModal({
                title: <Text weight="bold">File Too Large</Text>,
                children: (
                    <Text size="sm">
                        File Can't be larger than 5MB
                    </Text>
                ),
                labels: { confirm: 'Close' },
                cancelProps: {
                    display: 'none'
                },
                confirmProps: {
                    color: 'red'
                },
                centered: true,
                withCloseButton: false,
                closeOnClickOutside: false,
                closeOnEscape: false,
                zIndex: 999999999999999
            });
        } else if (code === 'file-invalid-type') {
            openConfirmModal({
                title: <Text weight="bold">Invalid File Format</Text>,
                children: (
                    <Text size="sm">
                        Sorry, the file format you tried to upload is not supported; instead, use jpg, jpeg, or png.
                    </Text>
                ),
                labels: { confirm: 'Close' },
                cancelProps: {
                    display: 'none'
                },
                confirmProps: {
                    color: 'red'
                },
                centered: true,
                withCloseButton: false,
                closeOnClickOutside: false,
                closeOnEscape: false,
                zIndex: 999999999999999
            });
        }
    }

    const [isLoadingEffect, setIsloadingEffect] = useState(false)
    const uploadImage = () => {
        setIsloadingEffect(false)

        if (finalCropedImage === null) {
            openConfirmModal({
                title: <Text weight="bold">No File Uploaded</Text>,
                children: (
                    <Text size="sm">
                        There is no file. JPEG, PNG, and jpg images are supported for upload.
                    </Text>
                ),
                labels: { confirm: 'Close' },
                cancelProps: {
                    display: 'none'
                },
                confirmProps: {
                    color: 'red'
                },
                centered: true,
                withCloseButton: false,
                closeOnClickOutside: false,
                closeOnEscape: false,
                zIndex: 999999999999999
            });
            setIsloadingEffect(false)
            return false
        }
        let finalimagedata = finalCropedImage.getCroppedCanvas().toDataURL()
        console.log("finalimagedata", finalimagedata)
    }

    return (
        <Card withBorder>
            <Card.Section inheritPadding py="sm">
                <Text weight="bold">Profile Picture</Text>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="sm">
                {
                    fileSrc !== null ?
                        <Stack>
                            <Cropper
                                src={fileSrc}
                                initialAspectRatio={16 / 9}
                                guides={true}
                                onInitialized={(value) => {
                                    setFinalCropedImage(value)
                                }}
                                dragMode="none"
                            />
                            <Button onClick={changeImage} size="xs" fullWidth variant="light" color="red">
                                <IconTrash size="16px" />
                                <Text ml="xs">Change Image</Text>
                            </Button>
                        </Stack>
                        :
                        <Dropzone
                            onDrop={acceptedfile}
                            onReject={rejectedfile}
                            maxSize={5 * 1024 ** 2}
                            accept={['image/png', 'image/jpeg', 'image/jpg']}
                        >
                            <Stack align="center" position="center" spacing="xl">
                                <Text size="md" transform='capitalize'>Select/Drop and Drop image here</Text>
                                <Text size="sm" color="dimmed">
                                    Allowed extensions only .png, .jpg, .jpeg and the  file should not exceed 5mb
                                </Text>
                            </Stack>
                        </Dropzone>
                }
            </Card.Section>
            <Card.Section inheritPadding pt="sm">
                <Group position='apart'>
                    <Button variant="default" onClick={closeProfilpicmodel}>Close</Button>
                    <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} onClick={uploadImage}>Upload</Button>
                </Group>
            </Card.Section>
            <LoadingOverlay visible={isLoadingEffect} loader={<Loader variant="bars" color="green" />} />
        </Card>
    )
}

export default Profileimageupdate