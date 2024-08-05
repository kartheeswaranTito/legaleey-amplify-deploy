"use client";
// components/CommonLayout.tsx
import React, { ReactNode } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import TopNav_Search from "./TopNav_Search";

interface SearchLayoutProps {
	children: ReactNode;
	searchmovement: String;
}

const SearchLayout: React.FC<SearchLayoutProps> = ({
	children,
	searchmovement,
}) => {
	return (
		<Authenticator.Provider>
			<div>
				<TopNav_Search searchmovement={searchmovement} />
				<main>{children}</main>
			</div>
		</Authenticator.Provider>
	);
};

export default SearchLayout;
