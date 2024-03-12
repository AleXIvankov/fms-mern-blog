import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DashPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  console.log(userPosts);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
        }
      } catch (error) {}
    };
    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);
  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <Table hoverable className="shadow-md">
          <Table.Head>
            <Table.HeadCell>Date de mise à jour</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Titre de l'article</Table.HeadCell>
            <Table.HeadCell>Catégorie</Table.HeadCell>
            <Table.HeadCell>Supprimer</Table.HeadCell>
            <Table.HeadCell>
              <span>Modifier</span>
            </Table.HeadCell>
          </Table.Head>
          {userPosts.map((post) => (
            <Table.Body className="divide-y">
              <Table.Row className="bg-sky-100 dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                  {new Date(post.updatedAt).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/post/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-10 object-cover bg-slate-500"
                    />
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link
                    className="font-light text-gray-800 dark:text-white text-medium"
                    to={`/post/${post.slug}`}
                  >
                    {post.title}
                  </Link>
                </Table.Cell>
                <Table.Cell>{post.category}</Table.Cell>
                <Table.Cell>
                  <span className="text-red-500 font-medium hover:underline cursor-pointer">
                    Supprimer
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Link
                    className="text-teal-500 hover:underline"
                    to={`/update-post/${post._id}`}
                  >
                    <span>Modifier</span>
                  </Link>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      ) : (
        <p> Vous n'avez pas des posts</p>
      )}
    </div>
  );
}
