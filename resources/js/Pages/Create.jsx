import { router } from "@inertiajs/react";
import React, { useState } from "react";

export default function Create() {
    const [post, setPost] = useState({
        title: "",
        body: "",
    });

    const handleOnChange = (e) => {
        setPost({
            ...post,
            [e.target.id]: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        router.post("/", post);
    };
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter the post title"
                    value={post.title}
                    onChange={handleOnChange}
                />
                <label htmlFor="body">Body</label>
                <input
                    type="text"
                    id="body"
                    placeholder="Enter the post body"
                    value={post.body}
                    onChange={handleOnChange}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}
