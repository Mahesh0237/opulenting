import React from 'react'
import visa1 from '../../../assets/austria.jpg'
import Productcard from './Productcard'

function Austriatab({ activeTab }) {
    return (
        <div className="row">
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa1}
                    typeofvisa="Austria Red-White-Red Card"
                    desc="Apply for Austria Red-White-Red-Card Evaluation process to get the job in Austria. Get free counselling at Opulentus Visa Company. Our..."
                />
            </div>
        </div>
    )
}

export default Austriatab