import FooterForm from "@/components/FooterForm";
import { FooterInfor } from "@/contexts";

const Footer = () => {
  return (
    <footer className="container bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Footer right */}
        <FooterForm />

        {/* Footer left */}
        <div className="w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center mb-10 mt-10 md:mt-0">
            Email
          </h1>
          <div className="flex justify-center items-center mb-6">
            <div className="flex flex-col gap-4">
              {FooterInfor.map((item, id) => (
                <div key={id} className="flex items-center gap-2">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} className="underline">
                      {item.content}
                    </a>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm lg:text-left my-6">
        Copy Right & Reserved by “ប៉ា” Pa official .
      </p>
    </footer>
  );
};

export default Footer;
