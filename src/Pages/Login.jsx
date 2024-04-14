import { useContext, useState} from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const [isPasswordVisiable, setPasswordVisiable] = useState(false);
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = (data, event) => {
      const {email, password} = data;
      const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
      if (isValidPassword) {
        logIn(email, password)
      .then(() => {
        event.target.reset();
        showToastMessage();
        navigate("/")
      })
      .catch(err => {
        console.error(err);
        showToastMessage2(err.message);
      });
      } else {
        showToastMessage3();
      }
    }

    const showToastMessage = () => {
    toast.success("Login Successfully !", {
      position: "top-right",
    });
   };

   const showToastMessage2 = (errorMessage) => {
    toast.error(errorMessage, {
      position: "top-right",
    });
  };

   const showToastMessage3 = () => {
    toast.error("Your password should contain an Upper & Lower case letter and at least 6 character", {
      position: "top-right",
   });
 };

    const handleTogglePasswordVisibility = () => {
    setPasswordVisiable(!isPasswordVisiable)
  }
  return (
    <>
    <div className="hero min-h-screen mb-20">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white text-black">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered bg-white" required {...register("email")}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <div className="relative">
          <input type={isPasswordVisiable ? "text" : "password"} placeholder="Password" className="input input-bordered bg-white w-full" required {...register("password")}/>
           <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-3 py-1 bg-transparent"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {isPasswordVisiable ? "🙈" : "👁️"}
                  </button>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline text-black"><input type="submit" value={"Login"}/></button>
        </div>
        <p className="pt-4 text-center">Don&apos;t have any account? <Link to={"/register"} className="text-blue-700">Register</Link> here</p>
      </form>
    </div>
    <ToastContainer />
  </div>
    </>
    
  )
}

export default Login