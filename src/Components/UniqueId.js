import React from "react";
function gen4() {
    return Math.random().toString(16).slice(-4)
  }
function SimpleUniqueId(prefix) {
    return (prefix || '').concat([
      gen4(),
      gen4(),
      gen4(),
      gen4(),
      gen4(),
      gen4(),
      gen4(),
      gen4()
    ].join(''))
}
export default SimpleUniqueId;