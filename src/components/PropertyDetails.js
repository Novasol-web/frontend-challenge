import React from 'react';

const PropertyDetails = ({houseDetails}) => {
    return (
        <section className="property-section">
            <div className="row">
                <div className="property-image">
                    <img src={houseDetails.image} alt='vacation'/>
                </div>
                <div className="property-content">
                    <figure>
                        <img src="https://img.icons8.com/wired/50/000000/bed.png" alt='bed'/>
                        <figcaption>
                            <h1>
                            Beds
                            </h1>
                            {houseDetails.numberOfBedrooms}
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://img.icons8.com/ios/50/000000/bath.png" alt='bath'/>
                        <figcaption>
                            <h1>
                            Bath
                            </h1>
                            {houseDetails.numberOfBathrooms}
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://img.icons8.com/wired/50/000000/conference-call.png" alt='people'/>
                        <figcaption>
                            <h1>
                            People
                            </h1>
                            {houseDetails.guest}
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://img.icons8.com/ios/50/000000/address.png" alt='address'/>
                        <figcaption>
                            <h1>
                            Address
                            </h1> 
                            {houseDetails.address.line1}
                            <br/>  
                            {houseDetails.address.line2} 
                            {' '} 
                            {houseDetails.address.line4}
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://img.icons8.com/ios/50/000000/postcode.png" alt='postcode'/>
                        <figcaption>
                            <h1>
                            Postcode
                            </h1>
                            {houseDetails.address.postCode}
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://img.icons8.com/ios/50/000000/city-buildings.png" alt='city'/>
                        <figcaption>
                            <h1>
                            City
                            </h1> 
                            {houseDetails.address.city}
                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://img.icons8.com/ios/50/000000/expensive-2.png" alt='money'/>
                        <figcaption>
                            <h1>
                            Price per night
                            </h1> 
                            {houseDetails.pricePerNight} 
                            {' '}
                            DKK
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
        )
    };
    export default PropertyDetails;