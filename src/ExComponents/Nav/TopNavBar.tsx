import React from 'react';
import styled from 'styled-components';

const Block1 = styled.div`
  position: relative;

  .top {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  nav {
    background-color: cornflowerblue;
  }

  .logo {
    background-color: white;
  }

  .content {
    position: absolute;
    margin-top: 70px;
  }
`;

const TopNavBar: React.FC = () => {
  return (
    <Block1>
      <div className="top">
        <div className="logo">Logo</div>
        <nav>Nav</nav>
      </div>

      <div className="content">
        <p>
          Example explained: float: left; - use float to get block elements to
          slide next to each other display: block; - Displaying the links as
          block elements makes the whole link area clickable (not just the
          text), and it allows us to specify padding (and height, width,
          margins, etc. if you want) padding: 8px; - Since block elements take
          up the full width available, they cannot float next to each other.
          Therefore, specify some padding to make them look good
          background-color: #dddddd; - Add a gray background-color to each a
          element Tip: Add the background-color to instead of each element if
          you want a full-width background color:
        </p>
        <p>
          Example explained: float: left; - use float to get block elements to
          slide next to each other display: block; - Displaying the links as
          block elements makes the whole link area clickable (not just the
          text), and it allows us to specify padding (and height, width,
          margins, etc. if you want) padding: 8px; - Since block elements take
          up the full width available, they cannot float next to each other.
          Therefore, specify some padding to make them look good
          background-color: #dddddd; - Add a gray background-color to each a
          element Tip: Add the background-color to instead of each element if
          you want a full-width background color:
        </p>
        <p>
          Example explained: float: left; - use float to get block elements to
          slide next to each other display: block; - Displaying the links as
          block elements makes the whole link area clickable (not just the
          text), and it allows us to specify padding (and height, width,
          margins, etc. if you want) padding: 8px; - Since block elements take
          up the full width available, they cannot float next to each other.
          Therefore, specify some padding to make them look good
          background-color: #dddddd; - Add a gray background-color to each a
          element Tip: Add the background-color to instead of each element if
          you want a full-width background color:
        </p>
      </div>
    </Block1>
  );
};

export default TopNavBar;
