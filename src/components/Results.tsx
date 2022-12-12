import styled from "styled-components";

interface Props {
  dataIp: string;
  utc: string;
  city: string;
  country: string;
  postalCode: string;
  provider: string;
}

export default function Results(props: Props) {
  return (
    <InfoContainer>
      <InfoDiv>
        <Titles>IP ADDRESS</Titles>
        <Info>{props.dataIp} </Info>
      </InfoDiv>
      <Line />
      <InfoDiv>
        <Titles>LOCATION</Titles>
        <Info>
          {props.city}, {props.country} {props.postalCode}
        </Info>
      </InfoDiv>
      <Line />
      <InfoDiv>
        <Titles>TIMEZONE</Titles>
        <Info>UTC {props.utc}</Info>
      </InfoDiv>
      <Line />
      <InfoDiv>
        <Titles>ISP</Titles>
        <Info>{props.provider}</Info>
      </InfoDiv>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.0983665);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 26px 24px 0 24px;
  @media (min-width: 800px) {
    width: 700px;
    height: 120px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: -120px;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  @media (min-width: 800px) {
    align-items: flex-start;
  }
`;

const Titles = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1.75px;
  text-align: center;
  color: #2c2c2c;
  margin-bottom: 7px;
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: 800px) {
    margin-bottom: 12px;
  }
`;

const Info = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.178571px;
  color: #2c2c2c;
`;

const Line = styled.div`
  display: none;
  width: 1px;
  height: 40px;
  background: #000000;
  mix-blend-mode: normal;
  opacity: 0.15;
  @media (min-width: 800px) {
    display: block;
    margin: 10px;
  }
`;
