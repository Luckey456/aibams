import "../Styles/Footer.css";


function Footer() {
  return (
    <footer className="bg-black text-white p-10">
    <hr className="simpleline pb-6 " />
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-6 ">
        {/* PRODUCT */}
        <div>
          <h3 className="font-bold mb-2">PRODUCT</h3>
          <ul className="space-y-2 text-white">
            {[
              { name: "Platform", link: "#" },
              { name: "Design", link: "#" },
              { name: "Interactions", link: "#" },
              { name: "Page building", link: "#" },
              { name: "CMS", link: "#" },
              { name: "Hosting", link: "#" },
              { name: "Localization", link: "#" },
              { name: "Security", link: "#" },
              { name: "Ecommerce", link: "#" },
              { name: "Analyze", link: "#" },
              { name: "Optimize", link: "#" },
              { name: "SEO", link: "#" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:!text-white cursor-pointer !text-gray-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h3 className="font-bold mb-2">SOLUTIONS</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { name: "Enterprise", link: "#" },
              { name: "Startups", link: "#" },
              { name: "Global alliances", link: "#" },
              { name: "Agencies", link: "#" },
              { name: "Freelancers", link: "#" },
              { name: "Classrooms", link: "#" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:!text-white cursor-pointer !text-gray-500"
                >
                  {item.name}
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-bold mb-2">RESOURCES</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { name: "Blog", link: "#" },
              { name: "Customer stories", link: "#" },
              { name: "Apps", link: "#" },
              { name: "Libraries", link: "#" },
              { name: "Templates", link: "#" },
              { name: "Developers", link: "#" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:!text-white cursor-pointer !text-gray-500"
                >
                  {item.name}
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-bold mb-2">COMPANY</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { name: "About", link: "#" },
              { name: "Careers", link: "#" },
              { name: "Press", link: "#" },
              { name: "Terms of Service", link: "#" },
              { name: "Privacy policy", link: "#" },
              { name: "Cookie policy", link: "#" },
              { name: "Cookie preferences", link: "#" },
              { name: "Accessibility statement", link: "#" },
              { name: "Sitemap", link: "#" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:!text-white cursor-pointer !text-gray-500"
                >
                  {item.name}
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>

        {/* COMMUNITY */}
        <div>
          <h3 className="font-bold mb-2">COMMUNITY</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { name: "Discover the community", link: "#" },
              { name: "Certified Partners", link: "#" },
              { name: "Become a template designer", link: "#" },
              { name: "Become an affiliate", link: "#" },
              { name: "Become a Global Leader", link: "#" },
              { name: "Find a meetup near you", link: "#" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:!text-white cursor-pointer !text-gray-500"
                >
                  {item.name}
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom section */}

      <hr className="simpleline pb-6  mt-7" />
      <div className="mt-10 text-center  pt-4">
        <p className="text-gray-400 text-sm">
          © 2025 All Rights Reserved by AIBAMS.
        </p>
        <p className="text-gray-300 mt-2  tracking-widest text-xl ">
          MADE WITH <span className="text-red-500 text-xl">❤️</span> BY{" "}
          <span className=" underline underline-offset-8 decoration-dotted "> SHDPIXEL</span> IN
          <span className="inline-block mx-1">
            
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India Flag"
              className="w-5 h-4 inline-block"
            />
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
