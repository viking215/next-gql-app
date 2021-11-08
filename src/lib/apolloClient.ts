import { useMemo } from "react";
import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	NormalizedCacheObject,
} from "@apollo/client";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import { setContext } from "@apollo/client/link/context";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const isServer = typeof window === "undefined";

const httpLink = createHttpLink({
	uri: process.env.URL,
});

const authLink = setContext((_, { headers }) => {
	debugger;
	return {
		headers: {
			...headers,
			"x-hasura-admin-secret": process.env.ADMIN_SECRET,
			"content-type": "application/json",
		},
	};
});

const createApolloClient = () => {
	return new ApolloClient({
		ssrMode: isServer,
		link: authLink.concat(httpLink),
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						tasks: {
							keyArgs: false,
							merge(existing = [], incoming) {
								return [...existing, ...incoming];
							},
						},
					},
				},
			},
		}),
	});
};

export function initializeApollo(
	initialState: NormalizedCacheObject | null = null
) {
	const _apolloClient = apolloClient ?? createApolloClient();

	if (initialState) {
		const existingCache = _apolloClient.extract();

		const data = merge(initialState, existingCache, {
			arrayMerge: (destinationArray, sourceArray) => [
				...sourceArray,
				...destinationArray.filter((d) =>
					sourceArray.every((s) => !isEqual(d, s))
				),
			],
		});

		_apolloClient.cache.restore(data);
	}

	if (isServer) return _apolloClient;

	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

export function addApolloState(
	client: ApolloClient<NormalizedCacheObject>,
	pageProps: any
) {
	if (pageProps?.props) {
		pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
	}

	return pageProps;
}

export function useApollo(pageProps: any) {
	const state = pageProps[APOLLO_STATE_PROP_NAME];
	const store = useMemo(() => initializeApollo(state), [state]);
	return store;
}
