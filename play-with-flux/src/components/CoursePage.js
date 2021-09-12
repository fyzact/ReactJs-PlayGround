import React, { useEffect, useState } from 'react'
import { getCourses } from "../api/courseApi";
import CourseList from "./Courselist";

function CoursesPage (){
    const [courses,setCourses]=useState([]);
    
    useEffect(()=>{
        getCourses().then(_courses=>setCourses(_courses));
    },[])

    return <>
    <h2>Courses</h2>
    <CourseList courses={courses} />
    </>

}

// class CoursesPage extends React.Component{

//     state={
//         courses:[]
//     };

//     componentDidMount(){
//            getCourses().then(courses=>this.setState({courses:courses}));
//     }
//     // constructor(props){
//     //     super(props);
//     //     this.state={
//     //         courses:[]
//     //     }

//     // }

//     renderRow(course){
//         return <tr key={course.id}>
//         <td>{course.title}</td>
//         <td>{course.authorId}</td>
//         <td>{course.category}</td>
//     </tr>
//     }
//     render(){
     
//     return     <>
// <h2>Courses</h2>
//       <table className="table">
//             <thead>
//                 <tr>
//                     <th>Title</th>
//                     <th>Autohr ID</th>
//                     <th>Category</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {this.state.courses.map(this.renderRow)}
//             </tbody>
//         </table>
//         </>
//     }
// }

export default CoursesPage;