import type { GithubData } from "../App";
import React from "react";

type Props = {
  data: GithubData;
};

export default function Card({ data }: Props) {
  return (
    <div className="flex items-center justify-between px-4 py-5 pb-8 -mt-4 -ml-4 border-b border-gray-200 sm:px-6 ">
      <div className="mt-4 ml-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-12 h-12 rounded-full"
              src={data.avatar_url}
              alt="User avatar"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900 leading-6">
              {data.name}
              <span className="ml-2 text-sm text-gray-500 leading-5">
                @{data.login}
              </span>
            </h3>
            <p className="text-sm text-gray-500 leading-5">
              {data.public_repos} repositories. User since{" "}
              {data.created_at.slice(0, 4)}
            </p>
            <p className="text-sm text-gray-500 leading-5">
              {data.location || ""}
            </p>
            <p className="mt-1 text-sm text-gray-500 leading-5">{data.bio}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-shrink-0 mt-4 ml-4">
        <span className="inline-flex ml-3 rounded-md">
          <a href={data.html_url} target="_blank">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
            >
              <span>Profile</span>
            </button>
          </a>
          <a href={data.blog}>
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
            >
              <span>Website</span>
            </button>
          </a>
        </span>
      </div>
    </div>
  );
}
