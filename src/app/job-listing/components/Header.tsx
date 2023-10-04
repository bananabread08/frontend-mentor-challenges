export const CyanHeader = () => {
  return (
    <header className="bg-jl-darkcyan">
      <picture className="opacity-70">
        <source
          srcSet="/jl-images/bg-header-desktop.svg"
          type="image/jpg"
          media="(min-width: 376px)"
        />
        <source
          srcSet="/jl-images/bg-header-mobile.svg"
          typeof="image/jpg"
          media="(max-width: 375px)"
        />
        <img alt="header-image" className="w-full h-36" />
      </picture>
    </header>
  );
};
