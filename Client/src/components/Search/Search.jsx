import { useEffect, useState } from "react";
import { students } from "../../utils/get";
import styles from "./Search.module.css";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [studentsData, setStudentsData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentData = await students();
        setStudentList(studentData);
        setStudentsData(studentData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const inputSearch = event.target.value;
    setSearch(inputSearch);
  };

  const handleStudent = () => {
    const searchedStudent = studentList.filter(
      (student) => student.nombre.toLowerCase().includes(search.toLowerCase()) || student.apellido.toLowerCase().includes(search.toLowerCase()) || student.cedula.toLowerCase().includes(search.toLowerCase())
    );
    setStudentsData(searchedStudent);
  };

  const handleButton = (courseName) => {
    setSelectedCourse(courseName === selectedCourse ? null : courseName);
  };

  const handleClose = () => {
    console.log('estoy');
    setSelectedCourse(null);
  };


  return (
    <div>
      <header>
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Buscar"
        />
        <button onClick={handleStudent}>buscar</button>
      </header>

      <section className={styles["content-container"]}>
        <div className={selectedCourse ? styles.infoBlur : styles.info}>
          <p>NOMBRE</p>
          <p>APELLIDO</p>
          <p>CEDULA</p>
          <p>CURSOS</p>
          <p></p>
        </div>
        {studentsData.map((item) => (
          <div key={item.id}>
            <div
              className={selectedCourse ? styles.studentBlur : styles.student}
            >
              <p>{item.nombre}</p>
              <p>{item.apellido}</p>
              <p>{item.cedula}</p>
              <p>{item.noMaterias}</p>
              <button onClick={() => handleButton(item.materias)}>
                Cursos
              </button>
            </div>
            {selectedCourse === item.materias && (
              <div className={styles.modal}>
                <div className={styles.fix}>
                  <p>⚠⚠ Pagina en proceso ⚠⚠</p>
                </div>
                <p>{item.materias}</p>
                <button className={styles.close} onClick={handleClose}>
                  X
                </button>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};
