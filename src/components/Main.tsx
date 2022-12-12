import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import background from "../images/pattern-bg.png";
import arrow from "../images/icon-arrow.svg";

import Map from "./Map";
import Results from "./Results";

export default function Main() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const [ip, setIp] = useState("");
  const [dataIp, setDataIp] = useState("");
  const [utc, setUtc] = useState("");
  const [provider, setProvider] = useState("");

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const getData = async () => {
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_GSEME8gsKSwYUsSdzw8GPPJoTNzii&ipAddress=`
    );
    const userData = await response.data;

    setDataIp(userData.ip);

    setCity(userData.location.city);
    setCountry(userData.location.country);
    setPostalCode(userData.location.postalCode);

    setUtc(userData.location.timezone);
    setProvider(userData.isp);

    setLat(userData.location.lat);
    setLong(userData.location.lng);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = async () => {
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_GSEME8gsKSwYUsSdzw8GPPJoTNzii&ipAddress=${ip}`
    );
    const data = await response.data;

    setDataIp(data.ip);

    setCity(data.location.city);
    setCountry(data.location.country);
    setPostalCode(data.location.postalCode);

    setUtc(data.location.timezone);
    setProvider(data.isp);

    setLat(data.location.lat);
    setLong(data.location.lng);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
  };

  return (
    <MainContainer>
      <Header>
        <H1>IP Address Tracker</H1>
        <InputContainer>
          <Input
            type="text"
            maxLength={70}
            placeholder="Search for any IP address"
            onChange={(e) => handleChange(e)}
          ></Input>
          <ArrowButton onClick={handleClick} />
        </InputContainer>
        <Results
          dataIp={dataIp}
          utc={utc}
          city={city}
          country={country}
          postalCode={postalCode}
          provider={provider}
        />
      </Header>
      <Map lat={lat} long={long} />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 375px;
  @media (min-width: 800px) {
    width: 800px;
    height: 600px;
    border-radius: 15px;
    overflow: hidden;
  }
`;

const Header = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 375px;
  height: 300px;
  text-align: center;
  padding: 30px;
  @media (min-width: 800px) {
    width: 800px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const H1 = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 30px;
  letter-spacing: -0.285714px;
  color: #ffffff;
  margin-bottom: 30px;
  @media (min-width: 800px) {
    margin-bottom: 20px;
  }
`;

const InputContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.0983665);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-left: 24px;
  overflow: hidden;
  @media (min-width: 800px) {
    width: 500px;
  }
`;

const Input = styled.input`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #2c2c2c;
  outline: none;
  border: none;
  cursor: pointer;
  ::placeholder {
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const ArrowButton = styled.div`
  background-color: black;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 8px 14px;
  background-position: center;
  width: 58px;
  height: 58px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: #3f3f3f;
  }
`;
