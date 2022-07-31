import React, { useState, useEffect } from 'react';
import { getCourseByTeacher } from '../../../api/courseApi';
import "./allocatedCourse.css";
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
const AllocatedCourse = () => {
    const t_id = localStorage.getItem("id");
    const [data, setData] = useState([])
        const header = [
          "Course Id",
          "Course Name",
          "Course Code",
          "Credit Hours",
          "Semester",
          "Registered Date",
        ];

    useEffect(() => {
        const fun = async() => {
            const dbResponse = await getCourseByTeacher(t_id);
            if (dbResponse.data.success) {
                setData(dbResponse.data.data)
            }
        }
        fun();
    }, [])
    console.log(data)
    return (
      <>
        {
          data.length>0? <TableContainer component={Paper}>
          <div>
            <h2 style={{ textAlign: "center" }}>Allocated Courses Detail</h2>
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
                  <StyledTableCell align="center" component="th" scope="row">
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
                    {row.courseForWhichSemester}{" "}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.createdAt}
                  </StyledTableCell>
            
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>:"No Data found"
       }
      </>
    );
}

export default AllocatedCourse