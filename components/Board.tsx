"use client";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { useEffect } from "react";
import { useBoardStore } from "@/store/BoardStore";
const Board = () => {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return (
    <h1>Hello</h1>
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided, snapshot) => <div></div>}
    //   </Droppable>
    // </DragDropContext>
  );
};

export default Board;
