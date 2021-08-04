import React from "react";

export const BreakControls = function ({
  breakDuration,
  decreaseBreakTimer,
  increaseBreakTimer,
  session,
}) {
  function BreakDurationControls() {
    if (breakDuration < 10) {
      return (
        <span className="input-group-text" data-testid="duration-break">
          Break Duration: 0{breakDuration}:00 min
        </span>
      );
    } else {
      if (breakDuration >= 10) {
        return (
          <span className="input-group-text" data-testid="duration-break">
            Break Duration: {breakDuration}:00 min
          </span>
        );
      }
    }
  }

  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <BreakDurationControls />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={decreaseBreakTimer}
              disabled={session}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              onClick={increaseBreakTimer}
              disabled={session}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakControls;
