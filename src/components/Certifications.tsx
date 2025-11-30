import { Award, ExternalLink } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  credentialId: string;
  verificationUrl: string;
  date: string;
}

const Certifications = ({ variant = "cards" }) => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Version Control",
      issuer: "Meta / Coursera",
      credentialId: "515R5LPQUGWA",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/515R5LPQUGWA",
      date: "2025",
    },
    {
      id: 2,
      title: "Advanced React",
      issuer: "Meta / Coursera",
      credentialId: "46AUF2VCCG96",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/46AUF2VCCG96",
      date: "2025",
    },
    {
      id: 3,
      title: "JavaScript",
      issuer: "Meta / Coursera",
      credentialId: "16KGP8BZPPCT",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/16KGP8BZPPCT?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
      date: "2025",
    },
    {
      id: 4,
      title: "Front-End Developer Capstone",
      issuer: "Meta / Coursera",
      credentialId: "JOXWIWJ0FCB5",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/JOXWIWJ0FCB5?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
      date: "2025",
    },
  ];

  if (variant === "list") {
    // For CV - list format
    return (
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div key={cert.id} className="flex items-start gap-3 pb-3 border-b border-gray-200 last:border-b-0">
            <Award size={18} style={{ color: '#667eea', flexShrink: 0, marginTop: '2px' }} />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold" style={{ color: '#764ba2' }}>{cert.title}</h4>
                  <p className="text-sm" style={{ color: '#4a4a4a' }}>
                    {cert.issuer} • Credential: {cert.credentialId}
                  </p>
                </div>
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#667eea',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#764ba2'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#667eea'}
                >
                  Verify →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // For About - card format
  return (
    <div className="space-y-6">
      <div className="text-center mb-12 animate-fade-in">
        <h3 className="text-3xl font-bold mb-4">
          <span className="text-gradient">Professional</span> Certifications
        </h3>
        <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
          Meta/Coursera Certified Frontend Developer - Verified Credentials
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className="relative group"
            style={{ perspective: '1000px' }}
          >
            <div
              className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-4 animate-fade-in-up card-float-3d relative"
              style={{
                animationDelay: `${index * 0.1}s`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* 3D Rotating Border Effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(262 83% 58%), hsl(217 91% 60%), hsl(262 83% 58%))',
                  animation: 'rotate-border-3d 4s linear infinite',
                  pointerEvents: 'none',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <Award className="w-8 h-8 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f0f0', color: '#667eea' }}>
                    {cert.date}
                  </span>
                </div>

                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>

                <p className="text-sm text-foreground/70 mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-foreground/60 mb-4 font-mono">
                  ID: {cert.credentialId}
                </p>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary/20 transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/30"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Verify Certificate</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes rotate-border-3d {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }

        @keyframes card-float-3d {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          50% {
            transform: translateY(-15px) rotateX(5deg) rotateY(5deg);
          }
        }

        .card-float-3d {
          animation: card-float-3d 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Certifications;
