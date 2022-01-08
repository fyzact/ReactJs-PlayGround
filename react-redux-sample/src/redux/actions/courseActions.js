import * as actionTypes from "./actionTypes"
import * as courseApi from "../../api/courseApi"
export function createCourse(course){
    return {
        type:actionTypes.CREATE_COURSE,
        course
    }
}
export function loadCoursesSuccess(courses){
    return {
        type:actionTypes.LOAD_COURSES_SUCCESS,
        courses
    }
}

export function loadCourses(){
    return function(dispatch){
        courseApi.getCourses().then(courses=> dispatch(loadCoursesSuccess(courses))).catch(error=>console.log(error));
    }
}