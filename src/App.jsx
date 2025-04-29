import { useState } from "react";
import AddNotes from "./components/AddNotes";
import NotesList from "./components/NotesList";

function App() {
  const [view, setView] = useState("add");
  const [refreshKey, setRefreshKey] = useState(0);

  const handleNoteAdded = () => {
    setRefreshKey((prev) => prev + 1);
    setView("view");
  };

  return (
    <>
      <div className="max-w-xl mx-auto mt-6 font-serif">
        <h1 className="text-center text-2xl text-red-400">
          ConversAIlabs Notes Assignmest By Manash
        </h1>
        <div className="flex justify-center gap-4 my-4">
          <button
            onClick={() => setView("add")}
            className="text-white cursor-pointer bg-black p-2 rounded">
            Add Note
          </button>
          <button
            onClick={() => setView("view")}
            className="text-white cursor-pointer bg-black p-2 rounded">
            View Notes
          </button>
        </div>
        {view === "add" && (
          <AddNotes onNoteAdded={handleNoteAdded} />
        )}
        {view === "view" && <NotesList key={refreshKey} />}
      </div>
    </>
  );
}

export default App;
