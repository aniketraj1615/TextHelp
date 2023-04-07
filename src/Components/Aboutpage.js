import React, { useState } from "react";

export default function Aboutpage() {
  const [Mystyle, setMystyle] = useState({
    color: "white",
    backgroundColor: "#9a9a9a",
  });
  const [btnText, setBtntext] = useState("Enable dark mood");
  const toggleStyle = () => {
    if (Mystyle.color == "white") {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtntext("Enable dark mood");
    } else {
      setMystyle({
        color: "white",
        backgroundColor: "#9a9a9a",
        border: "2px solid white",
      });
      setBtntext("Enable light mood");
    }
  };
  return (
    <>
      <div className="container" style={Mystyle}>
        <h2 classname="my-3">Proceed to Buy</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={Mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                1.About this project
              </button>
            </h2>

            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={Mystyle}>
                <strong>TextHelp.</strong> It is created using{" "}
                <ul>
                  <li>
                    1. Rectjs Library 2. React hooks 3. Use of Props & States 4.
                    JSX
                  </li>
                  <li>
                    {" "}
                    <b>Features & Working </b>: 1. Words & character count. 2.
                    Conversion to Upeercase, Lowercase. 3. Copy to Clipboard &
                    Clear
                  </li>
                </ul>
              </div>
              <div className="accordion-body" style={Mystyle}></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={Mystyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2.Contact Me
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={Mystyle}>
                <strong>
                  I am <b>Aniket</b> Frontend Devloper.
                </strong>
                <br />

                <a href="https://github.com/aniketraj1615">Github link</a>
              </div>
            </div>
          </div>
          {/* <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={Mystyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3.Offers
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={Mystyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div> */}
        </div>
        <div className="container my-3">
          <button
            onClick={toggleStyle}
            type="button"
            className="btn btn-primary my-2"
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}
