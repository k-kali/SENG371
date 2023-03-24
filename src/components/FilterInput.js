
export function FilterInput({ column }) {
    const { filterValue, setFilter } = column;
    return (
      <input
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
        placeholder={`Search ${column.Header}`}
        style={{ width: '100%', marginBottom: '5px' }}
      />
    );
}