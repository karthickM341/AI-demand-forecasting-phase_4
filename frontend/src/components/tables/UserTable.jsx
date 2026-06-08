import React, {
  useMemo,
  useState
} from "react";

import {
  FaMagnifyingGlass,
  FaEye,
  FaPenToSquare,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
  FaUserShield,
  FaUserCheck,
  FaUserClock
} from "react-icons/fa6";

const UserTable = ({
  users = [],
  loading = false,
  pageSize = 10,
  onView,
  onEdit,
  onDelete
}) => {

  const [search, setSearch] =
    useState("");

  const [roleFilter, setRoleFilter] =
    useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  const filteredUsers = useMemo(() => {

    let data =
      users.length > 0
        ? users
        : [
            {
              id: 1,
              name: "Rithick Kumar",
              email: "admin@forecast.ai",
              role: "Administrator",
              department: "IT",
              status: "Active"
            },
            {
              id: 2,
              name: "John Smith",
              email: "analyst@forecast.ai",
              role: "Analyst",
              department: "Sales",
              status: "Active"
            },
            {
              id: 3,
              name: "Sarah Wilson",
              email: "manager@forecast.ai",
              role: "Manager",
              department: "Operations",
              status: "Inactive"
            }
          ];

    return data.filter((user) => {

      const matchesSearch =
        user.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        user.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesRole =
        roleFilter === "All" ||
        user.role === roleFilter;

      return (
        matchesSearch &&
        matchesRole
      );
    });

  }, [users, search, roleFilter]);

  const totalPages =
    Math.ceil(
      filteredUsers.length /
      pageSize
    ) || 1;

  const paginatedUsers =
    filteredUsers.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

  const getStatusClass = (
    status
  ) => {

    switch (status) {

      case "Active":
        return "status-active";

      case "Inactive":
        return "status-inactive";

      default:
        return "status-pending";
    }
  };

  const getStatusIcon = (
    status
  ) => {

    switch (status) {

      case "Active":
        return <FaUserCheck />;

      case "Inactive":
        return <FaUserClock />;

      default:
        return <FaUserShield />;
    }
  };

  return (

    <div className="user-table-card">

      {/* Header */}

      <div className="table-header">

        <div>

          <h3>
            User Management
          </h3>

          <p>
            Enterprise access and
            permission management
          </p>

        </div>

        <div className="table-tools">

          <div className="search-box">

            <FaMagnifyingGlass />

            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />

          </div>

          <select
            value={roleFilter}
            onChange={(e) =>
              setRoleFilter(
                e.target.value
              )
            }
          >
            <option>
              All
            </option>

            <option>
              Administrator
            </option>

            <option>
              Manager
            </option>

            <option>
              Analyst
            </option>

            <option>
              Viewer
            </option>
          </select>

        </div>

      </div>

      {/* Table */}

      <div className="table-wrapper">

        <table>

          <thead>

            <tr>

              <th>User</th>
              <th>Role</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan="5"
                  className="empty"
                >
                  Loading users...
                </td>

              </tr>

            ) : paginatedUsers.length ===
              0 ? (

              <tr>

                <td
                  colSpan="5"
                  className="empty"
                >
                  No users found
                </td>

              </tr>

            ) : (

              paginatedUsers.map(
                (user) => (

                  <tr
                    key={user.id}
                  >

                    <td>

                      <div className="user-info">

                        <div className="avatar">

                          {user.name
                            .charAt(0)
                            .toUpperCase()}

                        </div>

                        <div>

                          <strong>
                            {user.name}
                          </strong>

                          <span>
                            {user.email}
                          </span>

                        </div>

                      </div>

                    </td>

                    <td>

                      <span className="role-badge">
                        {user.role}
                      </span>

                    </td>

                    <td>
                      {user.department}
                    </td>

                    <td>

                      <span
                        className={getStatusClass(
                          user.status
                        )}
                      >

                        {getStatusIcon(
                          user.status
                        )}

                        {user.status}

                      </span>

                    </td>

                    <td>

                      <div className="actions">

                        <button
                          className="view-btn"
                          onClick={() =>
                            onView?.(
                              user
                            )
                          }
                        >
                          <FaEye />
                        </button>

                        <button
                          className="edit-btn"
                          onClick={() =>
                            onEdit?.(
                              user
                            )
                          }
                        >
                          <FaPenToSquare />
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() =>
                            onDelete?.(
                              user
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

      {/* Pagination */}

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
          Page {currentPage}
          {" "}of{" "}
          {totalPages}
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

        .user-table-card{
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.08);
          backdrop-filter:blur(16px);
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
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.08);
        }

        .search-box input,
        .table-tools select{
          background:none;
          border:none;
          outline:none;
          color:white;
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
          border-bottom:1px solid rgba(255,255,255,.08);
        }

        td{
          padding:16px;
          color:white;
          border-bottom:1px solid rgba(255,255,255,.05);
        }

        tr:hover{
          background:rgba(255,255,255,.03);
        }

        .user-info{
          display:flex;
          align-items:center;
          gap:14px;
        }

        .avatar{
          width:42px;
          height:42px;
          border-radius:50%;
          background:linear-gradient(
            135deg,
            #7c3aed,
            #9333ea
          );
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:700;
        }

        .user-info strong{
          display:block;
        }

        .user-info span{
          color:#94a3b8;
          font-size:13px;
        }

        .role-badge{
          background:rgba(124,58,237,.15);
          color:#c4b5fd;
          padding:6px 12px;
          border-radius:999px;
          font-size:12px;
          font-weight:600;
        }

        .status-active,
        .status-inactive,
        .status-pending{
          display:flex;
          align-items:center;
          gap:6px;
          font-size:13px;
          font-weight:600;
        }

        .status-active{
          color:#10b981;
        }

        .status-inactive{
          color:#ef4444;
        }

        .status-pending{
          color:#f59e0b;
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
          cursor:pointer;
          color:white;
        }

        .view-btn{
          background:#3b82f6;
        }

        .edit-btn{
          background:#7c3aed;
        }

        .delete-btn{
          background:#ef4444;
        }

        .empty{
          text-align:center;
          color:#94a3b8;
          padding:40px;
        }

        .pagination{
          margin-top:20px;
          display:flex;
          justify-content:flex-end;
          gap:12px;
          align-items:center;
        }

        .pagination button{
          width:38px;
          height:38px;
          border:none;
          border-radius:10px;
          background:rgba(124,58,237,.15);
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

export default UserTable;