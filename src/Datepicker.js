import React, {useState} from 'react'
import "react-date-range/dist/styles.css";
// main style file 
import "react-date-range/dist/theme/default.css";
// theme css file
import {DateRangePicker} from "react-date-range"
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from "react-router-dom"

import "./Datepicker.css";
import { Button } from '@material-ui/core';

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const history = useHistory();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="datePicker">
           <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}    
           />
           <h2>
               Number of guests
               <PeopleIcon />
           </h2>
           <input type="number" min={0} defaultValue={2} />
           <Button onClick={() => {history.push("/search")}}>Search Airbnb</Button>
        </div>
    )
}

export default Search;
