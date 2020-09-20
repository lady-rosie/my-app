import React from 'react';
import moment from "moment";

const TimeWindow = () =>{
    const startDate = moment().format("MM DD YYYY");
    const endDate = moment(startDate).add(10, "days").format("MM DD YYYY");
    return(
        <div className="time-window">
            <h4>Dates</h4>
            <p>{startDate} - {endDate}</p>
        </div>
    )

};

export default TimeWindow;