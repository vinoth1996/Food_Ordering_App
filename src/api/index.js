import axios from "axios";

export const fetchFoodData = async (dispatch) => {
    try {
        const { data } = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json');
        dispatch({ type: 'pushItems', items: data})
        return data;
    }catch(error) {
        console.log(error);
    }
};