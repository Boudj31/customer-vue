import axios from "axios";
import { API_URL } from "../helpers/apiUrl.js";

export async function getAllCustomerRequest() {
    return await axios.get(`${API_URL}customers/all`)
}


export async function registerCustomer(customer) {
    return await axios.post(`${API_URL}customers/register`, customer)
}

