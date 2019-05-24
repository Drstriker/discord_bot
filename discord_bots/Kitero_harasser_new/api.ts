import * as Discord from "discord.js";

export interface IBotCommand {
    isCommand(cmd: string): boolean;
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void;
    say(): void;
}