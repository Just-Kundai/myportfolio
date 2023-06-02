  import React from 'react';

  const Resume = () => {
    const resumeData = {
      name: 'Kundai Khuleya',
      title: 'Junior Frontend Developer',
      contact: {
        email: 'kundaikhuleya@outlook.com',

      },
      skills: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
      experience: [
        {
          id: 1,
          title: 'Developer Intern',
          company: 'IAG',
          fromDate:'2022',
          toDate: 'PRESENT'
        },
      ],
    };

    return (
    <div>
      <h2> Resume </h2>
      <h3>{resumeData.name}</h3>
      <p>{resumeData.title}</p>


      <div>
      <h4>Contact</h4>
      <p>Email: {resumeData.contact.email}</p>
      </div>

      <div>
      <h4>Skills</h4>
      <ul>
      {
        resumeData.skills.map((skill, index) => (<li key={index}>{skill}</li>))
      }
      </ul>
      </div>

      <div>
      <h4>Experience</h4>
      {resumeData.experience.map((experience)=> (
        <div key={experience.id}>
        <h5>{experience.title}</h5>
        <p>{experience.company}</p>
        <p>{experience.fromDate} - {experience.toDate}</p>
        </div>
      ))}

      </div>



    </div>

    )
  }


  export default Resume;
