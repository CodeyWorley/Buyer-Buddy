import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../actions/index'
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../css/react-table.css";

class ListingsList extends Component {

  componentDidMount() {
    this.props.fetchListings()
  }

  render(props) {
    const { listings } = this.props;

    console.log(this.props.listings);

    return (
      <div style={{marginLeft: '20px', marginRight: '20px'}}>
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
                  accessor: "2018.157",
                  maxWidth: 100
                },
                {
                  Header: "Sales This Week",
                  accessor: "salesweek",
                  maxWidth: 100
                },
                {
                  Header: "Sales This Month",
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
          //pivotBy={["family"]}
          defaultPageSize={25}
          style={{ }}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

function mapStateToProps({ listings }) {
  return { listings };
}

export default connect(mapStateToProps, { fetchListings })(ListingsList);
