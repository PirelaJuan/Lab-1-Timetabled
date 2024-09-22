import './App.css';
import './components/Calendar'
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Intinerary for 7 Days in New York City</h1>
      <h2>Welcome to New York City, Felipe! Check out this calendar to get to know the city and see all the sights during your stay.</h2>
      <Calendar/>
    </div>
  )
}

export default App