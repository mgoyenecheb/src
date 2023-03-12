import React from "react";
import logo1 from '../../img/iconSimplicity1.svg'
import logo2 from '../../img/iconSimplicity2.svg'
import logo3 from '../../img/iconSimplicity3.svg'
import logo4 from '../../img/iconSimplicity4.svg'
interface BoxProps {
  icon: string;
  title: string;
  description: string;
}

const Box: React.FC<BoxProps> = ({ icon, title, description }) => {
  return (
    <div style={{ width: "25%", textAlign: "center" }}>
      <i className={icon} />
      <h2>{title}</h2>
      <p>{description}</p>
      <hr />
    </div>
  );
};

const Boxes: React.FC = () => {
  return (
    <div className="bg-blackGr">
    <div className="container">
      <h3 className="text-center pt-5 pb-2"><span className="text-warning">[</span> Simplicity in Betting <span className="text-warning">]</span></h3>
      <div className="row py-5 row-cols-1 row-cols-sm-2 row-cols-lg-4">
        <div className="col">
          <div className="cardSimplicity pt-2">
            <div className="cardS-icon p-2 mx-2 align-middle">
              <img src={logo1} className="img-fluid mx-auto d-block"  />
            </div>
              <p className="fs-6 mb-0 mt-2 text-warning text-center text-decoration-underline">
               Step 1
              </p>
              <h4 className="text-center px-3 mb-3">Roll the dice on setup</h4>
              <p className="text-white px-3">
                In just a few minutes, provide us with your pool details, password, and custom settings.
              </p>
            
          </div>
        </div>
        <div className="col">
          <div className="cardSimplicity pt-2">
            <div className="cardS-icon p-2 mx-2 align-middle">
              <img src={logo2} className="img-fluid mx-auto d-block" />
            </div>
              <p className="fs-6 mb-0 mt-2 text-warning text-center text-decoration-underline">
               Step 2
              </p>
              <h4 className="text-center px-3 mb-3">Deal out invitations</h4>
              <p className="text-white px-3">
                You'll receive a confirmation email with a preformatted invitation to forward to your pool members. It includes all the necessary information to join.
              </p>
          </div>
        </div>
        <div className="col">
          <div className="cardSimplicity pt-2">
            <div className="cardS-icon p-2 mx-2 align-middle">
              <img src={logo3} className="img-fluid mx-auto d-block" />
            </div>
              <p className="fs-6 mb-0 mt-2 text-warning text-center text-decoration-underline">
               Step 3
              </p>
              <h4 className="text-center px-3 mb-3">Place your bets on the brackets</h4>
              <p className="text-white px-3">
                Your pool members will have access to a user-friendly bracket submission form. No more messy or incomplete brackets, and no extra work for you as the commissioner.
              </p>
          </div>
        </div>
        <div className="col">
          <div className="cardSimplicity pt-2">
            <div className="cardS-icon p-2 mx-2 align-middle">
              <img src={logo4} className="img-fluid mx-auto d-block" />
            </div>
              <p className="fs-6 mb-0 mt-2 text-warning text-center text-decoration-underline">
               Step 4
              </p>
              <h4 className="text-center px-3 mb-3">Watch the tournament unfold</h4>
              <p className="text-white px-3">
                We'll handle the rest. Your pool standings and all other reports will be updated in real-time as games conclude.
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Boxes;
