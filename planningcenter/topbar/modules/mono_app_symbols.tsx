import * as React from "react";

export function Squircle({ color = "#fff", ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M10.008.045C2.047.045.056,2.036.056,10s1.991,9.952,9.952,9.952S19.96,17.959,19.96,10,17.969.045,10.008.045Z"
    />
  );
}

export function Accounts({ color, ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M13.657,10.478a3.419,3.419,0,0,0,0-.962l1.036-.81a.248.248,0,0,0,.059-.314l-.982-1.7a.245.245,0,0,0-.3-.108l-1.223.491a3.563,3.563,0,0,0-.83-.482l-.186-1.3a.24.24,0,0,0-.241-.206H9.027a.24.24,0,0,0-.241.206L8.6,6.594a3.748,3.748,0,0,0-.83.482L6.547,6.585a.238.238,0,0,0-.3.108l-.982,1.7a.242.242,0,0,0,.059.314l1.036.81a3.323,3.323,0,0,0,0,.962l-1.036.81a.249.249,0,0,0-.059.315l.982,1.7a.247.247,0,0,0,.3.108l1.223-.491a3.594,3.594,0,0,0,.83.481l.186,1.3a.24.24,0,0,0,.241.206h1.964a.24.24,0,0,0,.241-.206l.186-1.3a3.784,3.784,0,0,0,.83-.481l1.223.491a.239.239,0,0,0,.3-.108l.982-1.7a.249.249,0,0,0-.059-.315ZM10.009,11.9a1.9,1.9,0,1,1,1.9-1.9A1.9,1.9,0,0,1,10.009,11.9Z"
    />
  );
}

export function API({ color, ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M11.08,12.387a3.277,3.277,0,0,0,.21-.86l1.47-.23-.25-1.63-1.48.22A3.167,3.167,0,0,0,9.93,8.5l.54-1.37-1.54-.6L8.39,7.9a3.393,3.393,0,0,0-1.76.27l-.92-1.15-1.3,1.03.93,1.16a3.462,3.462,0,0,0-.43.78A3.333,3.333,0,0,0,4.69,11l-1.49.23.25,1.69,1.59-.24a3.278,3.278,0,0,0,1.02,1.2l-.54,1.39,1.55.6.54-1.39a3.319,3.319,0,0,0,1.74-.27l.93,1.17,1.3-1.04-.93-1.17A3.258,3.258,0,0,0,11.08,12.387ZM9.81,11.9A1.953,1.953,0,0,1,7.29,13a1.942,1.942,0,1,1,2.52-1.1Zm5.89-4.32a1.581,1.581,0,0,0,.04-.38,2.066,2.066,0,0,0-1.39-1.95v-.82H12.97v.82A2.066,2.066,0,0,0,11.58,7.2a1.581,1.581,0,0,0,.04.38l-.71.41.7,1.2.7-.4a2.073,2.073,0,0,0,2.7,0l.7.4.7-1.2Zm-2.04.67A1.045,1.045,0,1,1,14.7,7.2,1.041,1.041,0,0,1,13.66,8.247Z"
    />
  );
}

export function Calendar({ color, ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M14.18,6.5h-.91V5.8a.55.55,0,0,0-.55-.55h-.26a.55.55,0,0,0-.55.55v.7H8.09V5.8a.55.55,0,0,0-.55-.55H7.28a.55.55,0,0,0-.55.55v.7H5.82a.58.58,0,0,0-.58.59v7.08a.58.58,0,0,0,.58.58h8.36a.58.58,0,0,0,.58-.58V7.09A.58.58,0,0,0,14.18,6.5Zm-.91,6.71H6.73V9.09h6.54Z"
    />
  );
}

export function CheckIns({ color, ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M14.175,8.341,9.258,13.256a1.157,1.157,0,0,1-1.638,0L5.161,10.8A1.159,1.159,0,1,1,6.8,9.16L8.439,10.8l4.1-4.1a1.159,1.159,0,0,1,1.639,1.639Z"
    />
  );
}

export function ChurchCenter({ color, ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M13.91,14.763a.334.334,0,0,1-.331.338l-1.959-.016a.334.334,0,0,1-.338-.331s.005-.233.005-1.8a3.674,3.674,0,0,0-1.279-2.638,3.674,3.674,0,0,0-1.279,2.638c0,1.565.005,1.8.005,1.8a.334.334,0,0,1-.338.331L6.437,15.1a.334.334,0,0,1-.331-.338s-.242-6.457-.02-6.65h0L9.671,5.021a.522.522,0,0,1,.684,0l3.58,3.092H13.93C14.152,8.325,13.91,14.763,13.91,14.763Z"
    />
  );
}

export function Giving({ color, ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M10.3,13.769a.508.508,0,0,1-.592,0c-1.259-.888-5.982-4.494-3.268-6.83a2.386,2.386,0,0,1,3.215.205l.349.349.349-.349a2.386,2.386,0,0,1,3.215-.205C16.286,9.275,11.563,12.881,10.3,13.769Z"
    />
  );
}

export function Groups({ color, ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M13.769,11.313V8.683a1.867,1.867,0,1,0-2.443-2.449H8.69A1.867,1.867,0,1,0,6.243,8.681v2.632A1.867,1.867,0,1,0,8.69,13.76h2.632a1.867,1.867,0,1,0,2.447-2.447Zm-1.455,0a1.873,1.873,0,0,0-.992.992H8.69a1.877,1.877,0,0,0-.992-.992V8.681a1.877,1.877,0,0,0,.992-.992h2.636a1.872,1.872,0,0,0,.988.99Z"
    />
  );
}

export function People({ color, ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M8.177,5.732A2.018,2.018,0,1,1,6.159,7.75,2.019,2.019,0,0,1,8.177,5.732Zm2.494,8.53H5.664A.565.565,0,0,1,5.1,13.7V12.422a1.841,1.841,0,0,1,1.841-1.841H9.394a1.841,1.841,0,0,1,1.841,1.841V13.7A.565.565,0,0,1,10.671,14.262ZM12.814,6.94A1.513,1.513,0,1,1,11.3,8.453,1.513,1.513,0,0,1,12.814,6.94Zm1.537,6.093H12.413a.565.565,0,0,1-.565-.565v-.049a2.292,2.292,0,0,0-.2-.957.555.555,0,0,0-.062-.141.8.8,0,0,0-.061-.11,1.19,1.19,0,0,0-.092-.16,1.131,1.131,0,0,1,.908-.472h1.472a1.108,1.108,0,0,1,1.105,1.1v.785A.565.565,0,0,1,14.351,13.033Z"
    />
  );
}

export function Publishing({ color, ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M7.287,13.575a.478.478,0,0,1-.477.477H5.856a.478.478,0,0,1-.477-.477V6.407a.478.478,0,0,1,.477-.477H6.81a.478.478,0,0,1,.477.477Zm7.293,0a.477.477,0,0,1-.477.477H9.268a.478.478,0,0,1-.477-.477V12.6a.478.478,0,0,1,.477-.477H14.1a.477.477,0,0,1,.477.477Zm0-3.473a.477.477,0,0,1-.476.477H9.268a.478.478,0,0,1-.477-.477V6.407a.478.478,0,0,1,.477-.477H14.1a.477.477,0,0,1,.477.477Z"
    />
  );
}

export function Registrations({ color, ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M4.48,11.09a.51.51,0,0,0,0,.71l.7.7a.22.22,0,0,0,.27,0,1.47,1.47,0,0,1,1.8.22,1.5,1.5,0,0,1,.23,1.81.21.21,0,0,0,0,.27l.7.7a.51.51,0,0,0,.71,0l2-2a.16.16,0,0,0,0-.22L6.7,9.1a.17.17,0,0,0-.23,0Zm11-2.89-.71-.7a.21.21,0,0,0-.26,0,1.47,1.47,0,0,1-1.79-.23,1.49,1.49,0,0,1-.24-1.79.22.22,0,0,0,0-.27l-.7-.7a.51.51,0,0,0-.71,0L7.47,8.11a.14.14,0,0,0,0,.22l4.2,4.2a.14.14,0,0,0,.22,0l3.63-3.62A.51.51,0,0,0,15.52,8.2Z"
    />
  );
}

export function Resources({ color, ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M9.241,14a.6.6,0,0,1-.6.6H6.007a.6.6,0,0,1-.6-.6V11.364a.6.6,0,0,1,.6-.6H8.641a.6.6,0,0,1,.6.6Zm0-5.367a.6.6,0,0,1-.6.6H6.007a.6.6,0,0,1-.6-.6V6a.6.6,0,0,1,.6-.6H8.641a.6.6,0,0,1,.6.6ZM14.609,14a.6.6,0,0,1-.6.6H11.374a.6.6,0,0,1-.6-.6V11.364a.6.6,0,0,1,.6-.6h2.635a.6.6,0,0,1,.6.6Zm0-5.367a.6.6,0,0,1-.6.6H11.374a.6.6,0,0,1-.6-.6V6a.6.6,0,0,1,.6-.6h2.635a.6.6,0,0,1,.6.6Z"
    />
  );
}

export function Services({ color, ...platformProps }): JSX.Element {
  return (
    <path
      fill={color}
      d="M6.5,6.559A1.059,1.059,0,1,1,5.443,5.5,1.059,1.059,0,0,1,6.5,6.559ZM5.443,8.943A1.059,1.059,0,1,0,6.5,10,1.059,1.059,0,0,0,5.443,8.943Zm0,3.443A1.059,1.059,0,1,0,6.5,13.445,1.059,1.059,0,0,0,5.443,12.386ZM15,6.087a.485.485,0,0,0-.485-.485H8.136a.485.485,0,0,0-.485.485V7.03a.485.485,0,0,0,.485.485h6.38A.485.485,0,0,0,15,7.03ZM15,9.53a.485.485,0,0,0-.485-.485H8.136a.485.485,0,0,0-.485.485v.943a.485.485,0,0,0,.485.485h6.38A.485.485,0,0,0,15,10.473Zm0,3.443a.485.485,0,0,0-.485-.485H8.136a.485.485,0,0,0-.485.485v.943a.485.485,0,0,0,.485.485h6.38A.485.485,0,0,0,15,13.916Z"
    />
  );
}
