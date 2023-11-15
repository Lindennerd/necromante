import { Suspense } from "react";
import { MessagesList } from "./components/Message/MessagesList";
import { Nav } from "./components/Nav";

function App() {
  return (
    <main>
      <Nav />
      <section className="flex flex-row flex-wrap gap-4 max-w-screen-lg mx-auto p-2 rounded-md mt-2">
        <Suspense fallback={<div>Carregando...</div>}>
          <MessagesList />
        </Suspense>
      </section>
    </main>
  );
}

export default App;
