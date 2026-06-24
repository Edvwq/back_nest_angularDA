import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
import { ConfigService } from 'src/config/config.service';


@Module({
    //concatenar vectores
    providers: [... databaseProvider, ConfigService],
    exports: [... databaseProvider]
})
export class DatabaseModule {

}
