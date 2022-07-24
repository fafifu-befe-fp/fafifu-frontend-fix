// inventaris > frontend > src > components > AddProduct.js

// import axios from "axios";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import NumberFormat from 'react-number-format';
// import productImage from "../img/item-default.png";

// const AddProduct = () => {
//     // STATE FOR DB
//     const [name, setName] = useState();
//     const [category, setCategory] = useState();
//     const [deskripsi, setDeskripsi] = useState();
//     const [price, setPrice] = useState();
//     const [image, setImage] = useState(productImage);
//     const [saveImage, setSaveImage] = useState(null);
//     // NAVIGATE
//     const navigate = useNavigate();
//     //state validation
//     const [validation, setValidation] = useState();

//     const handleUploadChange = (e) => {
//         let uploaded = e.target.files[0];
//         setImage(URL.createObjectURL(uploaded));
//         setSaveImage(uploaded);
//     }

//     const saveProduct = async(e)=>{
//         e.preventDefault();

//         try {
//             await axios.post('http://localhost:5000/products',{
//                 name,
//                 price,
//                 category,
//                 deskripsi,
//                 saveImage
//             })
//             .then(() => {
//                 navigate("/contact");
//             });
//         } catch (error) {
//             setValidation(error.response.data.errors);
//             console.log(error.response.data.errors);
//         }
//     };

    
//     return (
//         <div className="container">
//             <div className="d-flex justify-content-between align-items-center mt-3">
//                 <h2>Add Product</h2>
//                 <Link to="/contact" className="btn btn-primary rounded-15">Go Back</Link>
//             </div>

//             {
//                 validation &&
//                 <div className="alert alert-danger rounded-15 my-2" role="alert">
//                     <ul className="mt-0 mb-0">
//                     { validation.map((error, index) => (
//                         <li key={index}>{ `${error.message}` }</li>
//                     )) }
//                     </ul>
//                 </div>
//             }

//             <div className="row my-4">
//                 <form onSubmit={saveProduct} className="col-12 col-md-8" encType="multipart/form-data">
//                     <div className="mb-3">
//                         <label className="form-label">Product Name</label>
//                         <input 
//                         type="text"
//                         className="form-control" 
//                         placeholder="Product Name..."
//                         value={name}
//                         onChange={(e)=>setName(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Product Price</label>
//                         <input 
//                         type="number" 
//                         className="form-control" 
//                         placeholder="Product Price..."
//                         value={price}
//                         onChange={(e)=>setPrice(e.target.value)}
//                         min="0"
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Description</label>
//                         <textarea 
//                             className="form-control" 
//                             rows="3"
//                             value={deskripsi}
//                             onChange={e => setDeskripsi(e.target.value)}></textarea>
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Category</label>
//                         <select className="form-select" value={category} onChange={(e)=>setCategory(e.target.value)}>
//                             <option defaultValue hidden>Select Category</option>
//                             <option value="Adventure">Adventure</option>
//                             <option value="Sci-Fi">Sci-Fi</option>
//                             <option value="Robbery">Robbery</option>
//                             <option value="Romance">Romance</option>
//                             <option value="Funny">Funny</option>
//                             <option value="Fury">Fury</option>
//                         </select>
//                     </div>
//                     <img src={image} alt="" className="img-thumbnail rounded-15"/>
//                     <div className="mb-3">
//                         <label htmlFor="formFile" className="form-label">Image</label>
//                         <input 
//                             className="form-control" 
//                             type="file" 
//                             id="formFile"
//                             accept="image/*"
//                             onChange={handleUploadChange}/>
//                     </div>
//                     <div className="mb-3">
//                         <button type="submit" className="btn btn-primary w-100">Submit</button>
//                     </div>
//                 </form>
//                 <div className="result col-12 col-md-4">
//                     <h3>{name ? name : 'Product Name'} - {price ? <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> : '-'}</h3>
//                     <p>{category ? category : 'Product Category'}</p>
//                     <p>{deskripsi ? deskripsi : 'Product Description'}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AddProduct


import { useState } from "react";
import "./../App.css";
const FileUpload = () => {
 const [selectedFile, setSelectedFile] = useState();
 const [isFilePicked, setIsFilePicked] = useState(false);
 const changeHandler = (event) => {
  setSelectedFile(event.target.files[0]);
  event.target.files[0] && setIsFilePicked(true);
 };
 const handleSubmission = () => {
  // HANDLING FILE AS SENDING FILE INTO BACKEND
  if (!isFilePicked) return;
  const formData = new FormData();
  formData.append("File", selectedFile);
   // ALSO ADD RANDOM VALUE IF YOU WANT LIKE STRING , OBJECT OR      ARRAY
  formData.append("carDetail", {
   car: "honda",
   engine: "1498 cc",
   fuel_Type: "Petrol & Diesel",
 });
// API CALL
 fetch("http://localhost:3001/", {
  method: "POST",
  body: formData,
 })
 .then((response) => response.json())
 .then((result) => {
  console.log("Success:", result);
 })
 .catch((error) => {
   console.error("Error:", error);
  });
 };
return (
 <div className="App">
 <input type="file" name="file" onChange={changeHandler} />
  <div>
   <button onClick={handleSubmission}>Submit</button>
  </div>
 {isFilePicked ? (
 <div>
  <p>Filename: {selectedFile.name}</p>
  <p>Filetype: {selectedFile.type}</p>
  <p>Size in bytes: {selectedFile.size}</p>
  <p>
   lastModifiedDate:{" "}
   {selectedFile.lastModifiedDate.toLocaleDateString()}
  </p>
 </div>
 ) : (
 <div>
  <p>Select a file</p>
  </div>
 )}
 </div>
 );
};
export default FileUpload;