import SubTitle from "../UI/subtitle";
import ModalDescription from "./modal-cereateUI/modal-description";
import GridContainer from "./modal-cereateUI/modal-grid-container";
import SelectPlayers from "./modal-cereateUI/modal-select-players";
import ModalStoryPoint from "./modal-cereateUI/modal-story-point";
import ModalCreateTitle from "./modal-cereateUI/modal-title";
import ModalTodo from "./modal-cereateUI/modal-todo";
import ModalCreate from "./modal-create-game";

const CreateTab = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <ModalCreateTitle/>
      <GridContainer>
        <ModalDescription/>
        <ModalTodo/>
      </GridContainer>
      <GridContainer>
        <SelectPlayers/>
        <ModalStoryPoint/>
      </GridContainer>
    </div>
  );
}

export default CreateTab;