import axios from "axios";

const api = {
  putUserRequest: async (data: {email: string; phone: string}) => {
    return await axios.put(`https://localhost:3001/users`, data);
  },
}

export default api;
