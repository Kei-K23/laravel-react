import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ posts }) {
    const [data, setData] = useState(posts);

    const handleOnDelete = (id) => {
        router.delete(`/posts/${id}`);
        setData(data.filter((item) => item.id !== id));
    };

    return (
        <>
            <div>
                <h1>My Super Blog</h1>
                <a href="/create">Create new blog</a>
            </div>
            <hr />
            {data &&
                data.map((item) => (
                    <div key={item.id}>
                        <div>
                            <h2>{item.title}</h2>
                            <button
                                type="button"
                                onClick={() => handleOnDelete(item.id)}
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    router.put(`/posts/edit/${item.id}`);
                                }}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    router.get(`/posts/show/${item.id}`)
                                }
                            >
                                Show{" "}
                            </button>
                        </div>
                        <p>{item.body}</p>
                    </div>
                ))}
        </>
    );
}
