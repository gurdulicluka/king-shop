// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const createQueryString = <T extends Record<string, any>>(params?: T): string => {
	if (!params) return "";
	const searchParams = new URLSearchParams(
		Object.entries(params).filter(([_, value]) => value !== undefined),
	);
	return `?${searchParams.toString()}`;
};

export { createQueryString };
