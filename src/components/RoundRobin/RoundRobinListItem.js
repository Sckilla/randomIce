const RoundRobinListItem = ({item}) => {
  return (  
    <tr>
      <td>
        <div className="member">
          <span>{item.name}</span>
        </div>
      </td>
    </tr>
  );
}
 
export default RoundRobinListItem;