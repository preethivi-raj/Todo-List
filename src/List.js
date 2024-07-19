import { PiTrashThin } from "react-icons/pi";

const List = ({ datas, setDatas }) => {
  function hadnleDelete(index) {
    const updatedData = datas.filter((data, ind) => ind !== index);
    setDatas(updatedData);
    localStorage.setItem("task", JSON.stringify(updatedData));
  }

  const render = datas.map((data, index) => {
    return (
      <tr key={index} className="text-xl">
        <td>{index + 1}</td>
        <td>{data}</td>
        <td>
          <PiTrashThin  className="cursor-pointer" onClick={() => hadnleDelete(index)}>
            Delete
          </PiTrashThin>
        </td>
      </tr>
    );
  });

  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>{render}</tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
