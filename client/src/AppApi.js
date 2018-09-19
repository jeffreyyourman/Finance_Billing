// import React, { Component } from 'react';
// import axios from 'axios';
// import MainTable from './components/Main_Table';
//
// class AppAPI extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         data: null
//       };
//   }
//   componentDidMount() {
//     axios.get('/api/data')
//       .then((response) => {
//         // debugger;
//         this.setState({ data: response.data[0].data });
//       })
//       .catch(function (error) {
//
//       });
//
//     //   //need to loop over res before sending it over to the table...
//     //   //how do you set the state of an entire array of objects?
//   }
//
//
//   render() {
//       // this.state.data.length > 0 ? console.log('none')
//
//     return (
//       <div><MainTable datapass={this.state.data} /></div>
//     );
//   }
// }
//
// export default AppAPI;
