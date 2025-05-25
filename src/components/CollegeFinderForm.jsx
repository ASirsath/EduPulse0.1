import React, { useState } from 'react';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const categories = [
  "open", "obc", "sc", "st",
  "vj", "nt1", "nt2", "nt3",  "ews", "tfws", "pwdopen", "defopen"
];

const branches = [
  "Civil Engineering",
  "Computer Engineering",
  "Computer Science and Engineering",
  "Information Technology",
  "Electrical Engineering",
  "Electronics Engineering",
  "Electronics and Telecommunication Engineering",
  "Mechanical Engineering",
  "Chemical Engineering",
  "Biomedical Engineering",
  "Instrumentation Engineering",
  "Production Engineering",
  "Textile Engineering",
  "Food Technology",
  "Petro Chemical Engineering",
  "Oil and Paints Technology",
  "Paper and Pulp Technology",
  "Industrial IoT",
  "Artificial Intelligence and Data Science",
  "Artificial Intelligence and Machine Learning",
  "Robotics and Automation",
  "Electronics and Computer Science",
  "Electrical Engg (Electronics and Power)"
];

const genders = ["Male", "Female", "Other"];

const homeUniversities = [
  "Savitribai Phule Pune University – Pune Region",
  "University of Mumbai – Mumbai Region",
  "Rashtrasant Tukadoji Maharaj Nagpur University – Nagpur Region",
  "Dr. Babasaheb Ambedkar Marathwada University – Aurangabad Region",
  "Sant Gadge Baba Amravati University – Amravati Region",
  "Shivaji University – Kolhapur Region",
  "Kavayitri Bahinabai Chaudhari North Maharashtra University – Jalgaon Region",
  "Swami Ramanand Teerth Marathwada University – Nanded Region",
  "Dr. Babasaheb Ambedkar Technological University – Lonere Region",
  "Other"
];


const CollegeFinderForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    percentile: '',
    category: '',
    state: '',
    branch: '',
    gender: '',
    homeUniversity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "percentile") {
      const val = parseFloat(value);
      if (val < 0 || val > 100) return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light mb-5 animate__animated animate__fadeInUp">
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Percentile (0 - 100)</label>
          <input type="number" name="percentile" className="form-control" placeholder="Enter Percentile" onChange={handleChange} value={formData.percentile} required min="0" max="100" step="0.01" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Category</label>
          <select name="category" className="form-select" onChange={handleChange} value={formData.category} required>
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>

      {/* New Gender Field */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Gender</label>
          <select name="gender" className="form-select" onChange={handleChange} value={formData.gender} required>
            <option value="">Select Gender</option>
            {genders.map((gen) => (
              <option key={gen} value={gen}>{gen}</option>
            ))}
          </select>
        </div>
        
        {/* New Home University Field */}
        <div className="col-md-6">
          <label className="form-label">Home University</label>
          <select name="homeUniversity" className="form-select" onChange={handleChange} value={formData.homeUniversity} required>
            <option value="">Select Home University</option>
            {homeUniversities.map((uni) => (
              <option key={uni} value={uni}>{uni}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">State</label>
          <select name="state" className="form-select" onChange={handleChange} value={formData.state} required>
            <option value="">Select State</option>
            {indianStates.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Engineering Branch</label>
          <select name="branch" className="form-select" onChange={handleChange} value={formData.branch} required>
            <option value="">Select Branch</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-success px-5">Search Colleges</button>
      </div>
    </form>
  );
};

export default CollegeFinderForm;
