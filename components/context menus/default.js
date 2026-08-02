import React from "react";

function DefaultMenu(props) {
  return (
    <div
      id="default-menu"
      className={
        (props.active ? " block " : " hidden ") +
        " cursor-default w-52 context-menu-bg border text-left border-gray-900 rounded text-white py-4 absolute z-50 text-sm"
      }
    >
      <a
        rel="noreferrer noopener"
        href="https://github.com/keys-i/portfolio"
        target="_blank"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">🌟</span> <span className="ml-2">View the source</span>
      </a>
      <a
        rel="noreferrer noopener"
        href="https://github.com/keys-i/portfolio/issues"
        target="_blank"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">❗</span> <span className="ml-2">Report a bug</span>
      </a>
      <Devider />
      <button
        type="button"
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">🧹</span> <span className="ml-2">Reset Krad Linux</span>
      </button>
    </div>
  );
}

function Devider() {
  return (
    <div className="flex justify-center w-full">
      <div className=" border-t border-gray-900 py-1 w-2/5"></div>
    </div>
  );
}

export default DefaultMenu;
