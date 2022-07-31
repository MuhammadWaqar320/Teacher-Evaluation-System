import React from "react";
import "./studentDashboard.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import List from "@mui/material/List";
import StudentAllTeachers from "./studentAllTeachers/studentAllTeachers";
import StudentCourses from "./studentCourses/studentCourses";
import StudentEditProfile from "./studentEditProfile/studentEditProfile";
import StudentViewProfile from "./studentViewProfile/studentViewProfile";
import Slider from "../../component/slider/slider";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
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
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ListIcon from "@mui/icons-material/Summarize";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddToPhotosIcon from "@mui/icons-material/Addchart";

import { logOut } from "../../utils/utilsFunctions";
import ReportIcon from "@mui/icons-material/Report";
import RoutesName from "../../routes/routesName";
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

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [displayDashboard, setDisplayDashboard] = useState(true);
  const [displayViewProfile, setDisplayViewProfile] = useState(false);
  const [displayAllocatedCourse, setDisplayAllocatedCourse] = useState(false);
  const [displayEditProfile, setDisplayEditProfile] = useState(false);
  const [displayAllTeacher, setDisplayAllTeacher] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={ { background: "#185047" }}
      >
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
              <span className="title-class">TES Student Dashboard</span>
            </Link>
          </Typography>
          <Typography noWrap component="div" style={{ marginLeft: "auto" }}>
            Well Come{" "}
            <span style={{ color: "yellow" }}>
              {localStorage.getItem("user_name")}
            </span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
      >
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
                <span
                  role="button"
                  onClick={() => {
                    setDisplayDashboard(true);
                    setDisplayViewProfile(false);
                    setDisplayAllocatedCourse(false);
                    setDisplayEditProfile(false);

                    setDisplayAllTeacher(false);
                  }}
                >
                  <DashboardIcon />
                </span>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <span
                  role="button"
                  onClick={() => {
                    setDisplayDashboard(true);
                    setDisplayViewProfile(false);
                    setDisplayAllocatedCourse(false);
                    setDisplayEditProfile(false);

                    setDisplayAllTeacher(false);
                  }}
                >
                  Dashboard{" "}
                </span>
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
                <span
                  role="button"
                  onClick={() => {
                    setDisplayDashboard(false);
                    setDisplayViewProfile(true);
                    setDisplayAllocatedCourse(false);
                    setDisplayEditProfile(false);
                    setDisplayAllTeacher(false);
                  }}
                >
                  <ListIcon />
                </span>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <span
                  role="button"
                  onClick={() => {
                    setDisplayDashboard(false);
                    setDisplayViewProfile(true);
                    setDisplayAllocatedCourse(false);
                    setDisplayEditProfile(false);

                    setDisplayAllTeacher(false);
                  }}
                >
                  Rated Info{" "}
                </span>
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
                <span
                  role="button"
                  onClick={() => {
                    setDisplayDashboard(false);
                    setDisplayViewProfile(false);
                    setDisplayAllocatedCourse(true);
                    setDisplayEditProfile(false);
                    setDisplayAllTeacher(false);
                  }}
                >
                  <FormatListBulletedIcon />
                </span>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <span
                  role="button"
                  onClick={() => {
                    setDisplayDashboard(false);
                    setDisplayViewProfile(false);
                    setDisplayAllocatedCourse(true);
                    setDisplayEditProfile(false);
                    setDisplayAllTeacher(false);
                  }}
                >
                  Courses{" "}
                </span>
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
                <span
                  role="button"
                  onClick={() => {
                    setDisplayDashboard(false);
                    setDisplayViewProfile(false);
                    setDisplayAllocatedCourse(false);
                    setDisplayEditProfile(false);

                    setDisplayAllTeacher(true);
                  }}
                >
                  <ListAltIcon />
                </span>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <span
                  role="button"
                  onClick={() => {
                    setDisplayDashboard(false);
                    setDisplayViewProfile(false);
                    setDisplayAllocatedCourse(false);
                    setDisplayEditProfile(false);

                    setDisplayAllTeacher(true);
                  }}
                >
                  Teachers{" "}
                </span>{" "}
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
                <span
                  role="button"
                  onClick={() => {
                    setDisplayDashboard(false);
                    setDisplayViewProfile(false);
                    setDisplayAllocatedCourse(false);
                    setDisplayEditProfile(true);
                    setDisplayAllTeacher(false);
                  }}
                >
                  <ListIcon />
                </span>
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <span
                  role="button"
                  onClick={() => {
                    setDisplayDashboard(false);
                    setDisplayViewProfile(false);
                    setDisplayAllocatedCourse(false);
                    setDisplayEditProfile(true);
                    setDisplayAllTeacher(false);
                  }}
                >
                  Edit Profile{" "}
                </span>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          {/* logout */}
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
        {displayDashboard ? <Slider /> : ""}
        {displayAllocatedCourse ? <StudentCourses /> : ""}
        {displayEditProfile ? <StudentEditProfile /> : ""}
        {displayAllTeacher ? <StudentAllTeachers /> : ""}
        {displayViewProfile ? <StudentViewProfile  /> : ""}
      </Box>
    </Box>
  );
}
