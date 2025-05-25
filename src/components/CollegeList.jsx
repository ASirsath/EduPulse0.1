import React from 'react';

const CollegeList = ({ colleges, loading, error }) => {
  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;
  if (colleges.length === 0) return <p className="text-center">No colleges found.</p>;

  return (
    <div className="row">
      {colleges.map((college) => (
        <div key={college._id} className="col-md-6 mb-4">
          <div className="card border-primary shadow-sm h-100 animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">{college.name}</h5>
              <p className="card-text"><strong>State:</strong> {college.state}</p>
              <p className="card-text"><strong>Fee:</strong> ₹{college.annualFee}</p>
              <h6 className="mt-3">Cutoff (Past 3 Years - CAP Rounds)</h6>
              {college.cutoffs && college.cutoffs.length > 0 ? (
                <table className="table table-bordered table-sm">
                  <thead className="table-light">
                    <tr>
                      <th>Year</th>
                      <th>CAP Round 1</th>
                      <th>CAP Round 2</th>
                      <th>CAP Round 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {college.cutoffs.map((yearData, idx) => (
                      <tr key={idx}>
                        <td>{yearData.year}</td>
                        <td>{yearData.cap1}</td>
                        <td>{yearData.cap2}</td>
                        <td>{yearData.cap3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-muted">No cutoff data available.</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollegeList;