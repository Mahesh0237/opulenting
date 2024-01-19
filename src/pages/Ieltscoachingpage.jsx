import React from 'react'
import Footer from '../components/Footer'
import Ieltscoachingdetails from '../components/coaching/parts/Ieltscoachingdetails'
import Headertwo from '../components/Headertwo'

function Ieltscoachingpage() {
    return (
        <>
            <Headertwo />
            <Ieltscoachingdetails
                breadcrumb="IELTS Coaching overview"
                coaching_name="IELTS"
            />
            <Footer />
        </>
    )
}

export default Ieltscoachingpage