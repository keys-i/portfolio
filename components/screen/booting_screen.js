import React from "react";

function BootingScreen(props) {
  return (
    <div
      style={props.visible || props.isShutDown ? { zIndex: "100" } : { zIndex: "-20" }}
      className={
        (props.visible || props.isShutDown ? " visible opacity-100" : " invisible opacity-0 ") +
        " absolute duration-500 select-none flex flex-col justify-around items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-black"
      }
    >
      <div className="flex flex-col items-center text-white" aria-label="Krad Linux">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-ub-orange text-7xl font-bold">
          K
        </div>
        <div className="mt-4 text-3xl font-semibold tracking-wide">Krad Linux</div>
      </div>
      <button
        type="button"
        aria-label={props.isShutDown ? "Power on" : "Krad Linux is loading"}
        disabled={!props.isShutDown}
        className="w-10 h-10 flex justify-center items-center rounded-full outline-none cursor-pointer"
        onClick={props.turnOn}
      >
        {props.isShutDown ? (
          <div className="bg-white rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-300">
            <img
              width="32px"
              height="32px"
              className="w-8"
              src="./themes/Yaru/status/power-button.svg"
              alt=""
            />
          </div>
        ) : (
          <img
            width="40px"
            height="40px"
            className={" w-10 " + (props.visible ? " animate-spin " : "")}
            src="./themes/Yaru/status/process-working-symbolic.svg"
            alt=""
          />
        )}
      </button>
      <div className="text-2xl font-light tracking-wide text-white">Rad’s Portfolio</div>
      <div className="text-white mb-4">
        <a
          href="https://github.com/keys-i/portfolio"
          rel="noreferrer noopener"
          target="_blank"
          className="underline"
        >
          source on GitHub
        </a>
      </div>
    </div>
  );
}

export default BootingScreen;
