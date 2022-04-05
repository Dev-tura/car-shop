import { useState } from "react";
import classimg from "../Images/classimg.jpg";
import styled from "styled-components";

const BoolHome = () => {
  const [more, setMore] = useState(true);
  const viewchange = () => {
    setMore(!more);
  };
  return (
    <Container>
      <Content1>
        <h1>
          Get <span>Insights</span> that help your business grow.
        </h1>
        <p>
          Get maximum business ideas that helps you stand out and rock your wold. Put together the
          best team and system that works to attract the best for you and your workers.
        </p>
        {more ? (
          <Button onClick={viewchange}>See More</Button>
        ) : (
          <Button onClick={viewchange}>See Less</Button>
        )}

        {more ? null : (
          <p>
            Put togethe idaes that works to get the best resukt here. Join the moving train, work
            with the winninmg system
          </p>
        )}

        <Content2>
          <div>
            <h1>10K+</h1>
            <p>Companies</p>
          </div>
          <div>
            <h1>314</h1>
            <p>Templates</p>
          </div>
          <div>
            <h1>12M+</h1>
            <p>Workers</p>
          </div>
        </Content2>
      </Content1>
      <Containerimg>
        <img src={classimg} alt="" />
      </Containerimg>
    </Container>
  );
};

export default BoolHome;

const Container = styled.div`
  background-color: #301934;
  width: 980px;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  margin: 100px 0 0 180px;
`;
const Content1 = styled.div`
  color: #fff;
  width: 350px;
  span {
    color: #c8a2c8;
  }
`;
const Content2 = styled.div`
  display: flex;
  justify-content: space-around;
  p {
    font-size: 12px;
  }
`;
const Containerimg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // img{ height: 400px}
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 35px;
  outline: none;
  border: none;
  border-radius: 5px;
  // img{ height: 400px}
`;

// import { useState } from "react";

// const Home = () => {
//   const [counter, setCounter] = useState(0);
//   const addcount = () => {
//     setCounter(counter + 1);
//   };
//   const removecount = () => {
//     setCounter(counter - 1);
//   };
//   return (
//     <div>
//       <button onClick={removecount}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={addcount}>+</button>
//     </div>
//   );
// };

// export default Home;
