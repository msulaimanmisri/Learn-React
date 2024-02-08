function Card() {
  var teams = [
    {
      name: "Sulaiman",
      position: "Lead Engineer",
      default_image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Zulfahami",
      position: "WordPress Engineer",
      default_image: "https://picsum.photos/150?random=2",
    },
    {
      name: "Israa",
      position: "Mobile Engineer",
      default_image: "https://picsum.photos/150?random=3",
    },
    {
      name: "Iqmal",
      position: "Software Engineer",
      default_image: "https://picsum.photos/150?random=4",
    },
    {
      name: "Nazhan",
      position: "Kintone Engineer",
      default_image: "https://picsum.photos/150?random=5",
    },
    {
      name: "Amir",
      position: "UIX Engineer",
      default_image: "https://picsum.photos/150?random=6",
    },
  ];

  return (
    <>
      <div className="container my-5">
        <div className="my-4">
          <h1 className="display-3">
            AsiaQuest <span className="fw-bold">Malaysia</span>
          </h1>
          <span className="lead">Engineering Team</span>
        </div>

        <div className="row">
          {teams.map((team) => (
            <div className="col-4 mb-4">
              <div className="card card-body rounded-4 border-0 shadow-sm p-4">
                <img
                  src={team.default_image}
                  className="img-fluid rounded-circle mb-3"
                  alt=""
                  width="100"
                />
                <h3>{team.name}</h3>
                <span>{team.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
