
import React, { useState } from "react";
import useMyFiles from "@/apiHooks/useMyFiles";
import FileUpload from "@/components/FileUpload";
import MyFiles from "@/components/MyFiles";
import Intro from "@/components/Intro";
import ChatBox from "@/components/ChatBox";
import Head from "next/head";
import Header from "@/components/home/header";

export default function Home() {
  const [activeFile, setActiveFile] = useState();
  const { files, isError, isLoading } = useMyFiles();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>DocTalker - Chat with my PDF</title>
      </Head>
      <main className={`w-full h-full`}>
        <Header />

        
        <section className="bg-gradient-to-r from-[#108dc7] to-[#ef8e38] py-20 mt-2 text-white">
  <div className="max-w-7xl mx-auto px-5">
    <h2 className="text-3xl font-bold mb-6 text-center">How DocTalker Works</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[ 
        {
          title: "1. Upload Your PDF",
          desc: "Choose any PDF file you want to chat with and upload it securely."
        },
        {
          title: "2. Ask Questions",
          desc: "Select the file and start asking questions from the content of the PDF."
        },
        {
          title: "3. Get Instant Answers",
          desc: "Receive quick and accurate responses — powered by smart document parsing."
        }
      ].map((card, index) => (
        <div
          key={index}
          className="relative group rounded-xl p-6 bg-white text-black overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(239,142,56,0.6)]"
        >
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm font-medium">{card.desc}</p>
          </div>
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-md bg-gradient-to-r from-[#108dc7] to-[#ef8e38]"></div>
        </div>
      ))}
    </div>
  </div>
</section>

        <div className={"max-w-7xl mx-auto"}>
          <div
            className={
              "mt-5 px-5 lg:px-0 h-[calc(100vh-170px)] min-h-[calc(100vh-170px)]"
            }
          >
            <div className={"grid lg:grid-cols-2 gap-10 h-[inherit]"}>
              <div className="upload-button">
                {/* <Intro /> */}
                <FileUpload />
                <MyFiles setActiveFile={setActiveFile} files={files} />
              </div>
              <div className="chatbox">
                <ChatBox activeFile={activeFile} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
