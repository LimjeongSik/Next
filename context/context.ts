import React from "react";

type State = {};

const PortfolioContext = React.createContext<State | null>(null);

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
