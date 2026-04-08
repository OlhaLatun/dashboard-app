export const getUserInitials = (name: string = 'no name'): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('');
};
