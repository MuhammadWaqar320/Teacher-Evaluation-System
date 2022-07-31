import React, { useEffect,useState } from 'react'
import "./ratingDetail.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getRatingDetailToTeacher } from '../../../api/teacherDashboardApi';
import StarPurple500Icon from "@mui/icons-material/StarPurple500";

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
const RatingDetail = () => {
    const header=['Student Id','Student Name','Student Semester','Student Department','Rating','Feedback','Type Of Rating','Rating Date']
    const [data,setData]=useState([])
    const loggedInTeacherId=localStorage.getItem("id")
    const getRatingData=async()=>{
        try {
            const dbResponse = await getRatingDetailToTeacher(
              loggedInTeacherId
            );
            console.log(dbResponse.data.data);
            if(dbResponse.data.success){
                
                setData(dbResponse.data.data)
            }
            
        } catch (error) {
            console.log(error.message)
        }
    };
    useEffect(()=>{
      getRatingData();
    },[])
    return (
      <>
        <TableContainer component={Paper}>
          <div>
            <h2 style={{ textAlign: "center" }}>Rating Detail</h2>
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
                    {row.Student.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Student.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Student.semester}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Student.department}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.no_of_star}{" "}
                    <StarPurple500Icon
                      fontSize="14px"
                      style={{ marginBottom: "3px", color: "red" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.feedback}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.type_of_feedback}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.createdAt}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
}

export default RatingDetail