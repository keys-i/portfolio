import React, { Component } from "react";
import $ from "jquery";
import { calculate } from "../../lib/calculate.mjs";

export class Calc extends Component {
  constructor() {
    super();
    this.cursor = "";
    this.terminal_rows = 2;
    this.prev_commands = [];
    this.commands_index = -1;
    this.state = {
      terminal: [],
    };
  }

  componentDidMount() {
    this.reStartTerminal();
  }

  componentDidUpdate() {
    clearInterval(this.cursor);
    this.startCursor(this.terminal_rows - 2);
  }

  componentWillUnmount() {
    clearInterval(this.cursor);
  }

  reStartTerminal = () => {
    clearInterval(this.cursor);
    $("#calculator-body").empty();
    this.appendTerminalRow();
  };

  appendTerminalRow = () => {
    let terminal = this.state.terminal;
    terminal.push(this.terminalRow(this.terminal_rows));
    this.setState({ terminal });
    this.terminal_rows += 2;
  };

  terminalRow = (id) => {
    return (
      <React.Fragment key={id}>
        <div className=" flex p-2 text-ubt-grey opacity-100 mt-1 float-left font-normal "></div>
        <div className="flex w-full h-5">
          <div className=" flex text-ubt-green h-1 mr-2"> {";"} </div>
          <div
            id="cmd"
            onClick={this.focusCursor}
            className=" bg-transperent relative flex-1 overflow-hidden"
          >
            <span
              id={`show-calculator-${id}`}
              className=" float-left whitespace-pre pb-1 opacity-100 font-normal tracking-wider"
            ></span>
            <div id={`cursor-${id}`} className=" float-left mt-1 w-1.5 h-3.5 bg-white"></div>
            <input
              id={`calculator-input-${id}`}
              data-row-id={id}
              onKeyDown={this.checkKey}
              onBlur={this.unFocusCursor}
              className=" absolute top-0 left-0 w-full opacity-0 outline-none bg-transparent"
              spellCheck={false}
              autoFocus={true}
              autoComplete="off"
              type="text"
            />
          </div>
        </div>
        <div id={`row-calculator-result-${id}`} className={"my-2 font-normal"}></div>
      </React.Fragment>
    );
  };

  focusCursor = (e) => {
    clearInterval(this.cursor);
    this.startCursor($(e.target).data("row-id"));
  };

  unFocusCursor = (e) => {
    this.stopCursor($(e.target).data("row-id"));
  };

  startCursor = (id) => {
    clearInterval(this.cursor);
    $(`input#calculator-input-${id}`).trigger("focus");
    // On input change, set current text in span
    $(`input#calculator-input-${id}`).on("input", function () {
      $(`#cmd span#show-calculator-${id}`).text($(this).val());
    });
    this.cursor = window.setInterval(function () {
      if ($(`#cursor-${id}`).css("visibility") === "visible") {
        $(`#cursor-${id}`).css({ visibility: "hidden" });
      } else {
        $(`#cursor-${id}`).css({ visibility: "visible" });
      }
    }, 500);
  };

  stopCursor = (id) => {
    clearInterval(this.cursor);
    $(`#cursor-${id}`).css({ visibility: "visible" });
  };

  removeCursor = (id) => {
    this.stopCursor(id);
    $(`#cursor-${id}`).css({ display: "none" });
  };

  clearInput = (id) => {
    $(`input#calculator-input-${id}`).trigger("blur");
  };

  checkKey = (e) => {
    if (e.key === "Enter") {
      let terminal_row_id = $(e.target).data("row-id");
      let command = $(`input#calculator-input-${terminal_row_id}`).val().trim();
      if (command.length !== 0) {
        this.removeCursor(terminal_row_id);
        this.handleCommands(command, terminal_row_id);
      } else return;
      // push to history
      this.prev_commands.push(command);
      this.commands_index = this.prev_commands.length - 1;

      this.clearInput(terminal_row_id);
    } else if (e.key === "ArrowUp") {
      let prev_command;

      if (this.commands_index <= -1) prev_command = "";
      else prev_command = this.prev_commands[this.commands_index];

      let terminal_row_id = $(e.target).data("row-id");

      $(`input#calculator-input-${terminal_row_id}`).val(prev_command);
      $(`#show-calculator-${terminal_row_id}`).text(prev_command);

      this.commands_index--;
    } else if (e.key === "ArrowDown") {
      let prev_command;

      if (this.commands_index >= this.prev_commands.length) return;
      if (this.commands_index <= -1) this.commands_index = 0;

      if (this.commands_index === this.prev_commands.length) prev_command = "";
      else prev_command = this.prev_commands[this.commands_index];

      let terminal_row_id = $(e.target).data("row-id");

      $(`input#calculator-input-${terminal_row_id}`).val(prev_command);
      $(`#show-calculator-${terminal_row_id}`).text(prev_command);

      this.commands_index++;
    }
  };

  closeTerminal = () => {
    $("#close-calc").trigger("click");
  };

  handleCommands = (command, rowId) => {
    let words = command.split(" ").filter(Boolean);
    let main = words[0];
    // words.shift()
    let result = "";
    switch (main) {
      case "clear":
        this.reStartTerminal();
        return;
      case "exit":
        this.closeTerminal();
        return;
      case "help":
        result =
          "Operators: +, -, *, /, %, ^ and parentheses. Type clear to reset or exit to close.";
        break;
      default:
        result = this.evaluateExpression(command);
    }
    document.getElementById(`row-calculator-result-${rowId}`).textContent = result;
    this.appendTerminalRow();
  };
  evaluateExpression = (command) => {
    try {
      return calculate(command);
    } catch {
      return "Invalid expression";
    }
  };

  render() {
    return (
      <div className="h-full w-full bg-ub-drk-abrgn text-ubt-grey opacity-100 p-1 float-left font-normal">
        <div>Safe arithmetic calculator</div>
        <div>Supports +, -, *, /, %, ^ and parentheses.</div>
        <div>[ type "exit" to exit, "clear" to clear, "help" for help.]</div>
        <div className="text-white text-sm font-bold bg-ub-drk-abrgn" id="calculator-body">
          {this.state.terminal}
        </div>
      </div>
    );
  }
}

export default Calc;

export const displayTerminalCalc = (addFolder, openApp) => {
  return (
    <Calc addFolder={addFolder} openApp={openApp}>
      {" "}
    </Calc>
  );
};
