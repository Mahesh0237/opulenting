import React from 'react'
import visa4 from '../../../assets/australiaprdtfour.jpg'
import visa2 from '../../../assets/australiaprdttwo.webp'
import visa3 from '../../../assets/australiaprdtthree.webp'
import visa1 from '../../../assets/australiaprdtone.jpg'
import Productcard from './Productcard'

function Australiatab() {
    return (
        <div className="row">
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa1}
                    typeofvisa="Australia Skilled Regional Visa"
                    desc="Australia Skilled Regional visa is for citizens who lived for the min. 2 Yrs, worked for 1 Year in a specified regional area. Apply for..."
                />
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa2}
                    typeofvisa="Australia Skilled Independent"
                    desc="Australia Skilled Independent Visa is to live and work in Australia as a permanent resident. Fill our free enquiry form to apply for Sk..."
                />
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa3}
                    typeofvisa="Australia Family Immigration"
                    desc="Family migration is sponsored by the second most substantial migratory flow of Australian visa programs You can quickly move To Australia as...."
                />
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa4}
                    typeofvisa="Australian Business Innovation"
                    desc="The Business Innovation and Investment Subclass 188 visa is for investors who want to establish business operations in Australia..."
                />
            </div>
        </div>
    )
}

export default Australiatab