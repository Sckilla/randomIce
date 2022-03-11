const SequenceRaffleResultRow = ({raffleMember}) => {
  return (  
    <tr>
      <td>{raffleMember.order}</td>
      <td>{raffleMember.name}</td>
    </tr>
  );
}
 
export default SequenceRaffleResultRow;