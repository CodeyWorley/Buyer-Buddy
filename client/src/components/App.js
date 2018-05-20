import React, { Component } from 'react';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../css/react-table.css"

class App extends Component {
  constructor(){
    super();
    this.state ={listings: []};
  }
  componentDidMount() {
    fetch('/api/listings')
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then(listings => {
        console.log(listings);
        this.setState({ listings })
      });
  }
  // Table Changes Only
  render() {
    const { listings } = this.state;
    return (
      <div>
        <ReactTable
          data={ listings }
          columns={[
            {
              Header: "Info",
              columns: [
                {
                  Header: "Asin",
                  accessor: "asin",
                  width: 200
                },
                {
                  Header: "Sku",
                  accessor: "sku",
                  width: 250
                },
                {
                  Header: "Title",
                  accessor: "title"
                },
                {
                  Header: "Price",
                  accessor: "price",
                  maxWidth: 100
                },
                {
                  Header: "Inventory",
                  accessor: "inventory",
                  maxWidth: 100
                }
              ]
            },
            {
              Header: "Status",
              columns: [
                {
                  Header: "Sales Today",
                  accessor: "sales",
                  maxWidth: 100
                },
                {
                  Header: "Sales Week",
                  accessor: "salesweek",
                  maxWidth: 100
                },
                {
                  Header: "Sales Month",
                  accessor: "salesmonth",
                  maxWidth: 100
                },
                {
                  Header: "Days Out of Stock",
                  accessor: "nostock",
                  maxWidth: 100
                }
              ]
            }
          ]}
          defaultPageSize={25}
          style={{ }}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}
export default App;
