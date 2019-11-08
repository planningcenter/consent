import { mapPropsToClassNames } from "@planningcenter/utilities";
import { SIZES } from "../../composed-select";

export function getPointGridClassNames(
  { height: incomingHeight },
  strict = true
) {
  let height = getConstrainedSize(incomingHeight, strict);

  return (
    typeof height !== "object" &&
    mapPropsToClassNames("PointGridSelect")(["height"])({
      height
    })
  );
}

// private
function getConstrainedSize(height, strict) {
  if (strict && !SIZES.includes(height)) return;

  return height;
}
