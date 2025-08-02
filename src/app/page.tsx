import { HyperText } from "@/components/magicui/hyper-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans max-w-4xl mx-auto items-center py-25 justify-items-center min-h-screen p-8">
      <main>
        {/* About section */}
        <div>
          {/* Header */}
          <div className="flex space-y-5 justify-between">
            {/* Text */}
            <div>
              <h1 className="text-4xl justify-center text-blue-600 font-bold">
                <TextAnimate animation="blurIn">
                  Hi, I'm Azijul Hakim
                </TextAnimate>
              </h1>
              <h6 className="text-xl">
                <TextAnimate animation="blurInUp" by="character" once>
                  MERN Stack Web Developer
                </TextAnimate>
              </h6>
            </div>
            {/* Photo */}
            <div>
              <Image
                className="rounded-full"
                src={"/WEB.jpg"}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        {/* About Decription */}
        <div className="">
           <HyperText className="text-2xl">About</HyperText>
          <p>
            <TextAnimate animation="blurIn" as="h1">
              I'm Azijul Hakim, a passionate Front-End Developer based in
              Bangladesh, focused on building modern, performant, and
              user-friendly web applications. With a strong command over both
              front-end and back-end technologies, I enjoy solving real-world
              problems through clean code and thoughtful design.
            </TextAnimate>
          </p>
        </div>
      </main>
    </div>
  );
}
