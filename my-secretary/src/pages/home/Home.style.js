import styled from "styled-components";
import { FONT_SIZE, FONT_WEIGHT, RESPONSIVE_SIZE } from "../../constants/size";
import { FONT } from "../../constants/font";

import theme from "../../theme";
const Container = styled.div`
  font-family: ${FONT.IBM_PLEX_SANS_KR.BOLD};
  width: 100%;
  padding-bottom: 150px;
  background-color: black;

  h1 {
    font-size: ${FONT_SIZE.SIX_XL};
    font-weight: ${FONT_WEIGHT.FONT_BLACK};
  }

  p {
    font-size: ${FONT_SIZE.LG};
  }
  @media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
    h1 {
      font-size: ${FONT_SIZE.FOUR_XL};
      font-weight: ${FONT_WEIGHT.FONT_BLACK};
    }
    p {
      font-size: ${FONT_SIZE.SM};
    }
  }
`;
const Wrapper = styled.div`
  gap: 40px;
  width: 100%;
  padding: 10px;
  ${theme.ALIGN.ROW_CENTER};

  @media (max-width: ${RESPONSIVE_SIZE.TABLET}) {
    width: 100%;
    ${theme.ALIGN.COLUMN_CENTER};
    font-size: 1rem;
  }

  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    width: 100%;
    ${theme.ALIGN.COLUMN_CENTER};
    font-size: 3rem;
  }
`;

export { Container, Wrapper };
