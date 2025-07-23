import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
<footer className="bg-[#0f172a] border-t border-slate-800 px-6 py-10 text-slate-100">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-sm text-indigo-200 text-center ">
      &copy; {new Date().getFullYear()}{" "}
      <span className="font-semibold text-white">Diptiranjan.co</span>. All rights reserved.
      <br />
      Crafted with 💻 and ❤️ by Diptiranjan.
    </p>
    <a
      href="#hero"
      className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 shadow-sm hover:shadow-md"
    >
      <ArrowUp size={20} />
    </a>
  </div>
</footer>



  );
};

