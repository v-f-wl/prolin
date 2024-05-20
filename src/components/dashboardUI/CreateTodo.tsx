'use client'
import { RootState } from "@/store/store";
import { closeModal } from "@/store/todoModalSlice";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import PageTitle from "../PageTitle";
import FlexBetween from "@/containers/FlexBetween";
import SubTitle from "../SubTitle";
import ModalContainer from "@/containers/ModalContainer";
import CreateTitle from "./TodoUI/CreateTitle";
import CreatePriority from "./TodoUI/CreatePriority";
import CreateLink from "./TodoUI/CreateLink";
import CreateSubTasks from "./TodoUI/CreateSubTasks";
import SubTaskEdit from "./TodoUI/SubTaskEdit";

const CreateTodo = () => {

  const [subtasks, setSubtasks] = useState([{ id: 1, text: '', completed: false }]);

  const handleSubtaskChange = (id: number, text: string) => {
    setSubtasks(subtasks.map(subtask => (subtask.id === id ? { ...subtask, text } : subtask)));
  };
  const addSubtask = () => {
    setSubtasks([...subtasks, { id: subtasks.length + 1, text: '', completed: false }]);
  };

  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootState) => state.modal)


  const closeThisModal = () => {
    dispatch(closeModal())
  }

  return (
    <ModalContainer isOpen={isOpen}>
      <FlexBetween>
        <PageTitle title="Create ToDo" />
        <Button onClick={closeThisModal} value="Close" style="green" />
      </FlexBetween>
      <CreateTitle/>
      <CreatePriority/>
      <CreateLink/>
      <CreateSubTasks/>
      <div className="">
        <SubTaskEdit/>
      </div>
      <div className="h-px border"></div>
      <Button value="Create" style="fill" onClick={() => {}} className="py-4"/>
    </ModalContainer>
  );
}

export default CreateTodo;