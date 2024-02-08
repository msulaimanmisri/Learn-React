import Card from "./components/Card";

/**
 * Props menggunakan Key-Value pair.
 * Therefore, perlu gunakan key="value"
 * @rujuk Card.jsx
 */
function App() {
  return (
    <>
      <div className="container my-5">
        <Card name="Sulaiman" salary={1500} isPermenant={true} />
        <Card name="Akhimullah" salary={3000} isPermenant={true} />
        <Card name="Ikhwan" salary={3000} isPermenant={false} />
        <Card />
      </div>
    </>
  );
}

export default App;
