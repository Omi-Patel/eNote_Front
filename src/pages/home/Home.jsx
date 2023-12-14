import React from "react";
import Layout from "../../components/layout/Layout";
import NotesCard from "../../components/noteCard/NoteCard";

function Home() {
  return (
    <div>
      <Layout>
        <NotesCard />
      </Layout>
    </div>
  );
}

export default Home;
