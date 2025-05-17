function ProjectsForm({ projects, setProjects }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjects({ ...projects, [name]: value });
  };

  return (
    <div>
      <h2>Projects</h2>
      <label>Title: </label>
      <input type="text" name="title" value={projects.title} onChange={handleChange} />
      <br /><br />
      <label>Description: </label>
      <textarea name="description" value={projects.description} onChange={handleChange} />
      <br /><br />
      <label>Link: </label>
      <input type="text" name="link" value={projects.link} onChange={handleChange} />
    </div>
  );
}

export default ProjectsForm;
