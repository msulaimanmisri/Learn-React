function Hero(props) {
  return (
    <div className="container my-5">
      {props.isLoggedIn ? (
        <>
          <h1 className="display-3 text-success"> Welcome, {props.username}</h1>

          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2ppeTNzeGcyNWhqbXZtMm94NGx4NXp3MTl0c3p1MW92a2VsMTNoaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mlvseq9yvZhba/giphy.gif"
            alt=""
            className="mt-4 img-fluid"
            width="500px"
          />
        </>
      ) : (
        <h1 className="text-bolder text-danger">
          You need to login first to continuer
        </h1>
      )}
    </div>
  );
}
export default Hero;
