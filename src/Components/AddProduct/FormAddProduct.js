import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import userSlice from '../../store/user'
import style from './AddProduct.module.css'

const FormAddProduct = () => {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
        {file.path} - {file.size} bytes
        </li>
    ));

    const { register, handleSubmit, formState } = useForm()

    // const [loginStatus, setLoginStatus] = useState({
    //     success: false,
    //     message: '',
    // });
  
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
  
    const formSubmitHandler = (data) => {
        console.log('inidata', data)
      const postData = {
        name: data.name,
        price: data.price,
        description: data.description,
        isPublished: true,
        categoryId: data.categoryId,
        // categoryId: 2,
        // image: acceptedFiles
        // image: []
      }
  
      axios.post('https://fafifu-backend-api.herokuapp.com/v1/product/', postData, {
        headers: {
          Authorization: localStorage.getItem('jwtToken')
        },
      })
      .then( res => {
        console.log(res)
      })
      .catch ( err =>
        console.log(err)
      )
    //   console.log('inidata', data)
    }
    
    return (
        <>
        <form onSubmit={ handleSubmit(formSubmitHandler) }>
            <div className="col-sm-12 mb-3 col-md-12">
                <label className="form-label">Nama Produk</label>
                <input type="text" className="form-control" id="Nama Produk" placeholder='Nama Produk' {...register('name', {required: true})} autoComplete="true"/>
            </div>
            <div className="col-sm-12 mb-3 col-md-12">
                <label className="form-label">Harga Produk</label>
                <input type="number" className="form-control" id="Harga Produk" placeholder='Rp 0,00' aria-label="Rp 0,00" {...register('price', {required: true})} autoComplete="true"/>
            </div>
            <div className="col-sm-12 mb-3 col-md-12">
                <label hclassName="form-label">Kategori</label>
                <select id="inputState" className="form-select selectedoption" {...register('categoryId', {required: true})}>
                    <option selected disabled>Pilih Kategori</option>
                    <option id="1" value="1">Hobi</option>
                    <option id="2" value="2">Kendaraan</option>
                    <option id="3" value="3">Baju</option>
                    <option id="4" value="4">Elektronik</option>
                    <option id="5" value="5">Kesehatan</option>
                </select>
            </div>

            {/* SELASA, 19/7: Error 500, Image ga dapet, cek append dsb. */}

            <div className="col-sm-12 mb-3 col-md-12">
                <label className="form-label">Deskripsi</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...register('description', {required: true})} placeholder='Tulis deskripsi produkmu'></textarea>
            </div>

            {/* <div className="col-sm-12 mb-3 col-md-12 d-none">
                <input {...register('image', {required: true})} type="file" />
            </div> */}
            <button type="submit" className={`${style.buttonTerbitkan} col-6 mt-3`}>Terbitkan</button>
            {/* <div className='button__wrap d-flex justify-content-center'>
                <button className={`${style.buttonPreview} col-6 mt-3 me-2`}>Preview</button>
            </div> */}
            
        </form>

        {/* <div {...getRootProps({className: 'dropzone'})} className='d-flex flex-column justify-content-end'>
            <label className="form-label">Foto Produk</label>
            <img src='img/addproduct.svg' {...register('image', {required: true})} alt='' className={`${style.imgAdd}`}/>
        </div>
        <ul>
            {files}
        </ul> */}
        </>
    )
}

export default FormAddProduct