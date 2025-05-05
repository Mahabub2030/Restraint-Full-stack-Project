import { FaGoogle } from "react-icons/fa";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic();
    const navigate =useNavigate()

  const handelGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <div className="p-8">
        <div className="divider"></div>
        <button
          onClick={handelGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 border border-gray-600 rounded-full py-2 px-4 text-white font-semibold hover:bg-white hover:text-black transition"
        >
          <FaGoogle className="mr-4"></FaGoogle>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
