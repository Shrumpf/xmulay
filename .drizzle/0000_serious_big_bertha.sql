CREATE TABLE `clips` (
	`id` text PRIMARY KEY NOT NULL,
	`url` text NOT NULL,
	`embed_url` text NOT NULL,
	`broadcaster_id` text NOT NULL,
	`broadcaster_name` text NOT NULL,
	`creator_id` text NOT NULL,
	`creator_name` text NOT NULL,
	`video_id` text,
	`game_id` text,
	`language` text NOT NULL,
	`title` text NOT NULL,
	`view_count` integer NOT NULL,
	`created_at` text NOT NULL,
	`thumbnail_url` text NOT NULL,
	`duration` integer NOT NULL,
	`vod_offset` integer,
	`is_featured` integer NOT NULL,
	FOREIGN KEY (`broadcaster_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`creator_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `games` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`box_art_url` text NOT NULL,
	`igdb_id` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`display_name` text NOT NULL,
	`description` text,
	`type` text,
	`broadcaster_type` text,
	`profile_image_url` text,
	`offline_image_url` text,
	`created_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `clips_id_unique` ON `clips` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `games_id_unique` ON `games` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_id_unique` ON `users` (`id`);