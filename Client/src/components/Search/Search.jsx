import React, { useEffect, useState } from "react";
import { students } from "../../utils/get";
import styles from "./Search.module.css";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [studentsData, setStudentsData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

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
      (student) =>
        student.nombre.toLowerCase().includes(search.toLowerCase()) ||
        student.apellido.toLowerCase().includes(search.toLowerCase()) ||
        student.cedula.toLowerCase().includes(search.toLowerCase())
    );
    setStudentsData(searchedStudent);
  };

  const handleButton = (student) => {
    setSelectedStudent(student === selectedStudent ? null : student);
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
        <div className={selectedStudent ? styles.infoBlur : styles.info}>
          <p>NOMBRE</p>
          <p>APELLIDO</p>
          <p>CEDULA</p>
          <p>CURSOS</p>
          <p>SELECT</p>
        </div>
        {studentsData.map((student) => (
          <div key={student.id}>
            <div className={selectedStudent && selectedStudent.id === student.id ? styles.studentBlur : styles.student}>
              <p>{student.nombre}</p>
              <p>{student.apellido}</p>
              <p>{student.cedula}</p>
              <p>{student.noMaterias}</p>
              <button onClick={() => handleButton(student)}>Cursos</button>
            </div>
            {selectedStudent && selectedStudent.id === student.id && (
              <div className={styles.modal}>
                <div className={styles.modal}>
                  <div className={styles.close}>
                    <div
                      className={styles._closeItem}
                      onClick={() => setSelectedStudent(null)}
                    >
                      X
                    </div>
                  </div>
                  <div className={styles.fix}>
                    <p>⚠⚠ Pagina en proceso ⚠⚠</p>
                  </div>
                  <p>{student.materias}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};
