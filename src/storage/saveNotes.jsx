const saveNote = (note) => {
  try {
    const existing = JSON.parse(localStorage.getItem("ConversAIlabs_Notes"))
    const updated = [...existing, note];
    localStorage.setItem(
      "ConversAIlabs_Notes",
      JSON.stringify(updated)
    );
  } catch (err) {
    throw new Error("Failed To Save Note.");
  }
};

export default saveNote;
