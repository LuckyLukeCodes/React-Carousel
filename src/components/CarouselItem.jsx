const CarouselItem = ({ image, hoverColor, name, title }) => {
  return (
    <div
      className={`relative flex-[0_0_125px] cursor-pointer overflow-hidden rounded-lg shadow-lg 
      transition-all duration-500 ease-in-out hover:flex-[0_0_250px] hover:-translate-y-7 ${hoverColor}`}
    >
      <img src={image} alt="user item" className="h-full w-full object-cover" />
      <div
        className="translate-y-15 absolute top-0 z-10 flex h-full w-full flex-col items-center justify-end
                    truncate bg-gradient-to-t from-slate-950/70 to-slate-50/5 text-[1.5rem] text-[var(--text-color)] opacity-0 
                    transition-opacity duration-500 ease-in-out hover:visible hover:translate-y-[0%] hover:opacity-100"
      >
        <h2 className="text-2xl font-semibold">{name}</h2>
        <span className="mb-3 mt-1 block text-base">{title}</span>
      </div>
    </div>
  );
};

export default CarouselItem;
