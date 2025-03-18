import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('honey');
  const [price, setPrice] = useState('');
  const [bestseller, setBestseller] = useState(false);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        backendUrl + '/api/product/update',
        { id: editProduct._id, name, description, category, price, bestseller },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setEditProduct(null);
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleEditClick = (item) => {
    setEditProduct(item);
    setName(item.name);
    setDescription(item.description);
    setCategory(item.category);
    setPrice(item.price);
    setBestseller(item.bestseller);
    setImage1(item.image[0] || null);
    
  };

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        {list.map((item, index) => (
          <div key={index} className='grid grid-cols-1 md:grid-cols-6 items-center gap-2 py-1 px-2 border text-sm cursor-pointer'>
            <img className='w-12' src={item.image[0]} alt='' onClick={() => handleEditClick(item)} />
            <p onClick={() => handleEditClick(item)}>{item.name}</p>
            <p onClick={() => handleEditClick(item)}>{item.category}</p>
            <p onClick={() => handleEditClick(item)}>{currency}{item.price}</p>
            <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg text-red-600'>X</p>
          </div>
        ))}
      </div>

      {editProduct && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg w-full max-w-md'>
            <form onSubmit={updateProduct} className='flex flex-col gap-3'>
              <p className='mb-2 text-lg font-bold'>Edit Product</p>
              <div>
                <p className='mb-2'>Upload Image</p>
                <div className='flex gap-2'>
                  {[image1, image2, image3, image4].map((img, i) => (
                    <label key={i} htmlFor={`image${i + 1}`}>
                      <img className='w-20' src={img ? img : 'upload_area_placeholder'} alt='' />
                      <input onChange={(e) => eval(`setImage${i + 1}(e.target.files[0])`)} type='file' id={`image${i + 1}`} hidden />
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className='mb-2'>Product name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className='w-full px-3 py-2 border' type='text' placeholder='Type here' required />
              </div>
              <div>
                <p className='mb-2'>Product description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full px-3 py-2 border' placeholder='Write content here' required />
              </div>
              <div>
                <p className='mb-2'>Product category</p>
                <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-3 py-2 border'>
                  <option value='honey'>Natural honey</option>
                  <option value='oils'>Natural Oils</option>
                  <option value='cosmetics'>Cosmetics</option>
                </select>
              </div>
              <div>
                <p className='mb-2'>Product Price</p>
                <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 border' type='number' placeholder='25' />
              </div>
              <div className='flex gap-2 mt-2'>
                <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type='checkbox' id='bestseller' />
                <label className='cursor-pointer' htmlFor='bestseller'>Add to bestseller</label>
              </div>
              <div className='flex justify-end gap-2'>
                <button type='button' className='px-4 py-2 bg-gray-500 text-white rounded' onClick={() => setEditProduct(null)}>Cancel</button>
                <button type='submit' className='px-4 py-2 bg-black text-white rounded'>Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
