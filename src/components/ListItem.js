import icoCancel from "../assets/img/icoCancel.svg";

const ListItem = ({item, handleDeleteMember}) => {
  return (  
    <tr>
      <td>
        <div className="member">
          <span>{item.name}</span>
          <img src={icoCancel} alt="cancel icon" onClick={() => handleDeleteMember(item)} />
        </div>
      </td>
    </tr>
  );
}
 
export default ListItem;