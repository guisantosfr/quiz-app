import { useState, useEffect } from 'react';
import api from '../services/api';

const useClasses = () => {
    const [classes, setClasses] = useState(null);

    const fetchData = async () => {
      try {
        const result = await api.get('/classes');
        setClasses(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    useEffect(() => {
        fetchData();
    }, [classes]);

    return { classes, refetch: fetchData };
}

export default useClasses;