import React, {Component} from 'react';
import ReactDom from 'react-dom';
import update from 'immutability-helper';


//not used. was intentional left in for future potential use
export default function Selected(props) {
  const {data} = props;

  const filteredTable = data.map((item, id) => (
    <tr key={id} onClick={() => props.onItemClick(id)}>
      <td>{item.id}</td>
      <td>{item.neighbourhood}</td>
      <td>{item.latitude}</td>
      <td>{item.longitude}</td>
      <td>{item.price}</td>
      <td>{item.property_type}</td>
      <td>{item.room_type}</td>
      <td>{item.beds}</td>
      <td>{item.reviews_per_month}</td>
      <td>{item.cancellation_policy}</td>
      <td>{item.review_scores_rating}</td>
    </tr>
  ));

  return (
    <div>
      <div>
        <h3 className="center">Store specific listings here by clicking on the table below</h3>
      </div>
      <div>
        <table className="hover unstriped width">
          <thead>
            <tr></tr>
            <tr>
              <th>Id</th>
              <th>Neighbourhood</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Price</th>
              <th>Property Type</th>
              <th>Room Type</th>
              <th>Beds</th>
              <th>Reviews per Month</th>
              <th>Cancellation Policy</th>
              <th>Review Scores Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredTable}
          </tbody>
        </table>
        <div><h5 className = "center">Click on table above to remove specific listings</h5></div>
      </div>
    </div>
  );

}
