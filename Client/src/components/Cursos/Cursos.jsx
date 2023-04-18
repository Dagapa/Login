export const Cursos = (cursos) => {
    return(
        <div>
            {cursos.map((curso, index) => (
            <div key={index}>
                <p>{curso}</p>
            </div>))}
        </div>
    )
}