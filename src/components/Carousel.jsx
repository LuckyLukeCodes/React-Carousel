import data from "../data/data";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  return (
    <div className="flex h-[26rem] w-full justify-center gap-3">
      {data.map((dataItem) => (
        <CarouselItem
          key={dataItem.key}
          image={dataItem.image}
          hoverColor={dataItem.hoverColor}
          name={dataItem.name}
          title={dataItem.title}
        />
      ))}
    </div>
  );
};

export default Carousel;
