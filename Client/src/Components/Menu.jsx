import React from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Menu = ({setPaginas, sidebarOpen, setSidebarOpen}) =>{
    const history = useHistory();

    const aux = () => {
        setSidebarOpen && setSidebarOpen(!sidebarOpen);
      }
    return(
        <div class="flex flex-col flex-1 overflow-y-auto">

    <nav class="flex-1 px-2 py-4 bg-gray-800">
    <Link to="/dashboard"><a href="#" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700" onClick={() => aux(0)}>
    <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>

        Dashboard
    </a></Link>
   <Link to="/dashboard/card"> <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" onClick={() => aux(1)}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
   
        Cards
    </a></Link>
   <Link to="/dashboard/addCard">  <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" onClick={() => aux(2)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        AddCards
    </a></Link>
   <Link to="/post/addPost">    <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" onClick={() => aux(3)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        AddPost
        
</a></Link>
<Link to="/post">    <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" onClick={() => aux(4)}>
    <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>

        Post
    </a></Link>
</nav>
</div>
)
}