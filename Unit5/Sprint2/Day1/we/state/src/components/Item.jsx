export const Item = ({ title, status, id, handleToggle }) => {
    console.log(title + "title");
    return (<><div>Title {title}- {status ? "done" : "NOt"}</div>
        <button onClick={() => handleToggle(id)} >Mark as done</button>
    </>
    )
}