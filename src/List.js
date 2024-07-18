import React from "react";

const List = ({ datas, setDatas }) => {
  function hadnleDelete(index) {
    const updatedData = datas.filter((data, ind) => ind !== index);
    setDatas(updatedData);
  }

  const render = datas.map((data, index) => {
    return (
      <tr key={index} className="text-xl">
        <td>{index + 1}</td>
        <td>{data}</td>
        <td>
          <button className="btn btn-error" onClick={() => hadnleDelete(index)}>
            Delete
          </button>
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
