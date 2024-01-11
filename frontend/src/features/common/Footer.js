function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 md:w-1/4 ml-20">
          <h3 className="text-3xl font-bold mb-4">Prime Picks</h3>
          <p className="text-sm">Buy the latest products with ease.</p>
        </div>
        <div className="flex flex-wrap md:w-3/4 ml-20">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-xl font-semibold mb-3 ">Explore</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-xl font-semibold mb-3">Support</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-xl font-semibold mb-3">Connect</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">
          © 2023 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
