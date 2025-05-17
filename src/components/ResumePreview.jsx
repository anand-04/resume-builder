function ResumePreview({personalInfo,education,experience,skills,projects}){
    return(
        <div>
            <h1>{personalInfo.name}</h1>
            <p>{personalInfo.email}  |  {personalInfo.phone}</p>
            <hr />

            <h2>Education</h2>
            <p><strong>{education.degree}</strong> at {education.school}({education.year})</p>
            
            <h2>Experience</h2>
            <p><strong>{experience.position}</strong> at {experience.company}</p>
            <p>{experience.duration}</p>

            <h2>Projects</h2>
            <p><strong>{projects.title}</strong>:{projects.description}</p>
            
            <h2>Skills</h2>
            <ul>
                {skills.split(',').map((skill, index) => (
                <li key={index}>{skill.trim()}</li>
                ))}
            </ul>
        </div>
    );
}
export default ResumePreview