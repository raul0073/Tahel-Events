'use client'
import React from 'react'
import Autocomplete from "react-google-autocomplete";
const { GOOGLE_API_KEY } = process.env;


function AddressSearch() {
    return (
      <div>
        <Autocomplete
          apiKey={'AIzaSyDuUiOvNN8FYmsg-F6bI1F0YwoPm7IUcGo'}
          onPlaceSelected={(place) => {
            const address = place.formatted_address;
          
  
            console.log({
              address
            });
          }}
        />
      </div>
    );
  }
  
  export default AddressSearch;