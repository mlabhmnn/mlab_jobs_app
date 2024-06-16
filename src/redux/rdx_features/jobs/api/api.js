import axios from 'axios';
// import { useSelector } from 'react-redux';

export const fetchJobs = async () => {
  const token = localStorage.getItem('mlab'); // Replace with your actual token
  // const token = useSelector((state) => state.auth.token)
  // console.log(token)
  try {
    const response = await axios.get('http://localhost:8080/allposting', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    // console.log(response)
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch jobs');
  }
};


// import axios from 'axios';

  // export const fetchJobs = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8080/allposting'); // Adjust endpoint as needed
  //     return response.data;
  //   } catch (error) {
  //     throw Error('Failed to fetch jobs');
  //   }
  // };
