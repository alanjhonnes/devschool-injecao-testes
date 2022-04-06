import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HostComponent } from './host/host.component';
import { HostChildComponent } from './host-child/host-child.component';
import { HostParentComponent } from './host-parent/host-parent.component';
import { OptionalComponent } from './optional/optional.component';
import { SelfComponent } from './self/self.component';
import { SelfOptionalComponent } from './self-optional/self-optional.component';
import { SkipSelfComponent } from './skip-self/skip-self.component';
import { Config, ConfigToken } from './config-token.token';
import { SkipSelfChildComponent } from './skip-self-child/skip-self-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HostComponent,
    HostChildComponent,
    HostParentComponent,
    OptionalComponent,
    SelfComponent,
    SelfOptionalComponent,
    SkipSelfComponent,
    SkipSelfChildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ConfigToken,
      useValue: <Config>{
        appName: "Injeção de Dependências Angular"
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
