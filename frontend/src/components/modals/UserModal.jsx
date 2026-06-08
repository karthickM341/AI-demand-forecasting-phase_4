import React, { useEffect, useState } from "react";
import {
  FaXmark,
  FaUser,
  FaEnvelope,
  FaUserShield,
  FaBuilding,
  FaLock,
  FaSave
} from "react-icons/fa6";

const UserModal = ({
  isOpen,
  onClose,
  onSubmit,
  loading = false,
  editMode = false,
  userData = null
}) => {

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      role: "Analyst",
      department: "Operations",
      status: "Active",
      password: ""
    });

  useEffect(() => {

    if (editMode && userData) {

      setFormData({
        fullName:
          userData.fullName || "",
        email:
          userData.email || "",
        role:
          userData.role || "Analyst",
        department:
          userData.department ||
          "Operations",
        status:
          userData.status || "Active",
        password: ""
      });
    }

  }, [editMode, userData]);

  if (!isOpen) return null;

  const handleChange = (e) => {

    const {
      name,
      value
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit?.(formData);
  };

  return (
    <div className="user-modal-overlay">

      <div className="user-modal">

        {/* Header */}

        <div className="modal-header">

          <div>

            <h2>
              <FaUser />
              {editMode
                ? "Edit User"
                : "Create User"}
            </h2>

            <p>
              Manage enterprise users,
              roles and permissions
            </p>

          </div>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <FaXmark />
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="user-form"
        >

          <div className="form-group">

            <label>
              <FaUser />
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>
              <FaEnvelope />
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="user@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-grid">

            <div className="form-group">

              <label>
                <FaUserShield />
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
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

            <div className="form-group">

              <label>
                <FaBuilding />
                Department
              </label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option>
                  Operations
                </option>
                <option>
                  Sales
                </option>
                <option>
                  Inventory
                </option>
                <option>
                  Finance
                </option>
                <option>
                  IT
                </option>
              </select>

            </div>

          </div>

          <div className="form-grid">

            <div className="form-group">

              <label>
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>
                  Active
                </option>
                <option>
                  Inactive
                </option>
                <option>
                  Suspended
                </option>
              </select>

            </div>

            <div className="form-group">

              <label>
                <FaLock />
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder={
                  editMode
                    ? "Leave blank to keep current password"
                    : "Create password"
                }
                value={formData.password}
                onChange={handleChange}
                required={!editMode}
              />

            </div>

          </div>

          {/* Permission Section */}

          <div className="permission-card">

            <h4>
              User Permissions
            </h4>

            <div className="permission-grid">

              <label>
                <input
                  type="checkbox"
                  defaultChecked
                />
                Dashboard Access
              </label>

              <label>
                <input
                  type="checkbox"
                  defaultChecked
                />
                Forecasting Access
              </label>

              <label>
                <input
                  type="checkbox"
                  defaultChecked
                />
                Analytics Access
              </label>

              <label>
                <input
                  type="checkbox"
                  defaultChecked
                />
                Reports Access
              </label>

              <label>
                <input
                  type="checkbox"
                />
                User Management
              </label>

              <label>
                <input
                  type="checkbox"
                />
                System Settings
              </label>

            </div>

          </div>

          {/* Actions */}

          <div className="modal-actions">

            <button
              type="button"
              className="secondary-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="primary-btn"
              disabled={loading}
            >

              {loading ? (
                "Saving..."
              ) : (
                <>
                  <FaSave />
                  {editMode
                    ? " Update User"
                    : " Create User"}
                </>
              )}

            </button>

          </div>

        </form>

      </div>

      <style>{`

        .user-modal-overlay{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,.70);
          backdrop-filter:blur(8px);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:9999;
          padding:20px;
        }

        .user-modal{
          width:100%;
          max-width:850px;
          background:rgba(15,23,42,.96);
          border:1px solid rgba(255,255,255,.08);
          border-radius:24px;
          backdrop-filter:blur(18px);
          padding:30px;
        }

        .modal-header{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          margin-bottom:24px;
        }

        .modal-header h2{
          display:flex;
          align-items:center;
          gap:10px;
          color:#fff;
        }

        .modal-header p{
          color:#94a3b8;
          margin-top:8px;
        }

        .close-btn{
          width:42px;
          height:42px;
          border:none;
          border-radius:12px;
          background:rgba(255,255,255,.05);
          color:white;
          cursor:pointer;
        }

        .user-form{
          display:flex;
          flex-direction:column;
          gap:20px;
        }

        .form-group{
          display:flex;
          flex-direction:column;
          gap:8px;
        }

        .form-group label{
          display:flex;
          align-items:center;
          gap:8px;
          color:#cbd5e1;
          font-size:14px;
        }

        .form-group input,
        .form-group select{
          padding:14px;
          border-radius:14px;
          border:1px solid rgba(255,255,255,.08);
          background:rgba(255,255,255,.04);
          color:white;
        }

        .form-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }

        .permission-card{
          padding:20px;
          border-radius:18px;
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.05);
        }

        .permission-card h4{
          color:white;
          margin-bottom:16px;
        }

        .permission-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:12px;
        }

        .permission-grid label{
          color:#cbd5e1;
          display:flex;
          gap:10px;
          align-items:center;
        }

        .modal-actions{
          display:flex;
          justify-content:flex-end;
          gap:12px;
        }

        @media(max-width:768px){

          .form-grid,
          .permission-grid{
            grid-template-columns:1fr;
          }

          .modal-actions{
            flex-direction:column;
          }

          .user-modal{
            padding:20px;
          }
        }

      `}</style>

    </div>
  );
};

export default UserModal;