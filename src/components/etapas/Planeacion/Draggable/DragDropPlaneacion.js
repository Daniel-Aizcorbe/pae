import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Columns, Rows } from "../../../utils/containers/Containers";
import ItemDraggable from "./ItemDraggable";

import { DragDropContainer } from "./DragDropContainer";


const DragDropPlaneacion = ({ diagnosticos, switchOrderFunction }) => {

    const handleDragDrop = (results) => {
        const { source, destination, type } = results;

        const destinationIndex = destination.index;
        const sourceIndex = source.index;

        if (!destination) return;

        if (source.droppableId === destination.droppableId
            && sourceIndex === destinationIndex) return;

        if (type === "group") {
            const reorderedDiagnosticos = Array.from(diagnosticos);

            const [removedDiagnostico] = reorderedDiagnosticos.splice(sourceIndex, 1);
            reorderedDiagnosticos.splice(destinationIndex, 0, removedDiagnostico);
            return switchOrderFunction(reorderedDiagnosticos);
        }

    };

    const getListPosition = (id) => {
        const indice = diagnosticos.findIndex(n => n.id === id);;
        return indice + 1;
    }

    return (
        <Columns
            elementPosition={"top-center"}
            height="100%"
        >
            <DragDropContext onDragEnd={handleDragDrop}>
                <Rows
                    elementPosition={"center"}
                    padding={"1.5rem"}
                    width="700px"
                    height="100%"
                >
                    <DragDropContainer
                    >
                        <Droppable droppableId="ROOT" type="group">
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {diagnosticos.map((d, index) =>
                                        <ItemDraggable draggableId={d.id + ""} key={d.id} index={index} diagnostico={d.nombre} getPosition={() => getListPosition(d.id)} />
                                    )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContainer>
                </Rows>
            </DragDropContext>
        </Columns>
    );
}

export { DragDropPlaneacion }