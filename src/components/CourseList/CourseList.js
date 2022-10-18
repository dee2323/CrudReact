import React, { Component } from 'react';
import '../../index.css'

export default class CourseList extends Component {
  state={
    isEdit:false,
  }
renderCourse=()=> <li >
  <span>{this.props.name}</span>
  <button onClick={this.toggleRender}>Edit course</button>
  <button onClick={()=> this.props.deleteCourse(this.props.index)}>Delete course</button>
  
  </li>

  toggleRender=()=>{
    const edit=this.state.isEdit;
    this.setState({
      isEdit:!edit,
    })
  }
updateHandle=(e)=>{
  e.preventDefault();
  this.props.editCourse(this.props.index,this.input.value)
  this.toggleRender();
}
renderUpdate=()=>{
  return <form onSubmit={this.updateHandle}>
  <input type='text' defaultValue={this.props.name} ref={(v)=>this.input=v} />
  <button type='submit'>Update course</button>
  </form>
}
  render() {
    return (
       this.state.isEdit ? this.renderUpdate(): this.renderCourse()
    )
  }
}
