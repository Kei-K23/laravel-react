import React from "react";

export default function Show() {
    return (
        <div>
            <div>
                <h2>{post.title}</h2>
                <button type="button" onClick={() => handleOnDelete(post.id)}>
                    Delete
                </button>
                <button
                    type="button"
                    onClick={() => router.put(`/posts/${post.id}`, post)}
                >
                    Edit
                </button>
            </div>
            <p>{post.body}</p>
            <a href="/posts">Back to home</a>
        </div>
    );
}
