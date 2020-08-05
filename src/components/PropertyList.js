import React from 'react';
import MockData from '../data/mockData';
import PropertyDetails from './PropertyDetails';

const PropertyList = () => {
    return (
        <div>
          {MockData.properties.map((propertyDetail, index) => {
          return (
                  <div>
                    <PropertyDetails
                    houseDetails={propertyDetail}
                    key={index}/>
                  </div>
                 )
            })}
        </div>
        );
    };
        
        export default PropertyList;