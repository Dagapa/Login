import { useState } from "react";
import { students } from "../../utils/get";
import { Link } from "react-router-dom"
import { Cursos } from "../Cursos/Cursos";
import styles from './Search.module.css'

const data = await students();

export const Search = () => {
  const [search, setSearch] = useState('')
  const [students, setStudents] = useState(data)
  const [selectedCourse, setSelectedCourse] = useState(null)

  const handleSearch = (event) => {
    const inputSearch = event.target.value
    setSearch(inputSearch)
  }

  const handleStudent = () => {
    const searchedStudent = data.filter(student => student.Nombre.toLowerCase().includes(search.toLowerCase()) || student.Apellido.toLowerCase().includes(search.toLowerCase()))
    setStudents(searchedStudent)
  }

  const handleButton = (courseName) => {
    setSelectedCourse(courseName === selectedCourse ? null : courseName)
  }

  const handleClose = () => {
    setSelectedCourse(null)
  }

  return (
    <div>
      <header>
        <input value={search} onChange={handleSearch} type="text" placeholder="Buscar" />
        <button onClick={() => handleStudent()}>buscar</button>
      </header>

      <section className={styles['content-container']}>
        <div className={selectedCourse ? styles.infoBlur : styles.info}>
          <p>NOMBRE</p>
          <p>APELLIDO</p>
          <p>CEDULA</p>
          <p>CURSOS</p>
          <p></p>
        </div>
        {students.map(item => (
          <div key={item.Id}>
            <div className={selectedCourse ? styles.studentBlur : styles.student}>
              <p>{item.Nombre}</p>
              <p>{item.Apellido}</p>
              <p>{item.Cedula}</p>
              <p>{item.Cursos}</p>
              <button onClick={() => handleButton(item.NombreCurso)}>Cursos</button>
            </div>
            {selectedCourse === item.NombreCurso && (
              <div className={styles.modal}>
                <div className={styles.fix}><p>⚠⚠ Pagina en poceso ⚠⚠</p></div>
                <p>{item.NombreCurso}</p>
                <div className={styles.close} onClick={handleClose}>X</div>
              </div>
            )}
          </div>
        ))}
      </section>

    </div>
  )
}