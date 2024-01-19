import React from 'react'
import visa1 from '../../../assets/southafricavisa.jpg'
import Productcard from './Productcard'

function Southafricatab({ activeTab }) {
    return (
        <div className="row">
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa1}
                    typeofvisa="South Africa Critical Skilled Visa"
                    desc="South Africa Critical Skilled Visa is for a workforce to assist the growth of the nation. Opulentus Visa Company assists on South Afric..."
                />
            </div>
        </div>
    )
}

export default Southafricatab