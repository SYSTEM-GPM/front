import { type SideBarModifier } from "@/_types/LayoutDashboard";
import {
  widthSideBarExpanded,
  widthSideBarRetractable
} from "@/_utils/constants";
import { pxToRem } from "@/_utils/pxToRem";
import { colors } from "@/style/theme";
import styled, { css } from "styled-components";

const modifier = {
  expand: css`
    width: ${widthSideBarExpanded}px;
    .side__logo {
      transform: scale(1);
    }
    .side__options .option__item {
      .option__title {
        max-height: auto;
      }
      .option__link {
        .option__text {
          max-width: 100%;
        }
        .option__icon--expand {
          transform: rotate(0deg);
        }
      }
    }
  `,
  retractable: css`
    width: ${widthSideBarRetractable}px;
    .side__logo {
      transform: scale(0);
    }
    .side__options .option__item {
      .option__title {
        padding: 0;
        max-height: 2px;
        color: transparent;
      }
      .option__link {
        justify-content: center;
        .option__text {
          max-width: 0;
        }
        .option__icon--expand {
          transform: rotate(180deg);
        }
      }
    }
  `
};

export const ContainerSideBar = styled.aside<SideBarModifier>`
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.WHITE};
  max-height: 100vh;
  .side__logo {
    margin: 20px 0;
    transition: all 0.2s;
  }
  .side__options {
    width: 100%;
    .option__item {
      .option__link {
        width: 100%;
        display: flex;
        align-items: center;
        column-gap: 6px;
        padding: 12px;
        font-weight: 500;
        transition: all 0.3s;
        .option__text {
          transition: all 0.2s;
          font-size: ${pxToRem(16)};
          color: ${colors.GRAY_SECONDARY};
          overflow: hidden;
        }
        .option__icon {
          flex-shrink: 0;
          transition: all 0.3s;
        }
        :hover {
          cursor: pointer;
          background-color: ${colors.BACKGROUND_PRIMARY};
          color: ${colors.DARK_PRIMARY};
          .option__icon {
            path {
              transition: all 0.3s;
              fill: ${colors.DARK_PRIMARY};
            }
          }
        }
      }
      .option__link--button {
        border: none;
        background-color: transparent;
      }
    }
  }
  .side__options--end {
    margin-top: auto;
  }
  ${({ isExpanded }) => modifier[isExpanded ? "expand" : "retractable"]}
`;

export const TitleDivider = styled.h3`
  font-size: ${pxToRem(16)};
  transition: all 0.2s;
  font-weight: 300;
  color: ${colors.GRAY_PRIMARY};
  border-top: 1px solid ${colors.BACKGROUND_PRIMARY};
  overflow: hidden;
  padding: 10px 10px 0;
`;
