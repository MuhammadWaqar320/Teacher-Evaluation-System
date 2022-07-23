import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { getAllCourseFromDb } from "../../../api/courseApi";
import TableComponent from "../../../component/table/table";
const Sub_allCourse = () => {
     const [allCourseData, setallCourseData] = useState([]);
     const [loading, setLoading] = useState(true);
     const tableHeader = [
       "Id",
       "Course Code",
       "Course Name",
       "Credit Hours",
       "Course For Semester",
       "Teacher Id",
       "Teacher Name",
       "Edit",
       "Delete",
     ];
     const getAllCourse = async () => {
       const response = await getAllCourseFromDb();
       if (response.data) {
         setLoading(false);
       }
       if (response.success) {
         setallCourseData(response.data);
       }
     };
     useEffect(() => {
       getAllCourse();
     }, []);
     return (
       <>
         {loading ? (
           <div>Loading...</div>
         ) : (
           <TableComponent data={allCourseData} header={tableHeader} />
         )}
       </>
     ); 
    
          
        
    
}

export default Sub_allCourse