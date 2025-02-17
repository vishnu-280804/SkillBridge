import courses from "../../backend/lib/courses.js";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../lib/CartContext.jsx";

import "../src/index.css";

const CourseSection = () => {
  const [addedCourses, setAddedCourses] = useState({}); 
  const { count, setCount } = useContext(CartContext);

  const handleValue = async (course) => {
    const isAdded = !addedCourses[course.name]; // Toggle state

    setAddedCourses((prev) => ({
      ...prev,
      [course.name]: isAdded,
    }));

    if (isAdded) {
      try {
        const response = await fetch("http://localhost:3000/cart/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: course.name,
            count: 1, // Set count to 1 on each click
            price: course.price,
          }),
        });

        if (!response.ok) throw new Error("Failed to add to cart");
        console.log("Course added to cart");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const totalAdded = Object.values(addedCourses).filter(Boolean).length;
    setCount(totalAdded);
  }, [addedCourses, setCount]);

  return (
    <div className="course-grid">
      {courses.map((course, index) => (
        <div key={index} className="course-card">
          <div className="course-card-content">
            <h3 className="course-title">{course.name}</h3>
            <div className="course-image">
              <img src={course.img} alt="" />
            </div>
            <ul>
              <li>
                <p className="course-description">{course.para}</p>
              </li>
            </ul>
            <div className="course-btn">
              <button
                className={`course-button ${addedCourses[course.name] ? "green" : ""}`}
                onClick={() => handleValue(course)}
              >
                {addedCourses[course.name] ? "Added" : "Add to Cart"}
              </button>
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
