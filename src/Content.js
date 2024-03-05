import React from 'react';
import { FaGithub } from "react-icons/fa";
import './Content.css'; // Import CSS file for styling

const Content = () => {

  const PDF = "/Aslam_Resume.pdf"; // Updated PDF path
  const hvpoGitHubUrl = "https://github.com/aslam347/HVPO";
  const todoGitHubUrl = "https://github.com/aslam347/TO-DO-LIST";

  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(blob);
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", "Aslam_Resume.pdf");
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
      });
  }

  return (
    <>
      <content>
        <h1 className="title">FrontEnd Developer</h1>
      </content>
      <div className="navigation-bar">
        <ul className="nav-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#experience">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>

      <div className='button-container'>
        <button className="resume-button" onClick={() => { downloadFileAtURL(PDF) }}>
          Download Resume !
        </button>
      </div>

      <div className='about' id="about">
        <h2 className="topic">Get To Know More</h2>
        <h1>About Me</h1>
        <p className='about-me-para'>A Software Engineer with highly motivated software skills, looks something challenging and creative.
          <br />Seeking a position in an organization for utilizing engineering, innovative skills and
          <br />experiences gained through relevant education and
          projects to contribute to the ongoing success of an organization</p>
      </div>

      <div className="education">
        <h1>Education</h1>
        <h2>B.E Computer Science And Engineering</h2>
        <p>College: K Ramakrishnan College Of Technology</p>
        <p>Time Period: 2019 – 2023, CGPA: 7.50</p>
      </div>

      <br />

      <div className="skillshead" id="experience">
        <h2>Explore My Skills</h2>
      </div>
      <div className="outside">
        <div className="tickerwrapper" >
          <ul className='list' >
            <li className='listitem' >
              <span> <span>&#8226;</span>HTML</span>
            </li>
            <li className='listitem' >
              <span><span>&#8226;</span> CSS</span>
            </li>
            <li className='listitem'>
              <span><span>&#8226;</span> JAVASCRIPT</span>
            </li>
            <li className='listitem'>
              <span><span>&#8226;</span> REACT</span>
            </li>
            <li className='listitem'>
              <span><span>&#8226;</span> BOOTSTRAP</span>
            </li>
            <li className='listitem'>
              <span> <span>&#8226;</span>TAILWIND CSS</span>
            </li>
            <li className='listitem'>
              <span><span>&#8226;</span> GIT HUB</span>
            </li> 
            <li className='listitem'>
              <span><span>&#8226;</span> JAVA</span>
            </li>
            <li className='listitem'>
              <span><span>&#8226;</span> MY SQL</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="projects" id="projects">
        <h2 className="topic">Browse My Recent Projects</h2>
        <div>
          <div>
            <h4>HVPO</h4>
            <a href={hvpoGitHubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub
                className="hvpo button"
                role="button"
                tabIndex="0"
              />
            </a>
          </div>
          <div>
            <h4>TO DO LIST</h4>
            <a href={todoGitHubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub
                className="todobutton"
                role="button"
                tabIndex="0"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <h2>Get In Touch Contact Me</h2>
        <div>
          <h4><a href="mailto:aslamthanjavur10@gmail.com">aslamthanjavur10@gmail.com</a></h4>
          <h4><a href="tel:6379145691">6379145691</a></h4>
        </div>
      </div>

      <div className="footer">
        <p>Copyright &#169; 2024 Mohamed Aslam. All rights reserved.</p>
      </div>
    </>
  )
}

export default Content;
