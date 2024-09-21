import Container from "@/components/Shared/Container";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaResearchgate,
  FaGithub,
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

import moon from "@/../public/assests/moon.jpg";

const Moon = () => {
  return (
    <Container>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col lg:w-[60%] justify-center p-6 text-center text-justify rounded-sm  lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">
              Mahmudul Hasan
            </h1>
            <p className="mt-6 mb-5 text-lg sm:text-center lg:text-left sm:mb-5">
              Mahmudul Hasan (Graduate Student Member, IEEE) is currently
              pursuing a Ph.D. degree in Information Technology (IT) at Deakin
              University, Australia. He also received the B.Sc. (Eng.) and the
              M.Sc. (Eng.) in Computer Science and Engineering (CSE) degree from
              Hajee Mohammad Danesh Science and Technology University, Dinajpur,
              Bangladesh, in 2021 and 2023 respectively. He is a former Lecturer
              in the Department of CSE, University of Creative Technology,
              Chittagong (UCTC), Bangladesh. His research interests include
              federated learning, machine learning, deep learning, cyber
              security, and business intelligence.
            </p>
            <div className="flex mb-5 sm:justify-center text-2xl lg:justify-start space-x-2 my-5">
              <a href="https://www.facebook.com/staywithmoon" target="blank">
                {" "}
                <FaFacebookSquare className="text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/mahmudul-hasan-moon/"
                target="blank"
              >
                {" "}
                <FaLinkedin className="text-blue-800 ml-4" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=TRKmJkEAAAAJ&hl=en&fbclid=IwAR3eorhFgHicdaKI6aAki9fxdM64GNrLtoVNVSkCcZiup59h_26esGXcbeQ_aem_AR-Z5ZoV5v_vRutXh4mjSDu4bLCXm5jF-kVsh_jb0-mMS6BcrF-F8cn6mEHhtx5WgVMQ9mDfyUkDw02SUP1XUs9X"
                target="blank"
              >
                {" "}
                <SiGooglescholar className="text-blue-500 ml-4" />
              </a>
              <a href="https://github.com/Mahmudul-Hasan-Moon" target="blank">
                {" "}
                <FaGithub className="text-black ml-4" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Mahmudul-Hasan-170"
                target="blank"
              >
                {" "}
                <FaResearchgate className="text-gray-500 ml-4" />
              </a>
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                See More
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image
              width={400}
              height={300}
              src={moon}
              alt="Mahmudul Hasan"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Moon;
