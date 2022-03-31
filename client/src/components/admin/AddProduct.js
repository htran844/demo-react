import { useForm } from "react-hook-form";
import axios from "axios";
const AddProduct = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
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

    try {
      const addProduct = await axios({
        method: "post",
        url: "https://sandalshop.herokuapp.com/api",
        data: formData,
      });
      props.onAdd(addProduct.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add-product border border-primary rounded p-2 mt-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            className="form-control"
            type="text"
            placeholder="Tên sản phẩm"
            {...register("title")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Code sản phẩm</label>
          <input
            className="form-control"
            type="text"
            placeholder="Code sản phẩm"
            {...register("code")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
            className="form-control"
            type="number"
            placeholder="Giá sản phẩm"
            {...register("price")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Slug sản phẩm</label>
          <input
            className="form-control"
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

        <button type="submit" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
