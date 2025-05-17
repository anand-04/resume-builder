import { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import SkillsForm from './components/SkillsForm';
import ProjectsForm from './components/ProjectsForm';
import ResumePreview from './components/ResumePreview';

function App() {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ school: '', degree: '', year: '' });
  const [experience, setExperience] = useState({ company: '', role: '', duration: '' });
  const [skills, setSkills] = useState('');
  const [projects, setProjects] = useState({ title: '', description: '', link: '' });
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Personal Info:', personalInfo);
    console.log('Education:', education);
    console.log('Experience:', experience);
    console.log('Skills:', skills);
    console.log('Projects:', projects);
    setStep(6); // Go to resume preview after submitting step 5
  };

  const renderStep = () => {
    switch (step) {
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
      case 6:
        return (
          <ResumePreview
            personalInfo={personalInfo}
            education={education}
            experience={experience}
            skills={skills}
            projects={projects}
          />
        );
      default:
        return <div>Invalid Step</div>;
    }
  };

  return (
    <div>
      <h1>Resume Builder</h1>

      {/* Only wrap form steps (1–5) inside the form tag */}
      {step <= 5 ? (
        <form onSubmit={handleSubmit}>
          {renderStep()}

          <div style={{ marginTop: '20px' }}>
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
      ) : (
        <>
          {renderStep()}
          <div style={{ marginTop: '20px' }}>
            <button onClick={() => setStep(1)}>Edit Info</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
