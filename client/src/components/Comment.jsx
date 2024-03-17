import React, { useEffect, useState } from "react";
import moment from "moment";

export default function Comment({ comment }) {
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comment]);
  return (
    <div className="flex p-4 border-b border-gray-300 dark:border-gray-500 text-sm">
      <div className="flex-shrink-0 mr-3">
        <img
          className="w-10 h-10 rounded-full bg-gray-300"
          src={user.profilePicture}
          alt={user.username}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <span className="font-medium text-sm mr-1 truncate">
            {user ? `${user.username}:` : "anonymous user"}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-300">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-2 ">
          {comment.content}
        </p>
      </div>
    </div>
  );
}
