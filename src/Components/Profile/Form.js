import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import style from './InfoProfile.module.css'
import axios from "axios";
import { useForm } from 'react-hook-form'

const Form = () => {
    
    // const [statusCode, setStatusCode] = useState()
    const [settingProfile, setSettingProfile] = useState()
    useEffect(() => {
        axios
            .get(`https://api-fafifu-secondhand.herokuapp.com/v1/user`, {
                headers: {
                    Authorization: localStorage.getItem('jwtToken'),
                },
            })
            .then((res) => {
                // setStatusCode(res.status)
                // if (statusCode == 200) {
                    console.log('ini res: ', res.data.data)
                    setSettingProfile(res.data.data);
                    console.log('ini profile user: ', settingProfile)
                // }
            })
            // .catch((err) => {
            //     setStatusCode(err.response.status)
            // });            
    }, []);

    // const { updateProfile, handleSubmit, formState } = useForm()
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const [nama, setNama] = useState(localStorage.getItem('sessionName'));
    const [alamat, setAlamat] = useState(localStorage.getItem('sessionAddress'));
    const [telepon, setTelepon] = useState(localStorage.getItem('sessionPhone'));
    const [kota, setKota] = useState(localStorage.getItem('sessionCity'));
  
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
        {file.path} - {file.size} bytes
        </li>
    ));
    
    // const formSubmitHandler = (data) => {
    //     const postData = {
    //     email: data.email,
    //     password: data.password
    //     }

    //     axios.post('https://api-fafifu-secondhand.herokuapp.com/v1/auth/login', postData )
    //     .then( res => {
    //     if ( typeof res.data.data.token != 'undefined' ) {
    //         localStorage.setItem('jwtToken', res.data.data.token)
    //         localStorage.setItem('sessionId', res.data.data.user.publicId)
    //         localStorage.setItem('sessionName', res.data.data.user.name)
    //         localStorage.setItem('sessionCity', res.data.data.user.city)
    //         localStorage.setItem('sessionImage', res.data.data.user.imageUrl)
    //         localStorage.setItem('sessionAddress', res.data.data.user.address)
    //         localStorage.setItem('sessionPhone', res.data.data.user.handphone)
    //         console.log('ini res login', res)
    //         dispatch( userSlice.actions.addUser({ userData: res.data.data.user}) )
    //     }
    //     })
    //     .catch ( err =>
    //     setLoginStatus({
    //         success: false,
    //         message: 'Sorry something is wrong, please try again.'
    //     })
    //     )
    // }

  return (
    // <form onSubmit={ handleSubmit(formSubmitHandler) }>
    <form className={`mb-8`}>
        <section className="container d-block">
            <div {...getRootProps({className: 'dropzone disabled'})} className={`d-flex justify-content-center rounded ${style.xGatau}`}>
                <input {...getInputProps()} />
                <img src={localStorage.getItem('sessionImage')} alt=''className={`${style.imgPhoto}`}/>
                {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
            </div>
            <aside className='d-flex justify-content-center mt-3'>
                 <ul className={`${style.listFile}`}>{files}</ul>
            </aside>
        </section>
        <div className="col-sm-12 mb-3 col-md-12">
            <label htmlFor="inputName" className="form-label">Nama</label>
            <input 
                type="text" 
                className="form-control"
                placeholder="nama" 
                value={nama}        
                onChange={(e) => setNama(e.target.value)} 
                aria-label="First name" 
                required
            />
        </div>
        <div className="col-sm-12 mb-3 col-md-12">
            <label htmlFor="inputState" className="form-label">Kota</label>
            <select id="inputState" className="form-select selectedoption" >
                <option selected disabled>
                    Pilih Kota
                </option>
                <option>Jakarta</option>
                <option>Surabaya</option>
                <option>Semarang</option>
                <option>Yogyakarta</option>
                <option>Denpasar</option>
            </select>
        </div>
        <div className="mb-3 col-sm-12 col-md-12">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Alamat</label>
            <textarea 
                required 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3" 
                placeholder="Alamat" 
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)} 
                // value={`${
                //     localStorage.getItem("sessionAddress") == "null"
                //       ? ""
                //       : localStorage.getItem("sessionAddress")
                // }`}
            />
        </div>
        <div className="col-sm-12 col-md-12 mb-3">
            <label htmlFor="inputName" className="form-label">No Handphone</label>
            <input
                type="text" // PR VALIDASI NOMOR TELEPON - GA BOLEH HURUF
                className="form-control" 
                aria-label="First name" 
                required
                placeholder="Contoh: 08123456789" 
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)} 
            />
        </div>
        <button type="button" className={`${style.buttonsimpan} col-sm-12 col-12 mt-2`}>Simpan</button>
    </form>
  )
}

export default Form