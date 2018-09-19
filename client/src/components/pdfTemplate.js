import React, { Component } from "react";
import '.././styles/pdfTemplate.css';


export default class PdfTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: ''
    };
  }
    componentDidMount() {  

      const currentDate = new Date().toDateString();
      // const currentDate = moment().format("MMM Do YY");
      this.setState({ currentDate: currentDate })
      
  }
  render() {
    return (
      <div className="wrapper">
        <div className="top-area">
          <div className="left-column">
            <p>Sickle Hunter Financial Advisors</p>
            <p>620 e Twiggs St</p>
            <p>suite 304</p>
            <p>Tampa, FL 33606</p>
          </div>

          <div className="right-column">
            <h1>INVOICE</h1>

            <div className="text-box">
              <div className="label-area">
                <h3 className="label-tag">Date:</h3>
                <h5 className="label-text">{this.state.currentDate}</h5>
              </div>
              <div className="label-area">
                <h3 className="label-tag">Invoice #:</h3>
                <h5 className="label-text">1</h5>
              </div>
              <div className="label-area">
                <h3 className="label-tag">For</h3>
                <h5 className="label-text">this.state.clients</h5>
              </div>
              <div className="label-area">
                <h3 className="label-tag">Bill To</h3>
                <h5 className="label-text">this.state.clients</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="table-area">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Account #</th>
                <th>Account Balance</th>
                <th>Annual Fee/Quarterly Fee</th>
                <th>Total Billed</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Peter Griffin</td>
                <td>941828437</td>
                <td>$100</td>
                <td>Quarter</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Lois Griffin</td>
                <td>941828410</td>
                <td>$150</td>
                <td>Quarter</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Joe Swanson</td>
                <td>941828438</td>
                <td>$300</td>
                <td>Quarter</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Cleveland Brown</td>
                <td>941824829</td>
                <td>$250</td>
                <td>Quarter</td>
                <td>$100</td>
              </tr>
              <tr>
                <td className="total">Total:</td>
                <td className="total-value">$100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bottom">
          <p className="bottom-text">
            The Total amount shown will be deducted from your account
          </p>
          <p className="bottom-text-good">Thank you for your business!</p>
          <p className="bottom-text">
            *The total billed is calculated using the [Month End Balance x
            Advisory Fee] / Quarterly or annually depending on advisor
          </p>
        </div>
      </div>
    );
  }
}
