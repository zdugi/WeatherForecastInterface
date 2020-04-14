import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DisplayManagerSettings } from './manager-dialog/manager-dialog.component';

/*
{
            "dt": 1586822400,
            "main": {
                "temp": 286.96,
                "feels_like": 283.6,
                "temp_min": 285.47,
                "temp_max": 286.96,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1002,
                "humidity": 59,
                "temp_kf": 1.49
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 84
            },
            "wind": {
                "speed": 3.47,
                "deg": 249
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-04-14 00:00:00"
        },
*/

export interface PartialRecord {
	value: number;
	timestamp: string;
}

export interface PartialWeatherRecord {
	location: string;
	records: PartialRecord[];
}

export interface WeatherRecord {
	dt: number;
	main: {
		temp: number,
		feels_like: number,
		temp_min: number,
		temp_max: number,
		pressure: number,
		sea_level: number,
		grnd_level: number,
		humidity: number,
		temp_kf: number
	};
	weather: [
	{
		id: number,
		main: string,
		description: string,
		icon: string
	}
	];
	clouds: {
		all: number
	};

	wind: {
		speed: number,
		deg: number
	};
	sys: {
		pod: string
	};
	dt_txt: string;
}

export interface WeatherResponse {
	cod: string;
	message: number;
	cnt: number;
	list: WeatherRecord[];
	city: {
		id: number;
		name: string;
		coord: {
			lat: number;
			lon: number;
		};
		country: string;
		population: number;
		timezone: number;
		sunrise: number;
		sunset: number;
	};
}

@Injectable({
  providedIn: 'root'
})
export class HermesService {
	API_KEY: string = '10afd3bf1f2c38f60f2deb168cb4369d';
	API_URL: string = 'https://api.openweathermap.org/data/2.5/forecast'

  constructor(private http: HttpClient) { }

  getWeather(settings: DisplayManagerSettings) {
  	let params = new HttpParams();

  	params = params.append('q', 'Novi Sad');
    params = params.append('appid', this.API_KEY);


  	return this.http.get<WeatherResponse>(this.API_URL, {params : params})
  }
}
