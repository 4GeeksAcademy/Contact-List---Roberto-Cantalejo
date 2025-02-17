import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="agenda-container">
			<div className="agenda">
				<div className="agenda-pages">
					<div className="agenda-left-page"></div>
					<div className="agenda-right-page"></div>
				</div>
				<div className="agenda-split"></div>
				<div className="agenda-marker"></div>
				</div>
		</div>
	);
}; 