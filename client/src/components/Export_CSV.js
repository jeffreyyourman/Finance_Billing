import React from 'react';
import {CSVLink} from 'react-csv'
//TODO: downloadable csv file


const CSVExport = ({ exportedData }) => {
    if (!exportedData) {
        return <div>loading</div>
    }

    const newDataArr = [];
    
    exportedData.map((newData) => {

      const newaccountNumber = newData.accountNumber;
      const newaccountBalance = newData.accountBalance;
      const newBillby = newData.billBy;
      const newaumPercentage = newData.aumPercentage;

      const newtotalBilled = newaccountBalance * newaumPercentage / newBillby;

      const exportCSV = {
        newAccountNumber: newaccountNumber,
        newBillBy: newBillby,
        newTotalBilled: newtotalBilled
       }
       newDataArr.push(exportCSV)
       return 1;
      })
      
    return (
      <div>
        <CSVLink data={newDataArr}
        target=""
        className="btn btn-primary">
        Download CSV File
        </CSVLink>
      </div>
    )
}

export default CSVExport;
