import React, { useState } from 'react';
import CollegeFinderForm from '../components/CollegeFinderForm';
import CollegeList from '../components/CollegeList';

const CollegeFinder = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/colleges/search?${new URLSearchParams(formData)}`);

      const data = await res.json();
      setColleges(data);
    } catch (err) {
      setError('Failed to fetch colleges. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CollegeFinderForm onSearch={handleSearch} />
      <CollegeList colleges={colleges} loading={loading} error={error} />
    </>
  );
};

export default CollegeFinder;