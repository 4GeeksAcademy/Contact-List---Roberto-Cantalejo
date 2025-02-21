import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Agenda } from "../components/Agenda.jsx";
import ContactList from "../components/ContactList.jsx";
import React, { useContext } from 'react';
import { UserContext } from "../components/UserContext.jsx";

export const Agendas = () => {

  const {store, dispatch} =useGlobalReducer()
  const user = useContext(UserContext);

	return (
		<Agenda leftContent={<div>Contenido en la izquierda</div>} rightContent={<ContactList/>}/>
	);
}; 