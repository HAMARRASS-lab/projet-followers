import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <div class="container">
        <ul class="list-group">
            <li class="list-group-item">Title: {{course.titre | uppercase}}</li>
            <li class="list-group-item">Avis: {{course.avis | number:'2.2-2'}}</li>
            <li class="list-group-item">participants: {{course.participants}}</li>
            <li class="list-group-item">Prix: {{course.prix | currency:'EUR':'code'}}</li>
            <li class="list-group-item">PublicationDate: {{course.publicationDate | date:'yyyy-mm-dd'}}</li>
             </ul>
            </div>
    `
})
export class CoursesComponent{

    course={
        titre: 'Formation compelete sur angular',
        avis:'1.1',
        participants:136,
        prix:1000,
        publicationDate:new Date(2017,11,21)
    }
    
}