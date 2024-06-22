'use client'
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-customBlack h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-white font-dmSerifText font-bold logo text-xl pb-6">
							BLOGIFY
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl text-white cursor-pointer hover:text-red-600" />
							<FaTwitter className="text-2xl text-white cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl text-white cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl text-white cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-300 font-dmSerifText font-bold text-xl pb-4">Links</p>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
							Home
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
							Profile
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
              Write
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
							About
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-300 font-bold font-dmSerifText text-xl pb-4">Company</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-white cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
							Products
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
							Pricing
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
							Careers
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-300 font-bold font-dmSerifText text-xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
							Support Portals
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
							Privacy
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
							Terms
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-white cursor-pointer">
							Blog
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-customBlack">
				<h1 className=" text-gray-300 ">
					© 2024 All rights reserved | Blogify
					
				</h1>
			</div>
		</>
	);
}
export default Footer;
