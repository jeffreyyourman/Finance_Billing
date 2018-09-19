import React from "react";
import CSVReader from "react-csv-reader";
import ".././styles/import.css";
import axios from 'axios'

class tableStructure {
  constructor(a,b,c,d,e,f,g,h,i,j,k) {
    this.accountNumber =  a;
    this.advisor =  b;
    this.client =  c;
    this.accountBalance =  d; 
    this.description =   e;
    this.accountValue =  f;
    this.moneyMarket =  g;
    this.buyingPower =  h;
    this.netBalance =  i;
    this.aumPercentage = j;
    this.billBy =   k;
  }
}

const handleForce = data => {

  let newData = []

  data.map((row, index) =>{

    if(index === 0) return 1;

    let newObj = new tableStructure(parseInt(row[0], 10),row[1],row[2],parseInt(row[3], 10),row[4],parseInt(row[5], 10),parseInt(row[6], 10),parseInt(row[7], 10),parseInt(row[8], 10),parseInt(row[9], 10),parseInt(row[10], 10))
    newData.push(newObj);
    return 1;
  });
  console.log(newData);
  
  axios.post('/importData', {
    importData: newData
  })
  .then((response) => {
    debugger;
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
};

const CSVImport = (props) => {
  return (
    <div>
    <CSVReader
      cssClass="react-csv-input"
      onFileLoaded={handleForce}
    />
  </div>
  )
}

export default CSVImport;
