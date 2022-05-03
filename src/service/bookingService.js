import { axiosInstance } from "./service";

const API_URL = "/api/booking";


const adminBooking = async (data) => {
    try {


        console.log("Data: ",data)
        const response = await axiosInstance
            .post(API_URL + "/add-booking", data);
        return response.data;
    }
    catch (e) {
        console.log('API Error: ',e);
        throw e;
    }
};

export default{
    adminBooking
};