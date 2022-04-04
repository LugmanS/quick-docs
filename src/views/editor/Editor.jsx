import React, { useContext } from 'react'
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-markdown"
import "ace-builds/src-noconflict/theme-one_dark"
import { EditorContext } from './EditorContext'

const Editor = () => {

  const {currentSection, allSections, setAllSections} = useContext(EditorContext)

  const onChange = (value) => {
    const localAllSectionCopy = [...allSections]
    localAllSectionCopy[currentSection].markdown = value
    setAllSections(localAllSectionCopy)
  }

  return ( 
      <AceEditor 
        mode='markdown'
        // theme="one_dark"
         fontSize={15}
         value={allSections[currentSection].markdown}
        setOptions={{
        autoScrollEditorIntoView: true,
        wrap: true,
        tabSize: 2,
      }}
      onChange={(value) => onChange(value)}
    style={{width:"100%", height: "calc(100vh - 3.5rem)"}}
      />
  )
}

export default Editor