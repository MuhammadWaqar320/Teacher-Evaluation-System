import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { getAllTeacherFromDb } from "../../../api/teacherDashboardApi";
import TableComponent from "../../../component/table/table";
import { USER_TYPE } from '../../../utils/constant';
const Sub_allTeacher = () => {
   const [allTeacherData, setallTeacherData] = useState([]);
   const [loading, setLoading] = useState(true);
      const tableHeader = [
        "Id",
        "Name",
        "Father Name",
        "Phone No.",
        "Email",
        "Education",
        "Specialization",
      ];
   const getAllTeacher = async () => {
     const response = await getAllTeacherFromDb();
     if (response.data) {
       setLoading(false);
     }
     if (response.success) {
       setallTeacherData(response.data);
     }
   };
   useEffect(() => {
     getAllTeacher();
   }, []);
   return (
     <>
       {loading ? (
         <div>Loading...</div>
       ) : (
         <TableComponent data={allTeacherData} type={USER_TYPE.Teacher} header={tableHeader} />
       )}
     </>
   ); 
    
          
        
}

export default Sub_allTeacher