ALTER TABLE `Account` DROP FOREIGN KEY `Account_userId_fkey`;
--> statement-breakpoint
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_User_id_fk` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE cascade ON UPDATE cascade;
