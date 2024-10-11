import { Github, Linkedin, Mail } from "lucide-react";

export default function Head() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Divyank
          <br />
          Jain
        </h1>
        <h2 className="text-xl md:text-xl font-bold mt-2">Software Engineer</h2>
      </div>
      <div className="text-right">
        <h3 className="text-md md:text-lg font-bold">Contact</h3>
        <div className="text-md">
          <a href="mailto:arbitrary152@gmail.com">
            arbitrary152@gmail.com
            <Mail size="1rem" className="inline ml-[3px]" />
          </a>
          <br />
          <a href="www.linkedin.com/in/divyank-jain-4377a3131">
            Divyank Jain
            <Linkedin size="1rem" className="inline ml-[3px]" />
          </a>
          <br />
          <a href="https://github.com/twin-drill">
            twin-drill
            <Github size="1rem" className="inline ml-[3px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
