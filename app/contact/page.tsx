"use client";
import { Facebook, Instagram, Mail, Twitter } from "@mui/icons-material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const page = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("miamediia", "F4mP1iTbwHtlCEFUh", form.current, {
        publicKey: "F4mP1iTbwHtlCEFUh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          console.log(form.current);
        }
      );
  };
  return (
    <section className="text-white body-font relative">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="container px-5 py-24 mx-auto"
      >
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-500">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Send an email ♡
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full bg-white rounded border focus:border-blue-500 focus:bg-gray-100 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="user_email"
                  className="leading-7 text-sm text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full bg-white rounded border focus:border-blue-500 focus:bg-gray-100 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border focus:border-blue-500 focus:bg-gray-100 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Send
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-blue-500">miamediaa@gmail.com</a>
              <br />
              <span className="inline-flex mt-4">
                <a
                  href="https://www.facebook.com/311324272063132"
                  className="text-gray-500"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/miamediia"
                  className="ml-4 text-gray-500"
                >
                  <Instagram />
                </a>
                <a
                  href="mailto:yuyuvybz@gmail.com"
                  className="ml-4 text-gray-500"
                >
                  <Mail />
                </a>
              </span>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default page;
