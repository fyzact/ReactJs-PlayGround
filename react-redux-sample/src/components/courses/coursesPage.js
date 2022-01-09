import React from "react";
import {connect} from "react-redux"
import * as courseActions from "../../redux/actions/courseActions"
import * as authorActions from "../../redux/actions/authorActions"
import PropTypes from "prop-types"; 
import { bindActionCreators } from "redux";
import CourseList from "./courseList";


class CoursesPage extends React.Component{
    componentDidMount(){

        if(this.props.courses.length===0 ){
            this.props.courseActions.loadCourses();
            this.props.authorActions.loadAuthors();
        }
       
    }
    // constructor(props){
    //     super(props)


    //     this.handleChange=this.handleChange.bind(this); You must di that when your handle method is classic funtion
    // }
    // handleChange(event){
    //     const course={...this.state.course, title:event.target.value};
    //     this.setState({course:course});

    // }

  render (){
      return (
          <>
          <h2>Courses page</h2>
        <CourseList courses={this.props.courses} ></CourseList>
         
          </>
        )
    }
       
}
function mapStateToProps(state){
    return {
        courses:state.authors.length===0?[]: state.courses.map(course=>{
            return {
                ...course,
                authorName:state.authors.find(p=>p.id==course.authorId).name
            }
        }),
         authors:state.authors
    }
}

function mapDispatchToProps(dispatch){
    return {
        courseActions:bindActionCreators(courseActions,dispatch),
        authorActions:bindActionCreators(authorActions,dispatch)
        // create_Course:bindActionCreators(courseActions.createCourse,dispatch)
        // create_Course:course=>dispatch(courseActions.createCourse(course))
    }
}
CoursesPage.propTypes={
    // create_Course:PropTypes.func.isRequired,
    courses:PropTypes.array.isRequired,
    courseActions:PropTypes.object.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);