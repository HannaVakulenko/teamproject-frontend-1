import { createSelector } from "@reduxjs/toolkit";
import { format } from 'date-fns';

export const selectTasks = state => state.tasks.tasks;
export const selectAvatarURL = state => state.tasks.avatarURL;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;

export const selectTasksByCategory = createSelector(
  selectTasks,
  (_, category) => category,
  (tasks, category) => tasks.filter(task => task.category === category)
);

const selectCurrentDay = (_, currentDay) => currentDay;

export const selectTasksByDate = createSelector(
  [selectTasks, selectCurrentDay],
  (tasks, currentDay) => {
    return tasks.filter(task => {
      const taskDate = format(new Date(task.date), 'yyyy-MM-dd');
      return taskDate === currentDay;
    });
  }
);
