// import icon from "assets/icons/symbol-defs.svg";
// import { Button, Icon } from "./AddTaskBtn.styled";


// const AddTaskBtn = () => {
  
//   return (
//     <Button>
//       <Icon width="24" height="24">
//         <use href={icon + "#icon-plus"}></use>
//       </Icon>
//       <span>Add task</span>
//     </Button>
//   );
// };
// export default AddTaskBtn;



import React, { useState } from "react";
import icon from "assets/icons/symbol-defs.svg";
import { Button, Icon } from "./AddTaskBtn.styled";
import TaskModal from "../../../Common/TaskModal/TaskModal"; 

const AddTaskBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState("add");

  const openModal = () => {
    setIsModalOpen(true);
    setAction("add");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={openModal}>
        <Icon width="24" height="24">
          <use href={icon + "#icon-plus"}></use>
        </Icon>
        <span>Add task</span>
      </Button>
      {isModalOpen && (
        <TaskModal onClose={closeModal} action={action} />
      )} 
    </div>
  );
};

export default AddTaskBtn