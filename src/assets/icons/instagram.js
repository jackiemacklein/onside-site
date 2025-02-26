import React from "react";

function InstagramIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style={props.style ?? {}} width={props.width} height={props.height}>
      <path
        d="M21.721,0H8.279A8.288,8.288,0,0,0,0,8.279V21.721A8.288,8.288,0,0,0,8.279,30H21.721A8.288,8.288,0,0,0,30,21.721V8.279A8.288,8.288,0,0,0,21.721,0Zm5.618,21.721a5.624,5.624,0,0,1-5.617,5.617H8.279a5.623,5.623,0,0,1-5.617-5.617V8.279A5.624,5.624,0,0,1,8.279,2.662H21.721a5.624,5.624,0,0,1,5.617,5.617V21.721Z"
        fill={props.fill}
      />
      <path
        d="M48.7,40.97a7.73,7.73,0,1,0,7.73,7.73A7.739,7.739,0,0,0,48.7,40.97Zm0,12.8A5.068,5.068,0,1,1,53.767,48.7,5.074,5.074,0,0,1,48.7,53.768Z"
        transform="translate(-33.698 -33.7)"
        fill={props.fill}
      />
      <path d="M120.873,28.251a1.951,1.951,0,1,0,1.381.571A1.96,1.96,0,0,0,120.873,28.251Z" transform="translate(-97.819 -23.238)" fill={props.fill} />
    </svg>
  );
}

export default InstagramIcon;
