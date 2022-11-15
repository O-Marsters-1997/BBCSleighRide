import React, { ReactNode } from "react";
import styled from "styled-components";
import MuiTooltip from "@mui/material/Tooltip";
import View from "./View";
import Text from "./Text";
import Image from "./Image";
import { RowContainer } from "./Lib";
import candy_cane from "../assets/images/candy_cane.svg";

interface Props extends Countries.ToolTipContent {
  children: ReactNode;
}
// prettier-ignore
const StyledTooltip = styled(({ className, ...other }) => (<MuiTooltip classes={{ tooltip: className }} {...other} />))`
  text-align: center;
  padding: 0.75em;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

const Tooltip: React.FC<Props> = ({ name, option, optionValue, children }) => {
  const toolTipContent = (): ReactNode => (
    <View>
      <RowContainer justifyContent="center">
        <Image
          src={candy_cane}
          alt="candy cane decoration"
          height={20}
          width={20}
        />
        <Text variant="h5" sizeadjust={0.9}>
          {name}
        </Text>
      </RowContainer>
      <Text variant="subtitle2" sizeadjust={0.9}>
        {option}
      </Text>
      <Text variant="subtitle1" sizeadjust={0.9}>
        {optionValue}
      </Text>
    </View>
  );

  return (
    <StyledTooltip title={toolTipContent()} arrow followCursor>
      {children}
    </StyledTooltip>
  );
};

export default Tooltip;
