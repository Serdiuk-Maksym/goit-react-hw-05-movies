import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdditionalInformation = () => {
  return (
    <div>
      <h3>Additional information</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to={`cast`} className="list-group-item-action">
            Cast
          </Link>
        </li>
        <li className="list-group-item">
          <Link to={`reviews`} className="list-group-item-action">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AdditionalInformation;
