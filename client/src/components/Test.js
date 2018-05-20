import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../actions'

class ListingsList extends Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  renderListings() {
    return this.props.listings.map(listing => {
      return (
        <div>
          {listing.title}
        </div>
      );
    });
  }

  render() {
    return(
      <div>
        {this.renderListings()}
      </div>
    );
  }
}

function mapStateToProps({ listings }) {
  return { listings };
}

export default connect(mapStateToProps, { fetchListings })(ListingsList);
