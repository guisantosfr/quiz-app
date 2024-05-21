import { useState, useEffect } from 'react';
import api from '../services/api';

const useQuizzes = () => {
    const [quizzes, setQuizzes] = useState(null);

    const fetchData = async () => {
      try {
        const result = await api.get('/quizzes');
        setQuizzes(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    useEffect(() => {
        fetchData();
    }, [quizzes]);

    return { quizzes, refetch: fetchData };
}

export default useQuizzes;