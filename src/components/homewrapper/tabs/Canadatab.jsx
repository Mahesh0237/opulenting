import React from 'react'
import visa1 from '../../../assets/passport3.webp'
import visa2 from '../../../assets/passport1.jpg'
import visa3 from '../../../assets/passport2.webp'
import visa4 from '../../../assets/passport4.webp'
import Productcard from './Productcard'

function Canadatab() {
    return (
        <div className="row">
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa1}
                    typeofvisa="Canada Provincial Nominee"
                    desc="There are more than 80 programs provincial Immigration streams. Each Canadian Province and territory has its own unique provincial Nomi..."
                />
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa2}
                    typeofvisa="Canada Federal Skilled Worker"
                    desc="Skilled Workers can migrate to Canada under Federal Skilled Worker Program organized by Canadian Government. Opulentus..."
                />
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa3}
                    typeofvisa="Canada Post Graduate Work Permit"
                    desc="A post-Graduate Work Permit is issued to international students who have done the full-time study for a min. 8 months in Canada. Opulen..."
                />
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa4}
                    typeofvisa="Canada Open Work Permit"
                    desc="Foreign Students in Canada has an opportunity to get Open Work Permit which allows to take up jobs of their choice. Opulentus helps on ..."
                />
            </div>
        </div>
    )
}

export default Canadatab