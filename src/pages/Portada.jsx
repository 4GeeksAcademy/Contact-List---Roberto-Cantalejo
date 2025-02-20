import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Agenda } from "../components/Agenda";
import ContactList from "../components/ContactList";
import AgendaCerrada from "../components/AgendaCerrada.jsx";

export const Portada = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<AgendaCerrada/>
	);
}; 