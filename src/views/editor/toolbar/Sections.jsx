import React, { useContext } from 'react'
import {ReactComponent as DragLight} from '../../../assets/icons/drag-light.svg'
import {ReactComponent as DragDark} from '../../../assets/icons/drag-dark.svg'
import {ReactComponent as Delete} from '../../../assets/icons/delete.svg'
import {ReactComponent as Reset} from '../../../assets/icons/reset.svg'
import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
import { Draggable } from 'react-beautiful-dnd'
import { EditorContext } from '../EditorContext'
import { Templates } from '../utils/Templates'

const SectionCard = ({data, provided, index}) => {

    const {setCurrentSection, currentSection, allSections, setAllSections, allTemplates, setAllTemplates} = useContext(EditorContext)

    const handleDelete = (e) => {
        e.stopPropagation()
        if(allSections.length < 2) return
        const sectionsFiltered = Templates.find(section => section.id === data.id)
        const localAllTemplatesCopy = [...allTemplates]
        const localAllSectionCopy = [...allSections]
        localAllSectionCopy.splice(index, 1)
        sectionsFiltered && localAllTemplatesCopy.push(sectionsFiltered)
        setCurrentSection(index !== 0 ? index -1 : index)
        setAllTemplates([...localAllTemplatesCopy])
        setAllSections([...localAllSectionCopy])
    }

    const handleSectionReset = (e) => {
        e.stopPropagation()
        const sectionsFiltered = Templates.find(section => section.id === data.id)
        const localAllSectionCopy = [...allSections]
        localAllSectionCopy[index].markdown = sectionsFiltered ? sectionsFiltered.markdown : ``
        setAllSections([...localAllSectionCopy])
    }

    const onClick = () => setCurrentSection(index)

    return(
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={`w-full h-12 py-2 pl-2 pr-1 my-3  rounded-md flex items-center gap-1 ${currentSection === index ? "bg-[#212121] border border-[#212121] text-white" : "border border-[#212121]" }`} onClick={onClick}>
            {currentSection === index ? <DragLight width={16} /> : <DragDark width={16}/>}
            <div className='flex items-center justify-between w-full h-full cursor-pointer'>
                <p className='text-sm w-36 truncate'>{data.name}</p>
                {
                    currentSection === index && <div>
                    <button className="hover:bg-neutral-700 transition duration-200 ease-in-out rounded-full p-2" onClick={handleSectionReset}>
                        <Reset width={16} height={16}/>
                    </button>
                    <button className="hover:bg-neutral-700 transition duration-200 ease-in-out rounded-full p-2" onClick={handleDelete}>
                        <Delete width={16} height={16}/>
                    </button>
                </div>
                }
            </div>
        </div>
    )
}

const Sections = () => {

    const {allSections, setAllSections, setCurrentSection} = useContext(EditorContext)

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(allSections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCurrentSection(result.destination.index)
    setAllSections(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='sections'>
            {
                (provided) => (
                    <div className='w-full' {...provided.droppableProps} ref={provided.innerRef}>
                        {allSections.map((data, key) => (<Draggable key={data.id} draggableId={data.id} index={key} >
                            {(provided) => <SectionCard data={data} provided={provided} key={key} index={key} />}
                        </Draggable>))}
                        {provided.placeholder}
                    </div>
                )
            }
        </Droppable>
    </DragDropContext>
  )
}

export default Sections