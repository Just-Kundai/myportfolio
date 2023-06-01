import React from 'react'


const Projects = () => {
  const projects = [
    {

      id: 1,
      title: 'Project 1',
      description: 'Body Goals App: A simple calorie tracking app',
      imageUrl: 'project1.png',
      githubUrl: 'https://github.com/Just-Kundai/bodygoalsapprepo'
    },

    {
      id: 2,
      title: 'Project 2',
      description: 'Fill My Plate App: A simple app for calorie tracking',
      imageUrl: 'project2.png',
      githubUrl: 'https://github.com/Just-Kundai/fill-my-plate'
    },
  ];

  return (
    <div>
       <h2>Projects</h2>

      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <img src={project.imageUrl} alt={project.title}/>
          <p>{project.description}</p>
          <div>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub Repository
          </a>

          </div>
        </div>
      ))}





    </div>
  )
}

export default Projects;
