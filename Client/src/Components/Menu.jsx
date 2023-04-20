import React from "react";

export const Menu = ({setPaginas, sidebarOpen, setSidebarOpen}) =>{

    const aux = (number) =>{
        setPaginas(number)
        setSidebarOpen(!sidebarOpen)
    }
    return(
        <div class="flex flex-col flex-1 overflow-y-auto">

    <nav class="flex-1 px-2 py-4 bg-gray-800">
    <a href="#" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700" onClick={() => aux(0)}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
        Dashboard
    </a>
    <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" onClick={() => aux(1)}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
   
        Cards
    </a>
    <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" onClick={() => aux(2)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        AddCards
    </a>
</nav>
</div>
)
}