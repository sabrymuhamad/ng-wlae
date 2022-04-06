import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SettingsService } from 'src/app/services/settings.service';
import { Faq } from '../shared/models/faq.model';
import { ManageSingleFaqComponent } from './manage-single-faq/manage-single-faq.component';

@Component({
  selector: 'app-manage-faqs',
  templateUrl: './manage-faqs.component.html',
  styleUrls: ['./manage-faqs.component.scss']
})
export class ManageFaqsComponent implements OnInit {
  loading: boolean;
  faqs: Faq[];
  dataSource: any;
  totalElements: number;
  perPage: number = 20;
  pageNum: number = 1;
  displayedColumns: string[] = ['title', 'content', 'actions'];
  constructor(public dialog: MatDialog, private settings: SettingsService) { }

  ngOnInit(): void {
    this.getAllFAQs();
  }

  getAllFAQs() {
    this.loading = true;
    this.settings.getSetting(3).subscribe((res: any) => {
      this.loading = false;
      this.faqs = res.response.content;
      this.dataSource = new MatTableDataSource(this.faqs);
      this.totalElements = res.response.content;
    })
  }

  FAQModal(type, faq?) {
    const dialogRef = this.dialog.open(ManageSingleFaqComponent, {
      width: '500px',
      maxHeight: '90vh',
      data: { type: type, faq: type === 'add' ? new Faq() : faq },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.status === 'succeeded') {
        if(type === 'add') {
          this.faqs.push(result.data);
          this.dataSource = new MatTableDataSource(this.faqs);
          this.submit();
        } else {
          this.submit();
        }
      } else {
        this.getAllFAQs();
      }
    });
  }

  delete(index) {
    this.faqs.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.faqs);
    this.submit();
  }

  onPaginationChange(e) {
    this.pageNum = e.pageIndex + 1;
  }


  submit() {
    this.loading = true;
    let obj = {
      "title": "FAQ",
      "content": this.faqs
    }
    this.settings.update(3, obj).subscribe((res: any) => {
      this.loading = false;
    })
  }
}
