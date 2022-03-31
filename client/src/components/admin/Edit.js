import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Edit = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios({
      method: "get",
      url: `https://sandalshop.herokuapp.com/api/${id}`,
    }).then((res) => {
      setProduct(res.data);
    });
  }, []);
  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("images", data.images[0]);
    formData.set("title", data.title);
    formData.set("code", data.code);
    formData.set("price", data.price);
    formData.set("slug", data.slug);
    for (let index = 0; index < data.color.length; index++) {
      formData.append("color[]", data.color[index]);
    }
    for (let index = 0; index < data.size.length; index++) {
      formData.append("size[]", data.size[index]);
    }
    axios({
      method: "put",
      url: `https://sandalshop.herokuapp.com/api/${id}`,
      data: formData,
    }).then((res) => {
      props.onUpdate(res.data);
    });
    history.push("/admin");
  };
  return (
    <>
      <div className="container">
        <div className="edit">
          <div className="edit-product border border-primary rounded p-2 mt-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Tên sản phẩm</label>
                <input
                  className="form-control"
                  defaultValue={product.title}
                  type="text"
                  placeholder="Tên sản phẩm"
                  {...register("title")}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Code sản phẩm</label>
                <input
                  className="form-control"
                  defaultValue={product.code}
                  type="text"
                  placeholder="Code sản phẩm"
                  {...register("code")}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Giá sản phẩm</label>
                <input
                  className="form-control"
                  defaultValue={product.price}
                  type="number"
                  placeholder="Giá sản phẩm"
                  {...register("price")}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Slug sản phẩm</label>
                <input
                  className="form-control"
                  defaultValue={product.slug}
                  type="text"
                  placeholder="slug sản phẩm"
                  {...register("slug")}
                />
              </div>
              <div className="list-color">
                <label className="form-label">Màu </label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="red"
                    {...register("color")}
                  />
                  <label className="form-check-label">Đỏ</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="blue"
                    {...register("color")}
                  />
                  <label className="form-check-label">Xanh</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="black"
                    {...register("color")}
                  />
                  <label className="form-check-label">Đen</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="yellow"
                    {...register("color")}
                  />
                  <label className="form-check-label">Vàng</label>
                </div>
              </div>
              <div className="list-size">
                <label className="form-label">Size </label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="35"
                    {...register("size")}
                  />
                  <label className="form-check-label">35</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="36"
                    {...register("size")}
                  />
                  <label className="form-check-label">36</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="37"
                    {...register("size")}
                  />
                  <label className="form-check-label">37</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="38"
                    {...register("size")}
                  />
                  <label className="form-check-label">38</label>
                </div>
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text">Chọn ảnh</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".jpg, .jpeg, .png"
                  multiple
                  {...register("images")}
                />
              </div>

              {/* {errors.exampleRequired && <span>This field is required</span>} */}

              <button type="submit" className="btn btn-warning">
                Cập nhật sản phẩm
              </button>
            </form>
          </div>
          <div className="image-product border border-primary rounded mx-3 p-2 mt-3">
            <img alt={product.title} src={product.images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
