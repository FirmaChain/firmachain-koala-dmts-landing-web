import axios from "axios";

export const getArticleList = () => {
    return axios.get<Array<any>>(`${process.env.API_HOST}/articles.json`);
};
