import Vue from "vue";
import axios from "axios";

// axios.defaults.baseURL = "https://vue-coder-a8aea-default-rtdb.firebaseio.com/";
// axios.defaults.headers.common["Authorization"] = "abcs123";
// axios.defaults.headers.get["Accepts"] = "applications/json";

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: "https://vue-coder-a8aea-default-rtdb.firebaseio.com/",
            headers: {
                Authorization: "abc123",
            },
        });

        Vue.prototype.$http.interceptors.request.use((config) => {
            // console.log(config.method);
            return config;
        });

        Vue.prototype.$http.interceptors.response.use(
            (res) => {
                // const array = [];

                // for (let chave in res.data) {
                //     array.push({ id: chave, ...res.data[chave] });
                // }

                // res.data = array;

                return res;
            },
            (error) => Promise.reject(error)
        );
    },
});
