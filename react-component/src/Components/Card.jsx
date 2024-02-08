import React from "react";

function Card({ searchTerm }) {
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

  // Filter teams based on search term
  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container my-4">
        <div className="row">
          {filteredTeams.map((team, index) => (
            <div className="col-4 mb-4" key={index}>
              <div className="card card-body rounded-4 border-0 shadow-sm p-4">
                <img
                  src={team.default_image}
                  alt={team.name}
                  className="rounded-circle mb-3"
                  width={150}
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
