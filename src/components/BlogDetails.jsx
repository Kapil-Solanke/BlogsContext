import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post, key }) => {
  const { blackMode } = useContext(AppContext);
  return (
    <div
      key={post.id}
      className={` ${
        blackMode ? "bg-[#acb3c0] text-black" : "bg-[#161D29] text-[#6E727F]"
      } `}>
      <NavLink to={`/blog/${post.id}`}>
        <p
          className={`font-bold text-2xl ${
            blackMode ? "text-richblack-800" : "text-richblack-50"
          }  `}>
          {post.title}
        </p>
      </NavLink>
      <p className="text-sm mt-[4px]">
        By <span className="italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-sm mt-[4px]">Posted on {post.date}</p>
      <p className="text-md mt-[14px]">{post.content}</p>
      <div className="flex gap-x-3">
        {post.tags.map((tag, index) => {
          return (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span
                className={` ${
                  blackMode
                    ? "text-caribbeangreen-800"
                    : "text-caribbeangreen-300"
                }  underline font-bold text-xs mt-[5px]`}>{` #${tag}`}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BlogDetails;
