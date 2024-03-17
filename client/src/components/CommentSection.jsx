import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert, Button, Textarea } from "flowbite-react";
import Comment from "./Comment";

export default function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(null);
  const [comments, setComments] = useState([]);
  console.log(comments);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 250) {
      return;
    }
    try {
      const res = await fetch("/api/comment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment("");
        setCommentError(null);
        setComments([data, ...comments]);
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comment/getPostComments/${postId}`);
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getComments();
  }, [postId]);

  return (
    <div className=" max-w-4xl mx-auto w-full p-3">
      {currentUser ? (
        <div className="flex items-center gap-1 my-8 text-xs">
          <p className="">Connecté en tant que:</p>
          <img
            className="h-5 w-5 object-cover rounded-full"
            src={currentUser.profilePicture}
            alt=""
          />
          <Link
            to={"/dashboard?tab=profile"}
            className="text-xs text-cyan-600 hover:underline"
          >
            #{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className=" max-w-xl  mx-auto text-sm text-teal-600 dark:text-teal-300 my-5 flex justify-between">
          Vous devez être connecté pour commenter.
          <Link
            to={"/signin"}
            className="text-blue-600 dark:text-teal-200 hover:underline"
          >
            Se connecter
          </Link>
        </div>
      )}
      {currentUser && (
        <form
          onSubmit={handleSubmit}
          className="border border-teal-400 rounded-xl p-3"
        >
          <Textarea
            placeholder="Ajouter un commentaire..."
            rows="3"
            maxLength="250"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <div className="flex justify-between mt-3 items-center">
            <p className="text-xs text-gray-500 dark:text-gray-300">
              {250 - comment.length}
            </p>
            <Button
              outline
              size="xs"
              gradientDuoTone="purpleToBlue"
              type="submit"
            >
              Commenter
            </Button>
          </div>
          {commentError && (
            <Alert color="failure" className="mt-5">
              {commentError}
            </Alert>
          )}
        </form>
      )}
      {comments.length === 0 ? (
        <p className="text-sm my-5">Aucun commentaire pour l'instant.</p>
      ) : (
        <>
          <div className="text-sm my-5 flex items-center gap-1">
            <p>Commentaires</p>
            <div className="border border-gray-400 dark:border-gray-200 py-1 px-2 rounded-sm">
              <p>{comments.length}</p>
            </div>
          </div>
          {comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </>
      )}
    </div>
  );
}
