import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {

  const {user} = useContext(AuthContext);
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    const {name, photoURL} = data;
    updateProfile(auth.currentUser, {
       displayName: name, photoURL: photoURL
     }).then(() => {
       showToastMessage();
     }).catch((error) => {
       console.error(error);
       showToastMessage2(error.message)
     });
  }

    const showToastMessage = () => {
    toast.success("Successfully Profile Updated!", {
      position: "top-right",
    });
  };
  const showToastMessage2 = (errorMessage) => {
    toast.error(errorMessage || "Registation failed!", {
      position: "top-right",
    });
  };

  return (
    <>
  <h1 className="text-black text-3xl font-popins text-center font-semibold mt-20 ">Update your Profile</h1>
  <p className="text-center text-black font-popins pt-4 text-xl">Please edit your information to save changes</p>
  <div className="hero min-h-screen bg-white">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white mt-[-10rem] text-black">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName || ""} placeholder="Name" className="input input-bordered bg-white" required {...register("name")}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Photo URL</span>
          </label>
          <input type="text" defaultValue={user?.photoURL || ""} placeholder="Your Live Photo URL" className="input input-bordered bg-white" required {...register("photoURL")}/>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline text-black">Save Changes</button>
        </div>
      </form>
    </div>
  </div>
  <ToastContainer />
</>
  )
}

export default UpdateProfile