import React from 'react'


const Projects = () => {
  const projects = [
    {

      id: 1,
      title: 'Project 1',
      description: 'Body Goals App: A simple calorie tracking app',
      githubUrl: 'https://github.com/Just-Kundai/bodygoalsapprepo'
    },

    {
      id: 2,
      title: 'Project 2',
      description: 'Fill My Plate App: A simple app for calorie tracking',
      githubUrl: 'https://github.com/Just-Kundai/fill-my-plate'
    },
  ];

  return (
    <div>
       <h2>Projects</h2>

      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <img src={project.}
      ))}





    </div>
  )
}
