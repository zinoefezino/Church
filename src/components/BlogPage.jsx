import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/image-1.jpg",
      title: "The Power of Faith",
      text: "Explore how faith can transform lives and bring communities together in times of need.",
      readMore: "Read More",
    },
    {
      id: 2,
      image: "/image-2.jpg",
      title: "Community Outreach Programs",
      text: "Learn about our initiatives to support local families and foster a stronger community bond.",
      readMore: "Read More",
    },
    {
      id: 3,
      image: "/image-3.jpg",
      title: "Spiritual Growth Workshops",
      text: "Join us in workshops designed to deepen your spiritual understanding and personal growth.",
      readMore: "Read More",
    },
    {
      id: 4,
      image: "/Hero.avif",
      title: "Upcoming Church Events",
      text: "Stay updated on our exciting events, from services to special gatherings and celebrations.",
      readMore: "Read More",
    },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mt-12 mb-12 text-gray-800">
            Church Blog
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.text}</p>
                  <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                    {post.readMore}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
