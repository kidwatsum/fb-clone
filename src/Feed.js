import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed(){
    return <div className="feed">
        <StoryReel/>
        <MessageSender/>

        <Post 
        profilePic="https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
        image="https://media.istockphoto.com/id/122204403/photo/binary-code.jpg?s=612x612&w=0&k=20&c=PKfESC0tGyCflS4erBmkoTi9OQoQm8Wr4fMTJGJdgmE="
        username="Martin Jovanovski"
        timestamp="Timestamp"
        message="This is code"
        />
        <Post
        profilePic="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
        image="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
        username="Martinijan Tomaki"
        timestamp="Timestamp"
        message="This is nature!"
        />
        
        

    </div>
}

export default Feed;