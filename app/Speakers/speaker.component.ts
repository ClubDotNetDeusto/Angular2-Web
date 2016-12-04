import { Component, OnInit } from '@angular/core';
import {Speaker } from './Speaker';
import {SpeakerService } from './Speaker.service';

@Component({
  selector: 'speakers',
  templateUrl: 'app/Speakers/speaker.component.html',
  providers: [SpeakerService]
})

export class SpeakerComponent implements OnInit { 
  speaker: Speaker[];
  order: boolean = false;
   errorMessage: string;

  constructor(private service: SpeakerService){

  }

  getSpeakers(): void {
    this.service.getSpeakers()
                .subscribe(products => this.speaker = products,
                error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.getSpeakers();
  }
  changeOrder():void{
    this.order = !this.order;
    if(this.order){
      this.speaker = this.speaker.sort((s1, s2) => 
      {
        if(s1.Company > s2.Company){
          return 1;
        }
        return -1;
      }
      );
    }
    else{
      this.speaker = this.speaker.sort((s1, s2) => 
            {
              if(s1.Name > s2.Name){
                return 1;
              }
              return -1;
            }
            );
    }
  }
}
