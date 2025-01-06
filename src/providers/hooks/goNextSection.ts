const goNextSection = (id: string) => {
  const section = document.querySelector(
    `[data-header="${id}"]`,
  );

  section?.scrollIntoView({
    behavior: 'smooth',
  });
};

export default goNextSection;
