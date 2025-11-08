function VerifyAccount() {
  return (
    <section className="flex justify-center">
      <div className="w-[50%]">
        <h1 className="text-4xl font-bold" style={{ marginBottom: "10px" }}>
          Verify Account
        </h1>
        <p>Enter the verification code sent to your email</p>

        <div style={{ marginTop: "50px" }} className="w-full">
          <form>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Enter Verification Code"
                className="w-full border border-gray-200 rounded-md"
                style={{ padding: "10px" }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <input
                type="submit"
                value="Verify"
                className="w-full border border-gray-200 rounded-md cursor-pointer bg-[#8c8c8c]"
                style={{ padding: "10px" }}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default VerifyAccount;
