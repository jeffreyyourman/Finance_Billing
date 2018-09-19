import React, { Component } from "react";
import axios from 'axios';
import ExportCSV from './Export_CSV';
import ImportCSV from './Import_CSV';
import InvoicePDF from './InvoicePDF';
import LoginScreen from './Login';
import Navbar from './Navbar';
import matchSorter from 'match-sorter';
import '.././styles/maintable.css';
import NumberFormat from 'react-number-format';
import ReactTable from "react-table";
import "react-table/react-table.css";

class MainTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      userLoggedInID: null,
      userLoggedInEmail: null,
      userLoggedInFirstName: null,
      userLoggedInLastName: null,
      isChecked: {},
      selected: {},
      selectAll: 0
    };

    this.renderEditable = this.renderEditable.bind(this);

    // this.toggleRow = this.toggleRow.bind(this);
  }
  componentDidMount() {
    // refactor this and bring it to it's own file...
      // once you click pdf with the selected peeps. you're going to pass over the accountBalance to the pdf file
      // you're going to pull in all the data again inside that file
      // loop through it and only take the selected(s) information
    axios.get('/api/data')
    .then((response) => {
      this.setState({ data: response.data[0].data });
    })
    .catch(function (error) {
      console.log('this is an error', error);
    });

    axios.get('/profile')
    .then((response) => {

      this.setState({
        userLoggedInID: response.data._id,
        userLoggedInEmail: response.data.email,
        userLoggedInFirstName: response.data.firstName,
        userLoggedInLastName: response.data.lastName
      });
    })
    .catch(function (error) {
      console.log('this is an error', error);
    });
  }

	// toggleRow(client) {
	// 	const newSelected = Object.assign({}, this.state.selected);
	// 	newSelected[client] = !this.state.selected[client];
	// 	this.setState({
	// 		selected: newSelected,
	// 		selectAll: 2
	// 	});
	// }
  //
  // toggleSelectAll() {
	// 	let newSelected = {};
  //
	// 	if (this.state.selectAll === 0) {
	// 		this.state.data.forEach(x => {
	// 			newSelected[x.client] = true;
	// 		});
	// 	}
  //
	// 	this.setState({
	// 		selected: newSelected,
	// 		selectAll: this.state.selectAll === 0 ? 1 : 0
	// 	});
	// }
  renderEditable(cellInfo) {
      return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
                const data = [...this.state.data];
                data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                this.setState({ data });

                axios.post('/updateData', {
                  data: this.state.data
                })
                .then((response) => {
                  console.log('inside then response', response);
                })
                .catch((error) => {
                  console.log('inside catch error', error);
                });
              }}
              dangerouslySetInnerHTML={{
                  __html: this.state.data[cellInfo.index][cellInfo.column.id]
                }}
              />
            );
          }


  render() {
    const selectedArray = [];
    console.log(this.state.selected);

      if (this.state.data === null) {
        return (
          <div>Loading...</div>
        );
      }

      if (this.state.userLoggedInID === undefined) {
        return (
          <LoginScreen />
        )
      } else {

      return (
        <div>
          <Navbar userFirstName={this.state.userLoggedInFirstName}/>
          <div className="body">
          <div className="table-holder">
          <ReactTable
            data={this.state.data}
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value}
              columns={[
                  // {
                  //   id:"checkbox",
                  //   accessor: "",
                  //   Cell: ({ original }) => (
                  //     <input
                  //       type="checkbox"
                  //       className="checkbox"
                  //       checked={this.state.selected[original.client] === true}
									//       onChange={() => this.toggleRow(original.client)}
                  //     />
                  //   )
                  // },
                  {
                    Header: "Account Number",
                    accessor: "accountNumber",
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["accountNumber"] }),
                    filterAll: true
                  },
                  {
                    Header: "Advisor Id",
                    accessor: "advisor",
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["advisor"] }),
                    filterAll: true
                  },
                  {
                    Header: "Clients",
                    accessor: "client",
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["client"] }),
                    filterAll: true
                  },
                  {
                    Header: "Account Balance",
                    accessor: "accountBalance",
                    Cell: props => (
                      <NumberFormat value={props.value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    ),
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["accountBalance"] }),
                    filterAll: true
                  },
                  {
                    Header: "Description",
                    accessor: "description",
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["description"] }),
                    filterAll: true
                  },
                  {
                    Header: "Account Value",
                    accessor: "accountValue",
                    Cell: props => (
                      <NumberFormat value={props.value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    ),
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["accountValue"] }),
                    filterAll: true
                  },
                  {
                    Header: "Money Market",
                    accessor: "moneyMarket",
                    Cell: props => (
                      <NumberFormat value={props.value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    ),
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["moneyMarket"] }),
                    filterAll: true
                  },
                  {
                    Header: "Buying Power",
                    accessor: "buyingPower",
                    Cell: props => (
                      <NumberFormat value={props.value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    ),
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["buyingPower"] }),
                    filterAll: true
                  },
                  {
                    Header: "Net Balance",
                    accessor: "netBalance",
                    Cell: props => (
                      <NumberFormat value={props.value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    ),
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["netBalance"] }),
                    filterAll: true
                  },
                  {
                    Header: "AUM Percentage",
                    accessor: "aumPercentage",
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["aumPercentage"] }),
                    filterAll: true,
                    Cell: this.renderEditable
                  }
                  ,
                  {
                    Header: "Fee Billed Quarterly",
                    id: "totalBilled",
                    // accessor: d => console.log(parseFloat(d.accountBalance, 10),parseFloat(d.aumPercentage, 10), parseFloat(d.billBy, 10)),
                    accessor: d => parseFloat(d.accountBalance) * parseFloat(d.aumPercentage) / parseFloat(d.billBy),
                    Cell: props => (
                      <NumberFormat value={props.value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    ),
                  }


              ]}
              defaultPageSize={10}
              className="-striped -highlight"
              getTdProps={(rowInfo, column) => {
                return {
                  onClick: (e, handleOriginal) => {

                    selectedArray.push(column.row._original);
                    // console.log("It was in this column:", column.row._original);
                    this.setState({ isChecked: selectedArray })

                    if (handleOriginal) {
                      handleOriginal();
                    }
                  }
                };
              }}
            />
          <div className="container text-center ExportImportMainTable">

            {/* <InvoicePDF />

            <br /> */}
            <div className="row">
              <div className="col-md-12">

              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ImportCSV />
              </div>
              <div className="col-md-6">


                <ExportCSV exportedData={this.state.data}/>
              </div>
            </div>

          </div>
        </div>
        </div>
        </div>
      );
    }
  }
}

export default MainTable;
