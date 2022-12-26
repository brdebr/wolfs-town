export const useDarkMode = () => {
  const isDarkRef = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
  });
  const toggleDark = useToggle(isDarkRef);

  return { isDarkRef, toggleDark };
};
