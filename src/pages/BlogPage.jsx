import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router";
import Pagination from "../components/Pagination";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigation = useNavigate();
  const location = useLocation();
  const { loading, setLoading, blackMode } = useContext(AppContext);
  const tag = location.pathname.split("/").at(-1);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    // const url=`${baseUrl}?blogId=${blogId}`
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("there is an error in fetching related blog ", error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);
  return (
    <div
      className={`w-full h-full min-h-screen min-w-screen  flex flex-col gap-8   items-center ${
        blackMode ? "bg-[#acb3c0] text-black" : "bg-[#161D29] text-[#b0b4c3]"
      }`}>
      <Header />
      <div className=" flex flex-row gap-2 justify-center items-center ">
        <h2 className={`rounded-md mt-3   px-4 py-2  ${
              blackMode
                ? "shadow-[inset_-2px_-2px_0px_#FFFFFF] "
                : "shadow-[inset_-2px_-2px_0px]"
            }  `}>
          Blogs Tagged <span>#{tag}</span>
        </h2>
        <div>
          <button
            onClick={() => navigation(-1)}
            className={`rounded-md mt-3   px-4 py-2  ${
              blackMode
                ? "shadow-[inset_-2px_-2px_0px_#FFFFFF] "
                : "shadow-[inset_-2px_-2px_0px]"
            }  `}>
            Back
          </button>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2
            className={`font-bold text-2xl mt-4 ${
              blackMode ? "text-richblack-800" : "text-richblack-50"
            }  `}>
            Related Blog
          </h2>
          {relatedBlogs.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div>No Blog found</div>
      )}

      <Pagination />
    </div>
  );
};

export default BlogPage;
