import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="h-screen w-full p-5 flex flex-col lg:overflow-hidden">
      <Header />
      <main className="flex-1 flex flex-col lg:flex-row w-full gap-5">
        <div className="lg:w-4/6 flex gap-5 flex-col w-full">
          <Section1 />
          <Section2 />
        </div>
        <Aside />
      </main>
    </div>
  );
}

function Header() {
  const navLinks = ["Work", "About", "Contact"];

  return (
    <header className="w-full bg-primary h-[101px] rounded-2xl flex items-center justify-between p-7 mb-5">
      <h1 className="lg:text-4xl font-gilroy-italic flex gap-2 text-lg">
        William <span className="font-gilroy-semibold">Butcher</span>
      </h1>
      <nav>
        <ul className="lg:flex gap-16 items-center font-gilroy-regular hidden">
          {navLinks.map((link) => (
            <li key={link} className="text-lg cursor-pointer hover:underline">
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Section1() {
  return (
    <div className="lg:h-2/4 flex flex-col gap-5 lg:flex-row">
      <div className="bg-primary lg:w-2/3 rounded-2xl p-5 flex flex-col justify-between">
        <div className="flex justify-end">
          <Image
            src="/Flower.svg"
            width={100}
            height={100}
            alt="Flower icon"
            priority
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="lg:text-5xl font-gilroy-semibold text-3xl">
            Hello, I&apos;m Butcher
          </h1>
          <p className="lg:text-2xl font-gilroy-regular text-xl flex justify-between items-end">
            A Stranger Is Just A Friend You Ain&apos;t Met Yet
            <p className="text-lg font-gilroy-italic text-secondary">~Billy</p>
          </p>
        </div>
      </div>
      <div className="lg:w-1/3">
        <Image
          src="/crop.jpeg"
          width={100}
          height={100}
          alt="Ajay Kumawat"
          quality={100}
          unoptimized={true}
          className="w-full h-full rounded-2xl"
          priority
        />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="h-2/4 flex flex-col gap-5 lg:flex-row">
      <InfoCard
        title="About Me"
        description="A former member of the British special forces turned vigilante; Billy Butcher is as charming as he is cunning. He's a force of nature, who can talk almost anyone into anything, either through a smile or brute force – or sometimes both. He's consumed by one mission in life: to destroy superheroes."
        imageSrc="/flower2.svg"
      />
      <ContactCard />
    </div>
  );
}

interface InfoCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

function InfoCard({ title, description, imageSrc }: InfoCardProps) {
  return (
    <div className="bg-primary lg:w-2/4 rounded-2xl p-5 flex flex-col justify-between gap-10 lg:gap-0">
      <Image src={imageSrc} width={100} height={100} alt={title} priority />
      <p className="font-gilroy-regular lg:pr-20 text-xl">{description}</p>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="bg-secondary lg:w-2/4 rounded-2xl p-10 flex flex-col justify-between gap-10 lg:gap-0">
      <div className="lg:text-xl text-lg font-gilroy-italic flex justify-between">
        <div>
          Have Some
          <p>Work?</p>
        </div>
        <MdArrowOutward size={30} />
      </div>
      <div>
        <p className="text-gilroy text-5xl mb-5 font-gilroy-semibold">
          Contact Me
        </p>
      </div>
    </div>
  );
}

function Aside() {
  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "GitHub", url: "https://github.com" },
  ];

  return (
    <div className="flex-1 gap-5 flex flex-col">
      <div className="bg-primary rounded-2xl p-5 h-5/6">
        <ul className="p-5 divide-y-2">
          <li className="flex justify-between items-center m-5">
            <p className="text-3xl font-gilroy-semibold">Project</p>
            <FaArrowRight size={20} />
          </li>
        </ul>
      </div>
      <div className="bg-primary rounded-2xl p-5 lg:h-1/6">
        <ul className="flex font-gilroy-regular justify-around items-center h-full text-xl">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
