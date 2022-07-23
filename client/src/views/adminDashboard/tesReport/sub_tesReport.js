import React from 'react'
import { useEffect,useState } from 'react';
import { getRatingReporting } from '../../../api/adminDashboardApi';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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

const Sub_tesReport = () => {
    const [ratingData,setRatingData]=useState([])
    const [loading,setLoading]=useState(true)
     const header = [
       "Teacher Id",
       "Teacher Name",
       "Student Id",
       "Student Name",
       "Rating",
       "Feedback",
       "Rating Based On",
       "Rating Date",
       "Delete",
     ];
    
    const  getRatingDetail=async()=>{
        try {
            const response=await getRatingReporting()
            console.log(response.data)
            if(response.success){
                 setRatingData(response.data)
                 setLoading(false)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
 useEffect(()=>{
 getRatingDetail()
 },[])

     return (
       <>
         <div>
           <h2 style={{ textAlign: "center" }}>Rating Report</h2>
         </div>
         {loading ? (
           <div>loading...</div>
         ) : (
           <TableContainer component={Paper}>
             <Table sx={{ minWidth: 700 }} aria-label="customized table">
               <TableHead>
                 <TableRow>
                   {header.map((item) => (
                     <StyledTableCell align="center">{item} </StyledTableCell>
                   ))}
                 </TableRow>
               </TableHead>
               <TableBody>
                 {ratingData.map((row) => (
                   <StyledTableRow key={row.Teacher.id}>
                     <StyledTableCell align="center" component="th" scope="row">
                       {row.Teacher.id}
                     </StyledTableCell>
                     <StyledTableCell align="center">
                       {row.Teacher.name}
                     </StyledTableCell>
                     <StyledTableCell align="center">
                       {row.Student.id}
                     </StyledTableCell>
                     <StyledTableCell align="center">
                       {row.Student.name}
                     </StyledTableCell>
                     <StyledTableCell align="center">
                       {row.no_of_star}
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
                     <StyledTableCell align="center">
                       <DeleteIcon />
                     </StyledTableCell>
                   </StyledTableRow>
                 ))}
               </TableBody>
             </Table>
           </TableContainer>
         )}
       </>
     );
}

export default Sub_tesReport