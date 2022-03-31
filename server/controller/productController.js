const productModel = require("../models/productModel.js");
const imgbbUploader = require("imgbb-uploader");
const path = require("path");
module.exports.test = async (req, res) => {
  var duongDan = path.join(__dirname, "../index.html");
  res.sendFile(duongDan);
};
module.exports.getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(400).json("505 loi");
    }
  } catch (error) {
    res.status(500).json("505 loi server");
  }
};
module.exports.getAll = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports.updateOne = async (req, res) => {
  try {
    const idProduct = req.params.id;
    let product = await productModel.findById(idProduct);
    if (!product) {
      return res.status(400).json({
        status: "fail",
        message: "Không tìm thấy sản phẩm",
      });
    }
    // get images if admin changes images
    let images = req.files.map((file) => {
      return file.path;
    });

    if (images.length > 0) {
      // images = images.map((file) => file.filename)

      // upload img to host
      images = await Promise.all(
        images.map(async (file) => {
          // console.log(file)
          const upload = await imgbbUploader(process.env.IMGBB_KEY, file);
          return upload.url;
        })
      );
      product.images = images;
    }
    for (let item in req.body) {
      if (product[item]) product[item] = req.body[item];
    }
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports.deleteOne = async (req, res) => {
  try {
    const idProduct = req.params.id;
    const product = await productModel.findOneAndDelete({ _id: idProduct });
    if (product) {
      res.status(200).json("xoa thanh cong");
    } else {
      res.status(400).json("khong co san pham nay");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports.createProduct = async (req, res) => {
  try {
    const { title, code, price, slug, color, size } = req.body;
    // console.log(color);
    // console.log(req.files);
    let images = req.files.map((file) => {
      return file.path;
    });
    // console.log(images);
    images = await Promise.all(
      images.map(async (file) => {
        const upload = await imgbbUploader(process.env.IMGBB_KEY, file);
        return upload.url;
      })
    );
    let product = await productModel.findOne({
      code: code,
    });
    if (!product) {
      product = new productModel({
        title,
        code,
        price,
        slug,
        color,
        size,
        images: [...images],
      });
      await product.save();
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};
