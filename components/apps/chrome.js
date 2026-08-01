import React, { Component } from "react";

export class Chrome extends Component {
  constructor() {
    super();
    this.home_url = "https://www.google.com/webhp?igu=1";
    this.state = {
      url: "https://www.google.com/webhp?igu=1",
      display_url: "https://www.google.com",
    };
  }

  componentDidMount() {
    let lastVisitedUrl = localStorage.getItem("chrome-url");
    let lastDisplayedUrl = localStorage.getItem("chrome-display-url");
    if (lastVisitedUrl?.startsWith("https://")) {
      this.setState({ url: lastVisitedUrl, display_url: lastDisplayedUrl }, this.refreshChrome);
    }
  }

  storeVisitedUrl = (url, display_url) => {
    localStorage.setItem("chrome-url", url);
    localStorage.setItem("chrome-display-url", display_url);
  };

  refreshChrome = () => {
    document.getElementById("chrome-screen").src += "";
  };

  goToHome = () => {
    this.setState({ url: this.home_url, display_url: "https://www.google.com" });
    this.refreshChrome();
  };

  checkKey = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value.trim();
      if (!value) return;

      let parsed;
      try {
        parsed = new URL(value.startsWith("https://") ? value : `https://${value}`);
      } catch {
        return;
      }
      if (parsed.protocol !== "https:") return;

      let url = parsed.href;
      let display_url = url;
      if (parsed.hostname === "google.com" || parsed.hostname.endsWith(".google.com")) {
        url = "https://www.google.com/webhp?igu=1";
        display_url = "https://www.google.com";
      }
      this.setState({ url, display_url });
      this.storeVisitedUrl(url, display_url);
      document.getElementById("chrome-url-bar").blur();
    }
  };

  handleDisplayUrl = (e) => {
    this.setState({ display_url: e.target.value });
  };

  reverseQuerySearch = () => {
    const searchQuery = `https://www.google.com/search?q=${encodeURIComponent(this.state.display_url)}&igu=1`;
    this.setState({ url: searchQuery }, this.refreshChrome);
    this.storeVisitedUrl(searchQuery, this.state.display_url);
  };
  displayUrlBar = () => {
    return (
      <div className="w-full pt-0.5 pb-1 flex justify-start items-center text-white text-sm border-b border-gray-900">
        <div
          onClick={this.refreshChrome}
          className=" ml-2 mr-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10"
        >
          <img
            className="w-5"
            src="./themes/Yaru/status/chrome_refresh.svg"
            alt="Ubuntu Chrome Refresh"
          />
        </div>
        <div
          onClick={this.goToHome}
          className=" mr-2 ml-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10"
        >
          <img
            className="w-5"
            src="./themes/Yaru/status/chrome_home.svg"
            alt="Ubuntu Chrome Home"
          />
        </div>
        <button
          onClick={this.reverseQuerySearch}
          className="ml-2 mr-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10"
        >
          Reverse Search
        </button>
        <input
          onKeyDown={this.checkKey}
          onChange={this.handleDisplayUrl}
          value={this.state.display_url}
          id="chrome-url-bar"
          className="outline-none bg-ub-grey rounded-full pl-3 py-0.5 mr-3 w-5/6 text-gray-300 focus:text-white"
          type="url"
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    );
  };

  render() {
    return (
      <div className="h-full w-full flex flex-col bg-ub-cool-grey">
        {this.displayUrlBar()}
        <iframe
          src={this.state.url}
          sandbox="allow-forms allow-popups allow-scripts"
          referrerPolicy="no-referrer"
          className="flex-grow"
          id="chrome-screen"
          frameBorder="0"
          title="Ubuntu Chrome Url"
        ></iframe>
      </div>
    );
  }
}

export default Chrome;

export const displayChrome = () => {
  return <Chrome> </Chrome>;
};
