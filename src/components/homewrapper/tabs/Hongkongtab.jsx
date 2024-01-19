import React from 'react'
import visa2 from '../../../assets/hongkong.webp'
import visa1 from '../../../assets/hongkongvisa.jpg'
import Productcard from './Productcard'

function Hongkongtab() {
    return (
        <div className="row">
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa1}
                    typeofvisa="Hong Kong Quality Migrant Admiss"
                    desc="Apply for Hong Kong Quality Migrant Admission Scheme (QAMS) at Opulentus Visa Company. Fill enquiry form for QAMS Immigration "
                />
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa2}
                    typeofvisa="Dependent QMAS HK"
                    desc="How to apply for Dependent QMAS Hong Kong Visa. Opulentus guide on QMAS Dependent Visa. This migration is essential for the..."
                />
            </div>
        </div>
    )
}

export default Hongkongtab