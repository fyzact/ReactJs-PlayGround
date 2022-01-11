import React from "react";
import {connect} from "react-redux"
import {loadCourses} from "../../redux/actions/courseActions"
import {loadAuthors} from "../../redux/actions/authorActions"
import PropTypes from "prop-types"; 


class ManageCoursesPage extends React.Component{

    componentDidMount(){
    const {courses, authors, loadCourses, loadAuthors}=this.props;

        if(courses.length===0 ){
            loadCourses();
        }

        if(authors.length===0){
            loadAuthors();
        }
       
    }
  render (){
      return (
          <>
          <h2>Manage Course</h2>
         
          </>
        )
    }
       
}
function mapStateToProps(state){
    return {
        courses: state.courses,
        authors:state.authors
    }
}

const mapDispatchToProps={
        loadCourses,
        loadAuthors
}
ManageCoursesPage.propTypes={
    courses:PropTypes.array.isRequired,
    authors:PropTypes.array.isRequired,
    loadCourses:PropTypes.func.isRequired,
    loadAuthors:PropTypes.func.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursesPage);