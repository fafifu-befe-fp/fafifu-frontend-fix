// import React, { useState } from 'react'
// import { useDropzone } from 'react-dropzone';
// import { useForm } from 'react-hook-form'
// import { useDispatch } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { useRef } from 'react'
// import userSlice from '../../store/user'
// import style from './AddProduct.module.css'

// const FormAddProduct = () => {

//     const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
//     const files = acceptedFiles.map(file => (
//         <li key={file.path}>
//         {file.path} - {file.size} bytes
//         </li>
//     ));

//     const [selectedFile, setSelectedFile] = useState(null);
//     const inputName = useRef()
//     // const inputLastname = useRef()
//     // const inputLocation = useRef()
//     // const inputPhoto = useRef()

//     const { register, handleSubmit, formState } = useForm()
  
//     const formSubmitHandler = (data) => {
//         // event.preventDefault()
//         // const data ={
//         //     name: inputName.current.value,
//         //     price: 21231,
//         //     categoryId: [1,2,3,4,5],
//         //     description: "inputDeskripsi.current.value",
//         // }
//         const postData = {
//           name: data.name,
//           image: data.image
//         }


//         const formData = new FormData();
//         // Mengisi formData dengan menggunakan append
//         formData.append('data', JSON.stringify(data))
//         formData.append('image', data.image)
//         // Memasukan photo ke formData
//         // acceptedFiles.forEach( file => {
//         //     formData.append('image', file)
//         // } )
//         console.log('ini postdata: ', postData)
//         console.log('formData', formData)

//         // const res = await axios.post('https://api-fafifu-secondhand.herokuapp.com/v1/product/', formData, {
//         //     headers: {
//         //       Authorization: localStorage.getItem('jwtToken')
//         //     }
//         // })
//     }

//     return (
//         <>
//         <form onSubmit={ handleSubmit(formSubmitHandler) }>
//             <div className="col-sm-12 mb-3 col-md-12">
//                 <label className="form-label">Nama Produk</label>
//                 <input type="text" className="form-control" id="Nama Produk" placeholder='Nama Produk' {...register('name', {required: true})} autoComplete="true"/>
//             </div>
//             {/* <div className="col-sm-12 mb-3 col-md-12">
//                 <label className="form-label">Harga Produk</label>
//                 <input type="number" className="form-control" id="Harga Produk" placeholder='Rp 0,00' aria-label="Rp 0,00" {...register('price', {required: true})} autoComplete="true"/>
//             </div>
//             <div className="col-sm-12 mb-3 col-md-12">
//                 <label hclassName="form-label">Kategori</label>
//                 <select id="inputState" className="form-select selectedoption" {...register('categoryId', {required: true})}>
//                     <option selected disabled>Pilih Kategori</option>
//                     <option id="1" value="1">Hobi</option>
//                     <option id="2" value="2">Kendaraan</option>
//                     <option id="3" value="3">Baju</option>
//                     <option id="4" value="4">Elektronik</option>
//                     <option id="5" value="5">Kesehatan</option>
//                 </select>
//             </div>
//             <div className="col-sm-12 mb-3 col-md-12">
//                 <label className="form-label">Deskripsi</label>
//                 <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...register('description', {required: true})} placeholder='Tulis deskripsi produkmu'></textarea>
//             </div> */}
            
//             <div className="col-sm-12 mb-3 col-md-12">
//                 <label className="form-label">FOTO</label>
//                 <input type="file" className="form-control" id="Foto Produk" placeholder='Nama Produk' {...register('image', {required: true})} autoComplete="true"/>
//             </div>
//             {/* <input
//             type="file"
//             value={selectedFile}
//             onChange={(e) => setSelectedFile(e.target.files[0])}
//             /> */}
//             <button type="submit" className={`${style.buttonTerbitkan} col-6 mt-3`}>Terbitkan</button>
//         </form>
//         </>
//     )
// }

// export default FormAddProduct

//BATAS LAMA

import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useRef } from 'react'
import userSlice from '../../store/user'
import style from './AddProduct.module.css'
// import DummyImage from '../../../public/img/casio.svg'

const FormAddProduct = () => {
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [saveImage, setSaveImage] = useState(null);

    // NAVIGATE
    const navigate = useNavigate();
    //state validation
    const [validation, setValidation] = useState();

    const handleUploadChange =  (e) => {
        console.log('ini ee', e)
        console.log('ini emau dipake', e.target.files[0])
        // let uploaded = e.target.files[0];
        // setImage(URL.createObjectURL(uploaded));
        // await setSaveImage(uploaded);
        // setSaveImage(e.target.files[0]);
        setSaveImage(e.target.files);
    }
    
    const saveProduct = async(e)=>{
        e.preventDefault();

        let formData = new FormData();

        formData.append('name', "test")
        formData.append('categoryId', 1)
        formData.append('description', "[1,2,3,4,5]")
        formData.append('price', 123)
        console.log('ini save', saveImage)
        const saveEa = saveImage
        console.log('ini saveEa', saveEa)
        // console.log('ini save.FILE', saveImage.name)
        formData.append('image', saveEa)

        console.log("formData", formData)
        console.log("formDataimage", formData.image)

        try {
            // console.log("saveImage",saveImage)
            await axios.post('https://api-fafifu-secondhand.herokuapp.com/v1/product/',
            // { 
            //     name: "name",
            //     description: "description",
            //     categoryId: [1,2,3,4,5],
            //     price: 2313,
            //     image: saveImage
            // }
                formData
                // {
                //     image:saveImage
                // }
                , {
                headers: {
                    Authorization: localStorage.getItem('jwtToken'),
                    'content-type': 'multipart/form-data'
                }
            }
            )
            .then(() => {
                navigate("/");
            });
        } catch (error) {
            setValidation(error.response.data.errors);
            console.log(error.response.data.errors);
        }
    };
    
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mt-3">
                <h2>Add Product</h2>
                <Link to="/contact" className="btn btn-primary rounded-15">Go Back</Link>
            </div>

            {
                validation &&
                <div className="alert alert-danger rounded-15 my-2" role="alert">
                    <ul className="mt-0 mb-0">
                    { validation.map((error, index) => (
                        <li key={index}>{ `${error.message}` }</li>
                    )) }
                    </ul>
                </div>
            }

            <div className="row my-4">
                <form onSubmit={saveProduct} className="col-12 col-md-8" encType="multipart/form-data">
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input 
                        type="text"
                        className="form-control" 
                        placeholder="Product Name..."
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Product Price</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Product Price..."
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        min="0"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea 
                            className="form-control" 
                            rows="3"
                            value={description}
                            onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select className="form-select" value={category} onChange={(e)=>setCategory(e.target.value)}>
                            <option defaultValue hidden>Select Category</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Robbery">Robbery</option>
                            <option value="Romance">Romance</option>
                            <option value="Funny">Funny</option>
                            <option value="Fury">Fury</option>
                        </select>
                    </div>
                    <img src={image} alt="" className="img-thumbnail rounded-15"/>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Image</label>
                        <input 
                            className="form-control" 
                            type="file" 
                            id="formFile"
                            accept="image/*"
                            onChange={handleUploadChange}
                            // onChange={(e)=>setPrice(e.target.value)}
                            />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </div>
                </form>
                {/* <div className="result col-12 col-md-4">
                    <h3>{name ? name : 'Product Name'} - {price ? <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> : '-'}</h3>
                    <p>{category ? category : 'Product Category'}</p>
                    <p>{deskripsi ? deskripsi : 'Product Description'}</p>
                </div> */}
            </div>
        </div>
    )
}
    
export default FormAddProduct