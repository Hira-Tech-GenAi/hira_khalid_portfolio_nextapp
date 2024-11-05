import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold ">
        Let&apos;s Work Together!
      </h1>

      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        I am currently available for freelance work. However, if you have a
        project that you want to get started, think you need my help with
        something or just fancy saying hey, then get in touch.
      </p>

      {/* input fields for first name and last name */}
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />

          <input
            type="text"
            placeholder="Last name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        {/* input fields for email and phone number */}
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Email Address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        {/** Select desire service */}
        <div>
          <select
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
            defaultValue="" // Use defaultValue instead of selected
          >
            <option value="" disabled>
              Select Desired Service
            </option>
            <option value="1">Web Development</option>
            <option value="2">Design</option>
            <option value="3">Marketing</option>
            <option value="4">SEO</option>
          </select>
        </div>

        {/** Textarea for message */}
        <textarea
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="Type Your Message..."
        ></textarea>

        {/** Submit button */}
        <div className="mt-4">
          <button className="px-8 py-3.5 bg-purple-500 text-white hover:bg-purple-700 transition-all duration-300 rounded-md">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
