import { Card, Loader, LoadingOverlay, Tabs, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Aboutwrapper from './parts/Aboutwrapper'
import Walkinwrapper from './parts/Walkinwrapper'
import Freeevaluation from './parts/Freeevaluation'
import Telephonicwrapper from './parts/Telephonicwrapper'
import { useParams } from 'react-router-dom'
import Enquireyheader from './Enquireyheader'
import { getDatabase, onValue, ref } from 'firebase/database'
import app from '../firebase'
import { useViewportSize } from '@mantine/hooks'
import defaultuser from '../../assets/default_user.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
function Counsellingwrapper() {
    const { width } = useViewportSize()
    const { slug } = useParams()
    const db = getDatabase(app)
    const [activeTab, setActiveTab] = useState('about')
    const updateTab = (value) => {
        setActiveTab(value)
    }
    const [employeeName, setEmployeeName] = useState(null)
    const [employeeEmail, setEmployeeEmail] = useState(null)
    const [employeedata, setEmployeedata] = useState(null)
    const [employeeExist, setEmployeeExist] = useState(false)
    const [employeePhoto, setEmployeePhoto] = useState(null)
    const [userid, setUserId] = useState(null)
    const [mobileNumber, setMobileNumber] = useState(null)
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const [position, setPosition] = useState(null)
    const [award, setAward] = useState(null)
    const [liveChatApi, setLiveChatApi] = useState(null)

    useEffect(() => {
        setIsLoadingEffect(true)
        const starCountRef = ref(db, `employeedata/${slug}/`);
        onValue(starCountRef, (snapshot) => {
            const response = snapshot.val()
            setIsLoadingEffect(false)
            if (response !== null) {
                setEmployeeExist(true)
                setEmployeeName(response.name)
                setEmployeedata(response.aboutme)
                setEmployeeEmail(response.email)
                setUserId(response.uid)
                setEmployeePhoto(response.photo)
                setMobileNumber(response.mobile_num)
                setPosition(response.position)
                setAward(response.award)
            }
        })
    }, [slug])

    return (
        <>
            {
                employeeExist ?
                    <div className='container mt-4 mb-5'>
                        <Text ta="center" fs="italic" size={25} weight={700} color='red'>Welcome to Opulentus</Text>
                        <Text ta="center" mb={15} size={13} fs="italic" weight={600}>An Excellence of Decade in processing Highest Number of Successful Visas!</Text>
                        <Tabs
                            orientation={width < 1024 ? 'horizontal' : 'vertical'}
                            value={activeTab}
                            onTabChange={updateTab}
                            variant={width < 1024 ? 'default' : 'pills'}
                            color='dark'
                        >
                            <Tabs.List mb={20}>
                                <Tabs.Tab value="about">
                                    <Text weight={600} color={width < 1024 && activeTab === 'about' && 'green'} >About Me</Text>
                                </Tabs.Tab>
                                <Tabs.Tab value="walkin" >
                                    <Text weight={600} color={width < 1024 && activeTab === 'walkin' && 'green'}>Walk In</Text>
                                </Tabs.Tab>
                                <Tabs.Tab value="free_evaluation" >
                                    <Text weight={600} color={width < 1024 && activeTab === 'free_evaluation' && 'green'}>Free Evaluation</Text>
                                </Tabs.Tab>
                                <Tabs.Tab value="telephonic_counselling" >
                                    <Text weight={600} color={width < 1024 && activeTab === 'telephonic_counselling' && 'green'}>Telephonic Counselling</Text>
                                </Tabs.Tab>
                            </Tabs.List>
                            <Tabs.Panel value="about" pl="xs">
                                <Card withBorder >
                                    <Card.Section withBorder inheritPadding py={10}>
                                        <Enquireyheader
                                            employeeName={employeeName}
                                            employeeEmail={employeeEmail}
                                            employeePhoto={employeePhoto}
                                            mobileNumber={mobileNumber}
                                            position={position}
                                            award={award}
                                        />
                                    </Card.Section>
                                    <Aboutwrapper
                                        employeedata={employeedata}
                                        userid={userid}
                                    />
                                </Card>
                            </Tabs.Panel>
                            <Tabs.Panel value="walkin" pl="xs">
                                <Card withBorder >
                                    <Card.Section withBorder inheritPadding py={10}>
                                        <Enquireyheader
                                            employeeName={employeeName}
                                            employeeEmail={employeeEmail}
                                            employeePhoto={employeePhoto}
                                            mobileNumber={mobileNumber}
                                            position={position}
                                            award={award}
                                        />
                                    </Card.Section>
                                    <Walkinwrapper
                                        employeeName={employeeName}
                                        activeTab={activeTab}
                                        userid={userid}
                                    />
                                </Card>
                            </Tabs.Panel>
                            <Tabs.Panel value="free_evaluation" pl="xs">
                                <Card withBorder >
                                    <Card.Section withBorder inheritPadding py={10}>
                                        <Enquireyheader
                                            employeeName={employeeName}
                                            employeeEmail={employeeEmail}
                                            employeePhoto={employeePhoto}
                                            mobileNumber={mobileNumber}
                                            position={position}
                                            award={award}
                                        />
                                    </Card.Section>
                                    <Freeevaluation
                                        employeeName={employeeName}
                                        activeTab={activeTab}
                                        userid={userid}
                                    />
                                </Card>
                            </Tabs.Panel>
                            <Tabs.Panel value='telephonic_counselling' pl="xs">
                                <Card withBorder >
                                    <Card.Section withBorder inheritPadding py={10}>
                                        <Enquireyheader
                                            employeeName={employeeName}
                                            employeeEmail={employeeEmail}
                                            employeePhoto={employeePhoto}
                                            mobileNumber={mobileNumber}
                                            position={position}
                                            award={award}
                                        />
                                    </Card.Section>
                                    <Telephonicwrapper
                                        employeeName={employeeName}
                                        activeTab={activeTab}
                                        userid={userid}
                                    />
                                </Card>
                            </Tabs.Panel>
                        </Tabs>
                    </div>
                    :
                    <Text ta="center" weight={600} color='red' mt={20}>Page is not available</Text>
            }
            <LoadingOverlay visible={isLoadingEffect} loader={<Loader variant="dots" color='green' />} />
            {/* whatsup widget */}
            <FloatingWhatsApp
                phoneNumber={`+91 ${mobileNumber}`}
                accountName={`+91 ${mobileNumber}`}
                notification={true}
                avatar={employeePhoto ? employeePhoto : defaultuser}
                allowClickAway={true}
                chatMessage={`Hai, This is ${employeeName} from Opulentus Visa Immigration Company, how can i help you ?`}
            />
            {/* live chat application widget */}
            {/* <TawkMessengerReact
                propertyId="6570628cbfb79148e59aa692"
                widgetId="1hgvg1tkv"
            /> */}
        </>
    )
}

export default Counsellingwrapper
