import React, {useState} from 'react'
import {addDoc, collection} from 'firebase/firestore' 
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import {storage, db} from '../config/Config'


const AddProducts = () => {
    const [productName,setProductName] = useState('');
    const [productPrice,setProductPrice] = useState(0);
    const [productImg,setProductImg] = useState(null);
    const [error,setError] = useState('');
    
    const colRef = collection(db,'products');

    const types = ['images/png','image/jpeg'];
    
    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('');
        } else {
            setProductImg(null);
            setError('Please select a valid image type png or jpeg');
        }
    };

    //submit form add product event
    const addProduct = (e) => {
        e.preventDefault();
        //console.log(productName,productPrice,productImg); 
        const imageRef = ref(storage,`product-images/${productImg.name}`);

        //store the image
        uploadBytes(imageRef, productImg).then((snapshot) => {
            //get product url an if success then storing the product in cloudstore database
            getDownloadURL(snapshot.ref).then((url) => {
                addDoc(colRef, {
                    productName: productName,
                    productPrice: productPrice,
                    productImg: url
                })
                .then (() => {
                    setProductName('');
                    setProductPrice(0);
                    setProductImg('');
                    setError('');
                    document.getElementById('file').value = ''; 
                })
                .catch((err) => setError(err.message));
            })
        })
        .catch((err) => setError(err.message));
    };

    return (
        <div className='container'>
            <br/>
            <h2>Add Products</h2>
            <hr/>
            <form autoComplete='off' className='form-group' onSubmit={addProduct}>
                <label htmlFor="product-name">Product Name</label>
                <br/>
                <input type="text" className='form-control' required
                onChange = {(e)=>setProductName(e.target.value)} value={productName}/>
                <br/>
                <label htmlFor='product-price'>Product Price</label>
                <br/>
                <input type='number' className='form-control' required
                onChange = {(e)=>setProductPrice(e.target.value)} value={productPrice}/>
                <br/>
                <label htmlFor='product-img'>Product Image</label>
                <br/>
                <input type='file' className='form-control' onChange={productImgHandler} id='file'/>
                <br/>
                <button className='btn btn-success btn-md mybtn'>ADD</button>
            </form>
            {error && <span>{error}</span>}
        </div>
    );
};

export default AddProducts;