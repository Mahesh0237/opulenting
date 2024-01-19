import React from 'react'
import visa1 from '../../../assets/germanyproductone.jpg'
import visa2 from '../../../assets/germanyproducttwo.jpg'
import visa3 from '../../../assets/germanythree.avif'
import visa4 from '../../../assets/germanyproductthree.webp'
import Productcard from './Productcard'

function Germanytab({ activeTab }) {
    return (
        <div className="row">
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa1}
                    typeofvisa="Germany National Visa"
                    desc="Apply for Germany National Visa with Opulentus Visa Company. We assist on German Job seeker, Student, Dependent Visas; our..."
                />
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa2}
                    typeofvisa="Germany Dependent Visa"
                    desc="Germany Dependent Visa also known as the German Family Reunification Visa, allows the family members of a legal German resident..."
                />
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa4}
                    typeofvisa="Germany Skilled Job Seeker Visa"
                    desc="Immigration to Germany under Job Seeker Visa for work and settle in Overseas. Take immigration advice at Opulentus Visa Company how to ..."
                />
            </div>
        </div>
    )
}

export default Germanytab