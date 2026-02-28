import Container from "./Container";

export default function Footer() {
  const topCategories = [
    "Computer & Laptop",
    "SmartPhone",
    "Headphone",
    "Camera & Photo",
    "TV & Homes",
  ];

  const quickLinks = [
    "Shop Product",
    "Shoping Cart",
    "Wishlist",
    "Compare",
    "Track Order",
    "Customer Help",
    "About Us",
  ];

  const popularTags = [
    ["Game", "iPhone", "TV", "Asus Laptops"],
    ["Macbook", "SSD", "Graphics Card"],
    ["Power Bank", "Smart TV", "Speaker"],
    ["Tablet", "Microwave", "Samsung"],
  ];

  return (
    <footer className="bg-[#191c1f] py-14">
      <Container>
        <div className="flex flex-wrap justify-between gap-8 text-white">
          {/* Company Info */}
          <div className="flex min-w-59 flex-2 flex-col gap-6 md:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex  items-start gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18ZM27 18C27 22.9706 22.9706 27 18 27C13.0294 27 9 22.9706 9 18C9 13.0294 13.0294 9 18 9C22.9706 9 27 13.0294 27 18ZM18 24C21.3137 24 24 21.3137 24 18C24 14.6863 21.3137 12 18 12C14.6863 12 12 14.6863 12 18C12 21.3137 14.6863 24 18 24Z"
                    fill="#FA8232"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-[32px] font-bold leading-tight md:leading-10 tracking-[-0.64px]">
                UNITED DEAL
              </h2>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-[#77878f]">Customer Supports:</p>
                <p className="text-lg font-medium">(629) 555-0129</p>
              </div>
              <p className="text-base text-[#adb7bc] max-w-[248px]">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
              <p className="text-base font-medium">info@kinbo.com</p>
            </div>
          </div>

          {/* Top Category */}
          <div className="flex min-w-59 flex-1 flex-col gap-3">
            <h3 className="text-base font-medium uppercase">Top Category</h3>
            <div className="flex flex-col">
              {topCategories.map((category, index) => (
                <div key={category}>
                  <a
                    href="#"
                    className="py-1.5 text-sm font-medium text-[#929fa5] hover:text-white transition-colors"
                  >
                    {category}
                  </a>
                  {index == 2 && (
                    <a
                      href="#"
                      className="py-1.5 flex items-center gap-2 text-sm font-medium text-white"
                    >
                      <div className="w-6 h-0 border-t-[1.5px] border-[#ebc80c]" />
                      <span>Accessories</span>
                    </a>
                  )}
                </div>
              ))}

              <button className="py-1.5 flex items-center gap-2 text-sm font-medium text-[#ebc80c] hover:underline">
                <span>Browse All Product</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex min-w-59 flex-1 flex-col gap-3">
            <h3 className="text-base font-medium uppercase">Quick Links</h3>
            <div className="flex flex-col">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="py-1.5 text-sm font-medium text-[#929fa5] hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Download App */}
          <div className="flex min-w-59 flex-1 flex-col gap-4.5">
            <h3 className="text-base font-medium uppercase">Download App</h3>
            <div className="flex flex-col gap-3">
              {/* Google Play */}
              <a
                href="#"
                className="bg-[#303639] flex items-center gap-4 px-5 py-4 rounded-[3px] hover:bg-[#404649] transition-colors"
              >
                <div className="w-8 h-8 shrink-0">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0652 10.9848L3.7188 0.6096L16.8828 8.1672L14.0652 10.9848ZM1.0176 0C0.408 0.3192 0 0.9 0 1.656V22.344C0 23.1 0.408 23.6808 1.0176 24L13.05 11.9976L1.0176 0ZM20.9532 10.5768L18.192 8.9784L15.1116 12.0024L18.192 15.0264L21.0096 13.428C21.8532 12.7572 21.8532 11.2476 20.9532 10.5768ZM3.7188 23.3952L16.8828 15.8376L14.0652 13.02L3.7188 23.3952Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] leading-[13px]">Get it now</p>
                  <p className="text-sm font-semibold leading-5">Google Play</p>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="bg-[#303639] flex items-center gap-4 px-5 py-4 rounded-[3px] hover:bg-[#404649] transition-colors"
              >
                <div className="w-8 h-8 shrink-0">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.792 18.7035C19.442 19.5187 19.0097 20.296 18.502 21.0235C17.823 21.991 17.2675 22.6605 16.8395 23.0325C16.176 23.6425 15.4645 23.9555 14.703 23.973C14.1565 23.973 13.4975 23.8175 12.73 23.502C11.96 23.188 11.2525 23.032 10.6055 23.032C9.927 23.032 9.1995 23.188 8.421 23.502C7.6415 23.8175 7.0135 23.982 6.5335 23.998C5.8035 24.0295 5.0755 23.708 4.3485 23.0325C3.885 22.6275 3.3055 21.9345 2.6105 20.9525C1.865 19.9035 1.252 18.6875 0.772 17.3005C0.258 15.803 0 14.3525 0 12.9485C0 11.34 0.3475 9.953 1.0435 8.7905C1.591 7.8565 2.3185 7.1205 3.2295 6.5795C4.12324 6.04467 5.14302 5.75686 6.1845 5.7455C6.7645 5.7455 7.525 5.925 8.4705 6.2775C9.413 6.631 10.018 6.8105 10.2835 6.8105C10.4815 6.8105 11.154 6.6005 12.2935 6.1825C13.3715 5.7945 14.281 5.634 15.026 5.6975C17.0455 5.8605 18.5625 6.6565 19.571 8.0905C17.7655 9.1845 16.872 10.717 16.89 12.683C16.906 14.2145 17.4615 15.489 18.5535 16.5005C19.0485 16.9705 19.601 17.3335 20.2155 17.591C20.0867 17.9664 19.9454 18.3374 19.792 18.7035ZM15.161 0.4805C15.161 1.6805 14.7225 2.8015 13.8485 3.8385C12.7935 5.072 11.518 5.7845 10.1345 5.672C10.1159 5.52105 10.1066 5.3691 10.1065 5.217C10.1065 4.065 10.608 2.832 11.499 1.8235C11.944 1.313 12.509 0.8885 13.195 0.55C13.88 0.2165 14.527 0.032 15.136 0C15.1535 0.1605 15.161 0.321 15.161 0.48V0.4805Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] leading-[13px]">Get it now</p>
                  <p className="text-sm font-semibold leading-5">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="flex min-w-59 flex-2 flex-col gap-4.5 md:col-span-2 lg:col-span-1">
            <h3 className="text-base font-medium uppercase">Popular Tag</h3>
            <div className="flex flex-col gap-2">
              {popularTags.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-2 flex-wrap">
                  {row.map((tag) => (
                    <button
                      key={tag}
                      className={`px-3 py-1.5 text-sm font-medium rounded-[2px] border transition-colors 
                         hover:bg-[#303639] hover:border-white                                                                                  
                          border-[#303639] hover:border-white"
                      `}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
