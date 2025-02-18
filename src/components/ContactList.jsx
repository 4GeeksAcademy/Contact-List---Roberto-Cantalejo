import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

function ContactList({user}) {

    const [contacts, setContacts] = useState([])   // Hago un useState para almacenar los contactos cargados.
    const [editedValue, setEditedValue] = useState('')  // Hago un useState para almacenar el valor editado.
    const [editing, setEditing] = useState({ id: null, field: '' })   // Hago un useState para almacenar el id y el campo que se está editando. 

    const getContactList = async() => { // Aquí meto una llamada a los contactos del usuario que esté elegido.
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}`);
        const data = await response.json();
        setContacts(data.contacts);
    }

    useEffect(() => {   // Llamo a la agenda de contactos cada vez que se cambia de usuario
      getContactList();
    }, [user])
    
    const deleteContact = async (id) => { // Función para borrar un contacto
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}/contacts/${id}`, {
        method: 'DELETE',
      })
      getContactList();
    }

    const editContact = async (id, field) => {  // Función para editar un contacto
      await fetch(`https://playground.4geeks.com/contact/agendas/${user}/contacts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ [field]: editedValue }), // Lo que se envía a la API es un objeto con el campo editado y el nuevo valor
        headers: {
          'Content-Type': 'application/json',
        },
      })
      getContactList() // Refresco la lista de contactos.
      setEditing({ id: null, field: '' }); // Devuelvo el valor de edición a sus valores por defecto. Esto es importante mas adelante
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
            <div className="data-field">
                <strong>Nombre:</strong>
                {editing.id === contact.id && editing.field === 'name' ? ( // Se muestra el dato o un input dependiendo de si ciertos datos coinciden o no.
                  <input
                    type="text"
                    value={editedValue} // Esto hace que el input tenga de inicio el valor que ya estaba.
                    onChange={(e) => setEditedValue(e.target.value)} // Esto hace que el valor del input se actualice al momento.
                    onKeyDown={(e) => {if (e.key === 'Enter') {editContact(contact.id, 'name')}}} // Aquí hacemos que al pulsar Enter se actualice el contacto
                    onBlur={() => setEditing({ id: null, field: '' })} // Aquí hacemos que al salir del input se quite el input.
                  />
                ) : (
                  <span onClick={() => { 
                    setEditing({ id: contact.id, field: 'name' }); // Cuando se hace click, hace que coincidan los campos para permitir la edición.
                    setEditedValue(contact.name); // Hace que editedValue sea igual al valor de contacto y por lo tanto el value inicial del input.
                  }}> {contact.name}</span> 
                )}
                <button className="btn btn-sm ms-0" id="pencil"><i className="bi bi-pencil"></i></button>
              </div>
              <div className="data-field">
                <strong>Teléfono:</strong>
                {editing.id === contact.id && editing.field === 'phone' ? ( 
                  <input
                  type="text"
                  value={editedValue} 
                  onChange={(e) => setEditedValue(e.target.value)} 
                  onKeyDown={(e) => {if (e.key === 'Enter') {editContact(contact.id, 'phone')}}} 
                  onBlur={() => setEditing({ id: null, field: '' })}
                  />
                ) : (
                  <span onClick={() => { 
                    setEditing({ id: contact.id, field: 'phone' });
                    setEditedValue(contact.phone);
                  }}> {contact.phone}</span> 
                )}
                <button className="btn btn-sm ms-0" id="pencil"><i className="bi bi-pencil"></i></button>
              </div>
              <div className="data-field">
                <strong>Email:</strong>
                {editing.id === contact.id && editing.field === 'email' ? ( 
                  <input
                  type="text"
                  value={editedValue} 
                  onChange={(e) => setEditedValue(e.target.value)} // Esto hace que el valor del input se actualice al momento.
                  onKeyDown={(e) => {if (e.key === 'Enter') {editContact(contact.id, 'email')}}} // Aquí hacemos que al pulsar Enter se actualice el contacto
                  onBlur={() => setEditing({ id: null, field: '' })} // Aquí hacemos que al salir del input se quite el input.
                  />
                ) : (
                  <span onClick={() => { 
                    setEditing({ id: contact.id, field: 'email' });
                    setEditedValue(contact.email);
                  }}> {contact.email}</span> 
                )}
                <button className="btn btn-sm ms-0" id="pencil"><i className="bi bi-pencil"></i></button>
              </div>
              <div className="data-field">
                <strong>Dirección:</strong>
                {editing.id === contact.id && editing.field === 'address' ? ( 
                  <input
                  type="text"
                  value={editedValue} 
                  onChange={(e) => setEditedValue(e.target.value)} // Esto hace que el valor del input se actualice al momento.
                  onKeyDown={(e) => {if (e.key === 'Enter') {editContact(contact.id, 'address')}}} // Aquí hacemos que al pulsar Enter se actualice el contacto
                  onBlur={() => setEditing({ id: null, field: '' })} // Aquí hacemos que al salir del input se quite el input.
                  />
                ) : (
                  <span onClick={() => { 
                    setEditing({ id: contact.id, field: 'address' });
                    setEditedValue(contact.address);
                  }}> {contact.address}</span> 
                )}
                <button className="btn btn-sm ms-0" id="pencil"><i className="bi bi-pencil"></i></button>
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