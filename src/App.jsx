import { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import SkillsForm from './components/SkillsForm';
import ProjectsForm from './components/ProjectsForm';

function App() {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ school: '', degree: '', year: '' });
  const [experience, setExperience] = useState({ company: '', role: '', duration: '' });
  const [skills, setSkills] = useState('');
  const [projects, setProjects] = useState({ title: '', description: '', link: '' });
  const[step,setStep]=useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Personal Info:', personalInfo);
    console.log('Education:', education);
    console.log('Experience:', experience);
    console.log('Skills:', skills);
    console.log('Projects:', projects);
  };

  const renderStep=()=>{
    switch(step){
      case 1:
        return <PersonalInfoForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />;
      case 2:
        return <EducationForm education={education} setEducation={setEducation} />;
      case 3:
        return <ExperienceForm experience={experience} setExperience={setExperience} />;
      case 4:
        return <SkillsForm skills={skills} setSkills={setSkills} />;
      case 5:
        return <ProjectsForm projects={projects} setProjects={setProjects} />;
      default:
        return <div>All steps completed.</div>;
    }
  };

  return (
    <div>
      <h1>Resume Builder</h1>

      <form onSubmit={handleSubmit}>
        {renderStep()}

        <div>
          {step > 1 && (
            <button type="button" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}

          {step < 5 && (
            <button type="button" onClick={() => setStep(step + 1)}>
              Next
            </button>
          )}

          {step === 5 && (
            <button type="submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App
