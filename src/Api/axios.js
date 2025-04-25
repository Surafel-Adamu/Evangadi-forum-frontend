import axios from "axios";
const axiosInstance = axios.create({
	// baseURL: "http://localhost:2017/api",
	baseURL: "https://evangadi-forum-backend-deployment-qveq.onrender.com",
});

export default axiosInstance;
