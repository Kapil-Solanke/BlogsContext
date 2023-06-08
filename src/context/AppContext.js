import { createContext, useState } from "react";
import { baseUrl} from '../baseUrl'
import { useNavigate } from "react-router";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [blackMode,setBlackMode] =useState(false);
  const navigate = useNavigate();
  async function fetchBlogPosts(page=1,tag=null,category){
    
    setLoading(true);
    try {
        let url=`${baseUrl}?page=${page}`
        if(tag) {
          url += `&tag=${tag}`;
        }
        if(category) {
          url += `&category=${category}`;
        }
        const result=await fetch(url);
        const data=await result.json();
        setPage(data?.page)
        setTotalPages(data?.totalPages)
        setPosts(data?.posts)
    } catch (error) {   
        console.log(error)
        setPage(1)
        setPosts([])
        setTotalPages(null)
    }
    setLoading(false);
  }
  function handlePageChange(page){
    navigate( { search: `?page=${page}`});
    setPage(page)
  }
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    handlePageChange,
    fetchBlogPosts,
    blackMode,
    setBlackMode
  };

  return <AppContext.Provider  value={value}>
    {children}
  </AppContext.Provider>
}
