import { useState } from "react";
import saveNote from "../storage/saveNotes";

const AddNotes = ({ onNoteAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  if (localStorage.getItem("ConversAIlabs_Notes") === null) {
    localStorage.setItem("ConversAIlabs_Notes", JSON.stringify([]));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const newNote = { title, content, id: Date.now() };
      saveNote(newNote);
      onNoteAdded(newNote);
      setTitle("");
      setContent("");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add Note</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2">
        <input
          className="border p-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-1 px-4 cursor-pointer rounded"
          type="submit"
          disabled={saving}>
          {saving ? "Saving…" : "Add Note"}
        </button>
      </form>
    </div>
  );
};

export default AddNotes;
