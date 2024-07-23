import { useState, useEffect } from "react";
import { axiosGet } from "./lib/axiosUtility";

/**
 * Custom hook for all get requests to the backend server
 *
 * Receives:
 *  - relativeUri - the location not including the baseUri
 * Returns:
 *  data of form {success: true, data: datahere }
 */

const useGetBackendData = (relativeUri) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosGet(relativeUri);
        // response {success,data,error}
        if (response.success) {
          // console.log("Setting data", response.data);
          setData(response.data);
        } else {
          // console.log("Setting error", response.error);
          setError(response.error);
        }
        // console.log("Setting loading", false);
        setLoading(false);
        console.log("Custom hook returning handled response");
      } catch (error) {
        console.log("Custom hook returning unhandled response");
        // console.log("Setting error", error);
        setError(error);
        // console.log("Setting loading", false);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { data, error, loading };
};

export default useGetBackendData;
