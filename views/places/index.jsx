const React = require ('react')
const Def = require ('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div key={place.name} className="col-sm-6">
          <h2>
            <a href={`/places/${place.id}`}>
              {place.name}
              </a>
              </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name}/>
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def title={'All Places: RESTRant'}>
          <main>
              <h1>African Places to Rant or Rave About</h1>
              <a href="/places/new">
                <button classname="btn btn-primary">Add a new place</button>
              </a>
              <div className="row">
                  {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  
module.exports = index