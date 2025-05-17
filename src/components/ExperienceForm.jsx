function ExperienceForm({ experience, setExperience }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  return (
    <div>
      <h2>Experience</h2>
      <label>Company: </label>
      <input type="text" name="company" value={experience.company} onChange={handleChange} />
      <br /><br />
      <label>Role: </label>
      <input type="text" name="role" value={experience.role} onChange={handleChange} />
      <br /><br />
      <label>Duration: </label>
      <input type="text" name="duration" value={experience.duration} onChange={handleChange} />
    </div>
  );
}

export default ExperienceForm;
