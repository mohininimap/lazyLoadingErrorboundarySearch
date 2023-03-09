import React,{useState,useEffect} from 'react';
import axios from 'axios';
const SearchItemFromList = () => {
    const [loading,setLoading]=useState(false)
    const [posts,setPosts]=useState([])
    const [searchTitle,setSearchTitle]=useState("")

    useEffect(()=>{
 const loadPosts=async ()=>{
const response=await axios.get(`https://jsonplaceholder.typicode.com/posts`)
setPosts(response.data);
setLoading(false)
 }
 
 loadPosts();
    },[])
  return (
   <>
   <h3>Search Filter</h3>
   <input 
   type="text"
   placeholder='Search...'
   onChange={(e)=>setSearchTitle(e.target.value)}
   />
   {loading?(<h4>Loading ...</h4>):(
    posts.filter((value)=>
        // if(searchTitle===""){
        //     return value;
        // }else if(value.title.toLowerCase().includes(searchTitle.toLocaleLowerCase())){
        //  return value;
        // }
        searchTitle===""?value:value.title.toLowerCase().includes(searchTitle.toLocaleLowerCase())
    )
   .map((item)=><h5 key={item.id}>{item.title}</h5>)
   )}
   </>
  )
}

export default SearchItemFromList