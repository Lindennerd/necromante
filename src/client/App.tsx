import { Suspense } from "react";
import { MessagesList } from "./components/Message/MessagesList";
import { Nav } from "./components/Nav";
import { LoadingBar } from "./components/base/Loading";

function App() {
  return (
    <main>
      <Nav />
      <section className="flex flex-row flex-wrap gap-4 max-w-screen-lg mx-auto p-2 rounded-md mt-2">
        <Suspense fallback={<LoadingBar />}>
          <MessagesList />
        </Suspense>
      </section>
    </main>
  );
}

export default App;
