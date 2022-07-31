import React, { useEffect, useState } from "react";
import "./studentCourses.css";
import { getTeacherBySemesterApi } from "../../../api/studentDashboardApi";
import { getStudentInfoById } from "../../../api/studentDashboardApi";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#185047",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const StudentCourses = () => {
  const [data, setData] = useState([]);
  const id = localStorage.getItem("id");
  const header = [
    "Id",
    "Name",
    "Code",
    "Credit Hours",
    "Teacher Id",
    "Teacher Name",
  ];
  const getCourseBySemester = async (Stu_semester) => {
    try {
      const dbResponse = await getTeacherBySemesterApi(Stu_semester);
      setData(dbResponse.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    const fun = async () => {
      const dbResponse = await getStudentInfoById(id);
      if (dbResponse.data.success) {
        getCourseBySemester(dbResponse.data.data.semester);
      }
    };
    fun();
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <div>
          <h2 style={{ textAlign: "center" }}>All Course</h2>
        </div>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {header.map((item) => (
                <StyledTableCell align="center">{item} </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" align="center" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.course_name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.course_code}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.credit_hours}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.Teacher.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.Teacher.name}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StudentCourses;
