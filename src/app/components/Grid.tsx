import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BendoGrid';
import { gridItems } from '../data/index';

type GridItem = {
    className?: string;
    title?: string | React.ReactNode;
    id?: number;
    description?: string | React.ReactNode;
    img: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
};

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item: GridItem) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
