import React from 'react'
import '../../index.css'
const CourseForm = ({addCourse, updateCourse,current}) => {
  return (
    <form onSubmit={addCourse}>
    <input type='text' placeholder='Enter Course...' onChange={updateCourse} value={current} />
    <button type='submit' >Add course</button>  
    </form>
  )
}

export default CourseForm
