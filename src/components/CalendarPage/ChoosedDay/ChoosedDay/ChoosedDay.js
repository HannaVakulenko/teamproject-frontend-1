import { useSelector } from "react-redux";
import DayCalendarHead from "../DayCalendarHead /DayCalendarHead";
import TasksColumnsList from "../TasksColumnsList/TasksColumnsList";
import { selectTasks } from "redux/tasks/selectors";

const ChoosedDay = () => {

  const tasks = useSelector(selectTasks);

  return (
    <>
      <DayCalendarHead />
      <TasksColumnsList tasks={tasks} />
    </>
  );
};
export default ChoosedDay;
