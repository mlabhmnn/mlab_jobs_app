import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJobsAsync } from '../../redux/rdx_features/jobs/jobsSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchJobsAsync(query));
  };

  return (
    <form onSubmit={handleSearch} className="flex mt-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-l-md"
        placeholder="Search for jobs..."
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
