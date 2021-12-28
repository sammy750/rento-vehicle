import { addDays } from 'date-fns';
import { useState, react } from 'react';
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const DatePicker = ({setDate , date}) => {

    return (

        <>

               <DateRangePicker
              
                 onChange={item => setDate([item.selection])}
                 showSelectionPreview={true}
                 moveRangeOnFirstSelection={false}
                 months={2}
                 ranges={date}
                 direction="horizontal"
             />;

        </>
    )

}

export default DatePicker;



