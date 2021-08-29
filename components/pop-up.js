import styled from "styled-components";

export default function PopUp() {
  return (
    <PopUpContainer className="hide-for-mobile">
      <div className="pop-up">
        <div className="pop-up-inner">
          <div className="pop-up-header">
            <div className="banner">
              <div className="banner_inner">
                <p>
                  Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
                  Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
                  Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
                  Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
                  Hire me - Hire me
                </p>
                <p>
                  - Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
                  Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
                  Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
                  Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
                  Hire me - Hire me
                </p>
              </div>
            </div>
          </div>

          <div className="pop-up-middle">
            <div className="center">AVAILABLE - FOR HIRE</div>
          </div>
          <div className="pop-footer">
            <span>Godwin.a.ebikwo@gmail.com</span>
          </div>
        </div>
      </div>

      {/* <div className="pop-up pop-two">
        <div className="pop-up-inner">
          <div className="pop-up-header">
            <span>I AM </span>
            <span>COOL </span>
          </div>

          <div className="pop-up-middle">
            <div
              className="w-full relative"
              style={{ height: 0, paddingBottom: "75%" }}
            >
              <iframe
                src="https://giphy.com/embed/11ISwbgCxEzMyY"
                width="100%"
                height="100%"
                className="absolute"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="pop-footer">
            <span>Godwin.a.ebikwo@gmail.com</span>
          </div>
        </div>
      </div> */}
      {/* 
      <div className="pop-up pop-three">
        <div className="pop-up-inner">
          <div className="pop-up-header">
            <span>IF YOU Dont hire me</span>
            <span>YOu dont like idris</span>
          </div>

          <div className="pop-up-middle">
            <div
              className="w-full relative"
              style={{ height: 0, paddingBottom: "56%" }}
            >
              <iframe
                src="https://giphy.com/embed/pWIak75z5nNWU"
                width="100%"
                height="100%"
                className="absolute"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="pop-footer">
            <span>Godwin.a.ebikwo@gmail.com</span>
          </div>
        </div>
      </div> */}
    </PopUpContainer>
  );
}

const PopUpContainer = styled.div`
  .pop-up {
    text-transform: uppercase;
    position: absolute;
    top: 35%;
    left: 35%;
    height: 300px;
    z-index: -1;
    user-select: auto;
    width: 308px;
    /* box-shadow: rgba(219, 255, 0, 0.4) 5px 5px, rgba(219, 255, 0, 0.3) 10px 10px,
      rgba(219, 255, 0, 0.2) 15px 15px, rgba(219, 255, 0, 0.1) 20px 20px,
      rgba(219, 255, 0, 0.05) 25px 25px; */

    &.pop-two {
      top: 300px;
      left: 475px;
      height: 260px;
    }

    &.pop-three {
      top: 500px;
      left: 50px;
      width: 400px;
      height: 240px;
    }
  }

  .pop-up-inner {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    background-color: var(--black);
    border: 3px solid var(--accent-1);
    overflow: hidden;
    border-top: none;

    .pop-up-header {
      display: flex;
      justify-content: space-between;
      cursor: grab;
      border-top: 3px solid var(--color);
      top: 0;
      background: var(--accent-1);
      padding: 0.5rem;

      & > span {
        display: inline-block;
        color: black;
      }

      .banner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        color: black;

        .banner_inner {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;

          p {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 55s linear infinite;
            margin-top: 0;
            user-select: none;
            flex-shrink: 0;
          }
        }
      }

      @keyframes marquee {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(-100%, 0);
        }
      }
    }

    .pop-up-middle {
      /* position: absolute;
      bottom: 20px;
      right: 0;
      left: 0;
      top: 20px;
      height: 100px; */
    }

    .pop-footer {
      position: absolute;
      bottom: 0;
      padding: 0 0.5rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      background: var(--accent-1);
      color: black;
    }
  }
`;
