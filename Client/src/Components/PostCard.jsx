import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const PostCard = (props) => {
  const profile = useSelector((state) => state.profile);


  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Articles</h2>
          </div>
        </div>

        <div className="flex justify-center">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-3xl">
            {profile?.teory?.map((ele, index) => (
              <Link to={`/post/${ele?._id}`}>  <div onClick={() => props.setPaginas(5)} className="max-w-sm w-full lg:max-w-full lg:flex" key={index}>


                <article class="group">
                  <img
                    alt="Lava"
                    src={ele?.image}
                    class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                  />

                  <div class="p-4">
                    <a href="#">
                      <h3 class="text-lg font-medium text-gray-900">
                        {ele?.title}
                      </h3>
                    </a>
                  </div>
                </article>
              </div></Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};