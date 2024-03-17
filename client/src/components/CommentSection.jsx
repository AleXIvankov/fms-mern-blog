import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert, Button, Textarea } from "flowbite-react";

export default function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(null);

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
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };

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
    </div>
  );
}
