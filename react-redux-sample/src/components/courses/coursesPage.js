import React from "react";
import {connect} from "react-redux"
import * as courseActions from "../../redux/actions/courseActions"
import PropTypes from "prop-types"; 



class CoursesPage extends React.Component{
    // constructor(props){
    //     super(props)

        state={
            course:{
                title:""
            }
        }

    //     this.handleChange=this.handleChange.bind(this); You must di that when your handle method is classic funtion
    // }
    // handleChange(event){
    //     const course={...this.state.course, title:event.target.value};
    //     this.setState({course:course});

    // }

    handleChange=event=>{
             const course={...this.state.course, title:event.target.value};
             this.setState({course:course});
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }
  render (){
      return (<form onSubmit={this.handleSubmit}>
          <h2>Courses page</h2>
          <h3>Ad Course</h3>
          <input type="text" onChange={this.handleChange}  value={this.state.course.title} /> 
          <input type="submit" value="save"/>
          {
              this.props.courses.map(course=>(
                  <div key={course.title}>{course.title}</div>
              ))
          }
          </form> )
  }
}
function mapStateToProps(state){
    return {
        courses:state.courses
    }
}
CoursesPage.propTypes={
    dispatch:PropTypes.func.isRequired,
    courses:PropTypes.array.isRequired
}
export default connect(mapStateToProps)(CoursesPage);