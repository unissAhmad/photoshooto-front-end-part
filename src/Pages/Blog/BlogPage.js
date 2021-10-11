import React from "react";
import "./BlogPage.css";
import BlogSection1 from "../../parts/Blog/BlogSection1/BlogSection1";
import BlogSection2 from "../../parts/Blog/BlogSection2/BlogSection2";
import BlogSection3 from "../../parts/Blog/BlogSection3/BlogSection3";


const BlogPage=()=>{
    return(
    <div className="blogPageContainer">
    <BlogSection1 /> 
    <BlogSection2 />
    <BlogSection3 />

    </div>
    );
}

export default BlogPage;