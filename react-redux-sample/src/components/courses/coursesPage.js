import React from "react";
import {connect} from "react-redux"
import * as courseActions from "../../redux/actions/courseActions"
import PropTypes from "prop-types"; 
import { bindActionCreators } from "redux";


class CoursesPage extends React.Component{
    componentDidMount(){
        this.props.courseActions.loadCourses();
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
      
          {this.props.courses.map(course=>(
                  <div key={course.title}>{course.title}</div>
              ))}
          </>
        )
    }
       
}
function mapStateToProps(state){
    return {
        courses:state.courses
    }
}

function mapDispatchToProps(dispatch){
    return {
        courseActions:bindActionCreators(courseActions,dispatch)
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