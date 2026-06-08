import React, {
  useMemo,
  useState
} from "react";

import {
  FaMagnifyingGlass,
  FaEye,
  FaDownload,
  FaChevronLeft,
  FaChevronRight,
  FaCircleCheck,
  FaTriangleExclamation
} from "react-icons/fa6";

const ForecastTable = ({
  data = [],
  loading = false,
  pageSize = 10,
  onView
}) => {

  const [search, setSearch] =
    useState("");

  const [page, setPage] =
    useState(1);

  const forecastData = useMemo(() => {

    const rows =
      data.length > 0
        ? data
        : [
            {
              product: "Laptop",
              actual: 1250,
              forecast: 1290
            },
            {
              product: "Keyboard",
              actual: 980,
              forecast: 1025
            },
            {
              product: "Mouse",
              actual: 760,
              forecast: 745
            }
          ];

    return rows.filter((item) =>
      item.product
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  }, [data, search]);

  const totalPages =
    Math.ceil(
      forecastData.length /
      pageSize
    ) || 1;

  const paginatedData =
    forecastData.slice(
      (page - 1) * pageSize,
      page * pageSize
    );

  const calculateAccuracy = (
    actual,
    forecast
  ) => {

    const diff =
      Math.abs(
        actual - forecast
      );

    return (
      (
        (1 - diff / actual) *
        100
      ).toFixed(1)
    );
  };

  return (

    <div className="forecast-table-card">

      {/* HEADER */}

      <div className="table-header">

        <div>

          <h3>
            Forecast Results
          </h3>

          <p>
            AI demand prediction
            performance analysis
          </p>

        </div>

        <div className="table-tools">

          <div className="search-box">

            <FaMagnifyingGlass />

            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />

          </div>

          <button className="export-btn">
            <FaDownload />
            Export
          </button>

        </div>

      </div>

      {/* TABLE */}

      <div className="table-wrapper">

        <table>

          <thead>

            <tr>
              <th>Product</th>
              <th>Actual</th>
              <th>Forecast</th>
              <th>Accuracy</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan="6"
                  className="empty"
                >
                  Loading forecast data...
                </td>

              </tr>

            ) : paginatedData.length ===
              0 ? (

              <tr>

                <td
                  colSpan="6"
                  className="empty"
                >
                  No forecast data found
                </td>

              </tr>

            ) : (

              paginatedData.map(
                (
                  item,
                  index
                ) => {

                  const accuracy =
                    calculateAccuracy(
                      item.actual,
                      item.forecast
                    );

                  const good =
                    accuracy >= 90;

                  return (

                    <tr
                      key={index}
                    >

                      <td>
                        {
                          item.product
                        }
                      </td>

                      <td>
                        {item.actual.toLocaleString()}
                      </td>

                      <td>
                        {item.forecast.toLocaleString()}
                      </td>

                      <td>

                        <span
                          className={
                            good
                              ? "accuracy-good"
                              : "accuracy-warning"
                          }
                        >
                          {accuracy}%
                        </span>

                      </td>

                      <td>

                        <span
                          className={
                            good
                              ? "status-success"
                              : "status-warning"
                          }
                        >

                          {good ? (
                            <>
                              <FaCircleCheck />
                              Accurate
                            </>
                          ) : (
                            <>
                              <FaTriangleExclamation />
                              Review
                            </>
                          )}

                        </span>

                      </td>

                      <td>

                        <button
                          className="action-btn"
                          onClick={() =>
                            onView?.(
                              item
                            )
                          }
                        >
                          <FaEye />
                        </button>

                      </td>

                    </tr>

                  );
                }
              )

            )}

          </tbody>

        </table>

      </div>

      {/* PAGINATION */}

      <div className="pagination">

        <button
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
        >
          <FaChevronLeft />
        </button>

        <span>
          Page {page} of{" "}
          {totalPages}
        </span>

        <button
          disabled={
            page === totalPages
          }
          onClick={() =>
            setPage(page + 1)
          }
        >
          <FaChevronRight />
        </button>

      </div>

      <style>{`

        .forecast-table-card{
          background:
          rgba(255,255,255,.04);

          border:
          1px solid rgba(
          255,255,255,.08);

          backdrop-filter:
          blur(14px);

          border-radius:24px;

          padding:24px;
        }

        .table-header{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:24px;
        }

        .table-header h3{
          color:white;
          margin-bottom:4px;
        }

        .table-header p{
          color:#94a3b8;
          font-size:13px;
        }

        .table-tools{
          display:flex;
          gap:12px;
        }

        .search-box{
          display:flex;
          align-items:center;
          gap:10px;
          padding:12px 16px;
          border-radius:14px;
          background:
          rgba(255,255,255,.04);
          border:
          1px solid rgba(
          255,255,255,.08);
        }

        .search-box input{
          border:none;
          background:none;
          color:white;
          outline:none;
        }

        .export-btn{
          border:none;
          padding:12px 18px;
          border-radius:14px;
          background:
          linear-gradient(
          135deg,
          #7c3aed,
          #9333ea);
          color:white;
          cursor:pointer;
        }

        .table-wrapper{
          overflow-x:auto;
        }

        table{
          width:100%;
          border-collapse:collapse;
        }

        th{
          color:#94a3b8;
          text-align:left;
          padding:16px;
          border-bottom:
          1px solid rgba(
          255,255,255,.08);
        }

        td{
          color:white;
          padding:16px;
          border-bottom:
          1px solid rgba(
          255,255,255,.05);
        }

        tr:hover{
          background:
          rgba(255,255,255,.03);
        }

        .accuracy-good{
          color:#10b981;
          font-weight:600;
        }

        .accuracy-warning{
          color:#f59e0b;
          font-weight:600;
        }

        .status-success,
        .status-warning{
          display:flex;
          align-items:center;
          gap:6px;
          font-size:13px;
          font-weight:600;
        }

        .status-success{
          color:#10b981;
        }

        .status-warning{
          color:#f59e0b;
        }

        .action-btn{
          width:38px;
          height:38px;
          border:none;
          border-radius:10px;
          background:
          rgba(124,58,237,.15);
          color:#7c3aed;
          cursor:pointer;
        }

        .empty{
          text-align:center;
          padding:40px;
          color:#94a3b8;
        }

        .pagination{
          margin-top:20px;
          display:flex;
          justify-content:flex-end;
          align-items:center;
          gap:12px;
        }

        .pagination button{
          width:38px;
          height:38px;
          border:none;
          border-radius:10px;
          background:
          rgba(124,58,237,.15);
          color:#7c3aed;
          cursor:pointer;
        }

        @media(max-width:768px){

          .table-header{
            flex-direction:column;
            align-items:flex-start;
            gap:16px;
          }

          .table-tools{
            width:100%;
            flex-direction:column;
          }

          .pagination{
            justify-content:center;
          }
        }

      `}</style>

    </div>
  );
};

export default ForecastTable;