import {
  GraduationCap,
  BriefcaseBusiness,
  Code,
  SquareChevronRight,
  Package,
  FileSymlink,
} from "lucide-react";
import Head from "./head";
import ResumeItem from "./resume_item";

export default function Home() {
  const size = "1.05rem";

  return (
    <div className="h-full p-8 m-6">
      <Head />
      <br />
      <GraduationCap className="inline mr-[6px]" size={size} />
      <ResumeItem
        name="University of Wisconsin - Madison"
        sub="Computer Science, Data Science, Mathematics"
        desc="Operating Systems, Algorithms, Artificial Intelligence, Databases"
      />
      <BriefcaseBusiness className="inline mr-[6px]" size={size} />
      <ResumeItem
        name="StrongDM Inc."
        sub="Mar 2025 - Present"
        desc="Backend Software Engineer"
      />
      <Code className="inline mr-[6px]" size={size} />
      <ResumeItem sub="Python, C/C++, JS/TS, Java, R, SQL, Bash" />
      <Package className="inline mr-[6px]" size={size} />
      <ResumeItem sub="Scikit, PyTorch, TensorFlow, Django, Flask, NodeJS, JavaFX" />
      <SquareChevronRight className="inline mr-[6px]" size={size} />
      <ResumeItem sub="Linux, Web, GCP, AWS" />
      <br />
      <br />
      <a
        href="https://drive.google.com/file/d/15GeKtxyHETsN834xXjjqw0fmUQPMJaB8/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Full resume
        <FileSymlink className="inline ml-[6px]" size={size} />
      </a>
    </div>
  );
}
