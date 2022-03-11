import ListItem from "./ListItem";

const List = ({collection, setCollection}) => {

  const handleDeleteItem = (itemToDelete) => {
    setCollection(collection.filter(item => item !== itemToDelete));
  }

  return (  
    <table className="member-list">
      <tbody>
        {collection.map((item,key) => (
          <ListItem
            key={key}
            item={item}
            handleDeleteMember={handleDeleteItem}
          />
        ))}
      </tbody>
    </table>
  );
}
 
export default List;