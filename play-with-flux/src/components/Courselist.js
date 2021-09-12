import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
function CourseList(props){
    function   renderRow(course){
        return <tr key={course.id}>
        <td><Link to={"course/"+course.slug} >{course.title}</Link> </td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
    </tr>
    }

    return (<>
        <table className="table">
             <thead>
                <tr>
                   <th>Title</th>
                    <th>Autohr ID</th>
                   <th>Category</th>
               </tr>
          </thead>
           <tbody>
               {props.courses.map(renderRow)}
           </tbody>
       </table>
    </>)

}

CourseList.propTypes={
    courses:PropTypes.array.isRequired
}
// CourseList.defaultProps={
//     courses:[]
// }

export default CourseList;