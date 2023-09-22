import React from "react";

function Description({description}) {
  return (
    <p className="text-gray-600 text-xs font-quicksand text-left mb-4">
    {description}
  </p>
  );
}

export default Description;