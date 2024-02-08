function SearchFilter({ setSearchTerm }) {
  return (
    <div className="container mt-5">
      <input
        type="text"
        name="search-filter"
        className="form-control text-muted py-3"
        placeholder="Search by Name or Position.."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchFilter;
