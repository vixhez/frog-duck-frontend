// import the library version of axios
import axios from "axios";
// create a version of axios with useful defaults
export default axios.create({
    baseURL: "http://ec2-18-135-100-25.eu-west-2.compute.amazonaws.com/api/",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",
        // use your own key
        // Authorization: "SHA256:T++n668CZBdE+gupyDwy01EREYoAlwdh8CtmMHDgUio"
},
});