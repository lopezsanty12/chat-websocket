import { OnModuleInit } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
export declare class ChatGateway implements OnModuleInit {
    private readonly chatService;
    server: Server;
    constructor(chatService: ChatService);
    onModuleInit(): void;
    handleMessage(message: string, client: Socket): void;
}
