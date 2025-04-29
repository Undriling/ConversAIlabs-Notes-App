const loadNotes = () => {
  try {
    return (
      JSON.parse(localStorage.getItem("ConversAIlabs_Notes")) 
    )
  } catch (error) {
    console.error("Error saving note:", error);
    throw new Error("Failed To Load Your Notes.");
  }
};

export default loadNotes;
