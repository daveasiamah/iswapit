import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.43.163:9000/api",
});

export default apiClient;
