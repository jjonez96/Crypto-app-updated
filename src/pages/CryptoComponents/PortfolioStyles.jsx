import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  font-size: 18px;
  color: #ecdbba;
  background-color: #000208;
  border: 1px solid #ecdbba;
  margin-top: 6%;
  margin-left: 5%;
  margin-right: 5%;
`;
export const Thead = styled.thead`
  background-color: rgb(44, 44, 44);
  color: white;
  text-align: center;
`;

export const Button = styled.button`
  height: 35px;
  font-size: 1.2rem;
  color: #ecdbba;
  float: right;
  overflow: hidden;
  background-color: transparent;
  box-shadow: inset 0 0 0 0 #ecdbba;
  transition: ease-out 0.5s;
  border: 1px solid #ecdbba;
  border-radius: 4px;
  z-index: 1;
  cursor: pointer;
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
export const H1 = styled.h1`
  text-decoration: underline;
  text-align: center;
  color: #ecdbba;
`;

export const H2 = styled.h2`
  color: #ecdbba;
  float: left;
`;

export const B = styled.b`
  color: #c84b31;

  text-decoration: none;
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
  position: relative;
  bottom: 30px;
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

export const Symbol = styled.b`
  color: #ecdbba;
  font-size: 18px;
`;

export const Red = styled.p`
  color: #ff3a3a;
  float: right;
`;
export const Green = styled.p`
  color: #11d811;
  float: right;
`;
export const Table = styled.table`
  width: 1400px;
  border-collapse: separate;
`;

export const Backtotop = styled.a`
  position: fixed;
  bottom: 10px;
  right: 12px;
  color: #ecdbba;
  background: transparent;
  cursor: pointer;
`;
