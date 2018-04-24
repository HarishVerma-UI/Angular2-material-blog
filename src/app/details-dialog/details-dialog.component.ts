import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css']
})
export class DetailsDialogComponent implements OnInit {

  constructor(
   public dialogRef:MatDialogRef<DetailsDialogComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any

  	) { }

  ngOnInit() {
  	this.data = this.data;
   console.log(this.data);
  }

  onNoClick(): void {
	    this.dialogRef.close();
  }

}

/*
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


	  

}*/