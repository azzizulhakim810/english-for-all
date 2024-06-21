"use client";
import React, { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";

interface ApolloClientProviderProps {
  children: ReactNode;
}

const ApolloClientProvider: React.FC<ApolloClientProviderProps> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
