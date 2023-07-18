import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        "key": "1961eab95b5d4a00a5f7ea413ad5520a"   
    }
});

export {CanceledError};