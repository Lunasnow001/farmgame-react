const members = [
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "John lorin",
    email: "john@example.com",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Chris bondi",
    email: "chridbondi@example.com",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "yasmine",
    email: "yasmine@example.com",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
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
