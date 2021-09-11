import logo from './logo.svg';
import './App.css';
import store from "./stores/courseStore"
import  * as  courseAction from './actions/courseActions'
import React, {useEffect,useState} from 'react'
function App() {
const [courses, setCourses ]=useState(store.getCourses());



useEffect(()=>{
  store.addChangeListener(onChange);
  if(store.getCourses().length===0) courseAction.loadCourses();
  return ()=>store.removeChangeListener(onchange);
}, []);

const onChange=()=>{

  setCourses([...store.getCourses()]);
}

const addCourse=()=>{
  courseAction.saveCourse("new Course");
  // setCourses([...store.getCourses()]);

};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {courses.map((item,i)=><WriteCourse key={i}  value={item} />)}
      
        <button type="button" onClick={addCourse}>Add Couse</button>
      </header>
     
     
    </div>
  );
}

const WriteCourse=(props)=>{
  return (

    <div style={{width:"80%", float:"left"}}>  {props.value}</div>  
  )

}

export default App;
