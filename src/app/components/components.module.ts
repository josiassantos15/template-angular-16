import { Directive, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AngularMaterialModule } from "../angular-material.module";
import { DirectivesModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentMainComponent } from './content-main/content-main.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentMainComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularMaterialModule,
    DirectivesModule,
    PipesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentMainComponent
  ]
})
export class ComponentsModule {
}