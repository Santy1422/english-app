import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Panel } from "./Panel";

export const PostPage = () => {
    let { id } = useParams();
    const profile = useSelector(state => state.profile);
    
    let articulo = profile?.teory?.filter((ele) =>  ele?.id == id);
    let post = articulo.find((ele) => ele.id == id)
    console.log(post)
    return(
<>
<section class="bg-white dark:bg-gray-900 py-1">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{articulo && articulo[0]?.title}
</h2>

  <hr></hr>
  <p className="text-gray-700 text-base text-left font-light text-gray-500 sm:text-xl " dangerouslySetInnerHTML={{ __html: articulo && articulo[0]?.content }}></p>
</div>
</div>
</section>

</>
    )

}