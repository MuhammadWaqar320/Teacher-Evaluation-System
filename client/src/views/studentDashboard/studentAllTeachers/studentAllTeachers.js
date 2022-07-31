import React, { useState, useEffect } from "react";
import {
  getTeacherBySemesterApi,
  getStudentInfoById,
} from "../../../api/studentDashboardApi";
import "./studentAllTeachers.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FeedbackIcon from "@mui/icons-material/Feedback";
import RatingModal from "../ratingModal/ratingModal";
import swal from "sweetalert";
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
const StudentAllTeachers = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [ratingInfo, setRatingInfo] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = localStorage.getItem("id");
  const header = [
    "Teacher Id",
    "Name",
    "Email",
    "Phone No.",
    "specialization",
    "Qualification",
    "Rate Now",
  ];
  const getTeacherBySemester = async (Stu_semester) => {
    try {
      const dbResponse = await getTeacherBySemesterApi(Stu_semester);
      setData(dbResponse.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    const fun = async () => {
      const dbResponse = await getStudentInfoById(id);
      if (dbResponse.data.success) {
        getTeacherBySemester(dbResponse.data.data.semester);
      }
    };
    fun();
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearch(true);
    const searchData = data.filter((item) => item.Teacher.name === searchValue);
    if (searchData.length > 0) {
      setSearchedData(searchData);
    } else {
      setSearchedData([]);
    }
  };
  console.log(searchedData);
  return (
    <>
      <div className="row" style={{ padding: "10px 0px" }}>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search Teacher By Name"
              className="me-2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Search teacher by name"
              style={{ border: "1px solid #185047" }}
            />
            <Button style={{ background: "#185047" }} disabled={data.length>0?false:true} type="submit">
              Search
            </Button>
          </Form>
        </div>
        <div className="col-sm-4"></div>
      </div>
      {isSearch ? (
        searchedData.length > 0 ? (
          <TableContainer component={Paper}>
            <div>
              <h2 style={{ textAlign: "center" }}></h2>
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
                {searchedData.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" align="center" scope="row">
                      {row.Teacher.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Teacher.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Teacher.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Teacher.phone_No}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Teacher.specialization}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Teacher.education}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <span
                        role="button"
                        onClick={() => {
                          setShow(true);
                          setRatingInfo({
                            studentId: id,
                            teacherId: row.TeacherId,
                          });
                        }}
                      >
                        <FeedbackIcon />
                      </span>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          "No Teacher Found"
        )
      ) : data.length > 0 ? (
        <TableContainer component={Paper}>
          <div>
            <h2 style={{ textAlign: "center" }}></h2>
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
                    {row.Teacher.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Teacher.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Teacher.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Teacher.phone_No}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Teacher.specialization}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Teacher.education}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span
                      role="button"
                      onClick={() => {
                        setShow(true);
                        setRatingInfo({
                          studentId: id,
                          teacherId: row.TeacherId,
                        });
                      }}
                    >
                      <FeedbackIcon />
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        "No Data Found"
      )}

      {show ? (
        <RatingModal show={handleShow} hide={handleClose} data={ratingInfo} />
      ) : (
        ""
      )}
    </>
  );
};

export default StudentAllTeachers;
