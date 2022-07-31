import React, { useState, useEffect } from "react";
import "./studentViewProfile.css";
import {
  getStudentRatingInformation,
  deleteRatingRecord,
} from "../../../api/studentDashboardApi";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import EditIcon from "@mui/icons-material/Edit";
import EditRatingModal from "./editRating";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import RoutesName from "../../../routes/routesName";
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
const StudentViewProfile = ({ hide, show }) => {
  const id = localStorage.getItem("id");
  const [showModal, setShowModal] = useState(false);
  const [ratingObj, setRatingObj] = useState({});
  const header = [
    "Teacher Id",
    "Name",
    "Feedback",
    "Rating",
    "Type Of Rating",
    "Edit",
    "Delete",
  ];
  const deleteRecord = async (s_id, t_id) => {
    try {
      const dbResponse = await deleteRatingRecord(s_id, t_id);
      if (dbResponse.data.success) {
        swal({
          title: "Congratulation",
          text: "Rating has deleted",
          icon: "success",
        }).then(() => {
          window.location.href = "/student/dashboard";
          // hide();
          // show();
        });
      } else {
        swal({
          title: "Sorry",
          text: "Something is wrong try later",
          icon: "error",
          dangerMode: true,
        });
      }
    } catch (error) {
      swal({
        title: "Sorry",
        text: "Something is wrong try later",
        icon: "error",
        dangerMode: true,
      });
    }
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const fun = async () => {
      const dbResponse = await getStudentRatingInformation(id);

      if (dbResponse.data.success) {
        setData(dbResponse.data.data);
      }
    };
    fun();
  }, []);
  const handleRateEditModal = (data) => {
    setShowModal(true);
    setRatingObj(data);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <div>
          <h2 style={{ textAlign: "center" }}>Rating Information</h2>
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
                  {row.Teacher.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.Teacher.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.feedback}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.no_of_star}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.type_of_feedback}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <span
                    role="button"
                    onClick={() => {
                      handleRateEditModal(row);
                    }}
                  >
                    <EditIcon />
                  </span>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <span
                    role="button"
                    onClick={() => deleteRecord(row.StudentId, row.TeacherId)}
                  >
                    <DeleteIcon />
                  </span>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showModal ? (
        <EditRatingModal
          show={showModal}
          hide={ () => { setShowModal(false) } }
          data={ratingObj}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default StudentViewProfile;
