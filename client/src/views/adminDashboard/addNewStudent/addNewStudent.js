import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import SummarizeIcon from "@mui/icons-material/Summarize";
import CssBaseline from "@mui/material/CssBaseline";
import LogoutIcon from "@mui/icons-material/Logout";
import { logOut } from "../../../utils/utilsFunctions";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ListAltIcon from "@mui/icons-material/ListAlt";
import RoutesName from "../../../routes/routesName";
import ListIcon from "@mui/icons-material/Summarize";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddToPhotosIcon from "@mui/icons-material/Addchart";
import ReportIcon from "@mui/icons-material/Report";
import Sub_addNewStudent from "./sub_addNewStudent";
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

export default function AddNewStudent() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        <Sub_addNewStudent />
      </Box>
    </Box>
  );
}
