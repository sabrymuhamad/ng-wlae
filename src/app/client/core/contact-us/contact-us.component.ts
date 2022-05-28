import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactUs } from 'src/app/admin/shared/models/contact.model';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  lat = 40.730610;
  lng = -73.935242;
  loading: boolean;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  contactUs: ContactUs = new ContactUs();
  public darkStyle = [
    { elementType: 'geometry', stylers: [{ color: '#343332' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#343332' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#505050' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#505050' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#343332' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#454545' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#505050' }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#343332' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#343332' }]
    }
  ]

  constructor(private route: ActivatedRoute, private router: Router,
    private toastr: ToastrService, private settings: SettingsService) { }

  ngOnInit(): void {
    this.router.navigate([], {
      queryParams: { trip: true },
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      skipLocationChange: true
    });
    this.getData();
  }


  getData() {
    this.loading = true;
    this.settings.getContact().subscribe((res: any) => {
      this.loading = false;
      this.contactUs = res;
    })
  }


  send() {

  }

}
