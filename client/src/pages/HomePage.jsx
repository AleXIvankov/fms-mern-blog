import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="flex flex-col text-left">
      <div className=" flex flex-col gap-5 lg:p-24 p-5 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Bienvenue sur{" "}
          <Link to="/" className="  font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-orange-400 via-blue-200 to-blue-700 rounded-lg text-white">
              FMS
            </span>
            Blog
          </Link>{" "}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-xs p-4 max-w-2xl sm:text-sm ">
          Plongez dans le monde dynamique de notre travail quotidien sur la FMS.{" "}
          <br /> Ensemble, nous partageons nos connaissances, nos réussites et
          nos défis, dans le but de perfectionner nos compétences et d'atteindre
          l'excellence opérationnelle.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-400 hover:underline"
        >
          Afficher tous les articles
        </Link>
      </div>

      <div className="p-3 max-w-4xl bg-amber-50 dark:bg-indigo-900 w-11/12 mx-auto rounded-lg">
        <CallToAction />
      </div>
      <div className="max-w-6xl mx-auto flex flex-col py-5 ">
        {posts && posts.length > 0 && (
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-center gap-6">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 dark:text-teal-300 hover:underline text-center p-3"
            >
              Voir tous les posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
