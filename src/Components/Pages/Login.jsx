import { useContext } from "react";
import { useForm } from "react-hook-form"


import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Provider/Provider";
import { toast } from "react-toastify";

const Login = () => {
  const {logIn,googleLogin} =useContext(AuthContext);

    

   
  const navigate = useNavigate();
    const location = useLocation();
  
  const from = location?.state || "/";




  const {
  register,
      reset,
  formState: { errors },
  handleSubmit,} = useForm()

    const onSubmit = (data) => {console.log(data);
      const {Email,Password}=data;
      
    

     
          logIn(Email, Password)
              .then(result => {
                  console.log(result.user);
                  reset();
              })
              .catch(error => {
                  console.log(error.message);
              });
      } 
 
      const handleSocialLogin = (socialProvider) => {
          socialProvider()
          .then((result) => {
            if (result.user) {
              toast('LogIn Successfully');
              navigate(from);
            }
        })
    
        }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
        <div
          className='hidden bg-cover bg-center lg:block lg:w-1/2'
          style={{
            backgroundImage: `url('https://i.postimg.cc/Jn779tt9/4957136.jpg')`,
          }}
        ></div>

        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            <img
              className='w-auto h-7 sm:h-8'
              src='https://merakiui.com/images/logo.svg'
              alt=''
            />
          </div>

          <p className='mt-3 text-xl text-center text-gray-600 '>
            Welcome
          </p>

          <div className="w-full container mx-auto my-12 text-white max-w-md p-8 space-y-3 rounded-xl bg-blue-300 border border-blue-400 dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form  onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                <input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("Email", { required: true })} />
                   {errors.Email && <span className='text-red-400'>This field is required</span>}
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"  {...register("Password", { required: true })} />
                   {errors.Password && <span className='text-red-400'>This field is required</span>}
                
            </div>
           <input type="submit" value="LogIn" className="block w-full p-3 text-center  border border-blue-500 rounded-lg dark:text-gray-50 dark:bg-violet-600"/>
        </form>
        <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
            <button  onClick={() => handleSocialLogin(googleLogin)}
              aria-label="Log in with Google" className="p-3 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
            </button>
          
           
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
           <Link to='/register'className="underline dark:text-gray-800">Register</Link>
        </p>
    </div></div>
      </div>
    </div>
    );
};

export default Login;