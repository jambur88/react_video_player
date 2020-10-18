import axios from "axios";

const KEY = "AIzaSyCB-MJgHvCe7IWyZpfzlRKY5J3daSjV8IU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
