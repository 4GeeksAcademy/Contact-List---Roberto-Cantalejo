import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

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
    
    const deleteContact = async (id) => { 
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}/contacts/${id}`, {
        method: 'DELETE',
      })
      getContactList();
    }

  return (
    <div className="contact-list">
    <h2 className='text-center'>Lista de contactos de {user}</h2>
    {contacts.length === 0 ? (
      <p>No hay contactos disponibles.</p>
    ) : (
      <ul className='list-unstyled'>
        {contacts.map((contact) => (
            <li key={contact.id} className="p-2 d-flex justify-content-between align-items-center">
            <div className="flex-grow-1">
              <div>
                <strong>Nombre:</strong> {contact.name}
              </div>
              <div>
                <strong>Teléfono:</strong> {contact.phone}
              </div>
              <div>
                <strong>Email:</strong> {contact.email}
              </div>
              <div>
                <strong>Dirección:</strong> {contact.address}
              </div>
            </div>
            <button type="button" className="btn btn-danger" onClick={() => deleteContact(contact.id)}>
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default ContactList