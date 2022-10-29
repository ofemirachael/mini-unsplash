import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ZLt4coBdp_37U-vZqjaBXwo82imhBHxoDInqg78bBdw'
    }
});