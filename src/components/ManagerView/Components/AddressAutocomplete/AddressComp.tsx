'use client'
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { getAddressService } from "../../../../../Services/getAddress";
import { Input } from "@/components/ui/input";


interface Record {
  _id: number;
  city_name_he: string;	
  region_name	: string;
  rank: number;
}
function AddressComp({setCity} : {setCity: Dispatch<SetStateAction<string>>}) {
    const [searchParam, setSearchParam] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Record[]>([]);


    const getAddress = async (searchParam: string) => {
      try {
          if (searchParam.trim() === '') {
              setSuggestions([]);
              return;
          }
          const res = await getAddressService(searchParam);
          const filtered = res.result.records.filter((record: Record) =>
              record.city_name_he.includes(searchParam)
          );
          setSuggestions(filtered);
          console.log(filtered); // Log filtered suggestions
      } catch (error) {
          console.error('Error fetching address:', error);
      }
  };
  useEffect(() => {
    if (searchParam) {
        const timeoutId = setTimeout(() => {
            getAddress(searchParam);
        }, 300); // Debounce to avoid too many API calls

        return () => clearTimeout(timeoutId); // Cleanup the timeout
    } else {
        setSuggestions([]); // Clear suggestions if searchParam is empty
    }
}, [searchParam]);

    return (
        <div>
            <Input
                type="text"
                value={searchParam}
                onKeyDown={()=> getAddress(searchParam)} 
                onChange={(e) => setSearchParam(e.target.value)}
                placeholder="Search for address"
            />
          <div className={`border rounded-md shadow-md p-4 ${searchParam?  'visible' : 'hidden'}`}>
          {suggestions.map((suggestion) => (
                    <div key={suggestion._id} onClick={()=> setCity(suggestion.city_name_he.trim())}>
                        {`${suggestion.city_name_he}`}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddressComp;


