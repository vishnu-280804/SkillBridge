import courses from "../../backend/lib/courses.js";
import React from "react";

import "../src/index.css";
const CourseSection = () => {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <div className="course-card-content">
            <h3 className="course-title">{course.name}</h3>
            <div className="course-image">
              <img src={course.img} alt="" />
            </div>
            <ul>
            <li>
            <p className="course-description">{course.para}</p></li></ul>
            <div className="course-btn">
            <button className="course-button">Learn More</button>
            <button className="course-button">{course.price}</button>
            </div>
          </div>
        </div>
      ))}
    <br />
    </div>
    
  );
};

export default CourseSection;
