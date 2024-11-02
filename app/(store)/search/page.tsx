const Search = async ({
  searchParams
}: {
  searchParams: { query: string }
}) => {
  const { query } = searchParams

  return <div>Search: {query}</div>
}

export default Search
