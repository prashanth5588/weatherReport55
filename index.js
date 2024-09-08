import {Component} from 'react'


import './index.css'

const initialCitiesList = []

class CitiesTable extends Component {
  state = {
    citiesList: initialCitiesList,

  }

  componentDidMount() {
    console.log('componentDidMount Called');
    this.getData();
  }

  getData = async event => {
 
    // const {citiesList} = this.state
    
    const url = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20'
  
    const response = await fetch(url)
    // console.log(response)
    const data = await response.json()
    console.log(data)
 
  }


  render() {

    return (
      <div className="app-container">
        <div className="responsive-container">
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell">CountryName</p>
              <hr className="separator" />
              <p className="table-header-cell">CountryCode</p>
              <hr className="separator" />
              <p className="table-header-cell">GeoNameId</p>
              <hr className="separator" />
              <p className="table-header-cell">Population</p>
              <hr className="separator" />
              <p className="table-header-cell">TimeZone</p>
            </li>
            
          </ul>
        </div>
      </div>
    )
  }
}
export default CitiesTable;
