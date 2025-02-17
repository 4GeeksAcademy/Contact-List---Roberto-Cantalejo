import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Agenda } from "../components/Agenda";
import ContactList from "./ContactList.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const user = "xXcarlos117Xx2";

	return (
		<Agenda leftContent={<div>Contenido en la izquierda</div>} rightContent={<ContactList user={user}/>}/>
	);
}; 