import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  language: string;
  commits_count?: number;
}

const GitHubCommitSkills: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [totalCommits, setTotalCommits] = useState<number>(0);

  // Fetch GitHub data and calculate commits
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/{your-username}/repos"
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data);
          let commits = 0;
          data.forEach((repo: Repo) => {
            commits += repo.commits_count || 0;
          });
          setTotalCommits(commits);
        } else {
          console.error("Received data is not an array", data);
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };
    fetchGitHubData();
  }, []);

  return (
    <section className="p-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold text-gray-900 mb-6">
        My GitHub Commit Stats & Tech Skills
      </h2>

      {/* Commit Info */}
      <div className="text-lg text-gray-800 mb-6">
        <p className="mb-3">Total Commits: {totalCommits} commits</p>
        <p>
          <a
            href="https://github.com/{your-username}"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
          >
            <FaGithub size={24} />
            <span>Check my GitHub</span>
          </a>
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-medium text-gray-800 mb-4">
          Technologies I Use
        </h3>
        <ul className="flex flex-wrap gap-4">
          <li className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700">
            JavaScript
          </li>
          <li className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700">
            TypeScript
          </li>
          <li className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700">
            React
          </li>
          <li className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700">
            Node.js
          </li>
          <li className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700">
            Express
          </li>
          <li className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700">
            MongoDB
          </li>
          <li className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700">
            Git
          </li>
        </ul>
      </div>

      {/* Repositories Section */}
      <div>
        <h3 className="text-2xl font-medium text-gray-800 mb-4">
          My Top Repositories
        </h3>
        <ul className="space-y-4">
          {Array.isArray(repos) && repos.length > 0 ? (
            repos.map((repo) => (
              <li
                key={repo.id}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:bg-gray-50"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-800 hover:text-blue-600"
                >
                  {repo.name}
                </a>
                <span className="text-sm text-gray-500">{repo.language}</span>
              </li>
            ))
          ) : (
            <p className="text-gray-600">No repositories found.</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default GitHubCommitSkills;
