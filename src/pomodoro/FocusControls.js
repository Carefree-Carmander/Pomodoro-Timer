import React from "react";



// focusDuration
// decreaseFocusTimer
// session
// increaseFocusTimer

export const FocusControls = function ({ focusDuration, decreaseFocusTimer, increaseFocusTimer, session }) {
  function ShowFocusDuration() {
    if (focusDuration < 10) {
      return (
        <span className="input-group-text" data-testid="duration-focus">
          Focus Duration: 0{focusDuration}:00 min
        </span>
      );
    } else {
      if (focusDuration >= 10) {
        return (
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {focusDuration}:00 min
          </span>
        );
      }
    }
  }

  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <ShowFocusDuration />
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            onClick={decreaseFocusTimer}
            disabled={session}
          >
            <span className="oi oi-minus" />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            onClick={increaseFocusTimer}
            disabled={session}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FocusControls;