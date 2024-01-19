// import { Alert, Loader, LoadingOverlay, Tabs, Text } from '@mantine/core'
// import { getDatabase, onValue, ref } from 'firebase/database'
// import React, { useContext, useEffect, useState } from 'react'
// import app from '../../firebase'
// import { UserAuth } from '../../../App'
// import Walkindatawrapper from './parts/Walkindatawrapper'
// import Freeevaluationdatawrapper from './parts/Freeevaluationdatawrapper'
// import Telephonicdatawrapper from './parts/Telephonicdatawrapper'
// import axios from 'axios'

// function Userenquireypreviewwrapper() {
//     const db = getDatabase(app)
//     const { userid } = useContext(UserAuth)
//     const [isLoadingEffect, setIsLoadingEffect] = useState(false)

//     const [walkinData, setWalkinData] = useState(null)
//     const getUserEnquireyData = () => {
//         setIsLoadingEffect(true)
//         const starCountRef = ref(db, `users/${userid}/user_enquirey_data/walkin`)
//         onValue(starCountRef, (snapshot) => {
//             const walkin_data = snapshot.val()
//             setWalkinData(walkin_data)
//             setIsLoadingEffect(false)
//         })
//     }

//     const [freEvaluationData, setFreeEvaluationData] = useState(null)
//     const getFreeEvaluationData = () => {
//         setIsLoadingEffect(true)
//         const starCountRef = ref(db, `users/${userid}/user_enquirey_data/free_evaluation`)
//         onValue(starCountRef, (snapshot) => {
//             const eval_data = snapshot.val()
//             setFreeEvaluationData(eval_data)
//             setIsLoadingEffect(false)
//         })
//     }

//     const [telephonicdata, setTelephonicdata] = useState(null)
//     const getTelephonicData = () => {
//         setIsLoadingEffect(true)
//         const starCountRef = ref(db, `users/${userid}/user_enquirey_data/telephonic_counselling`)
//         onValue(starCountRef, (snapshot) => {
//             const tele_data = snapshot.val()
//             setTelephonicdata(tele_data)
//             setIsLoadingEffect(false)
//         })
//     }
//     useEffect(() => {
//         getUserEnquireyData()
//         getFreeEvaluationData()
//         getTelephonicData()
//     }, [userid])
//     const [countries, setCountries] = useState([])
//     const getCountries = () => {
//         axios.get('https://restcountries.com/v3.1/all')
//             .then(response => {
//                 const formattedCountries = response.data.map(country => ({
//                     value: country.name.common,
//                     label: `${country.name.common} (${country.cca2})`,
//                     image: country.flags.png,
//                     code: country.cca2,
//                 }))
//                 setCountries(formattedCountries);
//             })
//             .catch(error => {
//                 console.error('Error fetching countries:', error);
//             })
//     }

//     useEffect(() => {
//         getCountries()
//     }, [])

//     return (
//         <div className='container py-4'>
//             <Text size={22} ta="center" weight={700} color='red' fs="italic" mb={10}>Enquirey Forms Data</Text>
//             <Tabs defaultValue="walkin" className='enquireypreview' color='green'>
//                 <Tabs.List>
//                     <Tabs.Tab value="walkin">
//                         <Text weight={700}>Walkin</Text>
//                     </Tabs.Tab>
//                     <Tabs.Tab value="free_evaluation" >
//                         <Text weight={700}>Free Evaluation</Text>
//                     </Tabs.Tab>
//                     <Tabs.Tab value="Tele_counselling" >
//                         <Text weight={700}>Tele Counselling</Text>
//                     </Tabs.Tab>
//                 </Tabs.List>

//                 <Tabs.Panel value="walkin" pt="xs">
//                     {
//                         walkinData !== null ?
//                             <Walkindatawrapper walkinData={walkinData} />
//                             :
//                             <Alert>
//                                 <Text weight={600}>Access denied</Text>
//                             </Alert>
//                     }
//                 </Tabs.Panel>

//                 <Tabs.Panel value="free_evaluation" pt="xs">
//                     {
//                         freEvaluationData !== null ?
//                             <Freeevaluationdatawrapper freEvaluationData={freEvaluationData} />
//                             :
//                             <Alert>
//                                 <Text weight={600}>Access denied</Text>
//                             </Alert>
//                     }
//                 </Tabs.Panel>

//                 <Tabs.Panel value="Tele_counselling" pt="xs">
//                     {
//                         telephonicdata !== null ?
//                             <Telephonicdatawrapper telephonicdata={telephonicdata} />
//                             :
//                             <Alert>
//                                 <Text weight={600}>Access denied</Text>
//                             </Alert>
//                     }
//                 </Tabs.Panel>
//             </Tabs>
//             <LoadingOverlay visible={isLoadingEffect} loader={<Loader variant='bars' color='green' />} />
//         </div>
//     )
// }

// export default Userenquireypreviewwrapper

//in the below code country wise filter is added extra remaining is same for the above code

import { Alert, Divider, Grid, Group, Loader, LoadingOverlay, Radio, Select, Stack, Tabs, Text, TextInput } from '@mantine/core'
import { getDatabase, onValue, ref } from 'firebase/database'
import React, { useContext, useEffect, useState } from 'react'
import app from '../../firebase'
import { UserAuth } from '../../../App'
import Walkindatawrapper from './parts/Walkindatawrapper'
import Freeevaluationdatawrapper from './parts/Freeevaluationdatawrapper'
import Telephonicdatawrapper from './parts/Telephonicdatawrapper'
import axios from 'axios'

function Userenquireypreviewwrapper() {
    const db = getDatabase(app)
    const { userid } = useContext(UserAuth)
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)

    const [activeTab, setActiveTab] = useState('walkin')
    const updateActiveTab = (value) => {
        setActiveTab(value)
        if (value === 'walkin') {
            getUserEnquireyData()
        } else if (value === 'free_evaluation') {
            getFreeEvaluationData()
        } else {
            getTelephonicData()
        }
    }

    const [walkinData, setWalkinData] = useState(null)
    const getUserEnquireyData = () => {
        setIsLoadingEffect(true)
        const starCountRef = ref(db, `users/${userid}/user_enquirey_data/walkin`)
        onValue(starCountRef, (snapshot) => {
            const walkin_data = snapshot.val()
            setWalkinData(walkin_data)
            setIsLoadingEffect(false)
        })
    }
    // get only cvs data
    const getWithcvsdata = (withoutcvs) => {
        setIsLoadingEffect(true)
        const usersRef = ref(db, `users/${userid}/user_enquirey_data/`)
        onValue(usersRef, (snapshot) => {
            setIsLoadingEffect(false)
            const withcvsdata = [];
            const withoutcvsdata = []
            const userEnquiryData = snapshot.val()
            if (userEnquiryData) {
                Object.keys(userEnquiryData).forEach((date) => {
                    const walkin_data = userEnquiryData[date]
                    console.log('walkin_data', walkin_data)
                    const walkinDataKeys = walkin_data ? Object.keys(walkin_data) : []
                    walkinDataKeys.forEach((key) => {
                        const walkInData = walkin_data[key]
                        // console.log('walkInData', walkInData)
                        if (walkInData && walkInData.ResumeUrl && walkInData.ResumeUrl.downloadURL) {
                            withcvsdata.push(
                                walkInData,
                            )
                        } else {
                            withoutcvsdata.push(
                                walkInData,
                            )
                        }
                    })
                })
            }

            const formattedWithcvsData = withcvsdata.reduce((result, item) => {
                const key = `${item.recievedDate}_${item.timeTocallFrom}`;
                result[key] = item;
                return result;
            }, {})

            const formattedWithoutcvsData = withoutcvsdata.reduce((result, item) => {
                const key = `${item.recievedDate}_${item.timeTocallFrom}`;
                result[key] = item;
                return result;
            }, {})

            if (withoutcvs) {
                setWalkinData(formattedWithoutcvsData)
            } else {
                setWalkinData(formattedWithcvsData)
            }
        }, {
            onlyOnce: true,
        })
    }

    // const countryWiseData = (value) => {
    //     setIsLoadingEffect(true)
    //     const usersRef = ref(db, `users/${userid}/user_enquirey_data`)
    //     onValue(usersRef, (snapshot) => {
    //         setIsLoadingEffect(false)
    //         const withcvsdata = []
    //         const userEnquiryData = snapshot.val()
    //         if (userEnquiryData) {
    //             Object.keys(userEnquiryData).forEach((date) => {
    //                 const walkin_data = userEnquiryData[date]
    //                 console.log('walkin_data', walkin_data)
    //                 const walkinDataKeys = walkin_data ? Object.keys(walkin_data) : []
    //                 walkinDataKeys.forEach((key) => {
    //                     const walkInData = walkin_data[key]
    //                     // console.log('walkInData', walkInData)
    //                     console.log('data', walkInData.ResidingCountry)
    //                     if (walkInData && walkInData.ResidingCountry === value) {
    //                         withcvsdata.push(
    //                             walkInData,
    //                         )
    //                     }
    //                 })
    //             })
    //         }

    //         const formattedWithcvsData = withcvsdata.reduce((result, item) => {
    //             const key = `${item.recievedDate}_${item.timeTocallFrom}`;
    //             result[key] = item;
    //             return result;
    //         }, {})

    //         setWalkinData(formattedWithcvsData)

    //     }, {
    //         onlyOnce: true,
    //     })
    // }

    const [freEvaluationData, setFreeEvaluationData] = useState(null)
    const getFreeEvaluationData = () => {
        setIsLoadingEffect(true)
        const starCountRef = ref(db, `users/${userid}/user_enquirey_data/free_evaluation`)
        onValue(starCountRef, (snapshot) => {
            const eval_data = snapshot.val()
            setFreeEvaluationData(eval_data)
            setIsLoadingEffect(false)
        })
    }

    const [telephonicdata, setTelephonicdata] = useState(null)
    const getTelephonicData = () => {
        setIsLoadingEffect(true)
        const starCountRef = ref(db, `users/${userid}/user_enquirey_data/telephonic_counselling`)
        onValue(starCountRef, (snapshot) => {
            const tele_data = snapshot.val()
            setTelephonicdata(tele_data)
            setIsLoadingEffect(false)
        })
    }

    // const [countries, setCountries] = useState([])
    // const getCountries = async () => {
    //     await axios.get('https://restcountries.com/v3.1/all')
    //         .then(response => {
    //             const formattedCountries = response.data.map(country => ({
    //                 value: country.name.common,
    //                 label: `${country.name.common} (${country.cca2})`,
    //                 image: country.flags.png,
    //                 code: country.cca2,
    //             }))
    //             setCountries(formattedCountries);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching countries:', error);
    //         })
    // }

    useEffect(() => {
        getUserEnquireyData()
        // getCountries()
    }, [userid])

    const [cvsData, setCvsData] = useState('All')
    const updateCvsData = (value) => {
        setCvsData(value)
        if (value === 'withcv') {
            getWithcvsdata()
        } if (value === 'withoutcv') {
            getWithcvsdata(true)
        } else {
            getUserEnquireyData()
        }
    }

    // const [countryWise, setCountryWise] = useState(null)
    // const updateCountryWise = (value) => {
    //     setCountryWise(value)
    //     countryWiseData(value)
    // }
    return (
        <div className='container py-4'>
            <Text size={22} ta="center" weight={700} color='red' fs="italic" mb={10}>Enquirey Forms Data</Text>
            <Grid>
                <Grid.Col md={2}>
                    <Text color='red' weight={700} mt={17} size={18} >FILTERS</Text>
                    <Divider />
                    <Stack spacing={10}>
                        <Radio.Group
                            value={cvsData}
                            onChange={updateCvsData}
                        >
                            <Group mt="xs">
                                <Radio value="All" label="All" />
                                <Radio value="withcv" label="with CV" />
                                <Radio value="withoutcv" label="Without CV" />
                            </Group>
                        </Radio.Group>
                        {/* <Divider />
                        <Select
                            label={<Text weight={600} size={14}>Country Wise</Text>}
                            placeholder='search country'
                            value={countryWise}
                            onChange={updateCountryWise}
                            data={countries}
                            searchable
                            nothingFound={<Text color='red' weight={600}>Nothing Found</Text>}
                        /> */}
                    </Stack>
                </Grid.Col>
                <Grid.Col md={10}>
                    <Tabs value={activeTab} onTabChange={updateActiveTab} className='enquireypreview' color='green'>
                        <Tabs.List>
                            <Tabs.Tab value="walkin">
                                <Text weight={700}>Walkin</Text>
                            </Tabs.Tab>
                            <Tabs.Tab value="free_evaluation" >
                                <Text weight={700}>Free Evaluation</Text>
                            </Tabs.Tab>
                            <Tabs.Tab value="Tele_counselling" >
                                <Text weight={700}>Tele Counselling</Text>
                            </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="walkin" pt="xs">
                            {
                                walkinData !== null ?
                                    <Walkindatawrapper walkinData={walkinData} />
                                    :
                                    <Alert>
                                        <Text weight={600}>No Data</Text>
                                    </Alert>
                            }
                        </Tabs.Panel>

                        <Tabs.Panel value="free_evaluation" pt="xs">
                            {
                                freEvaluationData !== null ?
                                    <Freeevaluationdatawrapper freEvaluationData={freEvaluationData} />
                                    :
                                    <Alert>
                                        <Text weight={600}>Access denied</Text>
                                    </Alert>
                            }
                        </Tabs.Panel>

                        <Tabs.Panel value="Tele_counselling" pt="xs">
                            {
                                telephonicdata !== null ?
                                    <Telephonicdatawrapper telephonicdata={telephonicdata} />
                                    :
                                    <Alert>
                                        <Text weight={600}>Access denied</Text>
                                    </Alert>
                            }
                        </Tabs.Panel>
                    </Tabs>
                </Grid.Col>
            </Grid>
            <LoadingOverlay visible={isLoadingEffect} loader={<Loader variant='bars' color='green' />} />
        </div>
    )
}

export default Userenquireypreviewwrapper