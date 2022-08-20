import React from "react";

export default function Projects() {
  return (
    <div class="max-w-xxl rounded overflow-hidden shadow-lg grid grid-cols-3">
      <div class="px-6 py-4">
        <img class="w-full" src="chess.png" alt="chess project" />
        <div class="font-bold text-xl mb-2">
          <a href="https://kylelarsen12.github.io/Milestone-Chess/">Chess</a>
        </div>
        <p class="text-base">
          Still a work in progress, but here is my attempt at a chess app!
        </p>
      </div>

      <div class="px-6 py-4">
        <img class="w-full" src="restrant.png" alt="restrant project" />
        <div class="font-bold text-xl mb-2">
          <a href="https://desolate-sands-11629.herokuapp.com/">REST-rant</a>
        </div>
        <p class="text-base">A mock restaurant review website</p>
      </div>

      <div class="px-6 py-4">
        <img class="w-full" src="breadcrud.png" alt="bread-crud project" />
        <div class="font-bold text-xl mb-2">
          <a href="https://limitless-tor-60686.herokuapp.com/">bread-CRUD</a>
        </div>
        <p class="text-base">A basic site implementing CRUD</p>
      </div>
    </div>
  );
}
