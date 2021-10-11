import React from "react";
import styles from "./BlogSection2.module.css";
import Carousel from "react-elastic-carousel";
import "./BlogSection2.css";
const breakPoints = [
  { width: 500, itemsToShow: 3, itemsToScroll: 1 },
  { width: 501, itemsToShow: 5, itemsToScroll: 1 },
];

const items = [
  { id: 1, title: 'All ARTICLES' },
  { id: 2, title: 'UI/UX DESIGN' },
  { id: 3, title: 'TECHNOLOGY' },
  { id: 4, title: 'TRAVEL' },
  { id: 5, title: 'WEB DEVELOPMENT' },
  { id: 6, title: 'DESIGN' },
  { id: 7, title: 'DESIGN' },
  { id: 8, title: 'DESIGN' }

]
const BlogSection2 = () => {
  return (
    <div className={styles.BlogTagContainer}>
      <Carousel breakPoints={breakPoints} pagination={false}>
        {items.map(item => <div className={styles.tag} key={item.id}>{item.title}</div>)}
      </Carousel>
    </div>
  );
};

export default BlogSection2;