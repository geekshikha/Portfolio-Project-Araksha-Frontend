import styled from "styled-components";
import { Button, Input, Title } from "../styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(signUp(name, email, password));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Title>Sign Up</Title>
        <form onSubmit={submitForm}>
          <Input
            placeholder="fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="phone"
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="address"
            placeholder="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          <Button type="submit">Sign Up</Button>
        </form>
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
      </Container>
    </div>
  );
};

export default SignUp;

const Container = styled.div`
  display: "flex";
  flex-direction: "column";
`;

// margin: 15%;
// const Container = styled.div`
//   width: 100%;
//   max-width: 1300px;
//   margin: 0 ;
//   padding: 0;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   @media screen and (max-width: 960px) {
//     padding: 0 30px;
//   }
// `;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
