// All portfolio content lives here. Edit this file, not the components.
export const profile = {
  name: 'Isravel R',
  location: 'Kumbakonam, Tamil Nadu, India',
  email: 'isravel2069@gmail.com',
  github: 'https://github.com/Isravel877', 
  linkedin: 'https://www.linkedin.com/in/isravel-r-445a31379',  
  resume: '/resume.pdf', // file lives in /public
}

export const sections = [
  ['home', 'Home'], ['about', 'About'], ['skills', 'Skills'],
  ['projects', 'Projects'], ['education', 'Education'], ['contact', 'Contact'],
]

export const skills = [
  { title: 'Programming and Core Concepts', items: ['Java', 'Object-Oriented Programming (OOP)', 'Full-stack application development'] },
  { title: 'Backend Development', items: ['Spring Boot', 'REST API development', 'JDBC', 'Spring Security'] },
  { title: 'Frontend Development', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
  { title: 'Database', items: ['MySQL', 'SQL queries', 'Database design', 'JPA', 'Hibernate'] },
  { title: 'Development Tools', items: ['Git', 'GitHub', 'Postman', 'Maven'] },
]

export const projects = [
  {
    title: 'DisasterConnect',
    summary: 'A Java full-stack disaster assistance and help-request management platform that connects people requesting assistance with helpers and administrators.',
    problem: 'When disaster strikes, help requests and available helpers are hard to match. This project organises requests, assignment and status in one place.',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'JPA / Hibernate', 'MySQL', 'React', 'HTML', 'CSS', 'JavaScript'],
    features: ['User roles for administrators, helpers and people requesting help', 'Help-request management', 'Request assignment and status tracking', 'React frontend connected to the backend REST APIs'],
    contributions: ['Relational database design in MySQL', 'REST API development with Java and Spring Boot', 'Entity relationships with Spring Data JPA and Hibernate', 'Role-based access planning for administrators, helpers and requesters'],
    challenges: [
      ['Modelling relationships between users, requests and assignments', 'Designed relational tables and mapped them with JPA and Hibernate.'],
      ['Keeping backend code organised', 'Separated controller, service and repository layers.'],
      ['Connecting the frontend to the backend', 'Integrated the React interface with the Spring Boot REST endpoints.'],
    ],
    repo: '', // TODO: GitHub repository URL
    demo: '', // TODO: live demo URL (leave empty if not deployed)
  },
  {
    title: 'E-Commerce Web Application',
    summary: 'A full-stack application for displaying products and giving users a simple online shopping experience.',
    stack: ['Spring Boot', 'React', 'MySQL', 'JPA / Hibernate'],
    points: ['Relational database design in MySQL', 'CRUD operations to create and retrieve data', 'Spring Data JPA and Hibernate for object-relational mapping'],
    repo: '',
    demo: '',
  },
]

export const education = {
  degree: 'B.Sc. Computer Science',
  school: 'Mass College of Arts and Science',
  years: '2023 to 2026',
  cert: 'Java Full Stack, Besant Technologies',
}

export const highlights = [
  'Java and Spring Boot development fundamentals',
  'REST API development and frontend-backend integration',
  'Relational database design and SQL',
  'Practical, hands-on project-building experience',
  'Willingness to learn, debug and improve through feedback',
]
