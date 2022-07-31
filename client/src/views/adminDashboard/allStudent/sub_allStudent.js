import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllStudentFromDb } from "../../../api/studentDashboardApi";
import TableComponent from "../../../component/table/table";
import { USER_TYPE } from "../../../utils/constant";
const Sub_allStudent = () => {
  const [allStudentData, setallStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const tableHeader = [
    "Id",
    "Name",
    "Cnic",
    "Father Name",
    "Phone No.",
    "Email",
    "Department",
    "Semester",
  ];
  const getAllStudent = async () => {
    const response = await getAllStudentFromDb();
    if (response.data) {
      setLoading(false);
    }
    if (response.success) {
      setallStudentData(response.data);
    }
  };
  useEffect(() => {
    getAllStudent();
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : allStudentData.length > 0 ? (
        <TableComponent
          data={allStudentData}
          type={USER_TYPE.Student}
          header={tableHeader}
        />
      ) : (
        "No Record Found"
      )}
    </>
  );
};

export default Sub_allStudent;
