import React, {useState,useEffect} from "react";

export default function FetchData(){
    const [posts,setPosts]= useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(() =>{
        async function fetchMyData(){
            try {
                const response= await fetch("https://jsonplaceholder.typicode.com/users");
                const data= await response.json();
                setPosts(data);
            }
            catch (error){
                console.error('error', error);   
            }
            finally{
                setLoading(false)
            }
        }
        fetchMyData();
    },[]);

    return(
        <div>
            { loading ?
            (<p>Loading....</p>) : (posts.map((post) => <p key={post.id}>{post.name}, {post.username},{post.email} </p>) )}
        </div>
    );
};