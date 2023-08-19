import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AXIOS_BASE_URL } from 'constants/axiosBaseUrl';

axios.defaults.baseURL = AXIOS_BASE_URL;

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async ({ monthStart, monthEnd }, thunkAPI) => {
    try {
      const response = await axios.get('/tasks', {
        params: {
          monthStart: monthStart,
          monthEnd: monthEnd,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', task);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (task, thunkAPI) => {
    try {
      const response = await axios.patch(`/tasks/${task._id}`, {
        title: task.title,
        priority: task.priority,
        category: task.category,
        start: task.start,
        end: task.end,
        date: task.date,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
