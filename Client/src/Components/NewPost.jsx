import React, { useEffect, useRef, useState } from "react";
import { useAdd } from "./CustomHooks/useAdd";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
export const NewPost = () => {
    const sunEditorRef = useRef(null);
    const [editorValue, setEditorValue] = useState("");
    const { palabras, setPalabras, changeInput,agregarPost, test, clean } = useAdd(editorValue, sunEditorRef, setEditorValue)

useEffect(() => { 
setEditorValue("")
},[clean] )


        return(
        <>

  <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <input name="palabra" value={ palabras.palabra} onChange={(e) => changeInput(e)} class="title bg-white border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text"/>
    <SunEditor
  ref={sunEditorRef}
  onChange={(content) => test(content)}
  setContents={editorValue}

  setOptions={{
    initialValue: '<div style="text-align: left;">Contenido inicial</div>',
    initialStyle: 'text-align: left; padding-left: 20px;', 
    buttonList: [
      ['undo', 'redo'],
      ['font', 'fontSize', 'formatBlock'],
      ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
      ['align', 'list', 'lineHeight'],
      ['table', 'link', 'image', 'video'],
      ['fullScreen', 'showBlocks', 'codeView'],
    ],
    defaultStyle: 'text-align: left; ',
    font: ['Helvetica', 'Arial', 'Verdana'],
    fontSize: [16, 18, 20, 22, 24],
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

    {/* <!-- buttons --> */}
    <div class="buttons flex">
      <button onClick={() =>agregarPost()} class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</button>
    </div>
  </div>
        </>
    )
}