import { CityName } from "./_components/CityName";
import { Container } from "./_components/Container";

// Weather API: https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}
// Countries API: https://countriesnow.space/api/v0.1/countries

export default async function Home() {
  const citiesJSON = await fetch(
    "https://countriesnow.space/api/v0.1/countries"
  );
  const cities = await citiesJSON.json();

  const citiesWithCountry = cities.data.map((el) => {
    return el.cities.map((cityName) => {
      return { cityName: cityName, countryName: el.country };
    });
  });

  return <Container citiesWithCountry={citiesWithCountry} />;
}
