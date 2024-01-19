import React from 'react'
import visa1 from '../../../assets/usaone.jpg'
import Productcard from './Productcard'

function Usatab({ activeTab }) {
    return (
        <div className="row">
            <div className="col-md-6 col-lg-3 col-xl-3">
                <Productcard
                    visa={visa1}
                    typeofvisa="USA Student visa"
                    desc="There are many foreign students from all over the world who would like a university degree from the United States of America. USA is one of the most popular dream destinations for many students...."
                />
            </div>
        </div>
    )
}

export default Usatab