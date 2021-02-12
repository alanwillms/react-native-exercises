import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: { term: searchTerm, limit: 50, location: 'San Jose' },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // Infinite loop triggered on re-rendering: searchApi('pasta');
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return {
    searchApi,
    results,
    errorMessage,
  };
};
