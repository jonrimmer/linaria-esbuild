import * as React from "react";
import * as Server from "react-dom/server";
import { Button } from "./Button";
import { styled } from "@linaria/react";

const StyledButton = styled(Button)``;

let Greet = () => <h1>Hello, world!</h1>;
console.log(Server.renderToString(<Greet />));
