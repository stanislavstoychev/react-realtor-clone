import React, { useState } from 'react'

export default function CreateListing() {
    const [formData, setFormData] = useState({
        type: "rent",
        name: "",
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address: "",
        description: "",
        offer: true,
        regularPrice: 0,
        discountedPrice: 0,
        images: [],
    });
    // destructure formData
    const { type, name, bedrooms, bathrooms, parking, furnished, address, description, offer, regularPrice, discountedPrice, images } = formData;
    function onChange(e) {
        return true;
    }
  return (
      <main className='max-w-md px-2 m-auto'>
          <h1 className='text-3xl text-center mt-6 font-bold'>
              Create a Listing
          </h1>  
          <form>
              <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>

              <div className="flex">
                  
                  <button type='button' id="type" value="sale" onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-sm focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                      type === "rent" ? "bg-white text-black" : "bg-slate-600 text-white"
                  }`}>
                      sell
                  </button>

                  <button type='button' id="type" value="sale" onClick={onChange} className={`ml-3px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-sm focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                      type === "sell" ? "bg-white text-black" : "bg-slate-600 text-white"
                  }`}>
                      rent
                  </button>               
              </div>

              <p className='text-lg mt-6 font-semibold
              '>Name</p>
              <input type="text" id='name' value={name} onChange={onChange} placeholder="Name" maxLength={32} minLength="5" required className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'/>
              <div className="flex space-x-6 mb-6">
                  <div className="">
                      <p className="text-lg font-semibold">Bedrooms</p>
                      <input type="number"
                          className="px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out duration-150 focus:text-gray-700 focus:bg-white
                          focus:border-slate-600 w-full"
                          id='bedrooms' value={bedrooms} min="1" max="50" required />
                  </div>
                  <div >
                      <p className="text-lg font-semibold">Bathrooms</p>
                      <input type="number"
                          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out duration-150 focus:text-gray-700 focus:bg-white
                          focus:border-slate-600"
                          id='bathrooms' value={bathrooms} min="1" max="50" required />
                  </div>
              </div>

              <p className='text-lg mt-6 font-semibold'>Parking spot</p>

            <div className="flex">
                
                <button type='button' id="parking" value={true} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-sm focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    !parking ? "bg-white text-black" : "bg-slate-600 text-white"
                }`}>
                    yes
                </button>

                <button type='button' id="parking" value={false} onClick={onChange} className={`ml-3px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-sm focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    parking ? "bg-white text-black" : "bg-slate-600 text-white"
                }`}>
                    no
                </button>               
              </div>
              
              <p className='text-lg mt-6 font-semibold'>Furnished</p>

            <div className="flex">
                
                  <button
                      type='button'
                      id="furnished"
                      value={true}
                      onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-sm focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
                }`}>
                    yes
                </button>

                <button type='button' id="furnished" value={false} onClick={onChange} className={`ml-3px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-sm focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    furnished ? "bg-white text-black" : "bg-slate-600 text-white"
                }`}>
                    no
                </button>               
              </div>
              
              <p className='text-lg mt-6 font-semibold
              '>Address</p>
              <textarea type="text" id='address' value={address} onChange={onChange} placeholder="Address"      
                required className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6' />
              
              <p className='text-lg  font-semibold
              '>Description</p>
              <textarea type="text" id='description' value={description} onChange={onChange} placeholder="Description"      
                required className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6' />

            <p className='text-lg font-semibold'>Offer</p>

            <div className="flex mb-6">
                
                <button
                    type='button'
                    id="offer"
                    value={true}
                    onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-sm focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    !offer ? "bg-white text-black" : "bg-slate-600 text-white"
                }`}>
                    yes
                </button>

                <button type='button' id="offer" value={false} onClick={onChange} className={`ml-3px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-sm focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    offer ? "bg-white text-black" : "bg-slate-600 text-white"
                }`}>
                    no
                </button>               
            </div>
              

            <p className='text-lg font-semibold'>Regular Price</p>

            <div className="flex mb-6 justify-center items-center">
                <div className="w-full">
                    <input
                    type='number'
                    id="regularPrice"
                          value={regularPrice}
                          min="50"
                          max="5000000"
                          onClick={onChange}
                          className={`mr-3 px-7 w-full  py-3 font-medium text-sm   rounded text-gray-700 focus:text-gray-700 focus:bg-white bg-white border border-gray-300 focus:border-slate-600 transition duration-150 ease-in-out text-center space-x-6`}
                      required />
                    
                    </div>
                <div className="">
                      {type === "rent" && (
                          <p className="ml-4 text-md w-full whitespace-nowrap"> $ / Month</p> 
                    )}              
                </div>
            </div>            
            
              {offer && (
                  <div className="flex items-center mb-6">
                  <div className="">
                    <p className="text-lg font-semibold">Discounted price</p>
                    <div className="flex w-full justify-center items-center space-x-6">
                      <input
                        type="number"
                        id="discountedPrice"
                        value={discountedPrice}
                        onChange={onChange}
                        min="50"
                        max="400000000"
                        required={offer}
                        className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                      />
                      {type === "rent" && (
                        <div className="">
                          <p className="text-md w-full whitespace-nowrap">
                            $ / Month
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}   
              
              <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600 hover:border-slate-600"
          />
        </div>
              <button type="submit" className='mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-center text-lg uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150'>Create List</button>

          </form>
    </main>
  )
}
 