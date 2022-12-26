export const slideYTransition = {
  'enter-active-class': "transition duration-100 ease-out",
  'enter-from-class': "transform -translate-y-4 opacity-0",
  'enter-to-class': "transform opacity-100",
  'leave-active-class': "transition duration-75 ease-in",
  'leave-from-class': "transform opacity-100",
  'leave-to-class': "transform translate-y-4 opacity-0",
};

export const fadeTransition = {
  'enter-active-class': "transition duration-100 ease-out",
  'enter-from-class': "opacity-0",
  'enter-to-class': "opacity-100",
  'leave-active-class': "transition duration-75 ease-in",
  'leave-from-class': "opacity-100",
  'leave-to-class': "opacity-0",
  'mode': "out-in",
};