const loadNotes = () => {
  try {
    return (
      JSON.parse(localStorage.getItem("ConversAIlabs_Notes"))
    )
  } catch (err) {
    throw new Error("Failed To Load Your Notes.");
  }
};

export default loadNotes;
