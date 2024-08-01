import CountryCard from './CountryCard'
import data from '../../data.json';

export default function Countries() {
  return (
    <div className="countries-section">
      {data.map(country => (
        <CountryCard
          key={country.name}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flags.png}
        />
      ))}
    </div>
  )
}