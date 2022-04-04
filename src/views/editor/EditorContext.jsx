import { createContext, useState } from "react";
import SectionTemplates from '../editor/utils/section-templates.json'

export const EditorContext = createContext()

const EditorContextProvider = ({children}) => {

    const [currentSection, setCurrentSection] = useState(0)
    const [allSections, setAllSections] = useState([SectionTemplates[0]])
    const [allTemplates, setAllTemplates] = useState(SectionTemplates)

    const values = {
        currentSection, 
        setCurrentSection,
        allSections,
        setAllSections,
        allTemplates,
        setAllTemplates
    }

    return <EditorContext.Provider value={values}>{children}</EditorContext.Provider>

}

export default EditorContextProvider