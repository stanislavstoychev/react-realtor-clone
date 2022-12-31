import React, { useEffect, useState } from 'react';
import { getAuth, updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { collection, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import { FcHome } from "react-icons/fc";
import ListingItem from '../components/ListingItem';
function Profile() {
  const auth = getAuth(); 
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  function onLogout () {
    auth.signOut();
    navigate("/");
  }
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,

    }))
  }

async  function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        // update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        })
        //update name in the firestore
        const docRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(docRef, {
          name,
        });
        toast.success("Profile details updated");      
      }
    } catch (error) {
      toast.error("Could not update profile details")
    }
  }

  useEffect(() => {
    async function fetchUserListings() {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
        const querySnap = await getDocs(q);
        let listings = [];
        querySnap.forEach((doc) => {
          return listings.push({ id: doc.id, data: doc.data(), });
        });
      setListings(listings);
      setLoading(false);
    }
    fetchUserListings();
}, [auth.currentUser.uid])
async function onDelete(listingID) {
  if (window.confirm("Are you sure you want to delete?")) {
    await deleteDoc(doc(db, "listings", listingID));
    const updatedListings = listings.filter(
      (listing) => listing.id !== listingID
    );
    setListings(updatedListings);
    toast.success("Successfully deleted the listing");
  }
}
function onEdit(listingID) {
  navigate(`/edit-listing/${listingID}`);
}
  return (
    <>
      <section className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center mt-6 font-bold" > My Profile </h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* Name Input */}
            <input type="text" id="name" value={name} disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-100 focus:bg-red-100"}`} />
            
            {/* Email Input */}
            <input type="email" id="email" value={email} disabled={!changeDetail}
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out " />
            
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState)
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out -200 ml-1 cursor-pointer ">
                  {changeDetail ? "Apply change" : "Edit"}
                  </span>
              </p>
              <p onClick={onLogout} className="text-blue-600 hover:text-blue-800 cursor-pointer transition duration-200 ease-in-out">Sign out</p>
            </div>

          </form>
          <button type="submit" className="w-full bg-blue-600 text-white uppercase px-7 py-3  text-sm  font-medium rounded shadow-md hover:bg-blue-700 transition ease-in-out duration-150 hover:shadow-lg active:bg-blue-800">
            <Link to="/create-listing" className='flex justify-center items-center'>
            <FcHome className='text-3xl p-1 mr-2 bg-red-200 rounded-full border-2'/>
            Sell or Rent your home
          </Link>
          </button>

        </div>
      </section> 
      <div className="">
        {!loading && listings.length > 0 && (
          <>
            <h2 className='text-2xl text-center font-semibold m-6'>My listing</h2>
            <ul className='sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
            mt-6'>
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                  onDelete={() => onDelete(listing.id)}
                  onEdit={() => onEdit(listing.id)}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  )
}

export default Profile