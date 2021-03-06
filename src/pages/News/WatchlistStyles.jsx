import styled from "styled-components";

export const Div = styled.div`
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
  border: 1px solid #ecdbba;
  background-color: #000208;
  text-align: left;
  color: #ecdbba;
`;

export const Button = styled.button`
  height: 40px;
  margin-left: 2%;
  font-size: 1.2rem;
  color: #ecdbba;
  overflow: hidden;
  background-color: transparent;
  box-shadow: inset 0 0 0 0 #ecdbba;
  transition: ease-out 0.5s;
  border: 1px solid #ecdbba;
  border-radius: 4px;
  z-index: 1;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    box-shadow: inset 0 0 0 50px #ecdbba;
    color: black;
  }
  &:focus {
    outline: none !important;
    background-color: #ecdbba;
    box-shadow: 0 0 10px #ecdbba;
    color: black;
  }
`;

export const H2 = styled.h2`
  position: relative;
  margin-left: 2%;
  color: #ecdbba;
  top: 10px;
`;
export const P = styled.p`
  text-align: center;
  margin-left: 2%;

  font-size: 1.2rem;
  color: #ecdbba;
`;

export const H1 = styled.h1`
  color: #c84b31;
  text-align: center;
  padding-top: 10%;
  font-size: 2rem;
  position: relative;
  top: 20px;
`;

export const B = styled.b`
  color: #c84b31;
  text-decoration: underline;
  margin-left: 2%;
`;
export const HR = styled.hr`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.1em;
  opacity: 0.6;
  &:before {
    content: "";
    background: linear-gradient(to right, transparent, #ecdbba, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: -20%;

  float: right;
  @media screen and (max-width: 960px) {
    width: 150px;
    height: 150px;
    margin-bottom: -20%;
  }
`;
