export const formatCurrency = (amount: number | null) => {
	const value = amount || 0;
	return new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
	}).format(value);
};
