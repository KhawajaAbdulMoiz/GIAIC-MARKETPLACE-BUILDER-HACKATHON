"use client";
import React, { useEffect, useState } from "react";
import { blogs } from "../../sanity-nextjs/src/sanity/lib/queries";
import { sanityClient } from "../../sanity-nextjs/src/sanity/lib/client";
import { urlFor } from "../../sanity-nextjs/src/sanity/lib/image";
import { Blog } from "../../sanity-nextjs/types/blog";
import Image from "next/image";
import { IoChevronForwardOutline } from "react-icons/io5";

const BlogListing = () => {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  // Fetch blog data from Sanity
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const fetchedBlogs: Blog[] = await sanityClient.fetch(blogs);
        setBlogPosts(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }
    fetchBlogs();
  }, []);

  // Retrieve comments from localStorage (persist data)
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage when comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Handle adding new comment
  const handleAddComment = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, comment]);
      setComment(""); // Clear input field after submitting
    }
  };

  return (
    <>
      <header className="relative bg-black">
        <div
          className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mostused.jpg')" }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-bounce">
              Blogs
            </h1>
            <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2 animate-slide-in-up">
              <span>Home</span>
              <IoChevronForwardOutline />
              <span className="text-[#FF9F0D]">Our Blogs</span>
            </p>
          </div>
        </div>
      </header>

      <div className="relative w-full bg-white">
        <div className="w-full flex flex-col md:flex-row bg-white py-12">
          {/* Blog Content */}
          <div className="w-full md:w-[60%] px-4">
            {blogPosts.length === 0 ? (
              <p className="text-center text-xl">Loading blog posts...</p>
            ) : (
              blogPosts.map((post) => (
                <div key={post.id}>
                  <Image
                    src={urlFor(post.image).url()}
                    alt="Blog Image"
                    width={872}
                    height={520}
                    className="mb-4"
                  />
                  <h1 className="font-bold text-2xl mb-6 text-[#333333]">{post.title}</h1>
                  <p className="w-[872px] h-[96px] py-[30px] text-[#4F4F4F]">
                    {post.excerpt}
                  </p>

                  {/* Blog Content */}
                  <div className="bg-[#FF9F0D] p-6">
                    <p className="text-white font-bold text-xl">{post.content}</p>
                  </div>
                </div>
              ))
            )}

            {/* Comment Section */}
            <div className="mt-12">
              <h1 className="text-2xl font-bold">Comments - {comments.length}</h1>

              {/* Display Comments */}
              <div className="mt-4 space-y-4">
                {comments.length === 0 ? (
                  <p>No comments yet. Be the first to comment!</p>
                ) : (
                  comments.map((comment, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded-md">
                      <p>{comment}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Post a Comment */}
              <div className="mt-10">
                <h2 className="text-xl border-b-[1px] pb-4 font-bold">Post a Comment</h2>
                <div className="flex gap-4 mt-5">
                  <input
                    placeholder="Name"
                    type="text"
                    className="w-full md:w-[48%] px-4 py-3 border border-gray-300"
                  />
                  <input
                    placeholder="Email"
                    type="email"
                    className="w-full md:w-[48%] px-4 py-3 border border-gray-300"
                  />
                </div>
                <textarea
                  placeholder="Write a Comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full mt-4 p-4 border border-gray-300 h-32"
                />
                <button
                  onClick={handleAddComment}
                  className="mt-[20px] mb-[20px] bg-[#FF9F0D] text-white px-6 py-3 rounded-[30px] border-[1px] border-[#FF9F0D] rounded-[20px] text-[white] placeholder:pl-2 pl-6 focus:outline-none"
                >
                  Post a Comment
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-[40%] px-4">
            {/* Search, Recent Posts, etc. */}
            <div className="flex items-center mb-8">
              <input
                placeholder="Search Your Keyword"
                type="text"
                className="w-full px-4 py-3 bg-zinc-100 border border-gray-300"
              />
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-100 p-4 mb-8">
              <h2 className="font-bold text-lg">Recent Posts</h2>
              <div className="space-y-4">
                <Image
                  src="/images/menu5.jpeg"
                  alt="Recent Post 1"
                  width={323}
                  height={107}
                  className="cursor-pointer"
                />
                <Image
                  src="/images/menu6.jpeg"
                  alt="Recent Post 2"
                  width={323}
                  height={107}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {/* Ad or Filter Menu */}
            <div className="bg-gray-100 p-4">
              <Image
                src="/images/menu3.jpeg"
                alt="Filter Menu"
                width={323}
                height={62}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogListing;
