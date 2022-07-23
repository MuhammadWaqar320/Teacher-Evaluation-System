const RoutesName = {
  login: {
    route: "",
  },
  homePage: {
    route: "/",
  },
  AboutUs: {
    route: "/about",
  },
  ContactUs: {
    route: "/contact",
  },
  Register: {
    route: "/register",
  },
  StudentDashboard: {
    route: "/student/dashboard",
  },
  TeacherDashboard: {
    route: "/teacher/dashboard",
  },
  AdminDashboard: {
    route: "/admin/dashboard",
    subRoute: {
      AllStudent: { route: "/admin/allstudent" },
      AllTeacher: { route: "/admin/allteacher" },
      AllCourse: { route: "/admin/allcourse" },
      AddNewCourse: { route: "/admin/addnewcourse" },
      AddNewStudent: { route: "/admin/addnewstudent" },
      TesReport: { route: "/admin/resreport" },
      OverAllReport:{route:"/admin/overallreport"}
    },
  },
};
export default RoutesName;
