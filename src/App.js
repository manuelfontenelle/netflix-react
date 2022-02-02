import "./App.css";
// import du JSON
import MoviesList from "./assets/movies.json";
import Logo from "./assets/logo.png";
import Section from "./components/Section";

function App() {
	return (
		<div className="App">
			<img className="logo" src={Logo} alt="" />
			<div className="items">
				{MoviesList.map((item, index) => {
					// console.log(item);
					return <Section item={item} key={index} />;
				})}
			</div>
		</div>
	);
}

export default App;
