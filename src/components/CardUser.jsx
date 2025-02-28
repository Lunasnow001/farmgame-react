const members = [
  {
    avatar:
      "https://www.pngbie.com/assets/images/icon/XkJBPjwcN0Pngbie-05240102491621792969.png",
    name: "John lorin",
    email: "john@example.com",
  },
  {
    avatar:
      "https://www.pngbie.com/assets/images/icon/hbFOvuyczWPngbie-05240051571621792317.png",
    name: "Chris bondi",
    email: "chridbondi@example.com",
  },
  {
    avatar:
      "https://png.pngtree.com/png-vector/20230922/ourmid/pngtree-majestic-tiger-png-image-png-image_10142521.png",
    name: "yasmine",
    email: "yasmine@example.com",
  },
  {
    avatar:
      "https://img.pikbest.com/png-images/20240514/mouse-or-mice-cartoon-character-_10562962.png!sw800",
    name: "Joseph",
    email: "joseph@example.com",
  },
];

const CardUser = () => {
  return (
    <div className="mx-auto px-20 py-20 max-w-2xl">
      <div className="sm:flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-gray-800 text-xl">Team members</h4>
          <p className="mt-2 text-gray-600 sm:text-sm text-base">
            Give your team members access to manage the system.
          </p>
        </div>
        <a
          href="javascript:void(0)"
          className="inline-flex justify-center items-center gap-1 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 mt-2 sm:mt-0 px-3 py-2 rounded-lg font-medium text-white text-sm text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          New member
        </a>
      </div>
      <ul className="mt-12 divide-y">
        {members.map((item, idx) => (
          <li key={idx} className="flex justify-between items-start py-5">
            <div className="flex gap-3">
              <img
                src={item.avatar}
                className="flex-none rounded-full w-12 h-12"
              />
              <div>
                <span className="block font-semibold text-gray-700 text-sm">
                  {item.name}
                </span>
                <span className="block text-gray-600 text-sm">
                  {item.email}
                </span>
              </div>
            </div>
            <a
              href="javascript:void(0)"
              className="bg-white hover:bg-gray-100 px-3 py-2 border rounded-lg text-gray-700 text-sm duration-150"
            >
              Manage
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardUser;
