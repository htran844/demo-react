import axios from "axios";
import { Link } from "react-router-dom";

const ListProduct = (props) => {
  const removeProduct = async (id) => {
    axios({
      method: "delete",
      url: `https://sandalshop.herokuapp.com/api/${id}`,
    });
    props.onDelete(id);
  };

  return (
    <div className="list-product border border-primary rounded p-2 mt-3">
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="w-25">
              Ảnh
            </th>
            <th scope="col" className="w-25">
              Tên
            </th>
            <th scope="col">Giá</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img
                  alt={product.title}
                  className="w-75"
                  src={product.images[0]}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="px-5">
                <Link to={`/edit/${product._id}`}>
                  <button className="btn btn-warning me-3">Edit</button>
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => removeProduct(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
