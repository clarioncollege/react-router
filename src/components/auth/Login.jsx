import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="flex justify-center">
      <div className="w-[50%]">
        <h1 className="text-4xl font-bold" style={{ marginBottom: "10px" }}>
          Sign in
        </h1>
        <p>Sign in to get Started</p>

        <div style={{ marginTop: "50px" }} className="w-full">
          <form>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full border border-gray-200 rounded-md"
                style={{ padding: "10px" }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border border-gray-200 rounded-md"
                style={{ padding: "10px" }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <input
                type="submit"
                value="Sign In"
                className="w-full border border-gray-200 rounded-md cursor-pointer bg-[#8c8c8c]"
                style={{ padding: "10px" }}
              />
            </div>

            <div
              style={{ marginBottom: "20px" }}
              className="flex justify-between items-center"
            >
              <p>
                Don't have an account ? <Link to="/auth/signup">Sign Up</Link>
              </p>

              <p>
                Forget Password ? <Link to="/auth/forgot-password">Reset</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
