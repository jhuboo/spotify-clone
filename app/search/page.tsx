import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";

export const revalidate = 0;

interface SearchProps {
  searchParams: { title: string };
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <div>
      <Header>
        <div>
          <h1>Search</h1>
        </div>
      </Header>
    </div>
  );
};

export default Search;
