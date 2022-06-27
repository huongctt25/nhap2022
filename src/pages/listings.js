import { useCallback, useEffect } from "react";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Listings = () => {
  const fetchMoviesHandler = useCallback(async () => {
    try {
      // const response = await fetch("https://swapi.dev/api/films/");
      const response = await axios.get("https://swapi.dev/api/films/");
      console.log(response.data);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      console.log(response.data.results);
    } catch (error) {
      toast.error("Error");
    }
  }, []);

  // const fetchTickets = useCallback(async () => {
  //   try {
  //     const url = process.env.REACT_APP_BACK_END + "/tickets";
  //     const response = await axios.get(url, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
  //       },
  //     });
  //     console.log(response);
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //   } catch (error) {
  //     toast.error("Error");
  //   }
  // }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="center">
          <h1>Listings</h1>
        </div>
      </div>
    </>
  );
};

export default Listings;
