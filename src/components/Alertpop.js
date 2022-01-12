import React from 'react';
export default function Alertpop({ error }) {
  return (
    <div>
      <div className="d-flex justify-content-center text-center flex-wrap flex-column align-content-center">
        {error && (
          <div className="mt-3">
            <div className="alert alert-danger d-flex justify-content-center" role="alert">
              {error}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
