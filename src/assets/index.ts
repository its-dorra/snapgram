// icons
import addPostIcon from "@/assets/icons/add-post.svg";
import backIcon from "@/assets/icons/back.svg";
import bookmarkIcon from "@/assets/icons/bookmark.svg";
import chatIcon from "@/assets/icons/chat.svg";
import deleteIcon from "@/assets/icons/delete.svg";
import editIcon from "@/assets/icons/edit.svg";
import fileUploadIcon from "@/assets/icons/file-upload.svg";
import filterIcon from "@/assets/icons/filter.svg";
import followIcon from "@/assets/icons/follow.svg";
import galleryAddIcon from "@/assets/icons/gallery-add.svg";
import googleIcon from "@/assets/icons/google.svg";
import homeIcon from "@/assets/icons/home.svg";
import likeIcon from "@/assets/icons/like.svg";
import likedIcon from "@/assets/icons/liked.svg";
import loaderIcon from "@/assets/icons/loader.svg";
import logoutIcon from "@/assets/icons/logout.svg";
import peopleIcon from "@/assets/icons/people.svg";
import postsIcon from "@/assets/icons/posts.svg";
import profilePlaceholderIcon from "@/assets/icons/profile-placeholder.svg";
import saveIcon from "@/assets/icons/save.svg";
import savedIcon from "@/assets/icons/saved.svg";
import searchIcon from "@/assets/icons/search.svg";
import shareIcon from "@/assets/icons/share.svg";
import wallpaperIcon from "@/assets/icons/wallpaper.svg";

import animePic from "@/assets/images/anime-pic.jpg";
// images
import logo from "@/assets/images/logo.svg";
import profile from "@/assets/images/profile.png";
import sideImage from "@/assets/images/side-img.svg";
import { linkOptions } from "@tanstack/react-router";

export {
  addPostIcon,
  animePic,
  backIcon,
  bookmarkIcon,
  chatIcon,
  deleteIcon,
  editIcon,
  fileUploadIcon,
  filterIcon,
  followIcon,
  galleryAddIcon,
  googleIcon,
  homeIcon,
  likedIcon,
  likeIcon,
  loaderIcon,
  logo,
  logoutIcon,
  peopleIcon,
  postsIcon,
  profile,
  profilePlaceholderIcon,
  savedIcon,
  saveIcon,
  searchIcon,
  shareIcon,
  sideImage,
  wallpaperIcon,
};

export const sidebarLinks = [
  {
    imgURL: homeIcon,
    route: linkOptions({ to: "/" }),
    label: "Home",
  },
  {
    imgURL: wallpaperIcon,
    route: linkOptions({ to: "/explore" }),
    label: "Explore",
  },
  {
    imgURL: peopleIcon,
    route: linkOptions({ to: "/all-users" }),
    label: "People",
  },
  {
    imgURL: bookmarkIcon,
    route: linkOptions({ to: "/saved" }),
    label: "Saved",
  },
  {
    imgURL: galleryAddIcon,
    route: linkOptions({ to: "/create-post" }),
    label: "Create Post",
  },
];

export const bottombarLinks = [
  {
    imgURL: homeIcon,
    route: linkOptions({ to: "/" }),
    label: "Home",
  },
  {
    imgURL: wallpaperIcon,
    route: linkOptions({ to: "/explore" }),
    label: "Explore",
  },
  {
    imgURL: bookmarkIcon,
    route: linkOptions({ to: "/saved" }),
    label: "Saved",
  },
  {
    imgURL: galleryAddIcon,
    route: linkOptions({ to: "/create-post" }),
    label: "Create",
  },
];

export const posts = [
  {
    user: {
      name: "Anime Fanatic",
      imageUrl: profile,
    },
    content: "Just finished watching Attack on Titan. What a masterpiece!",
    tags: ["anime", "AttackOnTitan", "masterpiece"],
    imageUrl: animePic,
  },
  {
    user: {
      name: "Manga Lover",
      imageUrl: profile,
    },
    content: "Reading One Piece is the highlight of my week!",
    tags: ["manga", "OnePiece", "adventure"],
    imageUrl: animePic,
  },
  {
    user: {
      name: "Otaku Sensei",
      imageUrl: profile,
    },
    content: "Naruto's journey is so inspiring. Believe it!",
    tags: ["anime", "Naruto", "inspiration"],
    imageUrl: animePic,
  },
  {
    user: {
      name: "Studio Ghibli Fan",
      imageUrl: profile,
    },
    content: "Spirited Away is a timeless classic.",
    tags: ["anime", "StudioGhibli", "classic"],
    imageUrl: animePic,
  },
  {
    user: {
      name: "Shonen Enthusiast",
      imageUrl: profile,
    },
    content: "Dragon Ball Z will always be legendary.",
    tags: ["anime", "DragonBallZ", "legendary"],
    imageUrl: animePic,
  },
];
