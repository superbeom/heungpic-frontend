import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Helmet from "react-helmet";
import Button from "../Components/Button";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 110px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 100px;
`;

const BottomContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 25%;
`;

const Notification = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TextNotification = styled.div`
  width: 60%;
  margin-right: 40px;
`;

const TopNotification = styled.div`
  font-size: 80px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const BottomNotification = styled.div`
  font-size: 60px;
`;

const EmoticonNotification = styled.span`
  font-size: 200px;
`;

const NotificationButton = styled(Button)`
  background-color: #c20000;
  height: 50px;
  border-radius: 40px;
`;

export default withRouter(({ history: { goBack } }) => (
  <Container>
    <Helmet>
      <title>NotFound | Heungpic</title>
    </Helmet>
    <TopContainer>
      <Notification>
        <TextNotification>
          <TopNotification>
            Oops!!
            <br />
          </TopNotification>
          <BottomNotification>
            This is not the page you are looking for
          </BottomNotification>
        </TextNotification>
        <EmoticonNotification>
          <span role="img" aria-label="rose">
            🥀
          </span>
        </EmoticonNotification>
      </Notification>
    </TopContainer>
    <BottomContainer>
      <ButtonContainer>
        <NotificationButton text="Go Back" onClick={goBack} />
      </ButtonContainer>
      <ButtonContainer>
        <Link to="/">
          <NotificationButton text="Go Home" />
        </Link>
      </ButtonContainer>
    </BottomContainer>
  </Container>
));
