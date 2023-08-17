import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = state => state.tasks.tasks;
export const selectAvatarURL = state => state.tasks.avatarURL;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;

export const selectTasksByCategory = createSelector(
  selectTasks,
  (_, category) => category,
  (tasks, category) => tasks.filter(task => task.category === category)
);
