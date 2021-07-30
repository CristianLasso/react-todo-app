import React from "react";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import { AppContextWrapper } from "./store/AppContext";

const App = () => {
  return (
    <AppContextWrapper>
      <TaskContainer />
    </AppContextWrapper>
  );
};

export default App;
