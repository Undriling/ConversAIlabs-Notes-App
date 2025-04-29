import { useEffect, useState } from "react";
import loadNotes from "../storage/loadNotes";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const data = loadNotes();
      setNotes(data);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Notes</h2>
      {error && <p className="text-red-500">{error}</p>}
      {notes.map((note) => (
        <div key={note.id} className="border p-3 mb-2">
          <h3 className="font-semibold">{note.title}</h3>
          <p className="text-sm text-gray-600">
            {note.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
