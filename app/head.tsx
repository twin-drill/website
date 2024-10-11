import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Head() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Divyank
          <br />
          Jain
        </h1>
        <h2 className="text-lg md:text-xl font-bold mt-2">Software Engineer</h2>
      </div>
      <div className="text-right">
        <h3 className="text-md md:text-lg font-bold">Contact</h3>
        <div className="text-xs md:text-base font-normal">
          <Link href="mailto:divyank.jain1@gmail.com">
            divyank.jain1@gmail.com
            <Mail size="1rem" className="inline ml-[3px]" />
          </Link>
          <br />
          <Link href="https://www.linkedin.com/in/divyank-jain-4377a3131">
            Divyank Jain
            <Linkedin size="1rem" className="inline ml-[3px]" />
          </Link>
          <br />
          <Link href="https://github.com/twin-drill">
            twin-drill
            <Github size="1rem" className="inline ml-[3px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
