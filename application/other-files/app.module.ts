import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';<% if (material) { %>
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';<% } %>

<% if (routing) { %>
import { AppRoutingModule } from './app-routing.module';<% } %>
import { AppComponent } from './app.component';<% if (material) { %>
import { MyMaterialModule } from './mymaterial.module';<% } %>

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule<% if (ssr) { %>.withServerTransition({appId: '<%= utils.dasherize(name) %>-app'})<% } %><% if (material) { %>,
    BrowserAnimationsModule,
    MyMaterialModule<% } %><% if (routing) { %>,
    AppRoutingModule<% } %>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
