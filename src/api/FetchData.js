import Axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const key = "669c2e8f04da89be5d009d4983e9a572";

export const FetchData = async (query) => {
	const { data } = await Axios.get(URL, {
		params: {
			q: query,
			units: "metric",
			APPID: key,
		},
	});
	return data;
};
