import GroupRaffleResultGroupMember from "./GroupRaffleResultGroupMember";

const GroupRaffleResultGroup = ({ str, group }) => {
  console.log(str);
  return (
    <div className="flex-div-auto">
      <table className="group-table">
        <thead>
          <tr>
            <th>{str.group}{group.name}</th>
          </tr>
        </thead>
        <tbody>
          {group.members.map((member, key) => (
            <GroupRaffleResultGroupMember key={key} member={member} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupRaffleResultGroup;
