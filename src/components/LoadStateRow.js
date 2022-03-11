const LoadStateRow = ({
  str,
  handleLoad,
  handleDelete,
  element,
}) => {
  return (
    <tr>
      <td>{element.name}</td>
      <td>
        <div className="input">
          <button onClick={() => handleLoad(element.data)}>{str.load}</button>
        </div>
      </td>
      <td>
        <div className="input">
          <button onClick={() => handleDelete(element.name)}>{str.delete}</button>
        </div>
      </td>
    </tr>
  );
};
 
export default LoadStateRow;