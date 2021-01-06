
/** The name of the key vault. */
export type VaultName = Path<string & RegularExpression<"^[a-zA-Z0-9-]{3,24}$">, "vaultName">;
