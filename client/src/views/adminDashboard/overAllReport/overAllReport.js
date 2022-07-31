import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import List from "@mui/material/List";
import { logOut } from "../../../utils/utilsFunctions";
import LogoutIcon from "@mui/icons-material/Logout";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import {
  calculateAvgRating,
  removeDoubleValues,
} from "../../../utils/utilsFunctions";
import Divider from "@mui/material/Divider";
import SummarizeIcon from "@mui/icons-material/Summarize";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useEffect, useState } from "react";
import { getOverRatingReporting } from "../../../api/adminDashboardApi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { deleteRating } from "../../../api/adminDashboardApi";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ListIcon from "@mui/icons-material/Summarize";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddToPhotosIcon from "@mui/icons-material/Addchart";
import ReportIcon from "@mui/icons-material/Report";
import RoutesName from "../../../routes/routesName";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
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
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const deleteRecord = async (id) => {
    try {
      const dbResponse = await deleteRating(id);
      if (dbResponse.data.success) {
        swal({
          title: "Congratulation",
          text: "Record has been deleted",
          icon: "success",
        }).then(() => {
          window.location.href = "/admin/overallreport";
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
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [ratingData, setRatingData] = useState([]);
  const header = [
    "Teacher Id",
    "Teacher Name",
    "Teacher Email",
    "Specialization",
    "Average Rating",
    "Delete",
  ];

  const getOverAllRatingDetail = async () => {
    try {
      const response = await getOverRatingReporting();
      if (response.success) {
        setRatingData(removeDoubleValues(response.data));
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getOverAllRatingDetail();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: "#185047" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <img src={logo} width="75px" height="50px"></img>
              <span className="title-class">TES Admin Dashboard</span>
            </Link>
          </Typography>
          <Typography noWrap component="div" style={{ marginLeft: "auto" }}>
            Well Come {localStorage.getItem("user_name")}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/*dashboard  */}
          <ListItem
            disablePadding
            sx={{ display: "block", borderBottom: "1px solid silver" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={RoutesName.AdminDashboard.route}
                  style={{ textDecoration: "none", color: "#525252" }}
                >
                  <DashboardIcon />
                </Link>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Link
                  to={RoutesName.AdminDashboard.route}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Dashboard{" "}
                </Link>{" "}
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* all student list */}
          <ListItem
            disablePadding
            sx={{ display: "block", borderBottom: "1px solid silver" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={RoutesName.AdminDashboard.subRoute.AllStudent.route}
                  style={{ textDecoration: "none", color: "#525252" }}
                >
                  <FormatListBulletedIcon />
                </Link>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Link
                  to={RoutesName.AdminDashboard.subRoute.AllStudent.route}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  All Student{" "}
                </Link>{" "}
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* all teachers list */}
          <ListItem
            disablePadding
            sx={{ display: "block", borderBottom: "1px solid silver" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={RoutesName.AdminDashboard.subRoute.AllTeacher.route}
                  style={{ textDecoration: "none", color: "#525252" }}
                >
                  <ListAltIcon />
                </Link>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Link
                  to={RoutesName.AdminDashboard.subRoute.AllTeacher.route}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  All Teachers{" "}
                </Link>{" "}
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* all courses/subject list */}
          <ListItem
            disablePadding
            sx={{ display: "block", borderBottom: "1px solid silver" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={RoutesName.AdminDashboard.subRoute.AllCourse.route}
                  style={{ textDecoration: "none", color: "#525252" }}
                >
                  <ListIcon />
                </Link>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Link
                  to={RoutesName.AdminDashboard.subRoute.AllCourse.route}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  All Courses{" "}
                </Link>{" "}
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* add new course */}
          <ListItem
            disablePadding
            sx={{ display: "block", borderBottom: "1px solid silver" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={RoutesName.AdminDashboard.subRoute.AddNewCourse.route}
                  style={{ textDecoration: "none", color: "#525252" }}
                >
                  <AddBoxIcon />
                </Link>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Link
                  to={RoutesName.AdminDashboard.subRoute.AddNewCourse.route}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Add New Course{" "}
                </Link>{" "}
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* add new teacher */}
          <ListItem
            disablePadding
            sx={{ display: "block", borderBottom: "1px solid silver" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={RoutesName.AdminDashboard.subRoute.AddNewStudent.route}
                  style={{ textDecoration: "none", color: "#525252" }}
                >
                  <AddToPhotosIcon />
                </Link>
              </ListItemIcon>

              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Link
                  to={RoutesName.AdminDashboard.subRoute.AddNewStudent.route}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Add New Student{" "}
                </Link>{" "}
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* teacher evalution report */}
          <ListItem
            disablePadding
            sx={{ display: "block", borderBottom: "1px solid silver" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={RoutesName.AdminDashboard.subRoute.TesReport.route}
                  style={{ textDecoration: "none", color: "#525252" }}
                >
                  <ReportIcon />
                </Link>
              </ListItemIcon>

              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Link
                  to={RoutesName.AdminDashboard.subRoute.TesReport.route}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  TES Report{" "}
                </Link>{" "}
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* overall report */}
          <ListItem
            disablePadding
            sx={{ display: "block", borderBottom: "1px solid silver" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={RoutesName.AdminDashboard.subRoute.OverAllReport.route}
                  style={{ textDecoration: "none", color: "#525252" }}
                >
                  <SummarizeIcon />
                </Link>
              </ListItemIcon>

              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Link
                  to={RoutesName.AdminDashboard.subRoute.OverAllReport.route}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  OverAll Report{" "}
                </Link>{" "}
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block", borderBottom: "1px solid silver" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <span role="button" onClick={logOut}>
                  <Link to="/" onClick={logOut} style={{ color: "black" }}>
                    <LogoutIcon />
                  </Link>
                </span>
              </ListItemIcon>

              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Link
                  to="/"
                  onClick={logOut}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Logout{" "}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>
              <h2 style={{ textAlign: "center" }}>Average Rating Report</h2>
            </div>
            {ratingData.length > 0 ? (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      {header.map((item) => (
                        <StyledTableCell align="center">
                          {item}{" "}
                        </StyledTableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ratingData.map((row) => (
                      <StyledTableRow key={row.Teacher.id}>
                        <StyledTableCell
                          align="center"
                          component="th"
                          scope="row"
                        >
                          {row.Teacher.id}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.Teacher.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.Teacher.email}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.Teacher.specialization}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {calculateAvgRating(row.Teacher.id, ratingData)}{" "}
                          <StarPurple500Icon
                            fontSize="14px"
                            style={{ marginBottom: "3px", color: "red" }}
                          />
                        </StyledTableCell>

                        <StyledTableCell align="center">
                          <span
                            role="button"
                            onClick={() => deleteRecord(row.id)}
                          >
                            <DeleteIcon />
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
          </div>
        )}
      </Box>
    </Box>
  );
}
