import React, {useState,useEffect} from "react";

const Posts= () => {
    const [post,setPost]= useState([]);
    const [error,setError]= useState('')
    const [loading,setLoading]= useState(true)

    useEffect(() =>{
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"GET", //optional
})

.then((response) => {
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json()
})
.then((data) => {
    setPost(data);
    setLoading(false)
})
.catch((error) => {
    setError(error.message);
    setLoading(false);
});
    },[]);

return (
    <div>
            { loading ? (
                <p>Loading.....</p>) : post.map((post) => (<p>{post.title}</p>))
            }
        
    </div>
); 
};

export default Posts;




