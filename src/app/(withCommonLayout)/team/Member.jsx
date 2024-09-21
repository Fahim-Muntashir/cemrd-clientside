/* eslint-disable @next/next/no-img-element */
"use server";
import Container from "@/components/Shared/Container";
import { getAllFaculty } from "@/services/actions/faculty";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Member = async () => {
  const faculty = await getAllFaculty();
  console.log(faculty);
  return (
    <Container>
      <br />
      <br />
      <br />{" "}
      <div class="text-center pb-12">
        <h2 class="text-base font-bold text-blue-600">
          We have the genious people in our team
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-black">
          Meet our awesome Team
        </h1>
      </div>
      <div className="sm:my-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {faculty.map((faculty) => (
          <Link
            key={faculty.id}
            href={`/team/${faculty.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block sm:w-full rounded overflow-hidden shadow-lg my-10 bg-white p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center w-full">
              <Image
                className="object-cover rounded-lg"
                src={faculty?.profilePhoto || ""}
                alt="Profile Image"
                width={150} // Width of the image in pixels
                height={200} // Height of the image in pixels
                layout="intrinsic" // Maintain original aspect ratio
              />
              <div className="text-center mt-4">
                <h2 className="text-xl font-bold">{faculty.name}</h2>
                <p className="text-gray-600">{faculty.role}</p>
              </div>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Member;
