import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

import PageContent from "./components/PageContent";

// This is added so that the page is not cached, and is revalidated on every request
export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  // simulate slow network connection
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="text-white bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grids-cols-4 gap-3 mt-4">
          <ListItem
            image="/images/liked.png"
            name="Liked Songs"
            href="liked"
          />
        </div>
      </Header>

      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-semibold">Newest Songs</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}
