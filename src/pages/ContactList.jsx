import React, { useEffect, useState } from 'react'

function ContactList({user}) {

    const [contacts, setContacts] = useState([]);   // Hago un useState para almacenar los contactos cargados.

    const getContactList = async() => { // Aquí meto una llamada a los contactos del usuario que esté elegido.
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}`);
        const data = await response.json();
        setContacts(data.contacts);
    }

    useEffect(() => {   // Llamo a la agenda de contactos cada vez que se cambia de usuario
      getContactList();
    }, [user])
    

  return (
    <div className="contact-list">
    <h2 className='text-center'>Lista de Contactos</h2>
    {contacts.length === 0 ? (
      <p>No hay contactos disponibles.</p>
    ) : (
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className='p-2'>
            <div>
              <strong>Nombre:</strong> {contact.name}
            </div>
            <div>
              <strong>Email:</strong> {contact.phone}
            </div>
            <div>
              <strong>Email:</strong> {contact.email}
            </div>
            <div>
              <strong>Dirección:</strong> {contact.address}
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default ContactList