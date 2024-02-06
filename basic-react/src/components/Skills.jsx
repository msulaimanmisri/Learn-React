function Skills() {
  const skills = ["PHP", "laravel", "Vue"];

  return (
    <div className="container mt-5">
      <h4>This is my stack</h4>
      <div className="row">
        {skills.map((skill) => (
          <div className="col">
            <div className="card card-body">
              <span className="form-text">{skill.toUpperCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
