import React, {
  useState,
  useMemo
} from "react";

import {
  FaMagnifyingGlass,
  FaChevronLeft,
  FaChevronRight,
  FaPenToSquare,
  FaTrash,
  FaEye,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa6";

const DataTable = ({
  columns = [],
  data = [],
  loading = false,
  pageSize = 10,
  searchable = true,
  onView,
  onEdit,
  onDelete
}) => {

  const [search, setSearch] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [sortField, setSortField] =
    useState("");

  const [sortOrder, setSortOrder] =
    useState("asc");

  const filteredData = useMemo(() => {

    let rows = [...data];

    if (search) {

      rows = rows.filter((row) =>
        Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );
    }

    if (sortField) {

      rows.sort((a, b) => {

        if (
          a[sortField] <
          b[sortField]
        ) {
          return sortOrder === "asc"
            ? -1
            : 1;
        }

        if (
          a[sortField] >
          b[sortField]
        ) {
          return sortOrder === "asc"
            ? 1
            : -1;
        }

        return 0;
      });
    }

    return rows;

  }, [
    data,
    search,
    sortField,
    sortOrder
  ]);

  const totalPages =
    Math.ceil(
      filteredData.length /
      pageSize
    );

  const paginatedData =
    filteredData.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

  const handleSort = (field) => {

    if (sortField === field) {

      setSortOrder(
        sortOrder === "asc"
          ? "desc"
          : "asc"
      );

    } else {

      setSortField(field);
      setSortOrder("asc");

    }
  };

  return (

    <div className="data-table-card">

      {/* HEADER */}

      <div className="table-header">

        <h3>Data Table</h3>

        {searchable && (

          <div className="search-box">

            <FaMagnifyingGlass />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />

          </div>

        )}

      </div>

      {/* TABLE */}

      <div className="table-wrapper">

        <table>

          <thead>

            <tr>

              {columns.map(
                (column) => (

                  <th
                    key={column.accessor}
                    onClick={() =>
                      handleSort(
                        column.accessor
                      )
                    }
                  >

                    <div className="sortable">

                      {column.header}

                      {sortField ===
                      column.accessor ? (

                        sortOrder ===
                        "asc" ? (
                          <FaArrowUp />
                        ) : (
                          <FaArrowDown />
                        )

                      ) : null}

                    </div>

                  </th>

                )
              )}

              <th>
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan={
                    columns.length + 1
                  }
                  className="empty"
                >
                  Loading...
                </td>

              </tr>

            ) : paginatedData.length ===
              0 ? (

              <tr>

                <td
                  colSpan={
                    columns.length + 1
                  }
                  className="empty"
                >
                  No records found
                </td>

              </tr>

            ) : (

              paginatedData.map(
                (
                  row,
                  index
                ) => (

                  <tr key={index}>

                    {columns.map(
                      (
                        column
                      ) => (

                        <td
                          key={
                            column.accessor
                          }
                        >
                          {
                            row[
                              column
                                .accessor
                            ]
                          }
                        </td>

                      )
                    )}

                    <td>

                      <div className="actions">

                        <button
                          onClick={() =>
                            onView?.(
                              row
                            )
                          }
                        >
                          <FaEye />
                        </button>

                        <button
                          onClick={() =>
                            onEdit?.(
                              row
                            )
                          }
                        >
                          <FaPenToSquare />
                        </button>

                        <button
                          className="danger"
                          onClick={() =>
                            onDelete?.(
                              row
                            )
                          }
                        >
                          <FaTrash />
                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )

            )}

          </tbody>

        </table>

      </div>

      {/* PAGINATION */}

      <div className="pagination">

        <button
          disabled={
            currentPage === 1
          }
          onClick={() =>
            setCurrentPage(
              currentPage - 1
            )
          }
        >
          <FaChevronLeft />
        </button>

        <span>
          Page {currentPage} of{" "}
          {totalPages || 1}
        </span>

        <button
          disabled={
            currentPage ===
            totalPages
          }
          onClick={() =>
            setCurrentPage(
              currentPage + 1
            )
          }
        >
          <FaChevronRight />
        </button>

      </div>

      <style>{`

        .data-table-card{

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

          margin-bottom:20px;
        }

        .table-header h3{

          color:white;
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

        .table-wrapper{
          overflow-x:auto;
        }

        table{
          width:100%;
          border-collapse:collapse;
        }

        th{

          text-align:left;

          color:#94a3b8;

          padding:16px;

          cursor:pointer;

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

        .sortable{

          display:flex;
          align-items:center;
          gap:8px;
        }

        .actions{

          display:flex;
          gap:8px;
        }

        .actions button{

          width:36px;
          height:36px;

          border:none;

          border-radius:10px;

          background:
          rgba(124,58,237,.15);

          color:#7c3aed;

          cursor:pointer;
        }

        .actions .danger{

          background:
          rgba(239,68,68,.15);

          color:#ef4444;
        }

        .empty{

          text-align:center;

          padding:30px;

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

        .pagination span{

          color:#cbd5e1;
        }

        @media(max-width:768px){

          .table-header{

            flex-direction:column;
            align-items:flex-start;
            gap:14px;
          }

          .pagination{

            justify-content:center;
          }
        }

      `}</style>

    </div>
  );
};

export default DataTable;