import {

  VStack,

  ModalHeader,
  ModalBody,

 
} from "@chakra-ui/react";
import { onClose } from "../../../global/index.ts";
import { Dispatch, SetStateAction, useState } from "react";

import {
  addGoals
} from "../../../features/goals/goalsSlice.tsx";

import { AppDispatch } from "../../../store.ts";
import { useDispatch } from "react-redux";
import { ModalInputFeild, ModalTitle, ModalBTN } from "./ModalInputFeild.tsx";
const WeeklyGoal: React.FC<onClose> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [weeklyGoalOne, setWeeklyGoalOne]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");

  const [weeklyGoalTwo, setWeeklyGoalTwo]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");
  const [weeklyGoalThree, setWeeklyGoalThree]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(addGoals({ WeeklyGoalOne: weeklyGoalOne }));
    dispatch(addGoals({ WeeklyGoalTwo: weeklyGoalTwo }));
    dispatch(addGoals({ WeeklyGoalThree: weeklyGoalThree }));
  };

  return (
    <>
      <ModalHeader>
        <ModalTitle title="Weekly Goal"/>
      </ModalHeader>
      <ModalBody w={"100%"} h={"100%"}>
        <VStack justify={"start"} align={"left"} w={"100%"} h={"100%"} p={2}>
          <form onSubmit={handleSubmit}>

          <ModalInputFeild
              value={weeklyGoalOne}
              onChange={(e) =>  setWeeklyGoalOne(e.target.value)}
            />

      
          <ModalInputFeild
              value={weeklyGoalTwo}
              onChange={(e) =>  setWeeklyGoalTwo (e.target.value)}
            />

          
<ModalInputFeild
              value={weeklyGoalThree}
              onChange={(e) =>  setWeeklyGoalThree(e.target.value)}
            />


          
      <ModalBTN  onClick={() => {
                        onClose()
                   
                      console.log("im closed");
                    
                    }} />
          </form>
        </VStack>
      </ModalBody>{" "}
    </>
  );
};

export default WeeklyGoal;
