export default function CountryCard( {name, population, region, capital, flag} ) {
  return (
    <div className="card">
      <img className="flag" src={flag} />
      <div className="card-overview">
        <h2>{name}</h2>
        <h3>Population: {population}</h3>
        <h3>Region: {region}</h3>
        <h3>Capital: {capital}</h3>
      </div>
    </div>
  )
}