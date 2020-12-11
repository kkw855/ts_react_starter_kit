import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Block1 = styled.div`
  padding: 5px;
  table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }
  tbody {
    tr:nth-child(even) {
      background-color: #ddd;
    }
  }
`;

const Block2 = styled.div`
  padding: 5px;
  overflow-x: auto;

  table {
    table-layout: fixed;
    min-width: 400px;
    border-collapse: collapse;
    //border-spacing: 2px;
  }

  th,
  td {
    border: none;
    font-size: 12px;
    padding: 0 4px;
  }

  thead {
    tr {
      background-color: #f6f6f6;
      height: 30px;
      padding: 0;
      border-bottom: 2px solid #ccc;
    }
  }

  tbody tr {
    text-align: center;
    height: 34px;
  }

  .number {
    text-align: center;
  }
  .title {
    white-space: nowrap;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: #777;
  }
`;

const Tables: React.FC = () => {
  return (
    <>
      <Block2>
        <table>
          <thead>
            <tr className="header">
              <th style={{ width: '50px' }}>번호</th>
              <th>제목</th>
              <th style={{ width: '80px' }}>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>111885</span>
              </td>
              <td>
                <div className="">
                  <StyledLink to="#">
                    <span>
                      네덜란드 터키,아제르바이잔 제재.. ㅡ ㅡ..;;아르메니아 참
                      빠르다. 카라바흐 지역 여러 상황 네덜란드 터키,아제르바이잔
                      제재.. ㅡ ㅡ..;;아르메니아 참 빠르다. 카라바흐 지역 여러
                      상황
                    </span>
                  </StyledLink>
                </div>
              </td>
              <td>2020.11.06</td>
            </tr>
            <tr>
              <td>
                <span>111885</span>
              </td>
              <td>
                <div className="">
                  <StyledLink to="/asfdsdf">
                    <span>
                      네덜란드 터키,아제르바이잔 제재.. ㅡ ㅡ..;;아르메니아 참
                      빠르다. 카라바흐 지역 여러 상황 네덜란드 터키,아제르바이잔
                      제재.. ㅡ ㅡ..;;아르메니아 참 빠르다. 카라바흐 지역 여러
                      상황
                    </span>
                  </StyledLink>
                </div>
              </td>
              <td>2020.11.06</td>
            </tr>
          </tbody>
        </table>
      </Block2>
      <Block1>
        <h5>기본 테이블</h5>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </tbody>
        </table>
      </Block1>
      <Block1>
        <h5>colSpan</h5>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th colSpan={2}>Telephone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bill Gates</td>
              <td>55577854</td>
              <td>55577855</td>
            </tr>
          </tbody>
        </table>
      </Block1>
      <Block1>
        <h5>rowSpan</h5>
        <table>
          <tr>
            <th>Name:</th>
            <td>Bill Gates</td>
          </tr>
          <tr>
            <th rowSpan={2}>Telephone:</th>
            <td>55577854</td>
          </tr>
          <tr>
            <td>55577855</td>
          </tr>
        </table>
      </Block1>
    </>
  );
};

export default Tables;
