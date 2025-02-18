import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Agenda } from "../components/Agenda";
import ContactList from "../components/ContactList";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const user = "Roberto";

	return (
		<Agenda leftContent={<div>Contenido en la izquierda</div>} rightContent={<ContactList user={user}/>}/>
	);
}; 