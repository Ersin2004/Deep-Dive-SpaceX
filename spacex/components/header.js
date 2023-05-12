import { useState } from 'react';

export default function Head(props) {
  // UseState to check if menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // List of menu items
  const menuItems = [
    { name: 'ABOUT' },
    { name: 'LOCATIONS' },
    { name: 'FAQ' },
    { name: 'BOOKING' },
  ];

  // Sets the setCurrentpage prop with the name of the clicked menu item.
  const handleMenuClick = (item) => {
    props.setCurrentpage(item.name);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full text-white flex flex-row items-center gap-6 -mt-10 pt-0 pb-0">
      <div className="flex flex-row w-full sm:w-fit sm:pr-0 items-center sm:justify-start justify-between gap-6">
        <img
          onClick={() => {
            props.setCurrentpage('ABOUT');
          }}
          src="/logo.png"
          className="w-[150px] hover:cursor-pointer h-[125px] sm:w-[200px] mb-3 sm:h-[100px]"
          alt="Logo"
        ></img>

      </div>
      <div className="hidden sm:flex flex-row gap-12">
        {menuItems.map((item) => (
          <div
            key={`ITEM:${item.name}`}
            className="text-[18px] faq-text group hover:cursor-pointer"
          >
            <a onClick={() => handleMenuClick(item)}>{item.name}</a>
            <div
              className={`${
                props.id === item.name ? 'w-full' : 'w-0'
              } bg-white h-[2px] transition-all group-hover:w-full`}
            ></div>
          </div>
        ))}
      </div>
      <div className="sm:hidden mr-8">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white cursor-pointer focus:outline-none"
        >
          <svg
            className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
  <div className="sm:hidden mr-7 mt-12 pb-8">
    {menuItems.map((item) => (
      <div
        key={`ITEM:${item.name}`}
        className="text-[14px] faq-text flex-col group hover:cursor-pointer"
      >
        <a onClick={() => handleMenuClick(item)}>{item.name}</a>
        <div
          className={`${
            props.id === item.name ? 'w-full' : 'w-0'
          } bg-white h-[2px] transition-all group-hover:w-full`}
        ></div>
      </div>
    ))}
  </div>
)}
  </div>
);
}
