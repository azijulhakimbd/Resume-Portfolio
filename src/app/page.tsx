import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans  items-center py-25 justify-items-center min-h-screen p-8">
      <main>
        {/* About section */}
        <div>
          {/* Header */}
          <div className="flex justify-between gap-10">
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
              <Image className="rounded-full" src={"/WEB.jpg"} width={80} height={80}/>
            </div>
          </div>
        </div>
        {/* About Decription */}
      </main>
    </div>
  );
}
