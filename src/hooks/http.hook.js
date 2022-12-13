import axios from "axios";
import { useState, useCallback } from "react";

export const useHttp = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const request = useCallback(async (url) => {
      setLoading(true);

      try {
         const response = await axios.get(url);

         if (!response.status === 200)
            throw new Error(
               `Could not fetch ${url}, status: ${response.status}`
            );

         const data = await response.data;

         setLoading(false);

         return data;
      } catch (error) {
         setLoading(false);
         setError(error.message);
         throw error;
      }
   }, []);

   const clearError = useCallback(() => setError(null), []);

   return { loading, request, error, clearError };
};
