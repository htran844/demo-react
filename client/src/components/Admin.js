import AddProduct from "./admin/AddProduct";
import ListProduct from "./admin/ListProduct";

const Admin = (props) => {
  return (
    <div>
      <div className="container">
        <div className="admin-container">
          <AddProduct products={props.products} onAdd={props.onAdd} />

          <ListProduct products={props.products} onDelete={props.onDelete} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
