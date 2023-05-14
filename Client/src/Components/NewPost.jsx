import React, { useRef, useState } from "react";
import { useAdd } from "./CustomHooks/useAdd";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
export const NewPost = () => {
    const sunEditorRef = useRef(null);
    const [editorValue, setEditorValue] = useState("");

    const { palabras, setPalabras, changeInput,agregarPost, test } = useAdd(editorValue, sunEditorRef, setEditorValue)




        return(
        <>

  <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <input name="palabra" value={ palabras.palabra} onChange={(e) => changeInput(e)} class="title bg-white border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text"/>
    {/* <textarea name="word" value={ palabras.word} onChange={(e) => changeInput(e)} class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea> */}
    <SunEditor
  ref={sunEditorRef}
  onChange={(content) => test(content)}
  setContents={editorValue}

  setOptions={{
    buttonList: [
      ['undo', 'redo'],
      ['font', 'fontSize', 'formatBlock'],
      ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
      ['align', 'list', 'lineHeight'],
      ['table', 'link', 'image', 'video'],
      ['fullScreen', 'showBlocks', 'codeView'],
    ],
    defaultStyle: 'text-align: left;',

    font: ['Arial', 'Verdana', 'Helvetica'],
    fontSize: [12, 14, 16, 18, 20, 24],
    formatBlock: [
      { tag: 'h1', name: 'Heading 1' },
      { tag: 'h2', name: 'Heading 2' },
      { tag: 'p', name: 'Paragraph' },
    ],
    align: [
      { tag: 'div', name: 'Left', className: 'left', value: 'left' },
      { tag: 'div', name: 'Center', className: 'center', value: 'center' },
      { tag: 'div', name: 'Right', className: 'right', value: 'right' },
      { tag: 'div', name: 'Justify', className: 'justify', value: 'justify' },
    ],
  }}

/>






    {/* <!-- icons --> */}
    <div class="icons flex text-gray-500 m-2">
      <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
      <div class="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
    </div>
    {/* <!-- buttons --> */}
    <div class="buttons flex">
      <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
      <button onClick={() =>agregarPost()} class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</button>
    </div>
  </div>
        </>
    )
}