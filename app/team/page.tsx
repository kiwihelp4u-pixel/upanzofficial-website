"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const team = [
  {
    name: "Suman Kapoor",
    role: "Founder President (Est. 2017)",
    image: "/images/Suman Kapoor.jpg",
  },
  {
    name: "Kanwaljit Singh Bakshi",
    role: "Patron",
    image: "/images/Kanwaljit Singh Bakshi.jpg",
  },
  {
    name: "Madhuri Maurya",
    role: "Vice President - Culture",
    image: "/images/Madhuri Maurya.jpg",
  },
  {
    name: "Neha Pai",
    role: "Vice President - Admin & Treasury",
    image: "/images/Neha Pai.jpg",
  },
  {
    name: "Jyoti Verma",
    role: "General Secretary",
    image: "/images/Jyoti Verma.jpg",
  },
  {
    name: "Sandeep Mathur",
    role: "Executive Member",
    image: "/images/Sandeep Mathur.jpg",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-[#f7f5f2] to-[#ebe7e2] py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-24">
            <p className="text-xl tracking-widest text-green-600 font-semibold mb-4 transition hover:scale-105">
              OUR LEADERSHIP
            </p>

            <h1 className="text-5xl font-serif text-[#1c2b6b]">
              Executive Team
            </h1>
          </div>

          <div className="flex flex-col items-center gap-24">

            {/* ROW 1 */}
            <div className="flex justify-center gap-24 flex-wrap">
              {team.slice(0, 3).map((member) => (
                <div
                  key={member.name}
                  className="group flex flex-col items-center text-center w-[300px] bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-95"
                >
                  {/* IMAGE */}
                  <div className="relative w-[220px] h-[300px] overflow-hidden rounded-[120px] border-4 border-[#f2a33b] mb-6 transition duration-300">
                    
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={220}
                      height={300}
                      className="object-cover w-full h-full transition duration-300 group-hover:scale-110 active:scale-105"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 rounded-[120px] bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 active:opacity-100 transition duration-300"></div>
                  </div>

                  {/* NAME */}
                  <h3 className="text-xl tracking-wide font-semibold text-[#1c2b6b] transition group-hover:text-[#f2a33b]">
                    {member.name}
                  </h3>

                  {/* ROLE */}
                  <p className="text-sm text-gray-600 mt-2 h-[44px] flex items-center justify-center text-center px-2">
                    {member.role}
                  </p>

                  {/* LINE */}
                  <div className="w-14 h-[2px] bg-[#f2a33b] mt-5 transition-all duration-300 group-hover:w-24"></div>
                </div>
              ))}
            </div>

            {/* ROW 2 */}
            <div className="flex justify-center gap-24 flex-wrap">
              {team.slice(3, 6).map((member) => (
                <div
                  key={member.name}
                  className="group flex flex-col items-center text-center w-[300px] bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-95"
                >
                  {/* IMAGE */}
                  <div className="relative w-[220px] h-[300px] overflow-hidden rounded-[120px] border-4 border-[#f2a33b] mb-6 transition duration-300">
                    
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={220}
                      height={300}
                      className="object-cover w-full h-full transition duration-300 group-hover:scale-110 active:scale-105"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 rounded-[120px] bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 active:opacity-100 transition duration-300"></div>
                  </div>

                  {/* NAME */}
                  <h3 className="text-xl tracking-wide font-semibold text-[#1c2b6b] transition group-hover:text-[#f2a33b]">
                    {member.name}
                  </h3>

                  {/* ROLE */}
                  <p className="text-sm text-gray-600 mt-2 h-[44px] flex items-center justify-center text-center px-2">
                    {member.role}
                  </p>

                  {/* LINE */}
                  <div className="w-14 h-[2px] bg-[#f2a33b] mt-5 transition-all duration-300 group-hover:w-24"></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}