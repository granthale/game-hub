import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        "key": '43cbaed0b98b4e92975027f11efa2a5e'
    }
});