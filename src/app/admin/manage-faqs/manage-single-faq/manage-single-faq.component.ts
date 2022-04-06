import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Faq } from '../../shared/models/faq.model';

@Component({
  selector: 'app-manage-single-faq',
  templateUrl: './manage-single-faq.component.html',
  styleUrls: ['./manage-single-faq.component.scss']
})
export class ManageSingleFaqComponent implements OnInit {
  loading: boolean;
  fallback: Faq;
  constructor(
    public dialogRef: MatDialogRef<ManageSingleFaqComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  dismiss(): void {
    this.data.faq = this.fallback;
    this.dialogRef.close({ status: 'cancelled' });
  }
  ngOnInit(): void {
    this.fallback = {...this.data.faq};
  }

  submit() {
    this.dialogRef.close({ status: 'succeeded', data: this.data.faq });
  }

}
