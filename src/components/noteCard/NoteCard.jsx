import React, { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { Link } from "react-router-dom";

function NotesCard() {
  const context = useContext(myContext);
  const { allNotes, getAllNotes, loading, deleteNote } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllNotes();
    }
  }, []);

  return (
    <div>
      <section className=" body-font">
        <div className="container px-5 py-10 mx-auto mt-5">
          {/* Top Heading  */}
          <h2 className=" text-center font-bold underline text-3xl mb-8">
            All Notes
          </h2>

          <div className="flex flex-wrap ">
            {loading ? (
              <>
                <div className="">
                  <img
                    className="w-14 py-20"
                    src="https://i.gifer.com/ZZ5H.gif"
                    alt=""
                  />
                </div>
              </>
            ) : (
              <>
                {allNotes.length > 0 ? (
                  allNotes.map((item, index) => {
                    const { title, description, tag, _id } = item;

                    return (
                      <div key={index} className=" mx-auto">
                        {/* Card 1 */}
                        <div className="mb-3  ">
                          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-[#7b8f9476] lg:w-64 w-[320px] m-4">
                            <div className="p-6">
                              {/* title  */}
                              <h1 className="title-font text-lg font-bold tracking-wide text-gray-900 mb-3">
                                {title}
                              </h1>
                              <hr />

                              {/* description  */}
                              <p className="leading-relaxed mb-3 mt-2 font-semibold tracking-wide text-black">
                                {description}
                              </p>
                              {/* <hr /> */}

                              {/* bottom item  */}
                              <div className="flex items-center mt-2 justify-between ">
                                {/* left item  */}
                                <div className=" bg-slate-200 px-5  rounded-xl inline-flex items-center md:mb-2 lg:mb-0 uppercase text-sm">
                                  {tag}
                                </div>

                                {/* right item  */}
                                <div className=" flex items-center space-x-2 ">
                                  {/* edit icon  */}

                                  <Link to={`/notes/edit/${_id}`}>
                                    <div className="edit">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 cursor-pointer text-green-700 "
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        />
                                      </svg>
                                    </div>
                                  </Link>
                                  {/* delete icon  */}
                                  <div className="del">
                                    <svg
                                      onClick={() => {
                                        deleteNote(item._id);
                                      }}
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6 cursor-pointer text-red-700"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h1 className=" mb-2 text-xl font-bold">Notes Not Found</h1>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotesCard;
