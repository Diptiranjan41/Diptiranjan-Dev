import { certificates, internships } from "../data/data";

export default function CertificateSection() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Certificates & Internships
      </h2>

      {/* Certificates Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-green-600">
          📄 Certificates
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl border border-indigo-300 dark:border-indigo-600 p-4 transition-transform hover:scale-105"
            >
              <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
                {cert.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                View Certificate →
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Internships Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-purple-600">
          💼 Internships
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((intern, index) => (
            <a
              key={index}
              href={intern.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl border border-purple-300 dark:border-purple-600 p-4 transition-transform hover:scale-105"
            >
              <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                {intern.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                View Internship →
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
