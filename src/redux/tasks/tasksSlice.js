import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks, updateTask } from './operations';
import { logout } from 'redux/auth/operations';

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchTasksFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.tasks = action.payload;
};

const addTaskFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.tasks.push(action.payload);
};

const updateTaskFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.tasks.findIndex(
    task => task.id === action.payload.id
  );
  state.tasks.splice(index, 1, action.payload);
};

const deleteTaskFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.tasks.findIndex(
    task => task.id === action.payload.id
  );
  state.task.splice(index, 1);
};

const clearTasksFulfilledReducer = (state) => {
  state.tasks = [];
  state.isLoading = false;
  state.error = null;
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, pendingReducer)
      .addCase(fetchTasks.fulfilled, fetchTasksFulfilledReducer)
      .addCase(fetchTasks.rejected, rejectedReducer)
      .addCase(addTask.pending, pendingReducer)
      .addCase(addTask.fulfilled, addTaskFulfilledReducer)
      .addCase(addTask.rejected, rejectedReducer)
      .addCase(updateTask.pending, pendingReducer)
      .addCase(updateTask.fulfilled, updateTaskFulfilledReducer)
      .addCase(updateTask.rejected, rejectedReducer)
      .addCase(deleteTask.pending, pendingReducer)
      .addCase(deleteTask.fulfilled, deleteTaskFulfilledReducer)
      .addCase(deleteTask.rejected, rejectedReducer)
      .addCase(logout.fulfilled, clearTasksFulfilledReducer)
});

export const tasksReducer = tasksSlice.reducer;
