
import React, { Component } from 'react'
import CourseForm from './components/CourseForm/CourseForm'
import CourseList from './components/CourseList/CourseList'
import './index.css'

export default class App extends Component {
  state={
    courses:[
      {name:'html'},
      {name:'css'},
      {name:'javascript'}
    ],
    current:'',
  }
  updateCourse=(e)=>
  {this.setState({
    current:e.target.value
  })

}
addCourse=(e)=>{
  e.preventDefault();

  const courses=this.state.courses;
  courses.push({name: this.state.current});
  this.setState({
    courses,
    current:' '
  });
  }
  
  deleteCourse=(index)=>{
    const courses=this.state.courses;
    courses.splice(index,1)
    this.setState({
      courses
    })
  }

  editCourse=(index,value)=>{
    const courses=this.state.courses;
    courses[index]['name']=value;
    this.setState({
      courses,
      current:''
    })

  }
  render() {
    
    const courses=this.state.courses.map((item,index)=>(<CourseList {...item} index={index} key={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}  />))
    return (
      <div className="App">
      <h2>Add course</h2>
      <CourseForm addCourse={this.addCourse} updateCourse={this.updateCourse} current={this.state.current}/>
      <ul>{courses}</ul>
    </div>
    )
  }
}
