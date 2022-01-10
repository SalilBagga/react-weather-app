import React, { useState } from 'react';
import Alertpop from './Alertpop';
export default function Searchbar({ setCity, invalidInput, error }) {
  const [emptyCity, setEmptyCity] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    let userdata = event.target.city_name.value.trim().toLowerCase();
    if (userdata) {
      setCity(event.target.city_name.value.trim().toLowerCase());
      setEmptyCity(false);
    } else {
      setEmptyCity(true);
      setCity(null);
    }
  };
  return (
    <div className="d-flex justify-content-center text-center flex-wrap flex-column align-content-center">
      {emptyCity && (
        <div className="mt-3">
          <div className="alert alert-danger d-flex justify-content-center" role="alert">
            Please enter a valid input
          </div>
        </div>
      )}

      {invalidInput && (
        <div className="mt-3">
          <div className="alert alert-danger d-flex justify-content-center" role="alert">
            Please enter a valid city
          </div>
        </div>
      )}

      {error && (
        <div className="mt-3">
          <div className="alert alert-danger d-flex justify-content-center" role="alert">
            {error}
          </div>
        </div>
      )}

      <div className=" mt-4">
        <form onSubmit={handleSubmit} className="d-inline-flex">
          <input type="text" name="city_name" className="form-control" />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
