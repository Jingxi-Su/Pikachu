const string = `
  .skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin *::after {
    box-sizing: border-box;
  }
  .skin *::before {
    box-sizing: border-box;
  }
  body {    
  }
  .skin {
    background-color: #ffe600;
    min-height: 50vh;
    position: relative;
  }
  .nose {
    border: 10px solid red;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 0.15s infinite;
  }
  .circle {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: black;
  }
  .eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    content: "";
    display: block;
    border: 2px solid black;
    width: 32px;
    height: 32px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 7px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    top: -20px;
    position: relative;
    z-index: 1;
  }
  .mouth .up .lip {
    border: 3px solid black;
    width: 100px;
    height: 30px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background-color: #ffe600;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0%;
    background-color: #ffe600;
  }
  .mouth .up .lip.left::before {
    right: -6px;
  }
  
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .down {
    height: 180px;
    width: 100%;
    top: 5px;
    position: absolute;
    overflow: hidden;
  }
  .mouth .down .circle1 {
    border: 3px solid black;
    height: 1000px;
    width: 160px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -80px;
    border-radius: 80px/300px;
    background-color: #9b000a;
    overflow: hidden;
  }
  .mouth .down .circle1 .circle2 {
    height: 600px;
    width: 300px;
    position: absolute;
    background-color: #ff485f;
    bottom: -460px;
    left: 50%;
    margin-left: -150px;
    border-radius: 50%;
  }
  .face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    height: 88px;
    width: 88px;
    top: 200px;
    margin-left: -44px;
    background-color: #fe1800;
    border-radius: 50%;
    z-index: 3;
  }
  .face.left {
    transform: translateX(-160px);
  }
  .face.right {
    transform: translateX(160px);
  }
`

export default string;