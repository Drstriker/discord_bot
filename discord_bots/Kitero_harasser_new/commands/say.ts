import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class helpcmd implements IBotCommand {
    private readonly _cmd = "say";

    isCommand(cmd: string): boolean {
        return cmd === this._cmd;
    }
    
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        msgObject.channel.send("IT WORKS");
    }

    say() {
        return ("SAY SOMETHING");
    }
}