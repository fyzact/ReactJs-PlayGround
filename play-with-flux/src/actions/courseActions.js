import dispatcher from '../appDispatcher'
import actionTypes from './actionTypes'
export function saveCourse(course){
    //Het dispacther, go tell all the stores that a cource was just created
  dispatcher.dispatch({
    actionType:actionTypes.CREATE_COURSE,
    course:course
  });
}

export function loadCourses(){
    const defaultCourses=["Defaul course 1", "Default course 2", "Default Course3"];
    dispatcher.dispatch({
        actionType:actionTypes.LOAD_COURSE,
        courses:defaultCourses
    });
}