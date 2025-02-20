import React, { useEffect, useState } from 'react'

function AgendaCerrada() {

    const [user, setUser] = useState("")
    const [userList, setUserList] = useState([])
    const [newUser, setNewUser] = useState("")

    const createUser = async (userName) => { // Crea un nuevo usuario
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/${userName}`, {
            method: 'POST'
        })
        setUser(userName);
        setNewUser("")
        getUserList()
    }

    const getUserList = async () => { // Recibe la lista de usuarios
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/`)
        const data = await response.json()
        setUserList(data.agendas)
    }

    useEffect(() => { // Llamo a la lista de agendas nada mas cargar, para que se puedan seleccionar
        getUserList()
    }
    , [])


    return (
        <div className="agenda-container">
          <div className="agenda">
            <div className="agenda-cover">
              <div className="upper-agenda-cover">
                <span>{user !== "" ? `${user}'s agenda` : "No one's agenda"}</span>
                <i className="bi bi-cup-hot-fill"></i>
              </div>
              <div className="lower-agenda-cover">
                <div className="left-lower-agenda-cover">
                  <h3>Crear nuevo usuario</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault()
                    if (newUser.trim() !== "") {
                        createUser(newUser)
                    }
                  }}>
                    <input
                      type="text"
                      placeholder="Nombre de usuario"
                      value={newUser}
                      onChange={(e) => setNewUser(e.target.value)}
                    />
                    <button type="submit">Crear</button>
                  </form>
                </div>
                <div className="right-lower-agenda-cover">
                  <h3>Seleccionar usuario existente</h3>
                  <select value={user} onChange={(e) => setUser(e.target.value)}>
                    <option value="">Selecciona un usuario</option>
                    {userList.map((user) => (
                      <option key={user.id}>
                        {user.slug}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default AgendaCerrada