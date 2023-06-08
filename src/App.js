
import Home from '../src/pages/Home'
import BlogPage from '../src/pages/BlogPage'
import CategoryPage from '../src/pages/CategoryPage'
import TagPage from '../src/pages/TagPage'
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"
import { Route, Routes, useLocation } from "react-router";
import { useSearchParams } from 'react-router-dom';
export default function App() {
  const location=useLocation();
  const {fetchBlogPosts} = useContext(AppContext);
  const [searchParams,setSearchParams] = useSearchParams();
  useEffect(() => {
    const page=searchParams.get('page')??1;
    if(location.pathname.includes('tags'))
    {
      const tag=location.pathname.split('/').at(-1).replace('-',' ')
      fetchBlogPosts(Number(page), tag)
    }
    if(location.pathname.includes('categories'))
    {
      const category=location.pathname.split('/').at(-1).replace('-',' ')
      fetchBlogPosts(Number(page),null, category)
    }
    else
    {
      fetchBlogPosts(Number(page));
    }
  },[location.pathname,location.search]);

  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog/:blogId" element={<BlogPage/>}/>
    <Route path="/tags/:tag" element={<CategoryPage/>}/>
    <Route path="/categories/:category" element={<TagPage/>}/>
  </Routes>
  );
}
