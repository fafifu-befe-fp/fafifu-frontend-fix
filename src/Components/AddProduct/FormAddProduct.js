import React from 'react'
import { useDropzone } from 'react-dropzone';
import style from './AddProduct.module.css'

const FormAddProduct = () => {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
        {file.path} - {file.size} bytes
        </li>
    ));
    
  return (
    <form>
        <div className="col-sm-12 mb-3 col-md-12">
            <label htmlFor="inputName" className="form-label">Nama Produk</label>
            <input type="text" className="form-control" placeholder="Nama Produk" aria-label="Nama Produk" />
        </div>
        <div className="col-sm-12 mb-3 col-md-12">
            <label htmlFor="inputName" className="form-label">Harga Produk</label>
            <input type="text" className="form-control" placeholder="Rp 0,00" aria-label="Rp 0,00" />
        </div>
        <div className="col-sm-12 mb-3 col-md-12">
            <label htmlFor="inputState" className="form-label">Kategori</label>
            <select id="inputState" className="form-select selectedoption" >
                <option selected disabled>Pilih Kategori</option>
                <option>Hobi</option>
                <option>Kendaraan</option>
                <option>Baju</option>
                <option>Elektronik</option>
                <option>Kesehatan</option>
            </select>
        </div>
        <div className="mb-3 col-sm-12 col-md-12">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Deskripsi</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Tulis deskripsi produkmu'></textarea>
        </div>

        <div {...getRootProps({className: 'dropzone'})} className='d-flex flex-column justify-content-end'>
            <label className="form-label">Foto Produk</label>
            <img src='img/addproduct.svg' alt='' className={`${style.imgAdd}`}/>
        </div>
        <div className='button__wrap d-flex justify-content-center'>
            <button type="button" className={`${style.buttonPreview} col-6 mt-3 me-2`}>Preview</button>
            <button type="button" className={`${style.buttonTerbitkan} col-6 mt-3`}>Terbitkan</button>
        </div>
        
    </form>
  )
}

export default FormAddProduct