function SkillsForm({ skills, setSkills }) {
  const handleChange = (e) => {
    setSkills(e.target.value);
  };

  return (
    <div>
      <h2>Skills</h2>
      <label>Skills (comma-separated): </label>
      <input
        type="text"
        value={skills}
        onChange={handleChange}
        placeholder="e.g. JavaScript, React, MongoDB"
      />
    </div>
  );
}

export default SkillsForm;
