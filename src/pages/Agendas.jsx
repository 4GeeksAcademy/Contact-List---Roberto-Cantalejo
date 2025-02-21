import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Agenda } from "../components/Agenda.jsx";
import ContactList from "../components/ContactList.jsx";
import React, { useContext } from 'react';
import { UserContext } from "../components/UserContext.jsx";
import ContactGenerator from "../components/ContactGenerator.jsx";

export const Agendas = () => {

  const {store, dispatch} =useGlobalReducer()
  const user = useContext(UserContext);

	return (
		<Agenda leftContent={<ContactGenerator/>} rightContent={<ContactList/>}/>
	);
}; 