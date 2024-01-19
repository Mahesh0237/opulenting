import React from 'react'
import Header from '../components/Header'
import Banner from '../components/homewrapper/Banner'
import Immigrationsection from '../components/homewrapper/Immigrationsection'
import Whyopulentusvisa from '../components/homewrapper/Whyopulentusvisa'
import Freeonlineassesment from '../components/homewrapper/Freeonlineassesment'
import Footer from '../components/Footer'
import Checkyoureligibilitywrapper from '../components/homewrapper/Checkyoureligibilitywrapper'
import Popularproducts from '../components/homewrapper/Popularproducts'
import Resourcesandnewswrapper from '../components/homewrapper/resourcesandnews/Resourcesandnewswrapper'
import Testimonials from '../components/homewrapper/Testimonials'
import { userTypeUpdate } from '../zustand/UserTypeUpdate'
import Usertypeupdatewrapper from '../components/usertype/Usertypeupdatewrapper'

function Homepage({ isLoggedIn }) {
    const { usertype } = userTypeUpdate()
    return (
        <>
            {
                isLoggedIn ?
                    <>
                        <Header />
                        {
                            usertype ?
                                <>
                                    <Banner />
                                    <Immigrationsection />
                                    <Popularproducts />
                                    <Whyopulentusvisa />
                                    <Checkyoureligibilitywrapper />
                                    <Resourcesandnewswrapper />
                                    <Testimonials />
                                    <Freeonlineassesment />
                                </>
                                :
                                <Usertypeupdatewrapper />
                        }
                        <Footer />
                    </>
                    :
                    <>
                        <Header />
                        <Banner />
                        <Immigrationsection />
                        <Popularproducts />
                        <Whyopulentusvisa />
                        <Checkyoureligibilitywrapper />
                        <Resourcesandnewswrapper />
                        <Testimonials />
                        <Freeonlineassesment />
                        <Footer />
                    </>
            }
        </>
    )
}

export default Homepage