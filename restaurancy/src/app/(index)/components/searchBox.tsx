
export default async function SearchBox({ searchParams }: { searchParams: { q?: string } }) {
    console.log("SearchParams in searchBox", searchParams)
    console.log("SearchParams.q in searchBox", searchParams.q)
  
}