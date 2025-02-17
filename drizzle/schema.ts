import { mysqlTable, mysqlSchema, AnyMySqlColumn, foreignKey, primaryKey, unique, int, varchar, text, datetime } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const account = mysqlTable("Account", {
	id: int().autoincrement().notNull(),
	userId: varchar({ length: 191 }).notNull().references(() => user.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	type: varchar({ length: 191 }).notNull(),
	provider: varchar({ length: 191 }).notNull(),
	providerAccountId: varchar({ length: 191 }).notNull(),
	refreshToken: text("refresh_token"),
	accessToken: text("access_token"),
	expiresAt: int("expires_at"),
	tokenType: varchar("token_type", { length: 191 }),
	scope: varchar({ length: 191 }),
	idToken: text("id_token"),
	sessionState: varchar("session_state", { length: 191 }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "Account_id"}),
	unique("Account_provider_providerAccountId_key").on(table.provider, table.providerAccountId),
]);

export const user = mysqlTable("User", {
	id: varchar({ length: 191 }).notNull(),
	name: varchar({ length: 191 }),
	email: varchar({ length: 191 }),
	emailVerified: datetime({ mode: 'string', fsp: 3 }),
	image: varchar({ length: 191 }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "User_id"}),
	unique("User_email_key").on(table.email),
]);
