import React from 'react'
import Footer from '../../components/Footer'
import Migratewrapper from '../../components/migrate/Migratewrapper'
import Headertwo from '../../components/Headertwo'
function Migratemainpage({ storedUserData }) {
    // if (storedUserData) {
    //     localStorage.setItem('userDetails', storedUserData)
    // }
    return (
        <>
            <Headertwo />
            <Migratewrapper />
            <Footer />
        </>
    )
}

export default Migratemainpage