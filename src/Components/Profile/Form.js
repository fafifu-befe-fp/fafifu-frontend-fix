import React from 'react'
import { useDropzone } from 'react-dropzone';
import style from './InfoProfile.module.css'


const Form = () => {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
        {file.path} - {file.size} bytes
        </li>
    ));

  return (
    <form>
        <section className="container d-block">
            <div {...getRootProps({className: 'dropzone disabled'})} className='d-flex justify-content-center'>
                <input {...getInputProps()} />
                <img src='img/uploadphoto.svg' alt=''/>
                {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
            </div>
            <aside className='d-flex justify-content-center mt-3'>
                 <ul className={`${style.listFile}`}>{files}</ul>
            </aside>
        </section>
        <div className="col-sm-12 mb-3 col-md-12">
            <label htmlFor="inputName" className="form-label">Nama*</label>
            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
        </div>
        <div className="col-sm-12 mb-3 col-md-12">
            <label htmlFor="inputState" className="form-label">Kota*</label>
            <select id="inputState" className="form-select selectedoption" >
                <option selected disabled>Pilih Kota</option>
                <option>Jakarta</option>
                <option>Surabaya</option>
                <option>Semarang</option>
                <option>Yogyakarta</option>
                <option>Denpasar</option>
            </select>
        </div>
        <div className="mb-3 col-sm-12 col-md-12">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Alamat*</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Contoh: Jalan Ikan Hiu 33'></textarea>
        </div>
        <div className="col-sm-12 col-md-12 mb-3">
            <label htmlFor="inputName" className="form-label">No Handphone*</label>
            <input type="text" className="form-control" placeholder="Contoh: +628123456789" aria-label="First name" />
        </div>
        <button type="button" className={`${style.buttonsimpan} col-sm-12 col-12 mt-2`}>Simpan</button>
    </form>
  )
}

export default Form