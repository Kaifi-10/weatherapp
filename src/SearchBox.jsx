import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(location);
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input style={{
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        marginRight:'5px'
      }}
        type="text"
        placeholder="Enter city name"
        value={location}
        onChange={handleChange}
      />
      <button type="submit" style={{ color: 'white',
        backgroundColor:'green',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        marginLeft:'5px'
       }}>Search</button>
    </form>
  );
};

export default SearchBox;
