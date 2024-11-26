import React from "react";
import Image from "next/image";

function SignUpForm() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1 bg-[#f5f8fb] flex items-center justify-center">
        <div className="text-center px-4">
          {/* Image */}
          <h2 className="text-2xl font-bold text-gray-700 mt-6">
            Examine & shows Test Results
          </h2>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <img
            src="" 
            width={300}
            height={300}  
            className="mx-auto"
          />
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-lg bg-white shadow-lg p-6 rounded-md">
          <h1 className="text-4xl font-bold mb-6 text-black text-center	">Sign Up</h1>
          <p className="text-base text-center mb-7 text-gray-600"> Begin your journey with just a few clicks</p>
          <form>
            {/* First Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
              />
            </div>
            {/* Date of Birth */}
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Date of Birth
              </label>
            <input
            type="date"
            placeholder="select date"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2  focus:ring-[#0C7489] text-gray-700 "   />
            </div>

            {/* select your gender */}
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700  ">
              Gender
              </label>
            <select className="w-full border border-gray-300 rounded p-2  text-gray-700" placeholder="Choose your gender">
            <option>         </option>
            <option>Male</option>
            <option>Female</option>
            </select>
            </div>

            {/* phone number */}
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700   ">
              Mobile Phone
              </label>
            <input
            type="tel"
            placeholder="Mobile Phone"
              className="w-full border border-gray-300 rounded p-2  text-gray-700"  />
            </div>

            {/* country  */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700   ">
              your country
              </label>
            <input
              type="text"
              placeholder="Your Country"
              className="w-full border border-gray-300 rounded p-2" />
            </div>
            {/* Submit Button */}
            <div className="mb-4" >
            <label className="block text-sm font-medium text-gray-700   ">
              Address
              </label>
              <input
              type="text"
              placeholder="Your Address"
              className="w-full border border-gray-300 rounded p-2" />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0C7489] text-white py-2 rounded-md hover:bg-[#0C7489]"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
