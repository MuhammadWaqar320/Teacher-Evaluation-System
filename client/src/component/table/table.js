import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { editUser, deleteUser } from "../../api/adminDashboardApi";

import { USER_TYPE } from "../../utils/constant";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import EditIcon from "@mui/icons-material/Edit";
import EditCourse from "../../views/adminDashboard/allCourse/editCourse";
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

const TableComponent = ({ data, header, type }) => {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [courseObject, setCourseObject] = React.useState("");
  const handleEditCourseModal=(course)=>{
    setModalShow1(true);
    setCourseObject(course);
  }
  const deleteRecord = async (id) => {
    try {
      const dbResponse = await deleteUser(id);
      if (dbResponse.data.success) {
        swal({
          title: "Congratulation",
          text: "Course has been deleted",
          icon: "success",
        }).then(() => {
          window.location.href = "/admin/allcourse";
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

  if (type === USER_TYPE.Student) {
    return (
      <>
        <div>
          <h4>Total Students :{data.length}</h4>{" "}
        </div>
        <TableContainer component={Paper}>
          <div>
            <h2 style={{ textAlign: "center" }}>Students Record</h2>
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
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">{row.cnic}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.father_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.phone_No}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.department}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.semester}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  } else if (type === USER_TYPE.Teacher) {
    return (
      <>
        <div>
          <h4>Total Teachers :{data.length}</h4>{" "}
        </div>

        <TableContainer component={Paper}>
          <div>
            <h2 style={{ textAlign: "center" }}>Teachers Record</h2>
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
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.father_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.phone_No}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.education}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.specialization}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h4>Total Courses :{data.length}</h4>{" "}
        </div>
        <TableContainer component={Paper}>
          <div>
            <h2 style={{ textAlign: "center" }}>Courses Record</h2>
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
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.course_code}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.course_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.credit_hours}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.courseForWhichSemester}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.TeacherId}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Teacher.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span
                      role="button"
                      onClick={() => handleEditCourseModal(row)}
                    >
                      <EditIcon />
                    </span>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span role="button" onClick={() => deleteRecord(row.id)}>
                      <DeleteIcon />
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {modalShow1 ? (
          <EditCourse
            show={modalShow1}
            onHide={() => setModalShow1(false)}
            course={courseObject}
          />
        ) : (
          ""
        )}
      </>
    );
  }
};
export default TableComponent;
