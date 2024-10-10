"use client";
import React from "react";
import NotFoundTemplate from "@/components/404-template";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div>
      <NotFoundTemplate
        title="Page Not Found"
        desc="Oops! The page you're looking for doesn't exist. This could be due to several reasons the URL might have been mistyped, the page may have been moved or deleted, or there could be a temporary server issue."
        url="/"
        urlText="Back to Home"
        Icon={FaHome}
      />
    </div>
  );
};

export default NotFound;
