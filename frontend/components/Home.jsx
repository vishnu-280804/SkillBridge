import React from 'react'
import HeroSection from './HeroSection.jsx'
import CourseSection from './CourseSection.jsx';
import Connect from './Connect.jsx';
import Design from './Design.jsx';
const Home = () => {
  return (
    <div>
      <HeroSection />
      <CourseSection />
      <Design />
      <Connect />
    </div>
  )
}

export default Home;