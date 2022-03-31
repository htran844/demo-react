import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Admin from "./components/Admin";
import Edit from "./components/admin/Edit";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
function App() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    async function getData() {
      const getAll = await axios({
        method: "get",
        url: "https://sandalshop.herokuapp.com/api",
      });
      setProduct(getAll.data);
    }
    getData();
  }, []);
  const addProduct = (product) => {
    setProduct([...products, product]);
  };
  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product._id !== id);
    setProduct(newProducts);
  };
  const updateProduct = (product) => {
    const newProducts = products.map((item) =>
      product._id === item._id ? product : item
    );
    setProduct(newProducts);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route
            path="/admin"
            exact
            render={(props) => (
              <Admin
                products={products}
                onAdd={addProduct}
                onDelete={deleteProduct}
              />
            )}
          ></Route>
          <Route
            path="/edit/:id"
            render={(props) => <Edit onUpdate={updateProduct} />}
          />
          <Route path="/signin" exact component={SignIn}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
