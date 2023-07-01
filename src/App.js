import logo from "./logo.svg";
import "./App.css";

const TABLE_SOURCE = [
  { id: 1, nombre: "Pablo Gomez", direccion: "4a oriente sur", correo: "fakemail_1@mail.com.mx", telefono: 9611234567 },
  { id: 2, nombre: "Juan Benitez", direccion: "5a oriente Norte", correo: "fakemail_2@mail.com.mx", telefono: 9614783215 },
  { id: 3, nombre: "Mike Gonzalez", direccion: "9a oriente sur", correo: "fakemail_3@mail.com.mx", telefono: 9615481367 },
  { id: 4, nombre: "Jesus Arguello", direccion: "8a oriente sur", correo: "fakemail_4@mail.com.mx", telefono: 9618794687 },
  { id: 5, nombre: "Tom Riddle", direccion: "7a poniente sur", correo: "fakemail_5@mail.com.mx", telefono: 9611234567 },
  { id: 6, nombre: "John Doe", direccion: "10a poniente Norte", correo: "fakemail_6@mail.com.mx", telefono: 9611234567 },
  { id: 7, nombre: "Phill Doe", direccion: "4a oriente sur", correo: "fakemail_7@mail.com.mx", telefono: 9611234567 }
];

function App() {
  return (
    <div className="App">
      <div class="container mt-5 mb-5 pt-5 pb-5">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Correo</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {TABLE_SOURCE.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.direccion}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
