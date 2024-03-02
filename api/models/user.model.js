import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://r.search.yahoo.com/_ylt=AwrFEhxG.uJl_YUYyXRlAQx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzg2NTE0NjAwNzRmNjYwNzc3ZDhhNjZhNTVhZGQyMzRlBGdwb3MDMQRpdANiaW5n/RV=2/RE=1709402822/RO=11/RU=https%3a%2f%2fvectorified.com%2fmy-account-icon/RK=2/RS=LqbTvIAofxSnlTSXf_boFJ1w53E-",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
