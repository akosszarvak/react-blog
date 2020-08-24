import React from "react";
import { PostMasonry } from "../components/common";
import trending from "../assets/mocks/trending";
import featured from "../assets/mocks/featured";

export default function Home() {
  return (
    <section className="container home">
      <div className="row">
        <h2>Trending Posts</h2>
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  );
}
