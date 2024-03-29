import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group relative w-full max-w-72 border border-teal-500 hover:border-2 h-60 overflow-hidden rounded-lg sm:w-[430px] transition-all">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-40 w-full object-cover group-hover:h-32 transition-all duration-300 z-30"
        />
      </Link>
      <div className="flex flex-col p-3 gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-100px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-1 rounded-md m-1"
        >
          Lire l'article
        </Link>
      </div>
    </div>
  );
}
