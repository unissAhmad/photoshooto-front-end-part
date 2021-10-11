import React, { useState } from 'react'
import BlogCard2 from '../../../components/BlogCard/BlogCard2/BlogCard2'
import blogCard from '../../../utils/BlogCard.json'
import styles from "./BlogSection3.module.css";
import BlogCard1 from "../../../components/BlogCard/BlogCard1/BlogCard1"
import clock from "./image/clock (4) 1.png"
import trend from "./image/trending 1.png"

const BlogSection3 = () => {
  const [toggle, toggleState] = useState('recent');
  return (
    <div className={styles.BlogBlogContainer}>
      <div className={styles.blogbox1}>
        <BlogCard1 />
      </div>
      <div className={styles.blogbox2}>
        <div class="article">
          <div class={styles.btnsec}>
            <button type="button" className={styles.btn1} onClick={() => toggleState('recent')}><img class="clock" src={clock} alt="clk-img" /> Recent Articles</button>
            <button type="button" className={styles.btn2} onClick={() => toggleState('top')}><img class="trend" src={trend} alt="trend-img" /> Popular Articles</button>
          </div>
          {
            toggle == 'recent' && (blogCard.map((card) => (<BlogCard2 key={blogCard.id} blogData={card} />)))
          }
          {
            toggle == 'top' && (blogCard.map((card) => (<BlogCard2 key={blogCard.id} blogData={card} />)))
          }
        </div>
        <div class={styles.morebtn}>
          <button type="button" class={styles.btn3}>VIEW MORE</button>
        </div>
      </div>
    </div>);
};

export default BlogSection3;