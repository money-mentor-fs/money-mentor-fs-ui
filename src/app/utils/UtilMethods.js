export const toAbsoluteUrl = (pathname) => process.env.PUBLIC_URL + pathname;

export const scrollToHome = () => scrollTo("back-to-home");

export const scrollToServices = () => scrollTo("back-to-services");

export const scrollToAboutUs = () => scrollTo("back-to-about-us");

export const scrollToContactUs = () => scrollTo("back-to-contact-us");

export const scrollTo = (scrollToId = "") => {
  const anchor = document.querySelector(`#${scrollToId}`);

  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
