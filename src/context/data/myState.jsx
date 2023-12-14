import React, { useState } from "react";
import MyContext from "./myContext";
// import { toast } from "react-toastify";

// for toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function myState(props) {
  const [loading, setLoading] = useState(false);

  const [allNotes, setAllNotes] = useState([]);

  const getAllNotes = async () => {
    setLoading(true);

    try {
      const res = await fetch(`https://enote-back.onrender.com/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      const notesData = await res.json();
      console.log(notesData);
      setAllNotes(notesData);
      setLoading(false);

      //
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //* Add Note state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const addNote = async () => {
    const res = await fetch(`https://enote-back.onrender.com/api/notes/addnote`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    //response
    const noteData = await res.json();
    console.log(noteData);
    getAllNotes();

    //* condition
    if (noteData.error) {
      toast.warn(noteData.error);
      // alert("All Fields Are Required!")
    } else {
      toast.success("Note Added Successfully!");
    }

    //* after submit data all fields empty
    setTitle("");
    setDescription("");
    setTag("");
  };

  //delete note
  const deleteNote = async (id) => {
    const res = await fetch(
      `https://enote-back.onrender.com/api/notes/deletenote/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );

    const noteData = await res.json()
    getAllNotes()
    toast.success(noteData.success)
  };

  return (
    <MyContext.Provider
      value={{
        allNotes,
        getAllNotes,
        loading,
        title,
        setTitle,
        description,
        setDescription,
        tag,
        setTag,
        addNote,
        deleteNote
      }}
    >
      {props.children}
      <ToastContainer />
    </MyContext.Provider>
  );
}

export default myState;
