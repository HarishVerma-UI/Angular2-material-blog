import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
Blogs:any = [
        {"id":"001","title": "What is Lorem Ipsum?","img":"shiba2.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "tags": ["president", "usa", "john", "quincy", "adams"] },
        {"id":"002","title": "What is Lorem Ipsum?","img":"shiba1.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "tags": ["president", "usa", "john", "quincy", "adams"] },
        {"id":"003","title": "What is Lorem Ipsum?","img":"shiba2.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "tags": ["president", "usa", "john", "quincy", "adams"] },
        {"id":"004","title": "What is Lorem Ipsum?","img":"shiba1.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "tags": ["president", "usa", "john", "quincy", "adams"] },
        {"id":"005","title": "What is Lorem Ipsum?","img":"shiba2.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "tags": ["president", "usa", "john", "quincy", "adams"] },
        {"id":"006","title": "What is Lorem Ipsum?","img":"shiba2.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "tags": ["president", "usa", "john", "quincy", "adams"] },
        {"id":"007","title": "What is Lorem Ipsum?","img":"shiba2.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "tags": ["president", "usa", "john", "quincy", "adams"] },
        {"id":"008","title": "What is Lorem Ipsum?","img":"shiba1.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "tags": ["president", "usa", "john", "quincy", "adams"] },
        {"id":"009","title": "What is Lorem Ipsum?","img":"shiba2.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "tags": ["president", "usa", "john", "quincy", "adams"] },
        {"id":"010","title": "What is Lorem Ipsum?","img":"shiba1.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "tags": ["president", "usa", "john", "quincy", "adams"] }
];
  constructor(public dialog: MatDialog) {}
  openDialog(blog:any): void {
    let dialogRef = this.dialog.open(DetailsDialogComponent, {
      width: '500px',
      height:'auto',
       data: blog
    });
  }

}


