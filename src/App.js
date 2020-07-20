import React, { useState } from "react";
import { FetchData } from "./api/FetchData";
import "./App.css";

function App() {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState("");
	const [loading, setLoading] = useState(false);

	const search = async (e) => {
		if (e.key === "Enter") {
			setLoading(true);
			setQuery("");
			const data = await FetchData(query);
			setWeather(data);
			setLoading(false);
		}
	};

	return (
		<div className="main-container">
			<input
				type="text"
				className="search"
				placeholder="Search..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyPress={search}
			/>

			{loading ? (
				<div className="city">
					<h2>Loading...</h2>
				</div>
			) : (
				<>
					{weather.main && (
						<div className="city">
							<h2 className="city-name">
								<span>{weather.name}</span>
								<sup>{weather.sys.country}</sup>
							</h2>

							<div className="city-temp">
								{Math.round(weather.main.temp)}
								<sup>&deg;C</sup>
							</div>

							<div className="info">
								<img
									src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
									alt={weather.weather[0].description}
									className="city-icon"
								/>
								<p>{weather.weather[0].description}</p>
							</div>
						</div>
					)}
				</>
			)}

			<footer className="footer">
				<div className="container">
					<span className="text-muted">
						© 2020 Copyright:
						<a
							href="https://github.com/harsh2124/pwa-react-weather-app"
							target="blank"
						>
							<b> Harsh Patel</b>
						</a>
					</span>
				</div>
			</footer>
		</div>
	);
}

export default App;
