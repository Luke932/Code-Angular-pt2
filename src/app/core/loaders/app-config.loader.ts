import { APP_INITIALIZER, Injectable } from "@angular/core";
import { AppConfig } from "../configs/app-config";
import { HttpBackend, HttpClient} from "@angular/common/http";
import { tap } from "rxjs/operators";
import { environment } from "src/enviroments/enviroment";

@Injectable()
export class AppConfigLoader{
    public config!:AppConfig;
    private httpClient: HttpClient;

    constructor(private httpBackend: HttpBackend){
        this.httpClient = new HttpClient(httpBackend);
    }

    public static loaderForFactory(loader:AppConfigLoader){
        return () => loader.read();
    }

    public static getterForFactory(loader:AppConfigLoader){
        return loader.config;
    }

    private read(){
        return this.httpClient
        .get<AppConfig>(this.getConfigUrl())
        .pipe(tap(res => this.config = res))
        .toPromise();
    }

    private getConfigUrl():any{
        return `./assets/configs/config.json?v=${environment.appVersion}`;
    }
}

export let AppConfigInitializer = {
    provide:APP_INITIALIZER,
    useFactory: AppConfigLoader.loaderForFactory,
    deps: [AppConfigLoader],
    multi:true
}

export let AppConfigGetter = {
    provide: AppConfig,
    useFactory: AppConfigLoader.getterForFactory,
    deps:[AppConfigLoader],
}