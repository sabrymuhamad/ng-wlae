import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicPricing } from '../../shared/models/public-pricing.model';
import { DestinationsService } from 'src/app/services/destinations.service';
import { Destination } from '../../shared/models/destination.model';
import { Tour, TourDetails, Pricing } from '../../shared/models/tour.model';
import { ToursService } from 'src/app/services/tours.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-add-edit-tour',
  templateUrl: './add-edit-tour.component.html',
  styleUrls: ['./add-edit-tour.component.scss']
})
export class AddEditTourComponent implements OnInit {
  mode: string;
  tourType: string;
  inclusions: any[] = [{ desc: '' }];
  exclusions: any[] = [{ desc: '' }];
  publicToursDates: any[] = [{ tour_date: '' }];
  pricing: PublicPricing = new PublicPricing();
  destinations: Destination[];
  uploadIsLoading: boolean;
  tour: Tour = new Tour();

  loading: boolean;
  tourId: number;
  constructor(private route: ActivatedRoute, private destinationService: DestinationsService,
    private tourService: ToursService, private toastr: ToastrService, private datePipe: DatePipe) { }

  ngOnInit(): void {

    this.tourType = this.route.snapshot.paramMap.get('type');
    this.route.queryParams.subscribe((params) => {
      this.mode = params.mode;
      this.tourId = params.id;
    });
    this.getDestinations();
    if (this.mode === 'edit') {
      this.tourService.view(this.tourId).subscribe((res: any) => {
        this.inclusions = [];
        this.exclusions = [];
        this.tour = res.data;
        this.bindPricesBack();
        res.data.inclusions.filter((el) => {
          this.inclusions.push({ desc: el })
        });
        res.data.exclusions.filter((el) => {
          this.exclusions.push({ desc: el })
        });

        if (res.data.tour_dates.length > 0) {
          this.publicToursDates = res.data.tour_dates;
        }
      })
    }
  };

  submit(form: NgForm) {

    this.loading = true;
    this.tour.inclusions = [];
    this.tour.exclusions = [];
    this.getMappedPricing();

    if (this.tourType === 'public') {
      this.tour.tour_dates = [];
      this.publicToursDates.filter((el) => {
        if (el.tour_date.toString().trim().length > 0) {
          el.tour_date = this.datePipe.transform(el.tour_date, 'yyyy-MM-dd')
          this.tour.tour_dates.push(el);
        }
      });
    }

    this.inclusions.filter((el) => {
      if (el.desc.trim().length > 0) this.tour.inclusions.push(el.desc);
    });
    this.exclusions.filter((el) => {
      if (el.desc.trim().length > 0) this.tour.exclusions.push(el.desc);
    });

    if (this.mode === 'edit') {
      this.tourService.update(this.tourType, this.tourId, this.tour).subscribe((res: any) => {
        this.loading = false;

        if (res.statusCode === 200) {
          this.toastr.success('Tour is updated successfully!');
        } else {
          this.toastr.error(res.errors[0], 'Error!');
        }
      }, (err) => {
        this.loading = false;
        this.toastr.error(err.statusText, 'All fields are required');
      })
    } else {
      this.tour.tour_type = this.tourType;
      this.tourService.create(this.tour).subscribe((res: any) => {
        this.loading = false;

        if (res.statusCode === 200) {
          this.toastr.success('Tour Created successfully!');
          form.reset();
          $('input[type=file]').value('');
          $('.tourForm img').attr('src', '');
        } else {
          this.toastr.error(res.errors[0], 'Error!');
        }
      }, (err) => {
        this.loading = false;
        this.toastr.error(err.statusText, 'All fields are required');
      })
    }
  }

  addNewInc() {
    this.inclusions.push({ desc: '' });
  };

  addNewExc() {
    this.exclusions.push({ desc: '' });
  };

  addNewDate() {
    this.publicToursDates.push({ tour_date: '' });
  };


  getDestinations() {
    this.destinationService.getAll(999999, 1).subscribe((data: any) => {
      this.destinations = data.data;
    })
  };

  onUpload(event, type, index?) {
    let elem = event.target;
    if (elem.files.length > 0) {
      this.uploadIsLoading = true;

      let formData = new FormData();
      formData.append('file', elem.files[0]);

      this.tourService.upload(formData).subscribe((res: any) => {
        this.uploadIsLoading = false;
        if (res.statusCode === 200) {
          this.toastr.success('Image is uploaded successfully');
          this.manageUploadsTypes(type, res, index)
        } else {
          this.toastr.error('Please try again!', 'Error uploading image');
        }
      }, (err) => {
        this.uploadIsLoading = false;
        this.toastr.error('Please try again!', 'Error uploading image');
      })
    }
  }

  manageUploadsTypes(type, res, index?) {
    switch (type) {
      case 'main_media':
        this.tour.main_media_id = res._id;
        this.tour.main_media_path = res.filePath;
        break;
      case 'trip_program':
        this.tour.trip_program_media_id = res._id;
        this.tour.trip_program_media_path = res.filePath;
        break;
      case 'expectation':
        this.tour.expectation_media_id = res._id;
        this.tour.expectation_media_path = res.filePath;
        break;
      case 'inclusions':
        this.tour.inclusions_media_id = res._id;
        this.tour.inclusions_media_path = res.filePath;
        break;
      case 'exclusions':
        this.tour.exclusions_media_id = res._id;
        this.tour.exclusions_media_path = res.filePath;
        break;
      case 'tour_details':
        this.tour.tour_details[index].media_id = res._id;
        this.tour.tour_details[index].media_path = res.filePath;
        break;
    }
  }

  addNewTourDetail() {
    this.tour.tour_details.push(new TourDetails());
  }

  getMappedPricing() {
    if (this.tourType === 'public') {
      this.tour.tour_price = [new Pricing(), new Pricing(), new Pricing()];

      this.tour.tour_price[0].title = 'Egyptians';
      this.tour.tour_price[0].sub_title = 'standard ticket';
      this.tour.tour_price[0].persons_number = 'person';
      this.tour.tour_price[0].price = this.pricing.egyptianPrice;
      this.tour.tour_price[0].additional_notes = this.pricing.egyptianPriceNote;

      this.tour.tour_price[1].title = 'Foreigner';
      this.tour.tour_price[1].sub_title = 'standard ticket + supplement';
      this.tour.tour_price[1].persons_number = 'person';
      this.tour.tour_price[1].price = this.pricing.foreignerPrice;
      this.tour.tour_price[1].additional_notes = this.pricing.foreignerPriceNote;

      this.tour.tour_price[2].title = 'Foreigner Student';
      this.tour.tour_price[2].sub_title = 'standard ticket + supplement';
      this.tour.tour_price[2].persons_number = 'person';
      this.tour.tour_price[2].price = this.pricing.studentForeignerPrice;
      this.tour.tour_price[2].additional_notes = this.pricing.studentForeignerPriceNote;
    } else {
      this.tour.tour_price = [new Pricing(), new Pricing()];

      this.tour.tour_price[0].title = 'Group Of One';
      this.tour.tour_price[0].sub_title = 'standard ticket';
      this.tour.tour_price[0].persons_number = 'person';
      this.tour.tour_price[0].price = this.pricing.groupOfOnePrice;
      this.tour.tour_price[0].additional_notes = this.pricing.groupOfOneNote;

      this.tour.tour_price[1].title = 'Group Of More';
      this.tour.tour_price[1].sub_title = 'standard ticket';
      this.tour.tour_price[1].persons_number = 'person';
      this.tour.tour_price[1].price = this.pricing.groupOfMorePrice;
      this.tour.tour_price[1].additional_notes = this.pricing.groupOfMoreNote;
    }

  }

  bindPricesBack() {
    if (this.tourType === 'public') {
      this.pricing.egyptianPrice = +this.tour.tour_price[0].price;
      this.pricing.egyptianPriceNote = this.tour.tour_price[0].additional_notes;
      this.pricing.foreignerPrice = +this.tour.tour_price[1].price;
      this.pricing.foreignerPriceNote = this.tour.tour_price[1].additional_notes;
      this.pricing.studentForeignerPrice = +this.tour.tour_price[2].price;
      this.pricing.studentForeignerPriceNote = this.tour.tour_price[2].additional_notes;
    } else {
      this.pricing.groupOfOnePrice = +this.tour.tour_price[0].price;
      this.pricing.groupOfOneNote = this.tour.tour_price[0].additional_notes;
      this.pricing.groupOfMorePrice = +this.tour.tour_price[1].price;
      this.pricing.groupOfMoreNote = this.tour.tour_price[1].additional_notes;
    }
  }

}
