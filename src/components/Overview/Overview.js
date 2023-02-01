import axios from "axios";
import React, { useEffect, useState } from "react";
import Lessdetails from "../Lessdetails/Lessdetails";
import "./Overview.css";

function Overview() {
  /**Storing the data fetched from the api */
  const [details, setDetails] = useState([]);

  /**storing page number */
  const [page, setPage] = useState(1);

  /**function to fetch the data from the api  */
  const getData = async () => {
    let userData = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setDetails(userData.data);
  };

  /** Calling the getData function only once when the website is loaded */
  useEffect(() => {
    getData();
  }, []);

  /**function to set the page number */
  const pageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(details.length / 3) &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <div className="container">
      {details.length > 0 && (
        <div className="div-header">
          {details.slice(page * 3 - 3, page * 3).map((e) => {
            return <Lessdetails key={e.id} details={e} />;
          })}
        </div>
      )}
      {details.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination_disable"}
            onClick={() => {
              pageHandler(page - 1);
            }}
          >
            {"<"}
          </span>
          {[...Array(Math.ceil(details.length / 3))].map((e, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination_selected" : ""}
                onClick={() => {
                  pageHandler(i + 1);
                }}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={
              page < Math.ceil(details.length / 3) ? "" : "pagination_disable"
            }
            onClick={() => {
              pageHandler(page + 1);
            }}
          >
            {">"}
          </span>
        </div>
      )}
    </div>
  );
}

export default Overview;
