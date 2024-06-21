import { router } from "@inertiajs/react";
import React, { useState } from "react";

export default function Edit({ post }) {
    const [editPost, setEditPost] = useState({
        title: post.title,
        body: post.body,
    });

    const handleOnChange = (e) => {
        setEditPost({
            ...editPost,
            [e.target.id]: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        router.put("/", editPost);
    };
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter the post title"
                    value={editPost.title}
                    onChange={handleOnChange}
                />
                <label htmlFor="body">Body</label>
                <input
                    type="text"
                    id="body"
                    placeholder="Enter the post body"
                    value={editPost.body}
                    onChange={handleOnChange}
                />
                <button type="submit">Create</button>
            </form>
            <a href="/">back to home</a>
        </div>
    );
}
