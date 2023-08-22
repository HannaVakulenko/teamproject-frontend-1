export const disableScrolling = disable => {
  if (disable) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};
