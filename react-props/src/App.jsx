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
        <Card name="Sulaiman" salary="RM 142,000" isPermenant={true} />
        <Card name="Akhimullah" salary="RM 39,000" isPermenant={true} />
        <Card name="Ikhwan" salary="RM 60,000" isPermenant={false} />
      </div>
    </>
  );
}

export default App;
