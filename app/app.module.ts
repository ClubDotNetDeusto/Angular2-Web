import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { Speaker } from './Speakers/Speaker';
import { SpeakerComponent } from './Speakers/Speaker.component';
import { SpeakerService } from './Speakers/Speaker.service';
import { RouterModule }   from '@angular/router';
import { AboutComponent } from './About/about.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot([
    {
      path: 'speakers',
      component: SpeakerComponent
    },
    {
      path: 'about',
      component: AboutComponent
    }
  ])

  ],
  declarations: [ AppComponent, SpeakerComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  
})




export class AppModule { }
