import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";
import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }).then((resp) => {
        resp.json().then((data) => {
          if (data.success === true) {
            alert("Product Added");
          } else {
            alert("Failed");
          }
        });
      });
    }
  };
  return (
    <>
      <div className="add-product">
        <div className="addproduct-itemfield">
          <p>Product Title</p>
          <input
            value={productDetails.name}
            type="text"
            placeholder="type here"
            name="name"
            onChange={changeHandler}
          />
        </div>

        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input
              value={productDetails.old_price}
              type="text"
              placeholder="type here"
              name="old_price"
              onChange={changeHandler}
            />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input
              type="text"
              value={productDetails.new_price}
              placeholder="type here"
              name="new_price"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select
            name="category"
            id=""
            className="addproduct-selection"
            value={productDetails.category}
            onChange={changeHandler}
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              className="addproduct-thumbnail-img"
              alt=""
            />
          </label>
          <input
            type="file"
            name="image"
            id="file-input"
            hidden
            onChange={imageHandler}
          />
        </div>
        <button
          className="addproduct-btn"
          onClick={() => {
            Add_Product();
          }}
        >
          ADD
        </button>
      </div>
    </>
  );
};

export default AddProduct;