import styled from "styled-components";
import { Button, Input, Title } from "../styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";
import Detection from "../components/AuthenticationFace/Detection";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [modal, setModal] = useState(false);

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
    <div style={{ textAlign: "center", height: "100vh" }}>
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

        <Button
          onClick={() => setModal(true)}
          style={{ background: "#00BCD4" }}
        >
          Detect
        </Button>
        <Button onClick={() => setModal(false)}>Authenticate</Button>
      </Container>

      {modal && <Detection />}
    </div>
  );
};

export default SignUp;

const Container = styled.div`
  display: "flex";
  flex-direction: "column";
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
