import axios from "axios";
import Keys from "../constants/Keys";

const GITHUB_API_URL = "https://api.github.com";

const githubService = {
  getRepositories: async (username) => {
    const response = await axios.get(
      `${GITHUB_API_URL}/users/${username}/repos`,
      {
        headers: {
          Authorization: `Bearer ${Keys.GITHUB_TOKEN}`,
        },
      }
    );
    return response.data;
  },
};

export default githubService;
