import { DiscordClientProvider, Once } from '@discord-nestjs/core';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BotGateway {
  private readonly logger = new Logger(BotGateway.name);

  constructor(private readonly discordProvider: DiscordClientProvider) {}

  @Once('ready')
  onReady(): void {
    console.log('aaa');
    this.logger.log(
      `Logged din as ${this.discordProvider.getClient().user.tag}!`,
    );
  }
}
